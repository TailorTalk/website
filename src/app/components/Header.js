"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { Menu } from 'lucide-react';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
      ? 'bg-white shadow-lg py-3' 
      : 'bg-white py-5'
    }`}>
      <div className="max-w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-1 items-center gap-12">
            <a href="/" className="transition-transform hover:scale-105">
              <Image src={logo} alt="logo" className="w-36 h-full" priority />
            </a>
            <nav className="hidden md:flex gap-8 items-center">
              {[
                { href: '/pricing', label: 'Pricing' },
                { href: '/guide', label: 'Docs', target: '_blank' },
                { href: '/demo', label: 'Demo', }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  target={item?.target}
                  className="text-gray-700 hover:text-black font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Book a Demo Button */}
            <a 
              href="https://calendly.com/shiva-tailortalk/30min" 
              target="_blank" 
              className="hidden md:block"
            >
              <button 
                className="globalBgColor cursor-pointer text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
              >
                Book a Demo
              </button>
            </a>

            {/* Mobile Menu Icon */}
            <div className="md:hidden block">
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
                <List onClick={() => setDrawerOpen(false)} sx={{ padding: '20px' }}>
                  {[
                    { href: '/', label: 'Home' },
                    { href: '/pricing', label: 'Pricing' },
                    { href: '/guide', label: 'Docs' },
                    { href: '/demo', label: 'Demo' }
                  ].map((item) => (
                    <ListItem 
                      key={item.href}
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
                  ))}
                  <a 
                    href="https://calendly.com/shiva-tailortalk/30min" 
                    target="_blank" 
                    className="mt-4 block"
                  >
                    <button className="w-full globalBgColor text-white px-4 py-3 rounded-lg hover:shadow-md transition-all duration-300 font-medium">
                      Book a Demo
                    </button>
                  </a>
                </List>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
