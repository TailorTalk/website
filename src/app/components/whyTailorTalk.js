import React from "react";

// FeatureCard component
const FeatureCard = ({ icon, title, description, shadow, insetShadow }) => {
  return (
    <div className="flex flex-col items-start text-left max-w-sm p-4">
      {/* Icon container with the specific box shadow */}
      <div 
        className="w-15 h-16 bg-slate-50 mb-6 rounded-xl flex items-center justify-center relative"
        style={{ boxShadow: `inset 0 1px 0 0 white, inset 0 -1px 0 0 ${insetShadow}, 0 4px 8px 0 ${shadow}` }}
      >
        <div className="absolute top-3 flex items-start justify-center pointer-events-none group-hover:hidden">
        <div
        style={{ backgroundColor: "white" }}
         className="w-8 h-1 rounded-full blur-sm opacity-100"></div>
      </div>
        {icon}
        <div className="absolute bottom-0 flex items-start justify-center pointer-events-none group-hover:hidden">
        <div
        style={{ backgroundColor: shadow }}
         className="w-8 h-7 rounded-full blur-sm opacity-100"></div>
      </div>
      </div>
      
      {/* Title */}
      <h3 className="text-[19px] mb-2 text-[#121218]">{title}</h3>
      
      {/* Description */}
      <div className="text-[#61646b] text-[15px]">{description}</div>
    </div>
  );
};

const WhyTailorTalk = () => {
const featureCards = [
{
  icon: <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
  </svg>,
  title: "Setup in Minutes",
  description: "Get started incredibly fast using natural language. No technical expertise or coding required. ",
  shadow: "rgba(59, 130, 246, 0.3)", // blue
  insetShadow: "rgba(59, 130, 246, 0.4)" // darker blue
},
    {
      icon: (
        <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <rect x="4" y="14" width="3" height="6" rx="1" />
          <rect x="10.5" y="10" width="3" height="10" rx="1" />
          <rect x="17" y="6" width="3" height="14" rx="1" />
        </svg>
      ),
      title: "Boost Sales by upto 50%",
      description: "Never miss a lead. Engage customers instantly, automate follow-ups, and guide them towards purchase, even outside business hours.",
      shadow: "rgba(34,197,94,0.3)", // green
      insetShadow: "rgba(34,197,94,0.4)" // darker green
    },
    {
      icon: (
        <svg className="w-6 h-6 text-rose-400" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 15l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Save Cost by 80%",
      description: "Reduce manual workload significantly. Let the AI handle routine interactions while your team focuses on high-value tasks. ",
      shadow: "rgba(251, 113, 133, 0.2)", // soft red
      insetShadow: "rgba(251, 113, 133, 0.3)" // slightly deeper red
    },
    {
      icon: (
        <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="10" r="1" fill="currentColor"/>
          <circle cx="15" cy="10" r="1" fill="currentColor"/>
          <path d="M8.5 15c1.5 1.2 5.5 1.2 7 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Improve Customer Satisfaction",
      description: "Provide immediate, accurate responses and actions leading to happier, more loyal customers.",
      shadow: "rgba(251, 191, 36, 0.3)", // yellow
      insetShadow: "rgba(251, 191, 36, 0.4)" // darker yellow
    },
{
  icon: (
    // Magic wand / sparkles icon
    <svg className="w-6 h-6 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
      <path d="M20 3v4"/>
      <path d="M22 5h-4"/>
      <path d="M4 17v2"/>
      <path d="M5 18H3"/>
    </svg>
  ),
  title: "Unlock Valuable Insights",
  description: 'Simply ask your agent questions in natural language to get deep insights from your customers data. ',
  shadow: "rgba(139, 92, 246, 0.2)", // violet
  insetShadow: "rgba(139, 92, 246, 0.3)" // slightly deeper violet
},
{
  icon: (
    // Blocks/integration icon
    <svg className="w-6 h-6 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="14" y="3" rx="1"/>
      <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/>
    </svg>
  ),
  title: "Seamless Integration",
  description: "Easily integrate TailorTalk with your systems through APIs—let it take actions, interact with your data and workflows.",
  shadow: "rgba(34, 211, 238, 0.2)", // cyan
  insetShadow: "rgba(34, 211, 238, 0.3)" // slightly deeper cyan
},
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
          Why <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">TailorTalk?</span>
        </h2>    
        <p className="text-[#61646b] text-[17px] max-w-2xl mx-auto">This is why businesses Choose TailorTalk</p>
      </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {featureCards.map((card, index) => (
            <FeatureCard 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              shadow={card.shadow}
              insetShadow={card.insetShadow}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyTailorTalk;