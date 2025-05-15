import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SeamlessIntegrations() {
  const [hovered, setHovered] = useState(null);
  
  const integrations = [
    { id: 'startify', name: 'Startify', icon: '⬛' },
    { id: 'identify', name: 'Identify', icon: '❄️' },
    { id: 'nexus', name: 'Nexus AI', icon: '📈' },
    { id: 'flexify', name: 'Flexify', icon: '□' },
    { id: 'landify', name: 'Landify', icon: '□' },
    { id: 'platify', name: 'Platify', icon: '▐▐' },
  ];

  const cardVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.2 } }
  };

  const centerCardStyle = {
    boxShadow: "inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)",
    background: "#fff",
    border: "1px solid #E2E8F0",
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8" style={{ background: 'repeating-linear-gradient(135deg, #f9fafb, #f9fafb 2px, #f5f7f9 2px, #f5f7f9 4px)' }}>
      <div className="max-w-4xl w-full mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-gray-900">Seamless</span>
          <span className="text-gray-400">Integrations</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connect TodoFusion with your favorite tools like Notion and Google. Enjoy a unified workflow for enhanced productivity and efficiency.
        </p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Center card */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div 
            className="w-40 h-40 rounded-xl overflow-hidden flex items-center justify-center"
            style={centerCardStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div>
                <div className='p-2 bg-[#e0e2e6]'>
                    <div className="w-24 h-24 bg-[#24242a] rounded-lg flex items-center justify-center">
                        <img src="/logoPng.png" alt='T' className='w-16 h-16'/>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Connection lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-gray-200"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-full bg-gray-200"></div>
        </div>

        {/* Surrounding cards */}
        <div className="grid grid-cols-2 gap-x-64 gap-y-24">
          {/* Left Column */}
          <div className="flex flex-col gap-16">
            <motion.div 
              className="rounded-xl overflow-hidden bg-zinc-50"
              style={{ boxShadow: "inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)" }}
              variants={cardVariants}
              initial="idle"
              animate={hovered === 'startify' ? 'hover' : 'idle'}
              onMouseEnter={() => setHovered('startify')}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center p-6">
                <div className="mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="#1A1A1A"/>
                    <path d="M4 16L12 20L20 16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 12L12 16L20 12" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold">Startify</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-xl overflow-hidden bg-zinc-50"
              style={{ boxShadow: "inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)" }}
              variants={cardVariants}
              initial="idle"
              animate={hovered === 'identify' ? 'hover' : 'idle'}
              onMouseEnter={() => setHovered('identify')}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center p-6">
                <div className="mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L17 8L12 13L7 8L12 3Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 16L12 21L7 16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold">Identify</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-xl overflow-hidden bg-zinc-50"
              style={{ boxShadow: "inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)" }}
              variants={cardVariants}
              initial="idle"
              animate={hovered === 'nexus' ? 'hover' : 'idle'}
              onMouseEnter={() => setHovered('nexus')}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center p-6">
                <div className="mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C2 13.9778 2.58649 15.9112 3.6853 17.5557C4.78412 19.2002 6.3459 20.4819 8.17317 21.2388C10.0004 21.9957 12.0111 22.1937 13.9509 21.8079C15.8907 21.422 17.6725 20.4696 19.0711 19.0711C20.4696 17.6725 21.422 15.8907 21.8079 13.9509C22.1937 12.0111 21.9957 10.0004 21.2388 8.17317C20.4819 6.3459 19.2002 4.78412 17.5557 3.6853C15.9112 2.58649 13.9778 2 12 2" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2V8L16 10" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold">Nexus AI</span>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-16">
            <motion.div 
              className="rounded-xl overflow-hidden bg-zinc-50"
              style={{ boxShadow: "inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)" }}
              variants={cardVariants}
              initial="idle"
              animate={hovered === 'flexify' ? 'hover' : 'idle'}
              onMouseEnter={() => setHovered('flexify')}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center p-6">
                <div className="mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold">Flexify</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-xl overflow-hidden bg-zinc-50"
              style={{ boxShadow: "inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)" }}
              variants={cardVariants}
              initial="idle"
              animate={hovered === 'landify' ? 'hover' : 'idle'}
              onMouseEnter={() => setHovered('landify')}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center p-6">
                <div className="mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold">Landify</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-xl overflow-hidden bg-zinc-50"
              style={{ boxShadow: "inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)" }}
              variants={cardVariants}
              initial="idle"
              animate={hovered === 'platify' ? 'hover' : 'idle'}
              onMouseEnter={() => setHovered('platify')}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center p-6">
                <div className="mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="6" height="16" rx="1" fill="#1A1A1A"/>
                    <rect x="14" y="4" width="6" height="16" rx="1" fill="#1A1A1A"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold">Platify</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}