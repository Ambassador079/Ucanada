import { motion } from "framer-motion";
import HeroSection from "../Component/HeroSection";
import investImg from "../assets/Images/investment.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

/* DATA */
const opportunities = [
  {
    title: "Real Estate Investment",
    desc: "Own property in one of the world’s most stable markets.",
  },
  {
    title: "Business Investment",
    desc: "Start or invest in profitable Canadian businesses.",
  },
  {
    title: "Startup Funding",
    desc: "Support innovative startups and gain equity returns.",
  },
];

const services = [
  "Investment Strategy Planning",
  "Market Research & Insights",
  "Business Setup Guidance",
  "Legal & Documentation Support",
];

const benefits = [
  "Stable economy with global opportunities",
  "Strong legal protection for investors",
  "Access to international markets",
  "Pathway to residency through investment",
];

const Investing = () => {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Invest in Canada"
        highlight="Build Wealth Globally"
        subtitle="We help individuals and businesses make smart, secure, and profitable investments in Canada."
        image={investImg}
        showScroll={false}
      />

      {/* OPPORTUNITIES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">
            Investment Opportunities
          </h2>
          <p className="text-slate-500">
            Explore high-value opportunities across multiple sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {opportunities.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="p-6 bg-slate-50 rounded-2xl border"
            >
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What We Do For You
            </h2>
            <p className="text-slate-500 mb-6">
              From planning to execution, we guide your investment journey with precision and expertise.
            </p>

            <ul className="space-y-3">
              {services.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-red-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="bg-white p-8 rounded-2xl border shadow-sm"
          >
            <h3 className="font-semibold mb-4">
              Why Investors Choose Canada
            </h3>

            <ul className="space-y-3">
              {benefits.map((item, i) => (
                <li key={i} className="text-sm text-slate-500">
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Start Building Wealth Today
        </h2>
        <p className="text-slate-400 mb-6">
          Let’s help you invest smart and secure your future.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition">
          Get Investment Advice
        </button>
      </section>
    </>
  );
};

export default Investing;