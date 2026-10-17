import React from 'react';
import { motion } from 'framer-motion';
import { trustPillarsData } from '../data/trustPillarsData';
import TornDivider from './TornDivider';
import { Brain, Sparkles, LineChart, Eye, Sliders, Award } from 'lucide-react';

export default function WhyTrustUs({ _onOpenContact }) {
  const getPillarIcon = (icon) => {
    switch (icon) {
      case 'Brain': return <Brain className="w-6 h-6 text-neutral-900" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-neutral-900" />;
      case 'LineChart': return <LineChart className="w-6 h-6 text-neutral-900" />;
      case 'Eye': return <Eye className="w-6 h-6 text-neutral-900" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-neutral-900" />;
      case 'Award': return <Award className="w-6 h-6 text-neutral-900" />;
      default: return <Award className="w-6 h-6 text-neutral-900" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#EFE6DE] relative overflow-hidden border-b border-neutral-200">
      <TornDivider reverse />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-[11px] font-bold uppercase tracking-wider text-neutral-900 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#9A0002] border border-black/20"></span>
            Why Pixietricks
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight mb-6 transition-colors duration-400 hover:text-[#9A0002] cursor-pointer">
            SMALL DETAILS. BIG IDEAS. <br />
            <span className="text-neutral-400 hover:text-[#9A0002] transition-colors duration-400">REAL PURPOSE.</span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            We don't believe marketing should be complicated. We focus on understanding your business, creating work that feels right for your brand and helping you make informed decisions.
          </p>
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPillarsData.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-[#EFE6DE] rounded-3xl p-8 border border-neutral-200/90 hover:border-black hover:bg-[#EFE6DE] transition-all duration-300 hover:shadow-xl group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EFE6DE] border border-neutral-200 flex items-center justify-center text-neutral-900 group-hover:bg-[#9A0002] group-hover:text-[#EFE6DE] group-hover:border-black transition-colors">
                  {getPillarIcon(pillar.icon)}
                </div>
                <div className="text-right">
                  <span className="font-heading font-extrabold text-2xl text-[#0A0A0A] block">
                    {pillar.stat}
                  </span>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    {pillar.statLabel}
                  </span>
                </div>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#0A0A0A] mb-3 transition-colors duration-400 group-hover:text-[#9A0002] hover:text-[#9A0002] cursor-pointer">
                {pillar.title}
              </h3>
              <p className="text-neutral-600 text-xs leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
