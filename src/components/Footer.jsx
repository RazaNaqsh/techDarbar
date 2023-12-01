import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import yt from "../assets/yt.svg";
import tw from "../assets/tw.svg";
import logo from "../assets/logo.png";

import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import whatsapp from "../assets/whatsapp.svg";
import mail from "../assets/mail.svg";

const Footer = () => {
  return (
    <div className="bg-[#202020] py-28">
      <div className="w-[80%] mx-auto flex justify-around">
        <div className="space-y-4">
          <img src={logo} className="w-[150px]" alt="" />
          <p className=" text-[17px] w-[30vw]  text-[#8F8F8F]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            doloribus ad amet dolor, fugiat praesentium
          </p>
          <div className="w-[230px] h-[50px] ml-6 flex gap-4 ">
            <img src={fb} alt="" />
            <img src={ig} alt="" />
            <img src={yt} alt="" />
            <img src={tw} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-[26px] mb-4 font-semibold">Get In Touch</h2>
          <div className="flex gap-10">
            <section className="space-y-2">
              <div className="flex gap-2 items-center">
                <img src={location} className="inline w-[30px]" alt="" />
                <p className="text-[#8F8F8F]">2443 Oak Ridge Omaha, QA 45065</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={mail} className="inline w-[30px]" alt="" />
                <p className="text-[#8F8F8F]">@techdarbar</p>
              </div>
            </section>

            <section className="space-y-2">
              <div className="flex gap-2 items-center">
                <img src={phone} className="inline w-[30px]" alt="" />
                <p className="text-[#8F8F8F]">00000 00000</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={whatsapp} className="inline w-[30px]" alt="" />
                <p className="text-[#8F8F8F]">000-000-0000</p>
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
