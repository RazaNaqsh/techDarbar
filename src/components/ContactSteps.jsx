import React from "react";
import { motion } from "framer-motion";

const ContactSteps = () => {
  return (
    <div className="py-20">
      <motion.h1
        className="text-center  text-[32px] md:text-[46px] big:text-[52px] lg:text-[56px] xl:text-[60px] font-cinzel text-[#800080] leading-[
80px]"
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        How To Connect?
      </motion.h1>

      <section className="font-helvetica big:-space-y-10">
        <motion.div
          className="w-[80%] sm:w-[85%] md:w-[80%] flex flex-col sm:flex-row items-center  sm:gap-10 md:gap-16 mx-auto mt-4 sm:mt-8 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[60px] md:text-[80px] big:text-[100px] lg:text-[110px] xl:text-[120px] text-[#A244C3] opacity-50 font-bold">
            01
          </h1>
          <div className="md:space-y-2 big:space-y-4 lg:space-y-6 text-gray-400">
            <h2 className="text-[22px] md:text-[30px] big:text-[34px] leading-[35px] md:leading-[40px] lg:leading-[45px] font-medium sm:text-left text-center">
              You can text or call to check my availability
            </h2>
          </div>
        </motion.div>
        <motion.div
          className="w-[80%] sm:w-[85%] md:w-[80%] flex flex-col sm:flex-row items-center  sm:gap-10 md:gap-16 mx-auto mt-4 sm:mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[60px] md:text-[80px] big:text-[100px] lg:text-[110px] xl:text-[120px] text-[#A244C3] opacity-50 font-bold">
            02
          </h1>
          <div className="md:space-y-2 big:space-y-4 lg:space-y-6 text-gray-400">
            <h2 className="text-[22px] md:text-[30px] big:text-[34px] leading-[35px] md:leading-[40px] lg:leading-[45px] font-medium sm:text-left text-center">
              we'll set up a call to get to know each other and allow you to ask
              any questions you may have.
            </h2>
          </div>
        </motion.div>
        <motion.div
          className="w-[80%] sm:w-[85%] md:w-[80%] flex flex-col sm:flex-row items-center  sm:gap-10 md:gap-16 mx-auto mt-4 sm:mt-8 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[60px] md:text-[80px] big:text-[100px] lg:text-[110px] xl:text-[120px] text-[#A244C3] opacity-50 font-bold">
            03
          </h1>
          <div className="md:space-y-2 big:space-y-4 lg:space-y-6 text-gray-400">
            <h2 className="text-[22px] md:text-[30px] big:text-[34px] leading-[35px] md:leading-[40px] lg:leading-[45px] font-medium sm:text-left text-center">
              I'll send you the booking info and we'll be ready to start this
              amazing process.
            </h2>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactSteps;
