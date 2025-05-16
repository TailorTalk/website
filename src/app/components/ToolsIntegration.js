import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function SeamlessIntegrations() {
  const [hovered, setHovered] = useState(null);

  const integrations = [
    { id: 'UPI Payments', name: 'UPI Payments', icon: '⬛', 
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="#1A1A1A"/>
              <path d="M4 16L12 20L20 16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12L12 16L20 12" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> },
    { id: 'Booking', name: 'Booking', icon: '❄️',
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L17 8L12 13L7 8L12 3Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 16L12 21L7 16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> },
    { id: 'Documnets', name: 'Documnets', icon: '📈',
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12C2 13.9778 2.58649 15.9112 3.6853 17.5557C4.78412 19.2002 6.3459 20.4819 8.17317 21.2388C10.0004 21.9957 12.0111 22.1937 13.9509 21.8079C15.8907 21.422 17.6725 20.4696 19.0711 19.0711C20.4696 17.6725 21.422 15.8907 21.8079 13.9509C22.1937 12.0111 21.9957 10.0004 21.2388 8.17317C20.4819 6.3459 19.2002 4.78412 17.5557 3.6853C15.9112 2.58649 13.9778 2 12 2" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 2V8L16 10" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> },
    { id: 'Media', name: 'Media', icon: '📈',
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12C2 13.9778 2.58649 15.9112 3.6853 17.5557C4.78412 19.2002 6.3459 20.4819 8.17317 21.2388C10.0004 21.9957 12.0111 22.1937 13.9509 21.8079C15.8907 21.422 17.6725 20.4696 19.0711 19.0711C20.4696 17.6725 21.422 15.8907 21.8079 13.9509C22.1937 12.0111 21.9957 10.0004 21.2388 8.17317C20.4819 6.3459 19.2002 4.78412 17.5557 3.6853C15.9112 2.58649 13.9778 2 12 2" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 2V8L16 10" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> },
    { id: 'flexify', name: 'Flexify', icon: '□',
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> },
    { id: 'landify', name: 'Landify', icon: '□',
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> },
    { id: 'platify', name: 'Platify', icon: '▐▐',
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="6" height="16" rx="1" fill="#1A1A1A"/>
              <rect x="14" y="4" width="6" height="16" rx="1" fill="#1A1A1A"/>
            </svg> },
  ];

  const cardVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.2 } }
  };

  // Divide integrations into left and right columns
  const leftIntegrations = integrations.slice(0, 4);
  const rightIntegrations = integrations.slice(4);

  // Refs for left and right cards
  const leftRefs = [useRef(null), useRef(null), useRef(null)];
  const rightRefs = [useRef(null), useRef(null), useRef(null)];
  const containerRef = useRef(null);

  const [lines, setLines] = useState([]);

  // Calculate lines on mount and resize
  useEffect(() => {
    function calculateLines() {
      const newLines = leftRefs.map((leftRef, i) => {
        const leftRect = leftRef.current?.getBoundingClientRect();
        const rightRect = rightRefs[i]?.current?.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();

        if (leftRect && rightRect && containerRect) {
          return {
            x1: leftRect.right - containerRect.left,
            y1: leftRect.top + leftRect.height / 2 - containerRect.top,
            x2: rightRect.left - containerRect.left,
            y2: rightRect.top + rightRect.height / 2 - containerRect.top,
          };
        }
        return null;
      }).filter(Boolean);
      setLines(newLines);
    }

    calculateLines();
    window.addEventListener('resize', calculateLines);
    return () => window.removeEventListener('resize', calculateLines);
    // eslint-disable-next-line
  }, []);

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-8 w-[60%]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-5">
          Seamless <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Integrations</span>
        </h2>
        <p className="text-[#61646b] text-[17px] max-w-2xl mx-auto">Connect TodoFusion with your favorite tools like Notion and Google. Enjoy a unified workflow for enhanced productivity and efficiency.</p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto" ref={containerRef} style={{ minHeight: 400 }}>
        {/* SVG lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 10 }}
        >
          {/* Vertical center line */}
          {lines.length >= 2 && (() => {
            const x = (containerRef.current?.offsetWidth ?? 0) / 2;
            const y1 = lines[0].y1;
            const y2 = lines[lines.length - 1].y1;
            return (
              <line
                x1={x}
                y1={y1}
                x2={x}
                y2={y2}
                stroke="#e0e2e6"
                strokeWidth="1"
              />
            );
          })()}
          {/* Horizontal lines */}
          {lines.map((line, idx) => (
            <line
              key={idx}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#e0e2e6"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Center card */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[85%] z-50 flex items-center justify-center">
          {/* Inner container with diagonal pattern */}
          <div className="w-full h-full rounded-2xl flex items-center justify-center">
            {/* Card container */}
            <motion.div 
              className="w-44 h-44 rounded-xl bg-zinc-50 p-5"
              style={{
                boxShadow: "inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)",
                transition: "all 0.3s ease"
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Inner card content */}
              <div
                style={{
                  background: 'repeating-linear-gradient(45deg, rgba(190, 192, 194, 0.2), rgba(190, 192, 194, 0.2) 1px, transparent 1px, transparent 4px)',
                  boxShadow: 'inset 0 2px 6px 0 rgba(0,0,0,0.3), inset 0 -1px 0 0 white'
                }}
                className="p-4 rounded-lg block flex-none pointer-events-none w-full h-full transform-none"
              >
                {/* Border container */}
                <div className="w-full h-full rounded-lg bg-[#e0e2e6] border-[#c9cdd2] border-[1px] p-1">
                  {/* Dark center with logo placeholder */}
                  <div className="w-full h-full bg-[#24242a] border border-black rounded-md flex items-center justify-center">
                    <div className="absolute inset-0 pointer-events-none opacity-100 rounded-md" />
                    {/* <div className="text-white text-2xl font-bold">T</div> */}
                    <img src="/logo.svg" alt="Logo" className="w-12 h-12 object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Surrounding cards */}
        <div className="flex justify-between relative z-20">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftIntegrations.map((integration, idx) => (
              <motion.div 
                key={integration.id}
                ref={leftRefs[idx]}
                className="rounded-xl overflow-hidden bg-zinc-50 w-44"
                style={{ boxShadow: "inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)" }}
                variants={cardVariants}
                initial="idle"
                animate={hovered === integration.id ? 'hover' : 'idle'}
                onMouseEnter={() => setHovered(integration.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center p-6">
                  <div className="mr-3">
                    {integration.svg}
                  </div>
                  <span className="text-lg font-semibold">{integration.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {rightIntegrations.map((integration, idx) => (
              <motion.div 
                key={integration.id}
                ref={rightRefs[idx]}
                className="rounded-xl overflow-hidden bg-zinc-50 w-40"
                style={{ boxShadow: "inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)" }}
                variants={cardVariants}
                initial="idle"
                animate={hovered === integration.id ? 'hover' : 'idle'}
                onMouseEnter={() => setHovered(integration.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center p-6">
                  <div className="mr-3">
                    {integration.svg}
                  </div>
                  <span className="text-lg font-semibold">{integration.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}