import React from 'react';
import { aboutData } from '../data/aboutData';
import { Target, Eye } from 'lucide-react';

export default function AboutUs({ _onOpenContact }) {
  return (
    <section id="about" className="py-24 bg-[#EFE6DE] relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE6DE] border border-neutral-200 text-[11px] font-bold uppercase tracking-wider text-neutral-800 mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#9A0002] border border-black/20"></span>
              Our Story
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight transition-colors duration-400 hover:text-[#9A0002] cursor-pointer">
              OUR MISSION. OUR IDEAS. <br />
              <span className="text-neutral-400 hover:text-[#9A0002] transition-colors duration-400">OUR WAY OF WORKING.</span>
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-sm leading-relaxed">
            Where creativity meets smart marketing. At PIXETRICKS, we believe that great marketing starts with a great idea and grows with the right strategy.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Story Card */}
          <div className="lg:col-span-7 bg-[#EFE6DE] rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-4">
                Our Story
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] mb-6 leading-tight transition-colors duration-400 hover:text-[#9A0002] cursor-pointer">
                "{aboutData.headline}"
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                {aboutData.story}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-100">
              {aboutData.stats.map((st, sIdx) => (
                <div key={sIdx}>
                  <div className="font-heading font-black text-xl sm:text-2xl text-[#0A0A0A]">
                    {st.value}
                  </div>
                  <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="bg-[#0A0A0A] text-[#EFE6DE] rounded-3xl p-8 border border-neutral-800 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#9A0002] text-[#EFE6DE] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-xl font-bold text-[#EFE6DE] mb-2">Our Mission</h4>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {aboutData.mission}
              </p>
            </div>

            <div className="bg-[#EFE6DE] text-[#0A0A0A] rounded-3xl p-8 border border-neutral-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-xl font-bold text-[#0A0A0A] mb-2">Our Vision</h4>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                {aboutData.vision}
              </p>
            </div>
          </div>

        </div>

        {/* 4 Core Philosophy Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.philosophyPillars.map((pillar, idx) => (
            <div key={idx} className="bg-[#EFE6DE] p-6 rounded-2xl border border-neutral-200 hover:border-black transition-colors">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                Pillar 0{idx + 1}
              </span>
              <h4 className="font-heading font-bold text-base text-[#0A0A0A] mb-2">
                {pillar.title}
              </h4>
              <p className="text-neutral-600 text-xs leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
