import { Instagram, WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { CalendarCheck, Code, Globe, Image, NotebookText, QrCode, Files } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Linear interpolation
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function getPointOnLine(x1, y1, x2, y2, t) {
  return {
    x: lerp(x1, x2, t),
    y: lerp(y1, y2, t),
  };
}

export default function SeamlessIntegrations() {
  const [hovered, setHovered] = useState(null);

  const integrations = [
    { id: 'UPI Payments', name: 'Payments', icon: QrCode, color: '#22c55e', bg: 'bg-green-100' },      // green
    { id: 'Booking', name: 'Booking', icon: CalendarCheck, color: '#2563eb', bg: 'bg-blue-100' },      // blue
    { id: 'Documnets', name: 'Documents', icon: Files, color: '#f59e42', bg: 'bg-amber-100' },         // amber
    { id: 'API', name: 'API', icon: Code, color: '#0ea5e9', bg: 'bg-cyan-100' },                       // cyan
    { id: 'Whatsapp', name: 'Whatsapp', icon: WhatsApp, color: '#25d366', bg: 'bg-[#e7f9f3]' },        // WhatsApp green
    { id: 'Instagram', name: 'Instagram', icon: Instagram, color: '#e1306c', bg: 'bg-pink-100' },      // Instagram pink
    { id: 'Website', name: 'Website', icon: Globe, color: '#64748b', bg: 'bg-gray-100' },              // gray
  ];

  // 4 left, 3 right (since there are now 7 cards)
  const leftIntegrations = integrations.slice(0, 4);
  const rightIntegrations = integrations.slice(4);

  // Use refs as arrays, initialized once
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);
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

  // Animation state
  const [progress, setProgress] = useState(0);

  // Animation loop
  useEffect(() => {
    let raf;
    function animate() {
      setProgress(prev => (prev + 0.006) % 1);
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    function calculateBus() {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;

      // Get left points
      const leftPoints = leftRefs.current.map(ref => {
        if (!ref) return null;
        const rect = ref.getBoundingClientRect();
        return {
          x: rect.right - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      }).filter(Boolean);

      // Get right points
      const rightPoints = rightRefs.current.map(ref => {
        if (!ref) return null;
        const rect = ref.getBoundingClientRect();
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

  // Animation phases:
  // 0.0 - 0.33: left beams travel to merge point (L-shaped polyline)
  // 0.33 - 0.66: single beam travels from merge to split (polyline)
  // 0.66 - 1.0: 3 beams travel from split to right cards (L-shaped polyline)

  let leftBeams = [];
  let busBeam = null;
  let rightBeams = [];

  // Helper to get segment length
  function segmentLength(a, b) {
    return Math.hypot(b.x - a.x, b.y - a.y);
  }

  if (
    busPoints.left.length === leftIntegrations.length &&
    busPoints.right.length === rightIntegrations.length
  ) {
    const { busXMerge, busYMerge, busX, busXSplit, busYSplit } = busPoints;
    const lefts = busPoints.left;
    const rights = busPoints.right;

    // Animation phase
    const phase = progress < 0.33 ? "left" : progress < 0.66 ? "bus" : "right";
    const tLeft = Math.min(progress / 0.33, 1);
    const tBus = progress < 0.33 ? 0 : progress < 0.66 ? (progress - 0.33) / 0.33 : 1;
    const tRight = progress < 0.66 ? 0 : (progress - 0.66) / 0.34;

    // Beam length as a fraction of the segment
    const beamLen = 0.08;
    const busBeamLen = 0.08;

    // Left beams: from each left card to merge point (L-shaped polyline)
    if (phase === "left") {
      for (let l = 0; l < lefts.length; l++) {
        const from = lefts[l];
        const corner = { x: busXMerge, y: from.y };
        const to = { x: busXMerge, y: busYMerge };
        const seg1 = segmentLength(from, corner);
        const seg2 = segmentLength(corner, to);
        const total = seg1 + seg2;
        const t = tLeft * total;

        let points;
        if (t <= seg1) {
          // Beam is on the first segment
          const head = {
            x: from.x + (corner.x - from.x) * (t / seg1),
            y: from.y
          };
          const tailT = Math.max(0, t - beamLen * total) / seg1;
          const tail = {
            x: from.x + (corner.x - from.x) * tailT,
            y: from.y
          };
          points = [tail, head];
        } else {
          // Beam is on the second segment
          const tOnSeg2 = t - seg1;
          const head = {
            x: corner.x,
            y: corner.y + (to.y - corner.y) * (tOnSeg2 / seg2)
          };
          const tailT = Math.max(0, tOnSeg2 - beamLen * total) / seg2;
          const tail = {
            x: corner.x,
            y: corner.y + (to.y - corner.y) * tailT
          };
          points = [tail, head];
        }
        leftBeams.push({ points });
      }
    }

    // Bus beam: from merge to split (polyline)
    if (phase === "bus") {
      const from = { x: busXMerge, y: busYMerge };
      const corner = { x: busX, y: busYMerge };
      const to = { x: busXSplit, y: busYSplit };
      const seg1 = segmentLength(from, corner);
      const seg2 = segmentLength(corner, to);
      const total = seg1 + seg2;
      const t = tBus * total;

      let points;
      if (t <= seg1) {
        // Beam is on the first segment
        const head = {
          x: from.x + (corner.x - from.x) * (t / seg1),
          y: from.y
        };
        const tailT = Math.max(0, t - busBeamLen * total) / seg1;
        const tail = {
          x: from.x + (corner.x - from.x) * tailT,
          y: from.y
        };
        points = [tail, head];
      } else {
        // Beam is on the second segment
        const tOnSeg2 = t - seg1;
        const head = {
          x: corner.x + (to.x - corner.x) * (tOnSeg2 / seg2),
          y: corner.y + (to.y - corner.y) * (tOnSeg2 / seg2)
        };
        const tailT = Math.max(0, tOnSeg2 - busBeamLen * total) / seg2;
        const tail = {
          x: corner.x + (to.x - corner.x) * tailT,
          y: corner.y + (to.y - corner.y) * tailT
        };
        points = [tail, head];
      }
      busBeam = { points };
    }

    // Right beams: from split to each right card (L-shaped polyline)
    if (phase === "right") {
      for (let r = 0; r < rights.length; r++) {
        const to = rights[r];
        const corner = { x: busXSplit, y: to.y };
        const from = { x: busXSplit, y: busYSplit };
        const seg1 = segmentLength(from, corner);
        const seg2 = segmentLength(corner, to);
        const total = seg1 + seg2;
        const t = tRight * total;

        let points;
        if (t <= seg1) {
          // Beam is on the first segment
          const head = {
            x: from.x,
            y: from.y + (corner.y - from.y) * (t / seg1)
          };
          const tailT = Math.max(0, t - beamLen * total) / seg1;
          const tail = {
            x: from.x,
            y: from.y + (corner.y - from.y) * tailT
          };
          points = [tail, head];
        } else {
          // Beam is on the second segment
          const tOnSeg2 = t - seg1;
          const head = {
            x: corner.x + (to.x - corner.x) * (tOnSeg2 / seg2),
            y: corner.y + (to.y - corner.y) * (tOnSeg2 / seg2)
          };
          const tailT = Math.max(0, tOnSeg2 - beamLen * total) / seg2;
          const tail = {
            x: corner.x + (to.x - corner.x) * tailT,
            y: corner.y + (to.y - corner.y) * tailT
          };
          points = [tail, head];
        }
        rightBeams.push({ points });
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 w-[70%]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
          Connect Smart <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Tools</span>
        </h2>
        <p className="text-[#61646b] text-[17px] max-w-2xl mx-auto">
          Enhance your TailorTalk agent by integrating powerful tools to automate complex tasks and deliver actionable results within chat.
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
          {/* Animated beams (now always full length on each segment) */}
          {leftBeams.map((beam, idx) => (
            <polyline
              key={`left-beam-${idx}`}
              points={beam.points.map(p => `${p.x},${p.y}`).join(' ')}
              stroke="#a78bfa"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
          ))}
          {busBeam && (
            <polyline
              points={busBeam.points.map(p => `${p.x},${p.y}`).join(' ')}
              stroke="#a78bfa"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
          )}
          {rightBeams.map((beam, idx) => (
            <polyline
              key={`right-beam-${idx}`}
              points={beam.points.map(p => `${p.x},${p.y}`).join(' ')}
              stroke="#a78bfa"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
          ))}
        </svg>

        {/* Center card */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[50%] z-50 flex items-center justify-center">
          {/* Inner container with diagonal pattern */}
          <div className="w-full h-full rounded-2xl flex items-center justify-center">
            {/* Card container */}
            <motion.div
              className="w-36 h-36 rounded-xl bg-zinc-50 p-3"
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
                  <div className="w-full h-full bg-zinc-50 rounded-md flex items-center justify-center">
                    <div className="absolute inset-0 pointer-events-none opacity-100 rounded-md" />
                    <img src="/logo.svg" alt="Logo" className="w-9 h-9 object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Surrounding cards */}
        <div className="flex justify-between items-center relative z-20 h-full">
          {/* Left Column */}
          <div className="flex flex-col justify-center items-center gap-8 h-full">
            {leftIntegrations.map((integration, idx) => (
              <motion.div
                key={integration.id}
                ref={el => leftRefs.current[idx] = el}
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
                  <div
                    className={`mr-3 flex items-center justify-center rounded-lg w-10 h-10 ${integration.bg}`}
                  >
                    <integration.icon strokeWidth={1.5} style={{ color: integration.color }} className="w-6 h-6" />
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
                ref={el => rightRefs.current[idx] = el}
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
                  <div
                    className={`mr-3 flex items-center justify-center rounded-lg w-10 h-10 ${integration.bg}`}
                  >
                    <integration.icon strokeWidth={1.5} style={{ color: integration.color }} className="w-6 h-6" />
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