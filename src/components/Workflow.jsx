import React from 'react';
import { motion } from 'framer-motion';
import { workflowData } from '../data/workflowData';
import { UserCheck, Search, Sparkles, PlayCircle, Activity, TrendingUp, MessageSquare, BarChart3 } from 'lucide-react';

export default function Workflow({ _onOpenContact }) {
  const getWorkflowIcon = (icon) => {
    switch (icon) {
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-neutral-900" />;
      case 'Search': return <Search className="w-5 h-5 text-neutral-900" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-neutral-900" />;
      case 'PlayCircle': return <PlayCircle className="w-5 h-5 text-neutral-900" />;
      case 'Activity': return <Activity className="w-5 h-5 text-neutral-900" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-neutral-900" />;
      default: return <UserCheck className="w-5 h-5 text-neutral-900" />;
    }
  };

  return (
    <section id="workflow" className="py-24 bg-[#EFE6DE] relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {workflowData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-[#EFE6DE] rounded-3xl p-8 border border-neutral-200/90 shadow-xs hover:border-black hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#9A0002] text-[#EFE6DE] flex items-center justify-center font-bold">
                    {getWorkflowIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                    {item.duration}
                  </span>
                </div>

                <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 block mb-1">
                  {item.phase}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#0A0A0A] mb-3 transition-colors duration-400 hover:text-[#9A0002] cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-xs leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Client Ecosystem Highlight Banner */}
        <div className="bg-[#0A0A0A] text-[#EFE6DE] rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EFE6DE]">
              Our Communication Promise
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold">
              YOU'LL ALWAYS KNOW WHAT'S GOING ON.
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Working with PIXETRICKS is straightforward. You'll receive clear updates, have a chance to share feedback and know how your campaigns are progressing. Your feedback helps make sure the content and campaigns represent your brand.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-3 bg-neutral-900 px-5 py-3 rounded-2xl border border-neutral-800">
              <MessageSquare className="w-5 h-5 text-[#EFE6DE]" />
              <span className="text-xs font-bold text-neutral-200">Easy Communication</span>
            </div>
            <div className="flex items-center gap-3 bg-neutral-900 px-5 py-3 rounded-2xl border border-neutral-800">
              <BarChart3 className="w-5 h-5 text-[#EFE6DE]" />
              <span className="text-xs font-bold text-neutral-200">Clear Progress Reports</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
