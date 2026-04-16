import { motion } from "framer-motion";
import HeroSection from "../Component/HeroSection";
import contactImg from "../assets/Images/contact.avif";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Contact = () => {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Get In Touch"
        highlight="We’re Here to Help"
        subtitle="Have questions? Ready to start? Reach out and let’s talk."
        image={contactImg}
        showScroll={false}
      />

      {/* CONTACT FORM */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-3xl font-bold mb-4">
              Let’s Talk About Your Plans
            </h2>
            <p className="text-slate-500 mb-6">
              Whether it's education, immigration, or investment — we’re ready to guide you.
            </p>

            <div className="space-y-4 text-sm text-slate-600">
              <p>📧 Email: support@ucanadalife.com</p>
              <p>📍 Location: Canada</p>
              <p>⏰ Response Time: Within 24 hours</p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="bg-slate-50 p-8 rounded-2xl border space-y-4"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg border outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg border outline-none"
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-slate-400 mb-6">
          Book a consultation and let’s make it happen.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-xl">
          Book Consultation
        </button>
      </section>
    </>
  );
};

export default Contact;