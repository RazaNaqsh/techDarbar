import hero from "../assets/herocinematicCompressed.jpg";
import { motion } from "framer-motion";

const Hero2 = () => {
  return (
    <div className="relative h-[100vh]  w-[100vw]">
      <aside className="z-0 absolute top-0 left-0 h-[100vh] w-[100vw] ">
        <img
          src={hero}
          className="h-[100vh] opacity-60 w-[100vw] object-cover"
          alt=""
        />
      </aside>
      <div className="z-50">
        <div className="absolute h-screen w-screen flex justify-center items-center">
          <div className="-mt-20 text-center font-kalnia">
            <motion.h2
              className="max-w-[90vw] text-[16px] sm:text-[18px] md:text-[30px]"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              You tell me the story you know by heart <br />
              <span className="italic">
                - I'll turn it into a film you never forget.
              </span>
            </motion.h2>
            <motion.h3
              className="mx-auto mt-5 text-[14px] sm:text-[13px] md:text-[16px] w-[85vw] md:w-[500px]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Videographer and photographer documenting adventurous weddings and
              real love stories in cinematic style
            </motion.h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
