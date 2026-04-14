// import { title } from "framer-motion/client";

// const Steps = [
//     {
//         title: "Consultation",
//         desc: "We understand your goals, career and preferred location.",
//     },
//     {
//         title: "Application",
//         desc: "we help you choose school or program and prepare documents.",
//     },
//     {
//         title: "Visa Process",
//         desc: "Full support with student visa or immigration application ",
//     },
//     {
//         title: "Relocation",
//         desc: "We assist with housing, travel and setttlement planning.",
//     },
//     {
//         title: "Settlement",
//         desc: "ongoing support for living, working and building your future.",
//     },
// ]

// const WhatWeDo = () => {
//     return (
//         <section className="py-16 px-6 bg-gray-100 text-center">
//             <h2 className="text-3xl font-bold mb-10 ">How We Work</h2>
            
//              <div className="flex overflow-x-auto gap-6 px-4 scroll-smooth flex-shink-0 text-left rounded-xl  ">
//                 {Steps.map((step, index) => (
//                     <div 
//                     key={index}
//                     className="bg-white p-4 rounded-xl shadow-md"
//                 >
                    
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                        {index + 1}.  {step.title}
//                     </h3>
                
//                     <p className="text-sm text-gray-600">
//                         {step.desc}
//                     </p>
//                     </div>
//                 ))} 
//             </div>
//         </section>
//     );

// };

// export default WhatWeDo;

import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    desc: "We understand your goals, career plans and preferred location.",
    icon: "🎯",
    number: "01",
  },
  {
    title: "Application",
    desc: "We help you choose schools or programs and prepare documents.",
    icon: "📋",
    number: "02",
  },
  {
    title: "Visa Process",
    desc: "Full support with student visa or immigration applications.",
    icon: "🛂",
    number: "03",
  },
  {
    title: "Relocation",
    desc: "We assist with housing, travel and settlement planning.",
    icon: "✈️",
    number: "04",
  },
  {
    title: "Settlement",
    desc: "Ongoing support for living, working and building your future.",
    icon: "🏡",
    number: "05",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white text-center overflow-hidden">
      {/* Section Label + Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        className="px-6 mb-12"
      >
        <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600 mb-3">
          Our Process
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3"
          style={{ letterSpacing: "-0.02em" }}
        >
          How We Work
        </h2>
        <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          A clear, guided journey from your first question to your fresh start.
        </p>
      </motion.div>

      {/* Scroll container with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

        <div
          className="flex overflow-x-auto gap-4 px-10 pb-4 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 40px rgba(185,28,28,0.09)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="relative min-w-[220px] max-w-[220px] md:min-w-[240px] md:max-w-[240px] bg-white border border-slate-100 rounded-2xl p-6 flex-shrink-0 text-left group"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Top accent — only visible on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-2xl bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Step number */}
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-red-400 mb-4 block">
                Step {step.number}
              </span>

              {/* Icon */}
              <div className="text-2xl mb-4 leading-none">{step.icon}</div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-slate-800 mb-2 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-slate-500 leading-relaxed">
                {step.desc}
              </p>

              {/* Connector dot — hidden on last */}
              {index < steps.length - 1 && (
                <div className="absolute -right-[9px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full border border-slate-200 bg-white flex items-center justify-center z-10">
                  <div className="w-[5px] h-[5px] rounded-full bg-red-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-5 text-[11px] text-slate-400 tracking-wide md:hidden"
      >
        Swipe to explore →
      </motion.p>
    </section>
  );
};

export default WhatWeDo;