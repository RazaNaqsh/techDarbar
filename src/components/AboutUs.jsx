import about from "../assets/hero.jpeg";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-white  my-10 ">
      <div className=" flex flex-col-reverse md:flex-row items-center justify-between mx-auto gap-20">
        <div className="md:pl-16 pb-4 ">
          <motion.div
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="px-3 md:px-0 text-black font-cinzel">About Us</h3>
            <h2 className="px-3 md:px-0 text-[36px] md:text-[50px] font-bold md:leading-[60px] text-black font-cinzel">
              We Always Make <br /> The Best
            </h2>
          </motion.div>
          <hr className="mx-3 md:mx-0 my-4 w-[100px] border-2 border-red-500" />
          <motion.p
            className="text-[14px] md:text-[17px] w-[80vw] md:w-[35vw] mx-auto text-[#8F8F8F] pb-4 md:pb-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            We are a creative film and photo production company hungry for
            quality in aesthetics. To create modern recognizable stuff we are
            working with a strong network of experienced professionals. We set
            up teams to shape your identity, push your idea and manage the
            workflow from pre- to post-production.
          </motion.p>
        </div>
        <motion.div
          className="bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={about}
            className="opacity-80 h-[300px] md:h-auto object-cover md:w-[50vw]"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
