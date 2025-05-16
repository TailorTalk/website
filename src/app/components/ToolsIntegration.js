import { Instagram, WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { CalendarCheck, Code, Globe, Image, NotebookText, QrCode } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function SeamlessIntegrations() {
  const [hovered, setHovered] = useState(null);

  const integrations = [
    { id: 'UPI Payments', name: 'UPI Payments', icon: QrCode },
    { id: 'Booking', name: 'Booking', icon: CalendarCheck },
    { id: 'Documnets', name: 'Documnets', icon: NotebookText },
    { id: 'Media', name: 'Media', icon: Image },
    { id: 'API', name: 'API', icon: Code },
    { id: 'Whatsapp', name: 'Whatsapp', icon: WhatsApp },
    { id: 'Instagram', name: 'Instagram', icon: Instagram },
    { id: 'Website', name: 'Website', icon: Globe },
  ];

  // 5 left, 3 right
  const leftIntegrations = integrations.slice(0, 5);
  const rightIntegrations = integrations.slice(5);

  const leftRefs = Array.from({ length: 5 }, () => useRef(null));
  const rightRefs = Array.from({ length: 3 }, () => useRef(null));
  const containerRef = useRef(null);

  const [busPoints, setBusPoints] = useState({
    left: [],
    right: [],
    busX: 0,
    busYMerge: 0,
    busYSplit: 0,
    busXSplit: 0,
    busXMerge: 0,
    busYCenter: 0,
  });

  useEffect(() => {
    function calculateBus() {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;

      // Get left points
      const leftPoints = leftRefs.map(ref => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return null;
        return {
          x: rect.right - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      }).filter(Boolean);

      // Get right points
      const rightPoints = rightRefs.map(ref => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return null;
        return {
          x: rect.left - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      }).filter(Boolean);

      // Bus X positions
      const busXMerge = containerRect.width * 0.32; // merge further left
      const busX = containerRect.width / 2; // center of container (behind center card)
      const busXSplit = containerRect.width * 0.68; // split further right

      // Merge Y: average of left points
      const busYMerge = leftPoints.length
        ? leftPoints.reduce((sum, pt) => sum + pt.y, 0) / leftPoints.length
        : containerRect.height / 2;

      // Split Y: average of right points
      const busYSplit = rightPoints.length
        ? rightPoints.reduce((sum, pt) => sum + pt.y, 0) / rightPoints.length
        : containerRect.height / 2;

      // Center Y
      const busYCenter = containerRect.height / 2;

      setBusPoints({
        left: leftPoints,
        right: rightPoints,
        busX,
        busYMerge,
        busYSplit,
        busXSplit,
        busXMerge,
        busYCenter,
      });
    }

    calculateBus();
    window.addEventListener('resize', calculateBus);
    return () => window.removeEventListener('resize', calculateBus);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 w-[70%]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-5">
          Seamless <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Integrations</span>
        </h2>
        <p className="text-[#61646b] text-[17px] max-w-2xl mx-auto">
          Connect TodoFusion with your favorite tools like Notion and Google. Enjoy a unified workflow for enhanced productivity and efficiency.
        </p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto" ref={containerRef} style={{ minHeight: 400 }}>
        {/* SVG lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 10 }}
        >
          {/* Left lines to merge point */}
          {busPoints.left.map((pt, idx) => (
            <polyline
              key={`left-${idx}`}
              points={`${pt.x},${pt.y} ${busPoints.busXMerge},${pt.y} ${busPoints.busXMerge},${busPoints.busYMerge}`}
              fill="none"
              stroke="#e0e2e6"
              strokeWidth="1"
            />
          ))}
          {/* Bus from merge to split (behind center card) */}
          <polyline
            points={`${busPoints.busXMerge},${busY(busPoints)} ${busPoints.busX},${busY(busPoints)} ${busPoints.busXSplit},${busPoints.busYSplit}`}
            fill="none"
            stroke="#e0e2e6"
            strokeWidth="1"
          />
          {/* Right lines from split point */}
          {busPoints.right.map((pt, idx) => (
            <polyline
              key={`right-${idx}`}
              points={`${busPoints.busXSplit},${busPoints.busYSplit} ${busPoints.busXSplit},${pt.y} ${pt.x},${pt.y}`}
              fill="none"
              stroke="#e0e2e6"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Center card */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[50%] z-50 flex items-center justify-center">
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
                  {/* Dark center with logo */}
                  <div className="w-full h-full bg-[#24242a] border border-black rounded-md flex items-center justify-center">
                    <div className="absolute inset-0 pointer-events-none opacity-100 rounded-md" />
                    <img src="/logo.svg" alt="Logo" className="w-12 h-12 object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Surrounding cards */}
        <div className="flex justify-between items-center relative z-20 h-full">
          {/* Left Column */}
          <div className="flex flex-col justify-center items-center gap-6 h-full">
            {leftIntegrations.map((integration, idx) => (
              <motion.div
                key={integration.id}
                ref={leftRefs[idx]}
                className="rounded-xl overflow-hidden bg-zinc-50 w-48"
                style={{ boxShadow: "inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)" }}
                variants={{
                  idle: { scale: 1 },
                  hover: { scale: 1.03, transition: { duration: 0.2 } }
                }}
                initial="idle"
                animate={hovered === integration.id ? 'hover' : 'idle'}
                onMouseEnter={() => setHovered(integration.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center p-6">
                  <div className="mr-3">
                    <integration.icon strokeWidth={1.5} />
                  </div>
                  <span className="text-base font-medium">{integration.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center items-center gap-12 h-full">
            {rightIntegrations.map((integration, idx) => (
              <motion.div
                key={integration.id}
                ref={rightRefs[idx]}
                className="rounded-xl overflow-hidden bg-zinc-50 w-48"
                style={{ boxShadow: "inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)" }}
                variants={{
                  idle: { scale: 1 },
                  hover: { scale: 1.03, transition: { duration: 0.2 } }
                }}
                initial="idle"
                animate={hovered === integration.id ? 'hover' : 'idle'}
                onMouseEnter={() => setHovered(integration.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center p-6">
                  <div className="mr-3">
                    <integration.icon strokeWidth={1.5} />
                  </div>
                  <span className="text-base font-medium">{integration.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Helper to get the Y for the bus (center of the card area)
  function busY(points) {
    // Use the merge Y (left) or split Y (right) as the vertical bus Y
    return points.busYMerge && !isNaN(points.busYMerge) ? points.busYMerge : points.busYCenter;
  }
}