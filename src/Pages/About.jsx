import { motion } from "framer-motion";
import HeroSection from "../Component/HeroSection";
import AB from "../assets/Images/about.avif";
import john from "../assets/Images/john.JPG";
import Navbar from "../Component/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stats = [
  { value: "500+", label: "Clients Helped" },
  { value: "10+", label: "Years Experience" },
  { value: "3", label: "Core Services" },
  { value: "98%", label: "Success Rate" },
];

const values = [
  {
    icon: "🛡️",
    title: "Integrity",
    desc: "We operate with full transparency — no hidden fees, no empty promises. Just honest guidance.",
  },
  {
    icon: "🎯",
    title: "Precision",
    desc: "Every case is handled with careful attention to detail, timelines, and individual circumstances.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    desc: "We don't hand you a checklist and disappear. We walk the journey with you, start to finish.",
  },
  {
    icon: "🌍",
    title: "Global Perspective",
    desc: "Our team understands what it means to relocate — many of us have lived that experience firsthand.",
  },
];

const About = () => {
  return (
    <>
    
      <HeroSection
        title="About Us"
        highlight="UCanadaLife"
        subtitle="We are committed to helping people build a future in Canada."
        image={AB}
        showScroll={false}
      />

      {/* Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
              Who We Are
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-5"
              style={{ letterSpacing: "-0.02em" }}
            >
              Built for people who are
              <br />
              <span className="text-red-600">serious about Canada.</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              UCanadaLife was founded on a simple belief — that everyone
              deserves clear, honest guidance when making one of the biggest
              decisions of their life. We combine deep local knowledge with
              genuine care for every client we serve.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Whether you're a student, a family, or an entrepreneur —
              our team of certified consultants and advisors is here to
              make your path to Canada as smooth as possible.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-1"
              >
                <span
                  className="text-3xl font-bold text-red-600"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {stat.value}
                </span>
                <span className="text-[12px] text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
              What Drives Us
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mt-2"
              style={{ letterSpacing: "-0.02em" }}
            >
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 44px rgba(185,28,28,0.08)",
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="relative bg-white border border-slate-100 rounded-2xl p-6 flex flex-col group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-2xl bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-lg mb-4 group-hover:bg-red-100 transition-colors duration-200">
                  {value.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Founder */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
              The Person Behind It
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Meet Our Founder
            </h2>
            <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
              One expert. Three disciplines. Fully committed to your success in Canada.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            whileHover={{
              y: -6,
              boxShadow: "0 24px 48px rgba(185,28,28,0.09)",
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="relative max-w-sm mx-auto bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center flex flex-col items-center group overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-2xl bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md mb-5 group-hover:border-red-100 transition-colors duration-200">
              <img
                src={john}
                alt="John Chevalier"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3
              className="text-base font-bold text-slate-900 mb-1"
              style={{ letterSpacing: "-0.01em" }}
            >
              John Chevalier
            </h3>

            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {["Immigration Consultant", "Education Advisor", "Investment Strategist"].map((role) => (
                <span
                  key={role}
                  className="text-[11px] font-semibold uppercase tracking-wide text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-full"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="w-10 h-[1.5px] bg-red-200 my-5" />

            <p className="text-[13px] text-slate-500 leading-relaxed">
              John brings years of first-hand experience navigating Canada's
              immigration, education, and investment landscape. His mission is
              simple — give every client the clarity and confidence to take
              their next step.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-slate-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-500">
            Ready to Begin?
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Let's build your future
            <br />
            <span className="text-red-500">in Canada together.</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Book a free consultation and let John walk you through
            every option available to you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200 tracking-wide"
          >
            Book a Free Consultation
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default About;