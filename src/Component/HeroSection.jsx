// import hero from "../assets/Images/hero.avif";
// import Button from "./Button";
// const HeroSection = () => {
//   return (
//     <section className="h-screen bg-[url('./assets/Images/bg1.avif')] bg-cover bg-center flex items-center justify-center pt-20">
//       <div className="bg-black/60 p-10 text-center text-white rounded-xl max-w-2xl">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           Your Trusted Partner in Canada
//         </h1>
//         <p className="mb-6 text-lg">
//           Education • Immigration • Investment
//         </p>
//         <Button />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import { motion } from "framer-motion";
// import Button from "./Button";
// import bg from "../assets/Images/bg1.avif";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
//   }),
// };

// const pillars = ["Education", "Immigration", "Investment"];

// const HeroSection = ({
//   title,
//   highlight.
//   subtitle,
//   image,
//   pillers = [],
//   showScroll = true, 

// }) => {
//   return (
//     <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

//       {/* Background image */}
//       <img
//         src={bg}
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         aria-hidden="true"
//       />

//       {/* Layered overlay — dark base + subtle red tint at bottom */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
//       <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 via-transparent to-transparent" />

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">

//         {/* Eyebrow label */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={0}
//           className="flex items-center justify-center gap-2 mb-6"
//         >
//           <span className="w-6 h-[1.5px] bg-red-500" />
//           <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">
//             Trusted Canadian Advisory
//           </span>
//           <span className="w-6 h-[1.5px] bg-red-500" />
//         </motion.div>

//         {/* Headline */}
//         <motion.h1
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={1}
//           className="text-4xl md:text-6xl font-bold leading-tight mb-6"
//           style={{ letterSpacing: "-0.025em" }}
//         >
//           Your Trusted Partner
//           <br />
//           <span className="text-red-500">in Canada</span>
//         </motion.h1>

//         {/* Pillars */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={2}
//           className="flex items-center justify-center gap-3 mb-8 flex-wrap"
//         >
//           {pillars.map((item, i) => (
//             <span key={item} className="flex items-center gap-3">
//               <span className="text-sm font-medium text-white/80 tracking-wide">
//                 {item}
//               </span>
//               {i < pillars.length - 1 && (
//                 <span className="w-1 h-1 rounded-full bg-red-500 opacity-70" />
//               )}
//             </span>
//           ))}
//         </motion.div>

//         {/* Subtext */}
//         <motion.p
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={3}
//           className="text-sm md:text-base text-white/60 max-w-md mx-auto leading-relaxed mb-10"
//         >
//           We guide individuals and families through every step of building
//           a new life in Canada — with clarity, care, and expertise.
//         </motion.p>

//         {/* CTA */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           custom={4}
//           className="flex flex-col sm:flex-row items-center justify-center gap-3"
//         >
//           <Button />
//           <a
//             href="/about"
//             className="text-sm font-medium text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-6 py-3 rounded-xl transition-all duration-200"
//           >
//             Learn More →
//           </a>
//         </motion.div>

//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2, duration: 0.6 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//       >
//         <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
//           Scroll
//         </span>
//         <motion.div
//           animate={{ y: [0, 6, 0] }}
//           transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
//           className="w-[1.5px] h-6 bg-gradient-to-b from-white/40 to-transparent rounded-full"
//         />
//       </motion.div>

//     </section>
//   );
// };

// export default HeroSection;


import { motion } from "framer-motion";
import Button from "./Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

const HeroSection = ({
  title,
  highlight,
  subtitle,
  image,
  pillars = [],
  showScroll = true,
}) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 via-transparent to-transparent" />

      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {title}
          <br />
          <span className="text-red-500">{highlight}</span>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="flex justify-center gap-3 mb-8 flex-wrap"
        >
          {pillars.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              <span className="text-sm text-white/80">{item}</span>
              {i < pillars.length - 1 && (
                <span className="w-1 h-1 bg-red-500 rounded-full" />
              )}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="text-sm text-white/60 mb-10"
        >
          {subtitle}
        </motion.p>

        <Button />

      </div>

      {showScroll && (
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <span className="text-xs text-white/30">Scroll</span>
        </motion.div>
      )}

    </section>
  );
};

export default HeroSection;