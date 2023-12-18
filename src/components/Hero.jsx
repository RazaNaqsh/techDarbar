import hero from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <>
      <div className="hidden md:block pt-12 relative">
        <img
          src={hero}
          className="z-0 opacity-75 ml-auto mr-[15vw] md:h-[75vh]"
          alt=""
        />
        <div className="hidden md:block absolute top-28 left-60 z-20 tracking-widest">
          <h1 className="text-[80px] font-bold ml-36 leading-[70px]">Frame.</h1>
          <h1 className="text-[80px] font-bold leading-[100px]">Capture.</h1>
          <h1 className="text-[80px] font-bold ml-36 leading-[100px]">
            Inspire.
          </h1>

          <button className="ml-36 text-[18px] px-5 py-4 bg-[#FFA33E] rounded-[100px] mt-8">
            Learn More
          </button>
        </div>
      </div>
      <div className="block md:hidden relative h-screen">
        <img
          src={hero}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-75"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 tracking-widest text-white">
          <h1 className="text-6xl font-bold leading-tight mb-4">Frame.</h1>
          <h1 className="text-6xl font-bold leading-tight mb-4">Capture.</h1>
          <h1 className="text-6xl font-bold leading-tight mb-8">Inspire.</h1>
          <button className="text-lg px-5 py-3 bg-[#FFA33E] rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
