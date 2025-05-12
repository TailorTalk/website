import { useState } from 'react';

export default function KeyboardButton({ 
  children = 'Button', 
  onClick = () => {}, 
  className = '', 
  color = 'gray' 
}) {
  const [isClicked, setIsClicked] = useState(false);
  
  const colorClasses = {
    gray: {
      main: 'bg-gray-200',
      pressed: 'bg-gray-300',
      border: 'border-gray-400'
    },
    blue: {
      main: 'bg-blue-500 text-white',
      pressed: 'bg-blue-600',
      border: 'border-blue-700'
    },
    red: {
      main: 'bg-red-500 text-white',
      pressed: 'bg-red-600',
      border: 'border-red-700'
    },
    green: {
      main: 'bg-green-500 text-white',
      pressed: 'bg-green-600',
      border: 'border-green-700'
    },
    yellow: {
      main: 'bg-yellow-400',
      pressed: 'bg-yellow-500',
      border: 'border-yellow-600'
    },
    purple: {
      main: 'bg-purple-500 text-white',
      pressed: 'bg-purple-600',
      border: 'border-purple-700'
    },
    indigo: {
      main: 'bg-indigo-500 text-white',
      pressed: 'bg-indigo-600',
      border: 'border-indigo-800'
    }
  };

  const colorStyle = colorClasses[color] || colorClasses.gray;

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  const handleMouseLeave = () => {
    if (isClicked) {
      setIsClicked(false);
    }
  };

  const handleClick = (e) => {
    onClick(e);
  };

  return (
      <div className="group relative">
        {/* Base/bottom layer for the 3D effect */}
        <div className={`
          absolute
          inset-0
          ${colorStyle.pressed}
          rounded-lg
        `}></div>
        
        <button
          className={`
            relative
            ${colorStyle.main}
            hover:${colorStyle.pressed}
            active:${colorStyle.pressed}
            w-full
            rounded-lg
            font-medium
            px-4 py-2
            transition-all duration-150
            ${className}
            
            /* Default bulged out appearance */
            transform
            shadow-[0_2px_8px_0_rgba(55,48,163,0.8),inset_0_-1px_0_0_rgb(55,48,163)]
            
            /* Hover effect - sink in */
            group-hover:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.7),inset_0_3px_5px_rgba(0,0,0,0.4),inset_0_-1px_0_0_rgba(255,255,255,0.9)]
            group-hover:translate-y-0
            
            /* Click effect */
            ${isClicked ? 'shadow-[inset_0_4px_6px_rgba(0,0,0,0.5)] translate-y-0' : ''}
          `}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          {children}
        </button>
      </div>
  );
}

export { KeyboardButton }