import camrera from "../assets/camera.jpg";
const HireUs = () => {
  return (
    <section className="font-kalnia relative pt-10 pb-32">
      {/* <img
        src={camrera}
        className="h-[80vh] w-[90vw] opacity-80 object-cover mx-auto"
        alt=""
      /> */}
      <div className="bg-[url(assets/camera.jpg)] w-[90vw] h-[550px] bg-center mx-auto relative bg-opacity-60">
        <div className="z-[100] text-center flex flex-col h-full justify-center items-center">
          <h3 className="text-[18px] ">Hire Us</h3>
          <h1 className="text-[28px] sm:text-[36px] md:text-[50px]">
            We Are Always Ready To <br /> Take A Perfect Shot
          </h1>
          <button className=" text-[18px] w-fit px-5 py-4 bg-[#FFA33E] rounded-[100px] mt-8">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireUs;
