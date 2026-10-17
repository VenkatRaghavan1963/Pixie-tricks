import React from 'react';
import { motion } from 'framer-motion';
import { teamData } from '../data/teamData';
import { Award } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#EFE6DE] relative overflow-hidden border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[11px] font-bold uppercase tracking-wider text-neutral-800 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#9A0002] border border-black/20"></span>
              Leadership & Specialists
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight transition-colors duration-400 hover:text-[#9A0002] cursor-pointer">
              MEET THE MINDS <br />
              <span className="text-neutral-400 hover:text-[#9A0002] transition-colors duration-400">BEHIND THE GROWTH.</span>
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-sm leading-relaxed">
            Senior strategists, award-winning creative directors, and data engineers who live and breathe high-performance marketing.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="group bg-[#EFE6DE] rounded-3xl overflow-hidden border border-neutral-200/90 hover:border-black transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Member Photo Container */}
                <div className="relative h-72 overflow-hidden bg-neutral-200">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Highlight Stat Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#9A0002] text-[#0A0A0A] font-bold text-[11px] rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {member.stat}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-[#EFE6DE]/20 backdrop-blur-md text-[#EFE6DE] flex items-center justify-center hover:bg-[#EFE6DE] hover:text-black transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-[#EFE6DE]/20 backdrop-blur-md text-[#EFE6DE] flex items-center justify-center hover:bg-[#EFE6DE] hover:text-black transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                    {member.role}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#0A0A0A] mb-3 transition-colors duration-400 group-hover:text-[#9A0002] hover:text-[#9A0002] cursor-pointer">
                    {member.name}
                  </h3>
                  <p className="text-neutral-600 text-xs leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Expertise Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {member.expertise.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 bg-[#EFE6DE] border border-neutral-200 text-neutral-700 rounded-md text-[10px] font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
