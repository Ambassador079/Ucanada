// const services = [
//   {
//     title: "Education",
//     points: [
//       "School & program selection",
//       "Admission & visa process assistance",
//       "English language preparation",
//     ],
//   },
//   {
//     title: "Immigration",
//     points:[
//        "Relocationn support",
//        "Visa & PR program",
//        "Family sponsorship",

//     ],
//   },
//   {
//     title: "Investing",
//     points: [ 
//       "Market Analysis",
//       "Business setup in canada",
//       "Financial plannig",
//     ],
//   },
// ];

// const Services = () => {
//   return (
//     <section className="py-16 px-6 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         Our Services
//       </h2>

//       <div className="grid md:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
//           >
//             <h3 className="text-xl font-semibold mb-2">
//               {service.title}
//             </h3>
// {/*             
//             <p className="text-gray-600 mb-4">
//               {service.desc}
//             </p> */}

//             <ul className="text-gray-600 mb-4 space-y-2">
//               {service.points.map((point, idx) => (
//                 <li key={idx} >
//                   {point}
//                 </li>
//               ))}
//             </ul>
//             <button className="text-red-600 font-semibold">
//               Learn More →
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;


import { motion } from "framer-motion";

const services = [
  {
    title: "Education",
    icon: "🎓",
    desc: "Guiding students from application to arrival.",
    points: [
      "School & program selection",
      "Admission & visa process assistance",
      "English language preparation",
    ],
    href: "/education",
  },
  {
    title: "Immigration",
    icon: "🛂",
    desc: "Clear pathways to permanent residency and beyond.",
    points: [
      "Relocation support",
      "Visa & PR programs",
      "Family sponsorship",
    ],
    href: "/immigration",
  },
  {
    title: "Investing",
    icon: "📈",
    desc: "Building your financial future in Canada.",
    points: [
      "Market analysis",
      "Business setup in Canada",
      "Financial planning",
    ],
    href: "/investing",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
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

const Services = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
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
            What We Offer
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Our Services
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            End-to-end support across the three pillars of building
            a new life in Canada.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
              className="relative bg-white border border-slate-100 rounded-2xl p-7 flex flex-col group overflow-hidden"
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-2xl bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-xl mb-5 group-hover:bg-red-100 transition-colors duration-200">
                {service.icon}
              </div>

              {/* Title + desc */}
              <h3
                className="text-base font-bold text-slate-800 mb-1.5 group-hover:text-red-600 transition-colors duration-200"
                style={{ letterSpacing: "-0.01em" }}
              >
                {service.title}
              </h3>
              <p className="text-[13px] text-slate-400 mb-5 leading-relaxed">
                {service.desc}
              </p>

              {/* Points */}
              <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                {service.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[13px] text-slate-600"
                  >
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/about"
                className="flex items-center gap-1.5 text-[13px] font-semibold text-red-600 hover:text-red-700 transition-colors duration-200 w-fit group/link"
              >
                Learn More
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;