import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import yt from "../assets/yt.svg";
import tw from "../assets/tw.svg";
import newlogo from "../assets/newlogo.png";

import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import whatsapp from "../assets/whatsapp.svg";
import mail from "../assets/mail.svg";

const Footer = () => {
  return (
    <div className="bg-[#202020] py-28">
      <div className="w-[80%] mx-auto flex justify-around">
        <div className="space-y-4">
          <img src={newlogo} className="w-[150px]" alt="" />
          <p className="text-[13px] md:text-[17px] w-[70vw] md:w-[30vw]  text-[#8F8F8F]">
            The world without photography will be meaningless to us if there is
            no light and color, which opens up our minds and expresses passion.
          </p>
          <div className="w-[230px] h-[50px] md:ml-6 flex gap-4 ">
            <img src={fb} alt="" />
            <img src={ig} alt="" />
            <img src={yt} alt="" />
            <img src={tw} alt="" />
          </div>
        </div>
        <div className="hidden md:block ">
          <h2 className="text-[26px] mb-4 text-white font-semibold">
            Get In Touch
          </h2>
          <div className="flex gap-10">
            <section className="space-y-2">
              <div className="flex gap-2 items-center">
                <img src={location} className="inline w-[30px]" alt="" />
                <p className="text-[#8F8F8F]">
                  GS Road, Jugsalai, Jamshedpur- 831006
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={mail} className="inline w-[30px]" alt="" />
                <a
                  href="mailto:techdarbarjsr@gmail.com"
                  className="text-[#8F8F8F]"
                >
                  techdarbarjsr@gmail.com
                </a>
              </div>
            </section>

            <section className="space-y-2">
              <div className="flex gap-2 items-center">
                <img src={phone} className="inline w-[30px]" alt="" />
                <p className="text-[#8F8F8F]">+91 72928 71069</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={whatsapp} className="inline w-[30px]" alt="" />
                <p className="text-[#8F8F8F]">+91 72928 71069</p>
              </div>
            </section>
          </div>
          <p className="text-center text-[#8F8F8F] text-[15px] mt-10">
            @Copyright 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
