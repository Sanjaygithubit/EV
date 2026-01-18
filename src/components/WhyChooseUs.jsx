import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp } from "../utils/animations";
import whyImg from "../assets/why-choose-us.jpg";
import CheckIcon from "./icons/CheckIcon";

export default function WhyChooseUs() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 items-center gap-16"
        >
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[46px] md:text-[42px] font-bold mb-10">
              Why Choose Us
            </h2>

            <ul className="space-y-7">
              {[
                {
                  title: "Verified EV suppliers",
                  desc: "We work only with certified and trusted suppliers"
                },
                {
                  title: "Genuine & compatible parts",
                  desc: "100% authentic parts with quality assurance"
                },
                {
                  title: "Dealer-friendly pricing",
                  desc: "Competitive wholesale rates for bulk orders"
                },
                {
                  title: "Fast dispatch system",
                  desc: "Quick processing with PAN-India delivery"
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckIcon />
                  <div>
                    <p className="font-semibold text-[20px]">
                      {item.title}
                    </p>
                    <p className="text-[18px] text-muted">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div style={{ y }} className="relative">
            <img
              src={whyImg}
              alt="Why choose us"
              className="w-full h-[340px] md:h-[400px] object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
