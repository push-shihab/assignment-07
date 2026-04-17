"use client";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { MdOutlineQueryStats } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = (
    <>
      <Link
        href={"/"}
        className={`p-2.5 rounded-md flex items-center gap-1 ${pathname === "/" && "bg-[#244D3F] text-white"}`}
      >
        <FaHome />
        Home
      </Link>
      <Link
        href={"/timeline"}
        className={`p-2.5 rounded-md flex items-center gap-1 ${pathname === "/timeline" && "bg-[#244D3F] text-white"}`}
      >
        <RiTimeLine />
        Timeline
      </Link>
      <Link
        href={"/"}
        className={`p-2.5 rounded-md flex items-center gap-1 ${pathname === "/stats" && "bg-[#244D3F] text-white"}`}
      >
        <MdOutlineQueryStats />
        Stats
      </Link>
    </>
  );
  return (
    <nav className="shadow-sm">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link href="/" className="text-xl">
            <Image src={logo} alt="logo"></Image>
          </Link>
        </div>
        {/* <div className="navbar-end">{navLinks}</div> */}

        {/* Navlinks */}
        <div className="navbar-end">
          <div className="dropdown relative">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm absolute right-0 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* End */}
      </div>
    </nav>
  );
};

export default Navbar;
