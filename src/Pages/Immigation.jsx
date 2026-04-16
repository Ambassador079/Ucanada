import { motion } from "framer-motion";
import HeroSection from "../Component/HeroSection";
import img from "../assets/Images/immigration.avif";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

/* DATA */
const services = [
  { title: "Permanent Residency", desc: "Secure your future in Canada." },
  { title: "Work Permits", desc: "Get legal authorization to work." },
  { title: "Family Sponsorship", desc: "Bring your loved ones to Canada." },
  { title: "Visitor Visa", desc: "Travel and explore opportunities." },
];

const pathways = [
  "Express Entry",
  "Provincial Nominee Program (PNP)",
  "Family Sponsorship",
  "Work-to-PR Pathway",
];

const steps = [
  "Consultation",
  "Eligibility Check",
  "Document Preparation",
  "Application Submission",
  "Approval",
];

const Immigration = () => {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Immigrate to Canada"
        highlight="With Confidence"
        subtitle="We guide individuals and families through every step of the Canadian immigration process."
        image={img}
        showScroll={false}
      />

      {/* SERVICES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">
            Immigration Services
          </h2>
          <p className="text-slate-500">
            Professional support tailored to your situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                y: -4,
                boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
              }}
              className="p-6 bg-slate-50 rounded-xl border"
            >
              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="py-20 px-6 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Immigration Pathways
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {pathways.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="px-5 py-3 bg-white border rounded-lg text-sm"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">
          Our Process
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="p-6 border rounded-xl"
            >
              <span className="text-red-600 font-bold text-lg">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm">
                {step}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 px-6 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Why Choose Us
        </h2>
        <p className="max-w-xl mx-auto text-slate-500">
          We combine experience, accuracy, and transparency to give you the best chance of success.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Start Your Immigration Journey
        </h2>
        <p className="text-slate-400 mb-6">
          Speak with an expert today.
        </p>
        <button className="bg-red-600 px-6 py-3 text-white rounded-xl">
          Book Consultation
        </button>
      </section>
    </>
  );
};

export default Immigration;