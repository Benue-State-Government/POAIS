import { Link } from "react-router-dom";
import logo from "./assets/Logo.svg";

const Navbar = () => {
  return (
    <>
      <div className=" py-5 px-14 flex items-center justify-between border-b border-[#EAEBF0]">
        <div className=" flex items-center space-x-16">
          <img src={logo} alt="" />
          <div className=" flex items-center space-x-6">
            <Link className=" text-[#272D37] font-Inter font-semibold text-[15px]">
              Home
            </Link>
            <Link className=" text-[#272D37] font-Inter font-semibold text-[15px]">
              About
            </Link>
            <Link className=" text-[#272D37] font-Inter font-semibold text-[15px]">
              Services
            </Link>
            <Link className=" text-[#272D37] font-Inter font-semibold text-[15px]">
              Resources
            </Link>
            <Link className=" text-[#272D37] font-Inter font-semibold text-[15px]">
              Contact
            </Link>
          </div>
        </div>
        <div className=" flex items-center space-x-6">
          <Link
            to="/signup"
            className=" text-[#01903C] font-Inter font-semibold text-[15px]"
          >
            Sign Up
          </Link>
          <Link to="/login">
            <button
              style={{ boxShadow: "0px 1px 2px 0px #1018280A" }}
              className=" bg-[#01903C] py-3 px-[18px] rounded-[6px] text-white font-Inter font-semibold text-[15px]"
            >
              Log In
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;