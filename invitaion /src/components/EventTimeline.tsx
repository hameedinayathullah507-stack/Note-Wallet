import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { SectionTitle } from './SectionTitle';
import { Sparkles, HeartHandshake, Utensils } from 'lucide-react';

export const EventTimeline: React.FC = () => {
  const events = [
    {
      date: wedding.nikkah.dateFormatted,
      day: wedding.nikkah.day,
      time: wedding.nikkah.time,
      title: 'THE NIKKAH',
      arabic: 'النِّكَاح',
      venue: wedding.nikkah.venue,
      address: wedding.nikkah.address,
      icon: HeartHandshake,
      targetId: 'nikkah',
    },
    {
      date: wedding.valima.dateFormatted,
      day: wedding.valima.day,
      time: wedding.valima.time,
      title: 'THE VALIMA',
      arabic: 'الوليمة',
      venue: wedding.valima.venue,
      address: wedding.valima.address,
      icon: Utensils,
      targetId: 'valima',
    },
  ];

  return (
    <section id="timeline" className="py-16 sm:py-20 px-3 sm:px-4 bg-[#EFE3D0]/20 w-full">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          arabic="ஜدول الأحداث"
          title="EVENT TIMELINE"
          subtitle="The sequence of blessed celebrations"
        />

        <div className="relative border-l-2 border-[#B8954A]/60 md:mx-auto ml-5 md:ml-auto my-8 space-y-10">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative pl-7 md:pl-10"
              >
                {/* Gold Dot on Timeline */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 border-[#B8954A] bg-[#FAF6EF] flex items-center justify-center shadow-md">
                  <div className="w-3 h-3 rounded-full bg-[#B8954A] animate-ping" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#7A5B18] absolute" />
                </div>

                {/* Event Card Container */}
                <div className="ivory-card p-5 sm:p-6 rounded-sm shadow-md border border-[#D8BE7A]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-[#EFE3D0]/60 text-[#B8954A]">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div>
                      <span className="font-decorative text-[11px] tracking-widest text-[#7A5B18] uppercase font-bold">
                        {event.day} &bull; {event.date}
                      </span>
                      <h4 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#111111] uppercase tracking-wider">
                        {event.title} <span className="font-arabic text-base text-[#B8954A] font-normal ml-1.5">{event.arabic}</span>
                      </h4>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-dashed border-[#B8954A]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
                    <div>
                      <p className="font-serif font-bold text-[#7A5B18] text-base">
                        {event.time}
                      </p>
                      <p className="font-serif text-[#111111] font-semibold mt-0.5">
                        {event.venue}
                      </p>
                      <p className="font-serif text-xs text-[#111111]/70">
                        {event.address}
                      </p>
                    </div>

                    <a
                      href={`#${event.targetId}`}
                      className="inline-flex items-center gap-1.5 self-start sm:self-auto text-[11px] font-decorative text-[#7A5B18] hover:text-[#B8954A] uppercase tracking-wider font-bold underline underline-offset-4"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> DETAILS
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
