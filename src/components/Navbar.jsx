import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#010207] text-white">
      <div className="flex justify-between w-[70%] mx-auto items-center py-[20px]">
        <img src={logo} className="w-[120px]" alt="" />
        <ul className="flex gap-20 items-center">
          <li>Home</li>
          <li>About Us</li>
          <li>Pages</li>
          <li className=" text-[18px] px-5 py-4 border-[2px] border-white rounded-[100px] ">
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
