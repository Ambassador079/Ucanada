// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10 px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
//         {/* Company */}
//         <div>
//           <h2 className="text-xl font-bold mb-4">UCanadaLife</h2>
//           <p className="text-gray-400">
//             Your trusted partner for education, immigration and investment in Canada.
//           </p>
//         </div>

//         {/* Links */}
//         <div>
//           <h3 className="font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/education">Education</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="font-semibold mb-4">Contact</h3>
//           <p className="text-gray-400">info@ucanadalife.com</p>
//           <p className="text-gray-400">+1 *** *** ****</p>
        
//         </div>

//       </div>

//       {/* Bottom */}
//       <div className="text-center text-gray-500 mt-10 text-sm">
//         ©️ 2026 UCanadaLife. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Immigration", href: "/immigration" },
  { label: "Investing", href: "/investing" },
  { label: "Contact", href: "/contact" },
];

const contactDetails = [
  { icon: "✉️", value: "info@ucanadalife.com", href: "mailto:info@ucanadalife.com" },
  { icon: "📞", value: "+1 (000) 000-0000", href: "tel:+10000000000" },
  { icon: "📍", value: "Canada — Serving Clients Worldwide", href: null },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <a href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <span className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-125 transition-transform duration-200" />
              <span
                className="text-lg font-bold text-white tracking-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                UCanada<span className="text-red-500">Life</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner for education, immigration, and investment
              in Canada. We turn your goals into a clear path forward.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-red-400 transition-colors duration-200 group flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-red-700 group-hover:bg-red-400 transition-colors duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-5">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-4">
              {contactDetails.map((item) => (
                <li key={item.value} className="flex items-start gap-3">
                  <span className="text-base mt-0.5 leading-none">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-red-400 transition-colors duration-200 leading-snug"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-400 leading-snug">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-slate-600">
            ©️ 2026 UCanadaLife. All rights reserved.
          </p>
          <p className="text-[12px] text-slate-700">
            Built with care for those building a new life in Canada.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;