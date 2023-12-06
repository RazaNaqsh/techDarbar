import video from "../assets/video.svg";
import camera from "../assets/camera.svg";
import videography from "../assets/videography.svg";

const Works = () => {
  return (
    <section className="text-white py-28">
      <div className="space-y-2">
        <h1 className="text-[44px] font-semibold text-center">
          Filming Services
        </h1>
        <hr className="mx-auto w-[100px] border-2 border-red-500" />
        <p className="text-center text-[17px] w-[45vw] mx-auto text-[#8F8F8F]">
          I offer different services such as filming services, workshop &
          private tuition, equipment hire. If you have any question, don't
          hesitate to contact me.
        </p>
      </div>
      <div className="flex justify-around w-[90%] mx-auto mt-10">
        <div className="w-[30%] flex flex-col items-center px-4 space-y-2">
          <img src={video} className=" w-[200px]" alt="" />
          <h2>Video Editing</h2>
          <p className="text-[#8F8F8F]">
            I can film your project whether it is a commercial advertise, a
            short film or a document film. I have expertise in these fields.
          </p>
        </div>
        <div className="w-[30%] flex flex-col items-center px-4 space-y-2">
          <img src={camera} className=" w-[200px]" alt="" />
          <h2>Cameraman</h2>
          <p className="text-[#8F8F8F]">
            I can film your project whether it is a commercial advertise, a
            short film or a document film. I have expertise in these fields.
          </p>
        </div>
        <div className="w-[30%] flex flex-col items-center px-4 space-y-2">
          <img src={videography} className="  w-[200px]" alt="" />
          <h2>Filming Services</h2>
          <p className="text-[#8F8F8F]">
            I can film your project whether it is a commercial advertise, a
            short film or a document film. I have expertise in these fields.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;