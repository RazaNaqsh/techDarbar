import { motion } from "framer-motion";
import hero from "../assets/galleryHero.jpg";

const GalleryHero = () => {
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
          <div className="-mt-20 text-center text-white font-kalnia">
            <motion.h2
              className="max-w-[90vw] mx-auto text-[16px] sm:text-[20px] md:text-[32px] "
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              What if your wedding film wasn't just a <br />
              collection of snippets from the day
            </motion.h2>
            <motion.h3
              className="mx-auto mt-5 text-[13px] sm:text-[16px] md:text-[20px] w-[80vw] md:w-[700px] italic "
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              BUT AN ENCAPSULATION OF YOUR JOURNEY AS A COUPLE
            </motion.h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryHero;
