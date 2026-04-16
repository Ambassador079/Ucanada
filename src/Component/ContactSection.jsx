// import { section } from "framer-motion/client";

// const ContactSection = () => {
//     return (
//       <section className="py-16 px-6 bg-white max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Get Consultation
//         </h2>

//         <div className="grid md:grid-cols-2 gap-10 "> 
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

//             <p className="mb-2">Email: info@ucanadalife.com</p>
//             <p className="mb-2">Phone:+1 *** *** ****</p>

//             <p className="mt-4 text-gray-600">
//               Reach out to us for guidance on education, immigration, or
//               investment in Canada.
//             </p>
//           </div>

//           <form className="flex flex-col gap-4">
//             <input type="text" placeholder="Your Name" className="border p-3 rounded-lg" />
//             <input type="email" placeholder="Your Email" className="border p-3 rounded-lg"/>
//             <textarea placeholder="Your Message" className="border p-3 rounded-lg h-32" />
//             <button className="bg-red-600 text-white py-3 rounded-lg. hover:bg-red-700">
//                 Send Message
//             </button>
//           </form>
//         </div>
//       </section>
//     );
// };

// export default ContactSection;

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const contactDetails = [
  {
    icon: "✉️",
    label: "Email",
    value: "info@ucanadalife.com",
    href: "mailto:info@ucanadalife.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (000) 000-0000",
    href: "tel:+10000000000",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Canada — Serving Clients Worldwide",
    href: null,
  },
];
const handleSubmit = (e) => {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  const text = `Hello, my name is ${name}. My email is ${email}. ${message}`;

  const url = `https://wa.me/15555555555?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
};

const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
            Reach Out
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Get a Free Consultation
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Whether it's education, immigration, or investment — we're here to
            guide you every step of the way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left — Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <motion.h3
              variants={fadeUp}
              custom={0}
              className="text-base font-semibold text-slate-800 uppercase tracking-widest"
            >
              Contact Information
            </motion.h3>

            {contactDetails.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i + 1}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-base flex-shrink-0 group-hover:bg-red-100 transition-colors duration-200">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-slate-700">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.p
              variants={fadeUp}
              custom={contactDetails.length + 1}
              className="text-[13px] text-slate-400 leading-relaxed pt-2 border-t border-slate-200 mt-2"
            >
              We typically respond within 1 business day.
            </motion.p>
          </motion.div>

          {/* Right — Form */}
          <motion.form  
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm"
            onSubmit={handleSubmit}
          >
            {[
              { type: "text", placeholder: "Your Name", custom: 1 },
              { type: "email", placeholder: "Your Email", custom: 2 },
            ].map((field) => (
              <motion.input
                key={field.placeholder}
                variants={fadeUp}
                custom={field.custom}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full border border-slate-200 bg-slate-50 text-slate-800 text-sm px-4 py-3 rounded-xl placeholder:text-slate-400 focus:outline-none focus:border-red-400 focus:bg-white transition-all duration-200"
              />
            ))}

            <motion.textarea
              variants={fadeUp}
              custom={3}
              placeholder="Your Message"
              rows={5}
              className="w-full border border-slate-200 bg-slate-50 text-slate-800 text-sm px-4 py-3 rounded-xl placeholder:text-slate-400 focus:outline-none focus:border-red-400 focus:bg-white transition-all duration-200 resize-none"
            />

            <motion.button
              variants={fadeUp}
              custom={4}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold py-3.5 rounded-xl transition-colors duration-200 tracking-wide"
            >
              Send Message
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;