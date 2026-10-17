import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { strategyData } from '../data/strategyData';
import TornDivider from './TornDivider';
import { 
  Compass, Search, Layout, PenTool, Rocket, TrendingUp, Zap, CheckCircle2, ArrowRight
} from 'lucide-react';

export default function Strategy() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  const activeStep = strategyData[activeStepIndex];

  return (
    <section id="strategy" className="py-24 bg-[#0A0A0A] text-[#EFE6DE] relative overflow-hidden">
      <TornDivider />
      {/* Background neon radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#9A0002]/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6DE]/10 border border-[#EFE6DE]/15 text-[11px] font-bold uppercase tracking-wider text-[#EFE6DE] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#EFE6DE] animate-ping"></span>
            Our Approach
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-[#EFE6DE] mb-6 transition-colors duration-400 hover:text-[#9A0002] cursor-pointer">
            A CLEAR PLAN. CREATIVE WORK. BETTER PROGRESS.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Every business has a different story. We take the time to understand yours, find opportunities and build a marketing plan that makes sense for your goals.
          </p>
        </div>

        {/* Strategy Steps Navbar (Desktop Horizontal Bar) */}
        <div className="hidden lg:flex items-center justify-between bg-neutral-900/80 p-2 rounded-2xl border border-neutral-800 mb-12 backdrop-blur-md">
          {strategyData.map((item, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative flex-1 py-3 px-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs font-bold font-heading ${
                  isActive
                    ? 'bg-[#9A0002] text-[#EFE6DE] shadow-lg shadow-[#9A0002]/20'
                    : 'text-neutral-400 hover:text-[#EFE6DE] hover:bg-neutral-800'
                }`}
              >
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-[#EFE6DE]/20 text-[#EFE6DE]' : 'bg-neutral-800 text-neutral-400'}`}>
                  {item.step}
                </span>
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Strategy Flow Pipeline Graphic (Mobile/Tablet Pills) */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-4 mb-8 scrollbar-none">
          {strategyData.map((item, idx) => (
            <button
              key={item.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2 border transition-all ${
                activeStepIndex === idx
                  ? 'bg-[#9A0002] text-[#EFE6DE] border-[#9A0002]'
                  : 'bg-neutral-900 text-neutral-400 border-neutral-800'
              }`}
            >
              <span>{item.step}.</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Detailed Step Display Panel */}
        <motion.div
          key={activeStep.step}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-neutral-900/90 rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle watermark step number */}
          <div className="absolute right-4 bottom-0 font-heading font-black text-9xl text-[#EFE6DE]/5 pointer-events-none select-none">
            {activeStep.step}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#9A0002] text-[#EFE6DE] flex items-center justify-center font-bold">
                  {getStepIcon(activeStep.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#EFE6DE]">
                    Stage {activeStep.step} of 07
                  </span>
                  <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#EFE6DE] transition-colors duration-400 hover:text-[#9A0002] cursor-pointer">
                    {activeStep.name} — <span className="text-neutral-400 hover:text-[#9A0002] transition-colors duration-400">{activeStep.tagline}</span>
                  </h3>
                </div>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {activeStep.description}
              </p>

              {/* Deliverables List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                  What We'll Focus On:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStep.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-800/60 border border-neutral-700/50 text-xs text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-[#EFE6DE] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                  The Aim
                </span>
                <p className="font-heading font-bold text-lg text-[#EFE6DE]">
                  "{activeStep.highlight}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-400">Next Step</span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % strategyData.length)}
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-[#EFE6DE] rounded-lg text-xs font-bold flex items-center gap-2 transition-colors"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#EFE6DE]" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
