"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/logoSvg.svg";
import { Book, ChevronDown, Clock, Code, Code2, HelpCircle } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Button from "./ui/button";

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
      <a href={href} className="group relative">
        {/* Base/bottom layer for the 3D effect */}
        <div className={`
          absolute
          inset-0
          rounded-lg
        `}></div>
        
        <button
          className={`
            relative text-[#24242A]
            cursor-pointer
            hover:bg-zinc-100
            active:bg-zinc-100
            w-full
            ${scrolled ? 'rounded-full' : 'rounded-lg'}
            font-[430]
            text-[15px]
            px-4.5 py-1.5
            transition-all duration-150
            
            /* Default bulged out appearance */
            transform
            
            /* Hover effect - sink in */
            group-hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.08),inset_0_-1px_0_0_rgba(255,255,255,1)]
            group-hover:translate-y-0
            
          `}
        >
          {label}
        </button>
      </a>
    );
  };

  // Improved Resources dropdown with consistent styling
  const ResourcesDropdown = () => {
    const resourceItems = [
      {
        title: "Guide",
        description: "Find out everything on how to use TailorTalk, and unlock its full potential.",
        icon: Book,
        href: "/guide"
      },
      {
        title: "FAQs",
        description: "Find answers to common questions about TailorTalk and our platform.",
        icon: HelpCircle,
        href: "/faqs"
      },
    ];
    return (
      <div className="group relative">
        {/* Base/bottom layer for the 3D effect */}
        <div className={`
          absolute
          inset-0
          rounded-lg
        `}></div>
        <button
          className={`
            relative text-[#24242A]
            group-hover:bg-zinc-100
            active:bg-zinc-100
            cursor-pointer
            w-full
            rounded-lg
            font-[430]
            text-[15px]
            px-4 py-1.5
            transition-all duration-150
            
            /* Default bulged out appearance */
            transform
            
            /* Hover effect - sink in */
            group-hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.08),inset_0_-1px_0_0_rgba(255,255,255,1)]
            group-hover:translate-y-0
            flex
            
          `}
        >
          Resources
          <ChevronDown className="ml-1 mt-[2px] h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
        </button>
        
        {/* Improved dropdown panel with consistent styling */}
        <div 
          className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl overflow-hidden min-w-96 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
            border border-gray-100 transform origin-top scale-95 group-hover:scale-100 p-4 w-full max-w-md"
        >
          {resourceItems.map((resource, index) => {
  const Icon = resource.icon;
  return (
    <a
  key={index}
  href={resource.href}
  className="group flex items-center p-4 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100"
>
  <div 
    className="mr-4 flex-shrink-0 bg-gray-100 rounded-lg p-3 flex items-center justify-center transition-transform duration-200 group-hover:scale-110  group-hover:border  group-hover:border-gray-200"
  >
    <Icon strokeWidth={1.5} className="h-5 w-5 text-gray-500 transition-transform duration-200 group-hover:scale-105" />
  </div>
  <div>
    <h3 className="text-base font-medium text-gray-900">{resource.title}</h3>
    <p className="text-sm text-gray-500">{resource.description}</p>
  </div>
</a>
  );
})}
        </div>
      </div>
    );
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed items-center justify-center top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        scrolled 
        ? 'w-[81.5%] border border-white bg-[#ffffff80] backdrop-blur-lg backdrop-saturate-100 shadow-[0_1px_6px_0_rgba(99,102,241,0.4)] py-2 mx-auto mt-5 rounded-full' 
        : 'bg-transparent py-4 mt-3 mx-auto w-[83%]'
      }`}
    >
      <div className="max-w-screen sm:px-3">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-1 items-center gap-7">
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
                className="w-28 md:w-[7.5rem] h-full transition-all duration-300" 
                priority 
              />
            </motion.a>
            
            <nav className="hidden md:flex gap-3 items-center">
              <NavItem href="/" label="Home" id="home" />
              <NavItem href="#pricing" label="Pricing" id="pricingNav" />
              <ResourcesDropdown />
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop CTA Button */}
            <motion.a 
              href="/" 
              className="hidden md:block"
              variants={buttonVariant}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.95 }}
            >
               <div className="group relative">
        {/* Base/bottom layer for the 3D effect */}
        <div className="absolute top-4 right-1.5 flex items-start justify-center pointer-events-none group-hover:hidden">
        <div className="w-28 h-4 bg-indigo-700 rounded-md blur-sm opacity-100"></div>
      </div>
        
        <button
          className={`
            relative
            bg-indigo-600 text-white
            hover:bg-[#493fd8]
            active:bg-[#493fd8]
            w-full
            ${scrolled ? 'rounded-full' : 'rounded-lg'}
            text-[15px]
            font-light
            px-4 py-1
            transition-all duration-150
            cursor-pointer
            
            /* Default bulged out appearance */
            transform
            shadow-[inset_0_-1px_0_0_rgb(73,63,216)]
            
            /* Hover effect - sink in */
            group-hover:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.7),inset_0_2px_3px_rgba(0,0,0,0.4),inset_0_-1px_0_0_rgba(255,255,255,0.9)]
            group-hover:translate-y-0
            
          `}
        >
          Book a demo
        </button>
      </div>
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
                            <Button color="indigo">
                              Book a Demo
                            </Button>
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