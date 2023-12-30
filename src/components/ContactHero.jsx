import hero from "../assets/contactHero.jpg";
const ContactHero = () => {
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
            <h2 className="text-[14px] sm:text-[18px] md:text-[32px] ">
              It's time to tell your greatest story
            </h2>
            <h3 className="mx-auto mt-5 text-[13px] sm:text-[16px] md:text-[18px] w-[80vw] md:w-[700px] ">
              READY TO START COLLABORATING ON SHOWCASING THIS CHAPTER?
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
