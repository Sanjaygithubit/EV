import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp } from "../utils/animations";
import whyImg from "../assets/why.jpg";
import CheckIcon from "./icons/CheckIcon";
import { WHY_CHOOSE_US } from "../config/site";

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
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              Why Choose Us
            </h2>

            <ul className="space-y-7">
              {WHY_CHOOSE_US.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckIcon />
                  <div>
                    <p className="font-semibold text-lg md:text-xl">
                      {item.title}
                    </p>
                    <p className="text-base md:text-lg text-muted">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
         <motion.div
  style={{ y }}
  className="
    relative
    w-full
    flex
    justify-center
  "
>
 <img
  src={whyImg}
  alt="Why choose us"
  className="
    w-full
    max-w-[600px]
    aspect-[3/2]
    object-cover
    rounded-2xl
    shadow-xl
  "
/>
</motion.div>


        </motion.div>
      </div>
    </section>
  );
}