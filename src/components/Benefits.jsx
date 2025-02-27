import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { motion } from "framer-motion";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Heading
            className="md:max-w-md lg:max-w-2xl text-white"
            title="What Sets Us Apart"
            text="Maximize your online potential with our customized and cutting-edge web development services."
          />
        </motion.div>

        {/* 3D Grid Layout with Faster Hover Animation */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1000px" }} // Adding 3D Depth
        >
          {benefits.map((item) => (
            <motion.div
              key={item.id}
              className="relative bg-n-8 p-6 border border-white rounded-xl shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                rotateX: -12, // Faster tilt effect
                y: -5, // Slight lift effect
                scale: 1.05, // Slight enlargement for emphasis
                boxShadow: "0px 20px 50px rgba(255, 255, 255, 0.4)", // Stronger glow
              }}
              transition={{ type: "spring", stiffness: 300, damping: 8 }}
              style={{
                transformOrigin: "center bottom", // Tilts from bottom
                perspective: "1000px", // Ensures depth effect
              }}
            >
              {/* Floating Icon Effect */}
              <motion.div
                className="flex justify-center mb-4"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.img
                  src={item.iconUrl}
                  width={64}
                  height={64}
                  alt={item.title}
                  className="w-16 h-16"
                  whileHover={{ scale: 1.15 }} // More noticeable hover pop
                />
              </motion.div>

              {/* Title */}
              <h5 className="text-lg font-semibold text-white text-center mb-3">
                {item.title}
              </h5>

              {/* Description */}
              <p className="text-sm text-gray-300 text-center">{item.text}</p>

              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;

