"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { ChevronDown } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.05);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const logoVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        delay: 0.6 
      }
    }
  };

  // Navigation item component with enhanced animations
  const NavItem = ({ href, label, id }) => {
    const isActive = activeLink === id;
    
    return (
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setActiveLink(id)}
      >
        <a 
          href={href} 
          className="text-sm text-gray-700 hover:text-black font-medium transition-all duration-300 py-2 px-3 block"
        >
          {label}
        </a>
        
        {/* Animated underline effect */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-indigo-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ 
            width: isActive ? '100%' : 0,
            opacity: isActive ? 1 : 0
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30
          }}
        />
      </motion.div>
    );
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed items-center justify-center top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
        ? ' w-[86%] border border-white/20 bg-white/10 text-sm font-medium text-white backdrop-blur-sm backdrop-saturate-200 shadow-lg py-2 mx-auto mt-3 rounded-full' 
        : 'bg-transparent py-5 mx-auto w-[86.5%]'
      }`}
    >
      <div className="max-w-screen px-6">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-1 items-center gap-12">
            <motion.a 
              href="/" 
              className="transition-transform hover:scale-105"
              variants={logoVariant}
              initial="hidden"
              animate="visible"
            >
              <Image 
                src={logo} 
                alt="logo" 
                className="w-32 h-full transition-all duration-300" 
                priority 
              />
            </motion.a>
            
            <motion.nav 
              className="hidden md:flex gap-8 items-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                }
              }}
            >
              {/* Nav items with animations */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <NavItem href="/" label="Home" id="home" />
              </motion.div>
              
              <motion.div 
                className="relative group"
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <button 
                  className="text-sm flex items-center text-gray-700 hover:text-black font-medium transition-all duration-300 py-2 px-3"
                  onMouseEnter={() => setActiveLink('resources')}
                >
                  Resources
                  <motion.span
                    animate={{ rotate: activeLink === 'resources' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </motion.span>
                </button>
                
                {/* Animated underline effect for Resources */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-indigo-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeLink === 'resources' ? '100%' : 0,
                    opacity: activeLink === 'resources' ? 1 : 0
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30
                  }}
                />
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <NavItem href="/pricing" label="Pricing" id="pricing" />
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <NavItem href="/docs" label="Docs" id="docs" />
              </motion.div>
            </motion.nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop CTA Button */}
            <motion.a 
              href="/remix-template" 
              className="hidden md:block"
              variants={buttonVariant}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.95 }}
            >
              <motion.button 
                className={`
                  bg-indigo-600 text-sm text-white rounded-full hover:shadow-lg transition-all duration-500 font-medium
                  px-5 py-2 ${ scrolled ? 'rounded-xl' : 'rounded-lg' }`}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#4338ca" // Darker indigo for hover
                }}
              >
                Book a Demo
              </motion.button>
            </motion.a>

            {/* Mobile Menu Icon */}
            <motion.div 
              className="md:hidden block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <IconButton 
                onClick={() => setDrawerOpen(true)}
                className="hover:bg-gray-100 transition-colors"
              >
                <Menu />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                PaperProps={{
                  sx: {
                    width: '280px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                  },
                }}
                onClose={() => setDrawerOpen(false)}
              >
                <AnimatePresence>
                  {drawerOpen && (
                    <motion.div
                      initial={{ x: 280 }}
                      animate={{ x: 0 }}
                      exit={{ x: 280 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <List onClick={() => setDrawerOpen(false)} sx={{ padding: '20px' }}>
                        {[
                          { href: '/', label: 'Home' },
                          { href: '/pricing', label: 'Pricing' },
                          { href: '/docs', label: 'Docs' },
                          { href: '/ui-kit', label: 'UI Kit' }
                        ].map((item, index) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: 0.1 * index,
                              type: "spring",
                              stiffness: 100
                            }}
                          >
                            <ListItem 
                              button 
                              component="a" 
                              href={item.href}
                              sx={{
                                marginBottom: '8px',
                                padding: '12px',
                                borderRadius: '8px',
                                transition: 'all 0.2s',
                                '&:hover': {
                                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                  transform: 'translateX(4px)',
                                },
                              }}
                            >
                              <ListItemText 
                                primary={item.label}
                                sx={{
                                  '& .MuiTypography-root': {
                                    fontWeight: 500,
                                  },
                                }}
                              />
                            </ListItem>
                          </motion.div>
                        ))}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <a 
                            href="/remix-template" 
                            className="mt-4 block"
                          >
                            <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:shadow-md transition-all duration-300 font-medium">
                              Book a Demo
                            </button>
                          </a>
                        </motion.div>
                      </List>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Drawer>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;