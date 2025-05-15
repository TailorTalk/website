import { useState } from 'react';

export default function Button({ 
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
      border: 'border-gray-400',
      shadow: 'shadow-[0_2px_8px_0_rgba(128,128,128,1),inset_0_-1px_0_0_rgba(128,128,128,1)]'
    },
    blue: {
      main: 'bg-blue-500 text-white',
      pressed: 'bg-blue-600',
      border: 'border-blue-700',
      shadow: 'shadow-[0_2px_8px_0_rgba(59,130,246,1),inset_0_-1px_0_0_rgba(59,130,246,1)]'
    },
    red: {
      main: 'bg-red-500 text-white',
      pressed: 'bg-red-600',
      border: 'border-red-700',
      shadow: 'shadow-[0_2px_8px_0_rgba(239,68,68,1),inset_0_-1px_0_0_rgba(239,68,68,1)]'
    },
    green: {
      main: 'bg-green-500 text-white',
      pressed: 'bg-green-600',
      border: 'border-green-700',
      shadow: 'shadow-[0_2px_8px_0_rgba(34,197,94,1),inset_0_-1px_0_0_rgba(34,197,94,1)]'
    },
    yellow: {
      main: 'bg-yellow-400',
      pressed: 'bg-yellow-500',
      border: 'border-yellow-600',
      shadow: 'shadow-[0_2px_8px_0_rgba(250,204,21,1),inset_0_-1px_0_0_rgba(250,204,21,1)]'
    },
    purple: {
      main: 'bg-purple-500 text-white',
      pressed: 'bg-purple-600',
      border: 'border-purple-700',
      shadow: 'shadow-[0_2px_8px_0_rgba(168,85,247,1),inset_0_-1px_0_0_rgba(168,85,247,1)]'
    },
    indigo: {
      main: 'bg-indigo-600 text-white',
      pressed: 'bg-[#493fd8]',
      border: 'border-[#493fd8]',
      shadow: 'shadow-[0_2px_4px_1px_rgba(99,102,241,0.9),inset_0_-1px_0_0_rgb(73,63,216)]'
    },
    white: {
        main: 'bg-[#F7F7F8] text-black',
        pressed: 'bg-gray-50',
        border: 'border-gray-200',
        shadow: 'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_2px_8px_0_rgba(229,231,235,1),inset_0_-1px_0_0_rgba(229,231,235,1)]' // using gray-200 for shadow
      },
      black: {
        main: 'bg-black text-white',
        pressed: 'bg-gray-900',
        border: 'border-gray-800',
        shadow: 'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_2px_8px_0_rgba(0,0,0,0.5),inset_0_-1px_0_0_rgba(31,41,55,1)]'
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
            font-normal
            px-5 py-2
            transition-all duration-150
            cursor-pointer
            ${className}
            
            /* Default bulged out appearance */
            transform
            ${colorStyle.shadow}
            
            /* Hover effect - sink in */
            ${color !== 'white'
                  ? 'group-hover:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.7),inset_0_2px_3px_rgba(0,0,0,0.4),inset_0_-1px_0_0_rgba(255,255,255,0.9)]'
                  : 'group-hover:shadow-[inset_0_3px_3px_rgba(0,0,0,0.1),inset_0_-1px_0_0_rgba(255,255,255,0.9)]'
              }
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

export { Button }