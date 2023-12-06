import video from "../assets/video.svg";
import camera from "../assets/camera.svg";
import videography from "../assets/videography.svg";

const Services = () => {
  return (
    <section className="text-white py-28">
      <div className="space-y-2">
        <h1 className="text-[44px] font-semibold text-center">
          Filming Services
        </h1>
        <hr className="mx-auto w-[100px] border-2 border-red-500" />
        <p className="text-center text-[17px] w-[80vw] md:w-[45vw] mx-auto text-[#8F8F8F]">
          I offer different services such as filming services, Serviceshop &
          private tuition, equipment hire. If you have any question, don't
          hesitate to contact me.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-0 justify-around w-[90%] mx-auto mt-10">
        <div className="w-[70vw] md:w-[30%] flex flex-col items-center px-4 space-y-2">
          <img
            src={video}
            className="w-[120px] md:w-[150px] big:w-[180px] lg:w-[200px]"
            alt=""
          />
          <h2>Video Editing</h2>
          <p className="text-center text-[#8F8F8F]">
            I can film your project whether it is a commercial advertise, a
            short film or a document film. I have expertise in these fields.
          </p>
        </div>
        <div className="w-[70vw] md:w-[30%] flex flex-col items-center px-4 space-y-2">
          <img
            src={camera}
            className="w-[120px] md:w-[150px] big:w-[180px] lg:w-[200px]"
            alt=""
          />
          <h2>Cameraman</h2>
          <p className="text-center text-[#8F8F8F]">
            I can film your project whether it is a commercial advertise, a
            short film or a document film. I have expertise in these fields.
          </p>
        </div>
        <div className="w-[70vw] md:w-[30%] flex flex-col items-center px-4 space-y-2">
          <img
            src={videography}
            className=" w-[120px] md:w-[150px] big:w-[180px] lg:w-[200px]"
            alt=""
          />
          <h2>Filming Services</h2>
          <p className="text-center text-[#8F8F8F]">
            I can film your project whether it is a commercial advertise, a
            short film or a document film. I have expertise in these fields.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
