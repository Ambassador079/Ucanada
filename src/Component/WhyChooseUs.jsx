// const WhyChooseUs = () => {
//   return (
//     <section className="py-16 px-6 bg-white text-center">
//       <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

//       <div className="grid md:grid-cols-3 gap-8">
        
//         <div className="p-6 shadow-md rounded-xl">
//           <h3 className="font-semibold text-lg mb-2">Trusted Services</h3>
//           <p className="text-gray-600">
//             We provide reliable and transparent guidance.
//           </p>
//         </div>

//         <div className="p-6 shadow-md rounded-xl">
//           <h3 className="font-semibold text-lg mb-2">Experienced Team</h3>
//           <p className="text-gray-600">
//             Years of experience in immigration and education.
//           </p>
//         </div>

//         <div className="p-6 shadow-md rounded-xl">
//           <h3 className="font-semibold text-lg mb-2">Full Support</h3>
//           <p className="text-gray-600">
//             We guide you every step of the way.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🛡️",
    title: "Trusted Services",
    desc: "We provide reliable, transparent guidance with your best interests at the center of every decision.",
    stat: "100%",
    statLabel: "Client confidentiality",
  },
  {
    icon: "🎯",
    title: "Experienced Team",
    desc: "Years of hands-on expertise in Canadian immigration, education pathways, and investment strategy.",
    stat: "10+",
    statLabel: "Years of experience",
  },
  {
    icon: "🤝",
    title: "Full Support",
    desc: "From first consultation to final settlement — we're with you at every stage of your journey.",
    stat: "End-to-end",
    statLabel: "Client support",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
            Our Promise
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Why Choose Us
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            We're not just advisors — we're partners invested in your
            success in Canada.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 44px rgba(185,28,28,0.08)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="relative bg-slate-50 border border-slate-100 rounded-2xl p-7 flex flex-col group overflow-hidden"
            >
              {/* Hover accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-2xl bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl mb-5 shadow-sm group-hover:border-red-100 group-hover:bg-red-50 transition-all duration-200">
                {reason.icon}
              </div>

              {/* Title */}
              <h3
                className="text-base font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors duration-200"
                style={{ letterSpacing: "-0.01em" }}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-slate-500 leading-relaxed flex-1 mb-6">
                {reason.desc}
              </p>

              {/* Stat strip */}
              <div className="border-t border-slate-200 pt-4 flex items-baseline gap-2">
                <span className="text-lg font-bold text-red-600 leading-none">
                  {reason.stat}
                </span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wide">
                  {reason.statLabel}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;