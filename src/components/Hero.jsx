import hero from "../assets/hero.jpg";
const Hero = () => {
  return (
    <div className="pt-12 relative">
      <img
        src={hero}
        className="z-0 opacity-75 ml-auto mr-[15vw] h-[75vh]"
        alt=""
      />
      <div className="absolute top-28 left-60 z-20 tracking-widest">
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
  );
};

export default Hero;
