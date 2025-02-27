import { curve, heroBackground, main } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="relative pt-[10rem] -mt-[5.25rem] overflow-hidden bg-black pb-32 flex items-start justify-center min-h-screen"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      {/* Background Gradient Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-blue-950 to-black"
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3], y: [-5, 5, -5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <BackgroundCircles />
      </motion.div>

      <div className="container relative z-10 text-center text-white mt-10" ref={parallaxRef}>
        {/* Title with Typewriter Effect */}
        <motion.h1
          className="h1 mb-4 text-white text-5xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering Your Business with{" "}
          <span className="inline-block text-blue-400">
            <Typewriter
              options={{
                strings: ["Innovative App & Web Solutions"],
                autoStart: true,
                loop: false,
                delay: 60,
                deleteSpeed: Infinity,
                cursor: "_"
              }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg max-w-3xl mx-auto mb-4 text-gray-400 lg:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Elevate Your Brand with Our Sleek and Cutting-Edge Digital Solutions.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <a 
            href="https://www.instagram.com/codezaic" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700">
              Contact Now
            </Button>
          </a>
        </motion.div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
