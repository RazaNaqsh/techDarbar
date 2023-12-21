import about from "../assets/about.jpg";
const AboutUs = () => {
  return (
    <div className="bg-[#001019] my-20 flex flex-col md:flex-row items-center w-[90%] mx-auto gap-20">
      <img src={about} className=" md:w-[40vw]" alt="" />
      <div>
        <h3 className="px-3 md:px-0">About Us</h3>
        <h2 className="px-3 md:px-0 text-[36px] md:text-[50px] font-bold md:leading-[60px]">
          We Always Make <br /> The Best
        </h2>
        <hr className="mx-3 md:mx-0 my-4 w-[100px] border-2 border-red-500" />
        <p className="text-[14px] md:text-[17px] w-[80vw] md:w-[35vw] mx-auto text-[#8F8F8F] pb-4 md:pb-0">
          We are a creative film and photo production company hungry for quality
          in aesthetics. To create modern recognizable stuff we are working with
          a strong network of experienced professionals. We set up teams to
          shape your identity, push your idea and manage the workflow from pre-
          to post-production.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
