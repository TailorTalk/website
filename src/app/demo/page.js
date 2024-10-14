import React from 'react';

const Page = () => {
  return (
    <div className='m-5'>
            <div
            style={{
                position: 'relative',
                boxSizing: 'content-box',
                maxHeight: '80vh',
                maxHeight: '80svh',
                width: '100%',
                aspectRatio: '1.8444165621079047',
                padding: '40px 0',
            }}
            >
            <iframe
                src="https://app.supademo.com/embed/cm28vvqpb0e6kvm5s7dqzhb1e?embed_v=2"
                loading="lazy"
                title="Tailortalk Demo"
                allow="clipboard-write"
                frameBorder="0"
                webkitAllowFullScreen
                mozAllowFullScreen
                allowFullScreen
                style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                }}
            ></iframe>
            </div>
    </div>
   
  );
};

export default Page;
