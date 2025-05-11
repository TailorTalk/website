"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/logoSvg.svg";
import { ChevronDown } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        delay: 0.4 
      }
    }
  };

  // Improved Navigation item component with consistent styling
  const NavItem = ({ href, label, id }) => {
    return (
      <div className="relative">
        <a 
          href={href} 
          className={`
            relative text-gray-700 px-4 py-2 rounded-full text-sm font-medium
            transition duration-300 ease-in-out
            hover:text-indigo-700 
            after:content-[''] after:absolute after:h-0.5 after:w-0 after:left-1/2 after:-translate-x-1/2
            after:bottom-0 after:bg-indigo-600 after:transition-all after:duration-300
            hover:after:w-3/4
          `}
        >
          {label}
        </a>
      </div>
    );
  };

  // Improved Resources dropdown with consistent styling
  const ResourcesDropdown = () => {
    return (
      <div className="relative group">
        <button 
          className="text-sm flex items-center font-medium px-4 py-2 rounded-full
            text-gray-700 transition duration-300 ease-in-out
            hover:text-indigo-700 group-hover:text-indigo-700"
        >
          Resources
          <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
        </button>
        
        {/* Improved dropdown panel with consistent styling */}
        <div 
          className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl overflow-hidden p-3 min-w-48 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
            border border-gray-100 transform origin-top scale-95 group-hover:scale-100"
        >
          {['Documentation', 'Templates', 'Tutorials', 'API Reference'].map((item) => (
            <a 
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200
              flex items-center space-x-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
              <span>{item}</span>
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed items-center justify-center top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
        ? 'w-[85%] border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-200 shadow-lg py-2 mx-auto mt-3 rounded-full' 
        : 'bg-transparent py-5 mx-auto w-[90%]'
      }`}
    >
      <div className="max-w-screen px-4 sm:px-6">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-1 items-center gap-8 md:gap-12">
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
                className="w-28 md:w-32 h-full transition-all duration-300" 
                priority 
              />
            </motion.a>
            
            <nav className="hidden md:flex gap-3 items-center">
              <NavItem href="/" label="Home" id="home" />
              <ResourcesDropdown />
              <NavItem href="/pricing" label="Pricing" id="pricing" />
              <NavItem href="/docs" label="Docs" id="docs" />
            </nav>
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
                className="bg-indigo-600 text-sm text-white rounded-full shadow-md transition duration-300 font-medium
                  px-6 py-2.5 border border-transparent hover:bg-white hover:text-indigo-600 hover:border-indigo-600
                  hover:shadow-indigo-100 hover:shadow-lg"
              >
                Book a Demo
              </motion.button>
            </motion.a>

            {/* Mobile Menu Icon with improved animation */}
            <motion.div 
              className="md:hidden block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <IconButton 
                onClick={() => setDrawerOpen(true)}
                className="hover:bg-indigo-50 transition-colors rounded-full p-2"
              >
                <Menu className="text-indigo-600" />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                PaperProps={{
                  sx: {
                    width: '280px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderTopLeftRadius: '24px',
                    borderBottomLeftRadius: '24px',
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
                      <div className="flex justify-between items-center p-6 border-b border-gray-100">
                        <Image 
                          src={logo} 
                          alt="logo" 
                          className="w-24 h-full" 
                          priority 
                        />
                        <IconButton 
                          onClick={() => setDrawerOpen(false)}
                          className="rounded-full hover:bg-gray-100"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </IconButton>
                      </div>
                      
                      <List onClick={() => setDrawerOpen(false)} sx={{ padding: '20px' }}>
                        {[
                          { href: '/', label: 'Home' },
                          { href: '/resources', label: 'Resources' },
                          { href: '/pricing', label: 'Pricing' },
                          { href: '/docs', label: 'Docs' }
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
                                marginBottom: '12px',
                                padding: '12px 16px',
                                borderRadius: '16px',
                                transition: 'all 0.3s',
                                '&:hover': {
                                  backgroundColor: 'rgba(79, 70, 229, 0.08)',
                                  color: '#4F46E5',
                                  transform: 'translateX(5px)'
                                }
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
                          className="mt-8"
                        >
                          <a 
                            href="/remix-template" 
                            className="block"
                          >
                            <button className="w-full bg-indigo-600 text-white px-4 py-3 rounded-xl hover:shadow-md transition-all duration-300 font-medium 
                              hover:bg-indigo-700 shadow-sm hover:shadow-indigo-100 hover:shadow-lg">
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