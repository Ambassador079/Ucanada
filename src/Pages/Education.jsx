import { motion } from "framer-motion";
import HeroSection from "../Component/HeroSection";
import eduImg from "../assets/Images/education.webp"; // replace with your own image

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const services = [
  {
    title: "University Admission",
    desc: "We help you secure admission into top Canadian universities and colleges that match your goals.",
  },
  {
    title: "Course Selection",
    desc: "Confused about what to study? We guide you in choosing the right program based on your future plans.",
  },
  {
    title: "Application Processing",
    desc: "We handle your application from start to finish — ensuring accuracy and higher success chances.",
  },
  {
    title: "Visa Guidance",
    desc: "Step-by-step support to prepare and submit a strong student visa application.",
  },
];

const steps = [
  "Free consultation and profile review",
  "School and program selection",
  "Application submission",
  "Offer letter processing",
  "Visa application guidance",
  "Pre-departure support",
];

const benefits = [
  "Access to top Canadian institutions",
  "Expert guidance at every step",
  "Reduced application errors",
  "Higher chances of visa approval",
];

const Education = () => {
  return (
    <>
      <HeroSection
        title="Study in Canada"
        highlight="with Confidence"
        subtitle="We guide you from choosing the right school to securing your student visa."
        image={eduImg}
        showScroll={false}
      />

      {/* Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-[11px] uppercase tracking-[0.18em] text-red-600 font-semibold">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Our Education Services
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="bg-slate-50 border border-slate-100 p-6 rounded-2xl"
              >
                <h3 className="font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-14"
          >
            <span className="text-[11px] uppercase tracking-[0.18em] text-red-600 font-semibold">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Your Journey Step by Step
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="bg-white border border-slate-100 p-6 rounded-2xl"
              >
                <span className="text-red-600 font-bold text-lg">
                  0{i + 1}
                </span>
                <p className="text-sm text-slate-600 mt-2">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {benefits.map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="bg-slate-50 border border-slate-100 p-5 rounded-xl text-sm text-slate-600"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-950 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Study Journey Today
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Book a consultation and let us guide you every step of the way.
          </p>
          <a
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-sm font-semibold"
          >
            Get Started
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Education;