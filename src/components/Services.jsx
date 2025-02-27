
import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import { photo1, service2, photo4, tick, photo2 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, y: direction === "up" ? 30 : -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <motion.div whileInView="show" viewport={{ once: false, amount: 0.2 }} variants={fadeIn("up", 0.2)}>
          <Heading
            title="Our Expertise"
            text="Delivering Innovative, Scalable, and High-Performance Solutions Across Web and Mobile Platforms."
          />
        </motion.div>

        <div className="relative">
          <motion.div
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn("up", 0.4)}
            className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 lg:p-20 xl:h-[46rem] shadow-xl"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto"
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                className="w-full h-full object-cover md:object-right transform hover:scale-105 transition-transform duration-500"
                width={800}
                height={730}
                alt="Smartest AI"
                src={photo1}
              />
            </motion.div>

            <motion.div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4 text-white">UI/UX Design</h4>
              <p className="body-2 mb-[3rem] text-white">
                Skilled in creating intuitive and visually appealing designs that enhance user engagement and drive business results.
              </p>
              <ul className="body-2 text-white">
                {brainwaveServices.map((item, index) => (
                  <motion.li
                    key={index}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex items-start py-4 border-t border-white/20 hover:bg-gray-700 p-2 rounded-xl transition"
                  >
                    <img width={24} height={24} src={tick} alt="tick" />
                    <p className="ml-4">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <motion.div
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeIn("up", 0.6)}
              className="relative min-h-[39rem] border border-white/20 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute inset-0">
                <motion.img
                  src={photo2}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 1 }}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-transparent to-black">
                <h4 className="h4 mb-4 text-white">Website Development</h4>
                <p className="body-2 mb-[3rem] text-white">
                  Proficient in creating responsive, dynamic websites using modern technologies (e.g., HTML5, CSS3, JavaScript, React, Node.js).
                </p>
              </div>
            </motion.div>

            <motion.div
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeIn("up", 0.8)}
              className="p-4 bg-black rounded-3xl overflow-hidden lg:min-h-[46rem] shadow-2xl"
            >
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4 text-white">Mobile App Development</h4>
                <p className="body-2 mb-[2rem] text-white">
                  Innovative mobile app development solutions for iOS and Android platforms. Engage your audience with feature-rich applications.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <motion.li
                      key={index}
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      className="rounded-2xl flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-gray-600 transition"
                    >
                      <img src={item} width={24} height={24} alt="icon" />
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                className="relative h-[20rem] bg-gray-900 rounded-xl overflow-hidden md:h-[25rem] transform hover:scale-105 transition-transform duration-500"
              >
                <img
                  src={photo4}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
