import React from "react";
import {
  MessageCircle,
  CalendarCheck2,
  CreditCard,
  Database,
  Bot,
  ScanFace,
  Table2,
  Clock,
  TrendingUp,
  Users,
  MessagesSquare,
  FileText,
  Network,
  Image,
  Video,
  Music,
  Smile,
  LineChart,
  ShoppingBag
} from "lucide-react";

// Premium Bento Grid Component
const BentoGrid = ({ className, children }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {children}
    </div>
  );
};

// Premium Bento Grid Item Component
const BentoGridItem = ({
  title,
  description,
  header,
  icon,
  className = "",
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl ${className}`}
    >
      <div className="flex h-full flex-col">
        <div className="h-60">{header}</div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center justify-center rounded-full bg-gray-100 p-2">
                {icon}
              </span>
              <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AIAgentToolkit() {
  return (
    <div className="w-full py-24">
      {/* Toolkit Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-5 text-xs uppercase tracking-wider font-semibold text-gray-900 bg-gray-100 rounded-full">
            Powerful Features
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Your AI Agent&rsquo;s <span className="text-indigo-700">Toolkit</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Everything your agent needs to succeed with powerful features for action
          </p>
        </div>

        {/* Connect Your Channels */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-xl font-semibold text-gray-800">
              Connect Your Channels
            </h3>
          </div>
          <BentoGrid>
            {/* WhatsApp & Instagram Integration */}
            <BentoGridItem
              title="WhatsApp & Instagram Integration"
              description="Connect seamlessly to the primary B2C chat platforms where your customers are."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-green-500 text-white p-4 rounded-xl shadow-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-4 rounded-xl shadow-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              }
              icon={<MessageCircle className="h-5 w-5 text-indigo-700" />}
            />
            
            {/* Rich Media Processing */}
            <BentoGridItem
              title="Go Beyond Text: Understand & Share Rich Media"
              description="Automate richer workflows beyond just words. Process incoming images, documents, audio, and video to boost clarity and conversions."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <Image className="w-6 h-6 text-blue-700" />
                      </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
                      <div className="bg-red-50 p-3 rounded-lg">
                        <Video className="w-6 h-6 text-red-700" />
                      </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
                      <div className="bg-amber-50 p-3 rounded-lg">
                        <Music className="w-6 h-6 text-amber-700" />
                      </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <FileText className="w-6 h-6 text-green-700" />
                      </div>
                    </div>
                  </div>
                </div>
              }
              icon={<MessagesSquare className="h-5 w-5 text-indigo-700" />}
            />
            
            {/* Custom API Integration */}
            <BentoGridItem
              title="Custom API Integration"
              description="Connect to any internal system or third-party service for unlimited custom actions and seamless operations."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Network className="h-12 w-12 text-indigo-700" />
                  </div>
                </div>
              }
              icon={<Network className="h-5 w-5 text-indigo-700" />}
            />
          </BentoGrid>
        </div>

        {/* Leverage Intelligent Automation */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-xl font-semibold text-gray-800">
              Leverage Intelligent Automation
            </h3>
          </div>
          <BentoGrid>
            {/* Automated Contextual Follow-ups */}
            <BentoGridItem
              title="Automated Contextual Follow-ups"
              description="Proactively re-engage leads based on past conversation history to drive higher conversion rates."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Bot className="h-12 w-12 text-amber-700" />
                  </div>
                </div>
              }
              icon={<Bot className="h-5 w-5 text-amber-700" />}
            />
            
            {/* Lead Status Tracking */}
            <BentoGridItem
              title="Lead Status Tracking & Qualification"
              description="Automatically categorize leads (Hot/Warm/Cold) and qualify them based on your custom definitions."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ScanFace className="h-12 w-12 text-red-700" />
                  </div>
                </div>
              }
              icon={<ScanFace className="h-5 w-5 text-red-700" />}
            />
            
            {/* Smart Data Organization */}
            <BentoGridItem
              title="Smart Data Organization"
              description="Automatically extract and organize key customer data into customizable columns (e.g., budget, destination)."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Table2 className="h-12 w-12 text-cyan-700" />
                  </div>
                </div>
              }
              icon={<Table2 className="h-5 w-5 text-cyan-700" />}
            />
          </BentoGrid>
        </div>

        {/* The TailorTalk Advantage Section */}
        <div className="pt-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-5 text-xs uppercase tracking-wider font-semibold text-gray-900 bg-gray-100 rounded-full">
              Business Benefits
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              The <span className="text-indigo-700">TailorTalk</span> Advantage
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
              Results you can expect: Why B2C businesses choose TailorTalk
            </p>
          </div>

          <BentoGrid>
            {/* Setup in Minutes */}
            <BentoGridItem
              className="border-2 border-indigo-200"
              title="Setup in Minutes, Not Weeks"
              description="Get started incredibly fast (often under 30 mins) using natural language. No technical expertise or coding required."
              header={
                <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Clock className="h-12 w-12 text-indigo-700" />
                  </div>
                </div>
              }
              icon={<Clock className="h-5 w-5 text-indigo-700" />}
            />
            
            {/* Increase Conversions */}
            <BentoGridItem
              title="Increase Conversions 24/7"
              description="Never miss a lead. Engage customers instantly, automate follow-ups, and guide them towards purchase or booking, even outside business hours."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <TrendingUp className="h-12 w-12 text-emerald-700" />
                  </div>
                </div>
              }
              icon={<TrendingUp className="h-5 w-5 text-emerald-700" />}
            />
            
            {/* Empower Your Team */}
            <BentoGridItem
              title="Automate Tasks, Empower Your Team"
              description="Reduce manual workload significantly. Let the AI handle routine interactions while your team focuses on high-value tasks."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Users className="h-12 w-12 text-violet-700" />
                  </div>
                </div>
              }
              icon={<Users className="h-5 w-5 text-violet-700" />}
            />
            
            {/* Customer Satisfaction */}
            <BentoGridItem
              title="Deliver Instant, Personalized Support"
              description="Provide immediate, accurate responses and actions on preferred channels (WhatsApp/Instagram), leading to happier, more loyal customers."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Smile className="h-12 w-12 text-yellow-600" />
                  </div>
                </div>
              }
              icon={<Smile className="h-5 w-5 text-yellow-600" />}
            />
            
            {/* Actionable Insights */}
            <BentoGridItem
              title="Understand Your Customers Better"
              description="Simply ask your agent questions in natural language (e.g., 'What are common customer pain points?') to get deep insights from your interaction data."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <LineChart className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
              }
              icon={<LineChart className="h-5 w-5 text-blue-600" />}
            />
            
            {/* Shopify Integration */}
            <BentoGridItem
              title="Seamless Shopify Integration"
              description="Manage Shopify interactions like order status, product info, and inventory directly from your conversation platform."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ShoppingBag className="h-12 w-12 text-green-600" />
                  </div>
                </div>
              }
              icon={<ShoppingBag className="h-5 w-5 text-green-600" />}
            />
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}