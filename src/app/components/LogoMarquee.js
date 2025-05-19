// components/LogoMarquee.jsx
import Marquee from 'react-fast-marquee';
import { clientsLogo } from '../Config/testimonials';

const LogoMarquee = () => {
  // Sample logos from testimonials
  const logos = clientsLogo.map((item) => ({
    id: item.company,
    logo: item.logo,
    name: item.role,
  }));

  return (
    <div className="py-32 overflow-hidden w-screen">
      {/* Trust badge text */}
      <div className="text-center mb-12">
        <p className="font-normal">
          Trusted by Businesses of All Sizes
        </p>
      </div>

      {/* Logo marquee with fade effect */}
      <div className="relative w-full px-28">
        {/* Container with overflow hidden to clip content */}
        <div className="flex justify-center items-center overflow-hidden relative">
          {/* Left fade gradient - positioned relative to the overflow container */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          
          <Marquee
            gradient={false}
            speed={25}
            pauseOnHover={false}
            gap={0}
          >
            {/* Create THREE sets of logos to ensure no visual gaps */}
            {[...Array(3)].map((_, setIndex) => (
              <div key={`set-${setIndex}`} className="flex justify-center items-center" style={{ marginRight: 0 }}>
                {logos.map((item) => (
                  <div 
                    key={`${item.id}-set-${setIndex}`} 
                    className="mx-8"
                    style={{ marginLeft: '32px', marginRight: '32px' }}
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-11 w-auto rounded-lg"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `/api/placeholder/120/40`;
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </Marquee>
          
          {/* Right fade gradient - positioned relative to the overflow container */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;