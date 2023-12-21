import hero from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <>
      {/* for desktop */}
      <div className="hidden md:block pt-12 relative">
        <img
          src={hero}
          className="z-0 opacity-75 ml-auto mr-[10vw] md:h-[75vh]"
          alt=""
        />
        <div className="hidden md:block absolute top-28 left-60 z-20 tracking-widest">
          {/* ml36 Frame Capture Inspire */}
          <h1 className="text-[80px] font-bold leading-[70px]">Zafar Imam</h1>
          <h1 className="text-[40px] font-bold leading-[80px]">
            Telling Stories..
          </h1>
          <h1 className="text-[20px] font-bold leading-[10px]">
            Cinematographer, Video Editor & Photographer
          </h1>

          <button className=" text-[18px] px-5 py-4 bg-[#FFA33E] rounded-[100px] mt-8">
            Learn More
          </button>
        </div>
      </div>

      {/* for mobile */}
      <div className="block md:hidden relative h-[90vh]">
        <img
          src={hero}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-75"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 tracking-widest text-white">
          <h1 className="text-[40px] font-bold leading-[30px] mb-4 shadow-black shadow-md">
            Zafar.Imam
          </h1>
          <h1 className="text-[18px] font-bold leading-[20px] mb-2 shadow-black shadow-md">
            Telling Stories..
          </h1>
          <h1 className="text-[14px] font-bold leading-tight mb-8 shadow-black shadow-md">
            {" "}
            Cinematographer, VideoEditor & Photographer.
          </h1>
          <button className="text-[16px] font-semibold px-4 py-3 bg-[#FFA33E] rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
