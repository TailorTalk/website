import React from "react";
import {
  MessageCircle,
  CalendarCheck2,
  CreditCard,
  Database,
  ShoppingBag,
  Bot,
  ScanFace,
  Table2,
  Megaphone,
  Clock,
  TrendingUp,
  Users,
  MessagesSquare,
  BarChart3,
  Music,
  Video,
  Image,
  FileText,
  Network
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
    <div className="w-full py-24 bg-gray-50">
      {/* Toolkit Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-5 text-xs uppercase tracking-wider font-semibold text-gray-900 bg-gray-100 rounded-full">
            Enterprise Solutions
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Enterprise AI <span className="text-indigo-700">Toolkit</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Advanced communication tools engineered for enterprise-level customer engagement and operational excellence
          </p>
        </div>

        {/* Channel Integration */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-xl font-semibold text-gray-800">
              Omnichannel Integration
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-1/2"></div>
          </div>
          <BentoGrid>
            {/* WhatsApp & Instagram Integration */}
            <BentoGridItem
              title="Business Messaging"
              description="Seamless integration with WhatsApp Business API and Instagram Direct for enterprise-grade communication."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg flex items-center justify-center">
                      <MessageCircle className="h-8 w-8" />
                    </div>
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-xl shadow-lg flex items-center justify-center">
                      <MessageCircle className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              }
              icon={<MessageCircle className="h-5 w-5 text-indigo-700" />}
            />
            
            {/* Media Processing */}
            <BentoGridItem
              title="Advanced Media Processing"
              description="Enterprise-grade handling of documents, images, audio, and video with secure storage and analysis."
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
            
            {/* API Integration */}
            <BentoGridItem
              title="Enterprise API Framework"
              description="Secure, scalable integration with internal systems and third-party services through our enterprise API gateway."
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

        {/* Business Tools */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-xl font-semibold text-gray-800">
              Enterprise Business Tools
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-1/2"></div>
          </div>
          <BentoGrid>
            {/* Booking Management */}
            <BentoGridItem
              title="Advanced Scheduling System"
              description="Enterprise-grade appointment management with calendar integration, confirmations, and automated workflows."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <CalendarCheck2 className="h-12 w-12 text-blue-700" />
                  </div>
                </div>
              }
              icon={<CalendarCheck2 className="h-5 w-5 text-blue-700" />}
            />
            
            {/* Payment Processing */}
            <BentoGridItem
              title="Secure Transaction Processing"
              description="PCI-compliant payment processing within conversations with comprehensive fraud protection."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <CreditCard className="h-12 w-12 text-green-700" />
                  </div>
                </div>
              }
              icon={<CreditCard className="h-5 w-5 text-green-700" />}
            />
            
            {/* Knowledge Management */}
            <BentoGridItem
              title="Enterprise Knowledge Hub"
              description="Secure, scalable knowledge management with version control and role-based access control."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Database className="h-12 w-12 text-purple-700" />
                  </div>
                </div>
              }
              icon={<Database className="h-5 w-5 text-purple-700" />}
            />
          </BentoGrid>
        </div>

        {/* Advanced Features */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-xl font-semibold text-gray-800">
              Advanced Intelligent Features
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-1/2"></div>
          </div>
          <BentoGrid>
            {/* Automated Follow-ups */}
            <BentoGridItem
              title="Intelligent Engagement System"
              description="Context-aware follow-up engine with behavioral analysis and predictive engagement models."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Bot className="h-12 w-12 text-amber-700" />
                  </div>
                </div>
              }
              icon={<Bot className="h-5 w-5 text-amber-700" />}
            />
            
            {/* Lead Management */}
            <BentoGridItem
              title="Advanced Lead Intelligence"
              description="AI-powered lead scoring and qualification with customizable parameters and enterprise CRM integration."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ScanFace className="h-12 w-12 text-red-700" />
                  </div>
                </div>
              }
              icon={<ScanFace className="h-5 w-5 text-red-700" />}
            />
            
            {/* Data Organization */}
            <BentoGridItem
              title="Enterprise Data Architecture"
              description="Structured data extraction and organization with automated tagging and categorization capabilities."
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

        {/* Business Benefits */}
        <div className="pt-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-5 text-xs uppercase tracking-wider font-semibold text-gray-900 bg-gray-100 rounded-full">
              Enterprise Advantages
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              The <span className="text-indigo-700">Enterprise</span> Advantage
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
              Why leading enterprises choose our platform for communication AI solutions
            </p>
          </div>

          <BentoGrid>
            {/* Implementation */}
            <BentoGridItem
              title="Rapid Enterprise Deployment"
              description="Implement enterprise-wide solutions in days, not months, with our secure implementation framework."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Clock className="h-12 w-12 text-indigo-700" />
                  </div>
                </div>
              }
              icon={<Clock className="h-5 w-5 text-indigo-700" />}
            />
            
            {/* Conversion Optimization */}
            <BentoGridItem
              title="Revenue Optimization"
              description="Drive enterprise revenue through AI-powered conversion optimization and engagement strategies."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <TrendingUp className="h-12 w-12 text-emerald-700" />
                  </div>
                </div>
              }
              icon={<TrendingUp className="h-5 w-5 text-emerald-700" />}
            />
            
            {/* Team Enablement */}
            <BentoGridItem
              title="Workforce Augmentation"
              description="Enhance team productivity through AI-driven automation and operational intelligence."
              header={
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Users className="h-12 w-12 text-violet-700" />
                  </div>
                </div>
              }
              icon={<Users className="h-5 w-5 text-violet-700" />}
            />
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}