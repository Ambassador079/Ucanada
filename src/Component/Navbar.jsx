// // import { Link } from "react-router-dom";

// import Button from "./Button";

// const Navbar = () => {
//   return (
//     <nav className="fixed w-full top-0 left-0 bg-white shadow-md z-50" >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
//         <h1 className="text-xl font-bold text-red-600">
//           UCanadaLife
//         </h1>

       
//         <div className="hidden md:flex gap-8 text-gray-700 n font-medium">
//           <ul className="flex gap-10" >
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/education">Education</a></li>
//             <li><a href="/immigration">Immigration</a></li>
//             <li><a href="/investing">Investing</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>
        

//         <div>
//            <Button  />
//         </div>

       
    
//         </div>
//     </nav>
//   );
// };

// export default Navbar;

// 




import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ added
import Button from "./Button";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Immigration", href: "/immigration" },
  { label: "Investing", href: "/investment" },
  { label: "Contact", href: "/contact" },
  { label: "Learning", href: "/learning" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* ✅ Logo FIXED */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-125 transition-transform duration-200" />
          <span className="text-lg font-bold text-slate-900 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
            UCanada<span className="text-red-600">Life</span>
          </span>
        </Link>

        {/* ✅ Desktop Links FIXED */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="relative px-3 py-1.5 text-[13.5px] font-medium text-slate-600 hover:text-red-600 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button />
          </div>

          {/* ✅ FIXED gap */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-[1.5px] bg-slate-800 rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-slate-800 rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-[1.5px] bg-slate-800 rounded-full origin-center"
            />
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu FIXED */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden border-t border-slate-100 bg-white"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2.5 text-[14px] font-medium text-slate-700 hover:text-red-600 border-b border-slate-50 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: links.length * 0.05 + 0.05 }}
                className="pt-3"
              >
                <Button />
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;