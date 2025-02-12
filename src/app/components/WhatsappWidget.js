import React, { useEffect, useRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import { SendHorizontal, X, } from 'lucide-react';
import Image from 'next/image';

const WhatsappWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('hi');
  const [currentTime, setCurrentTime] = useState('');
  const inputFocus = useRef(null);

  const businessInfo = {
    phoneNumber: '9031698165',
    countryCode: '91',
    businessName: 'Tailor Talk'
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${businessInfo.countryCode}${businessInfo.phoneNumber}&text=${encodeURIComponent(message)}&source=&data=&app_absent=`;
    window.open(whatsappUrl, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  const chatAreaStyle = {
    backgroundImage: 'url("/whatsappBg.webp")',
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat',
    position: 'relative',
  };

  useEffect(() => {
    const formatTime = () => {
      const now = new Date();
      return now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).toLowerCase();
    };

    setCurrentTime(formatTime());

    const interval = setInterval(() => {
      setCurrentTime(formatTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputFocus.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
      >
        <div className="w-2 h-2 bg-red-500 fixed right-[1.65rem] bottom-[4.3rem] rounded-full"/>
        <Image src='/whatsapp_icon.svg' width={30} height={30} className='w-10 h-10' />
      </button>

      <Dialog 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
        maxWidth={false}
        PaperProps={{
          sx: {
            position: 'fixed',
            bottom: '90px',
            right: '16px',
            margin: 0,
            width: '100%',
            maxWidth: 350,
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }
        }}
      >
        <div className='p-0'>
          <div className="bg-[#128c7e] p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
            
              <div className="w-10 h-10 relative bg-white rounded-full flex items-center justify-center">
                <Image src='/logoPng.png' alt='T' width={50} height={50} className='w-10 h-10 rounded-full' />
                {/* <div className="w-2 h-2 bg-green-400 absolute bottom-[3px] right-0 rounded-full"/> */}
              </div>
              <div className="text-white">
                <h3 className="font-semibold">TailorTalk</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
            
              <span onClick={()=>setIsOpen(false)} className='text-white text-3xl cursor-pointer mr-2 mb-1 font-extralight'>&times;</span>
          </div>

          {/* Chat */}
          <div style={chatAreaStyle} className="p-4 bg-gray-100 h-64">
            <div className='w-full mb-3'>
              <p className='text-center text-gray-400 text-[10px] font-light'>{currentTime}</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm max-w-[75%]">
              <p className="text-gray-700 text-sm">Hello! 👋 How can we help you today?</p>
            </div>
          </div>


          {/* Message */}
          <form onSubmit={handleSubmit} className="p-2 bg-white border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                ref={inputFocus}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message..."
                className="flex-1 font-light focus:outline-none text-sm rounded-lg px-4 py-3 "
                required
              />
              <button
                type="submit"
                // className="bg-green-500 text-white rounded-full h-10 w-10 hover:bg-green-600 transition-colors duration-200"
              >
                <SendHorizontal className='text-green-500 mr-2' size={20} />
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default WhatsappWidget;