import video from "../assets/video.svg";
import camera from "../assets/camera.svg";
import videography from "../assets/videography.svg";

import { motion } from "framer-motion";

const GalleryCards = () => {
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
          Our Works
        </motion.h1>
        <hr className="mx-auto w-[100px] border-2 border-red-500" />
        <motion.p
          className=" text-justify md:text-center text-[14px] md:text-[17px] w-[80vw] md:w-[45vw] mx-auto text-[#8F8F8F]"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Step into the Lens: Explore Our Gallery
        </motion.p>
      </div>
      <div className=" flex flex-col md:flex-row items-center gap-12 md:gap-0 justify-around w-[90%] mx-auto mt-10">
        <motion.div
          className="w-[85vw] md:w-[30%] flex flex-col items-center px-4 space-y-3"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-[300px] w-[280px] hover:scale-105 transition-all ease-out rounded-[10px] bg-pink-200">
            <img />
          </div>
          <h2 className="font-cinzel">The Photos</h2>
        </motion.div>
        <motion.div
          className="w-[85vw] md:w-[30%] flex flex-col items-center px-4 space-y-3"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-[300px] w-[280px] hover:scale-105 transition-all ease-out rounded-[10px] bg-pink-200">
            <img />
          </div>
          <h2 className="font-cinzel">The Films</h2>
        </motion.div>
        <motion.div
          className="w-[85vw] md:w-[30%] flex flex-col items-center px-4 space-y-3"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-[300px] w-[280px] hover:scale-105 transition-all ease-out rounded-[10px] bg-pink-200">
            <img />
          </div>
          <h2 className="font-cinzel">The Moments</h2>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryCards;
