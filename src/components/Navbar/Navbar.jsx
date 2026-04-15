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
  return (
    <nav className="shadow-sm">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link href="/" className="text-xl">
            <Image src={logo} alt="logo"></Image>
          </Link>
        </div>
        <div className="navbar-end">
          <Link
            href={"/"}
            className={`p-2.5 rounded-md flex items-center gap-1 ${pathname === "/" && "bg-[#244D3F] text-white"}`}
          >
            <FaHome />
            Home
          </Link>
          <Link
            href={"/"}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
