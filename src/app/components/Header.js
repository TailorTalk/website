"use client"
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <header className="bg-white px-8 py-5 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a href="/">
            <Image src={logo} alt="logo" className="w-36 h-full" />
          </a>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="/pricing" className="text-gray-700 hover:text-black font-medium">Pricing</a>
            {/* <a href="#useCases" className="text-gray-700 hover:text-black font-medium">Use Cases</a> */}
            <a href="/product" className="text-gray-700 hover:text-black font-medium">Product</a>
            {/* <a href="/demo" className="text-gray-700 hover:text-black font-medium">Instant Demo</a> */}
          </nav>
        </div>

        <div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden block">
            <IconButton onClick={() => setDrawerOpen(true)}>
              <Menu />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              PaperProps={{
                sx: {
                  width: '50vw',
                },
              }}
              onClose={() => setDrawerOpen(false)}
            >
              <List onClick={() => setDrawerOpen(false)} sx={{ padding: '20px' }}>
                <ListItem button component="a" href="/" sx={{
                  marginBottom: '8px',
                  padding: '8px',
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component="a" href="/pricing" sx={{
                  marginBottom: '8px',
                  padding: '8px',
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}>
                  <ListItemText primary="Pricing" />
                </ListItem>
                <ListItem button component="a" href="/product" sx={{
                  marginBottom: '8px',
                  padding: '8px',
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}>
                  <ListItemText primary="Product" />
                </ListItem>
                {/* <ListItem button component="a" href="/demo" sx={{
                  marginBottom: '8px',
                  padding: '8px',
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}>
                  <ListItemText primary="Instant Demo" />
                </ListItem> */}
              </List>
            </Drawer>
          </div>

          {/* Desktop Book a Demo Button */}
          <a href="https://calendly.com/shiva-tailortalk/30min" target="_blank" className="hidden md:block">
            <button className="globalBgColor flex flex-row items-center justify-center text-white px-3 py-2 rounded-md hover:bg-indigo-700 transition duration-300" style={{ height: '46px' }}>
              Book a Demo
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
