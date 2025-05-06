import React from 'react';

/**
 * AnimatedCard
 * A card component with a spinning gradient border.
 *
 * Props:
 * - children: ReactNode content to display inside the card
 * - size: Tailwind size classes for the card wrapper (default: 'h-[200px] w-[200px]')
 * - className: Additional Tailwind classes to apply on the wrapper
 */

const AnimatedCard = ({
  children,
  size = 'h-[250px] w-[250px]',
  className = '',
  cardWrapperNumber = 0,
}) => {
  return (
    <div className={`card-wrapper-${cardWrapperNumber} ${size} ${className} relative overflow-hidden rounded-3xl bg-white shadow-lg`}>
      <div
       className="flex items-center justify-center text-xs absolute left-[1px] top-[1px]
         h-[calc(100%-2px)] w-[calc(100%-2px)] bg-white
         rounded-3xl">
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
