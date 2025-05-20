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
      icon: <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-8.5 14l-4-4 1.41-1.41L11 14.67l6.59-6.59L19 9.5l-8.5 7.5z"></path></svg>,
      title: "Keyboard shortcuts",
      description: "Streamline your workflow with customizable keyboard shortcuts. Navigate and manage tasks faster, boosting your productivity.",
      shadow: "rgba(139, 92, 246, 0.3)", // purple
      insetShadow: "rgba(139, 92, 246, 0.3)" // darker purple
    },
    {
      icon: <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>,
      title: "Break time",
      description: "Enhance your focus with scheduled breaks. Stay productive by incorporating regular breaks to refresh your mind.",
      shadow: "rgba(251, 191, 36, 0.3)", // amber
      insetShadow: "rgba(251, 191, 36, 0.4)" // darker amber
    },
    {
      icon: <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"></path></svg>,
      title: "AI task creation",
      description: "Leverage AI to automatically generate and organize tasks. Save time and improve efficiency with intelligent task management.",
      shadow: "rgba(52, 211, 153, 0.3)", // green
      insetShadow: "rgba(52, 211, 153, 0.4)" // darker green
    },
    {
      icon: <svg className="w-6 h-6 text-pink-400" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></svg>,
      title: "Integration",
      description: "Seamlessly connect with Notion, Google, and other tools. Integrate your favorite apps for a unified productivity experience.",
      shadow: "rgba(244, 114, 182, 0.3)", // pink
      insetShadow: "rgba(244, 114, 182, 0.4)" // darker pink
    },
    {
      icon: <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>,
      title: "Live collaboration",
      description: "Collaborate in real-time with your team. Share tasks, track progress, and achieve goals together effortlessly.",
      shadow: "rgba(96, 165, 250, 0.3)", // blue
      insetShadow: "rgba(96, 165, 250, 0.4)" // darker blue
    },
    {
      icon: <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>,
      title: "Dark & Light mode",
      description: "Switch between dark and light modes to suit your preference. Enjoy a comfortable viewing experience day or night.",
      shadow: "rgba(248, 113, 113, 0.3)", // red
      insetShadow: "rgba(248, 113, 113, 0.4)" // darker red
    }
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