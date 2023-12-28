import hero from "../assets/herocinematicCompressed.jpg";

const Hero2 = () => {
  return (
    <div className="relative h-[100vh] w-[100vw]">
      <aside className="z-0 absolute top-0 left-0 h-[100vh] w-full">
        <img
          src={hero}
          className="h-[100vh] opacity-70 w-full object-cover"
          alt=""
        />
      </aside>
      <div className="z-50">
        <div className="absolute h-screen w-screen flex justify-center items-center">
          <div className="-mt-20 text-center font-kalnia">
            <h2 className="text-[14px] sm:text-[18px] md:text-[30px]">
              You tell me the story you know by heart <br />
              <span className="italic">
                - I'll turn it into a film you never forget.
              </span>
            </h2>
            <h3 className="mx-auto mt-5 text-[12px] sm:text-[13px] md:text-[16px] w-[80vw] md:w-[500px]">
              Videographer and photographer documenting adventurous weddings and
              real love stories in cinematic style
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
