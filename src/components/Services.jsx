import video from "../assets/video.svg";
import camera from "../assets/camera.svg";
import videography from "../assets/videography.svg";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="text-white py-20">
      <div className="space-y-2">
        <motion.h1
          className="font-cinzel text-[30px] md:text-[44px] font-semibold text-center"
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Filming Services
        </motion.h1>
        <hr className="mx-auto w-[100px] border-2 border-red-500" />
        <motion.p
          className=" text-justify md:text-center text-[14px] md:text-[17px] w-[80vw] md:w-[45vw] mx-auto text-[#8F8F8F]"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          I provide a range of creative services including video editing,
          wedding filming, and camerawork. From crafting compelling stories to
          capturing special moments, feel free to reach out with any inquiries
          or questions.
        </motion.p>
      </div>
      <div className=" flex flex-col md:flex-row items-center gap-12 md:gap-0 justify-around w-[90%] mx-auto mt-10">
        <motion.div
          className="w-[85vw] md:w-[30%] flex flex-col items-center px-4 space-y-2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={video}
            className="w-[120px] md:w-[150px] big:w-[180px] lg:w-[200px]"
            alt=""
          />
          <h2>Video Editing</h2>
          <p className="text-justify md:text-center text-[14px] md:text-[17px] text-[#8F8F8F]">
            I specialize in bringing your vision to life through expert video
            editing. Whether it's a commercial advertisement, a short film, or a
            documentary, I have the skills to elevate your project to the next
            level.
          </p>
        </motion.div>
        <motion.div
          className="w-[85vw] md:w-[30%] flex flex-col items-center px-4 space-y-2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={camera}
            className="w-[120px] md:w-[150px] big:w-[180px] lg:w-[200px]"
            alt=""
          />
          <h2>Cameraman</h2>
          <p className="text-justify md:text-center text-[14px] md:text-[17px] text-[#8F8F8F]">
            As an adept cameraman, I specialize in capturing compelling visuals
            for diverse projects, from commercials to short films. Elevate your
            storytelling with my creative lens and expertise in videography
          </p>
        </motion.div>
        <motion.div
          className="w-[85vw] md:w-[30%] flex flex-col items-center px-4 space-y-2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={videography}
            className=" w-[120px] md:w-[150px] big:w-[180px] lg:w-[200px]"
            alt=""
          />
          <h2>Wedding Filming</h2>
          <p className="text-justify md:text-center text-[14px] md:text-[17px] text-[#8F8F8F]">
            As a wedding filmmaker, I turn moments into memories. With a keen
            eye for emotion and aesthetics, I capture the essence of your
            special day, creating a timeless and beautiful wedding film.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
