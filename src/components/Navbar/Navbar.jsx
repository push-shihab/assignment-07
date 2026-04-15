import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { MdOutlineQueryStats } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="shadow-sm">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <Link href="/" className="text-xl">
            <Image src={logo} alt="logo"></Image>
          </Link>
        </div>
        <div className="navbar-end">
          <Link href={"/"} className="btn btn-success">
            <FaHome />
            Home
          </Link>
          <Link href={"/"} className="btn">
            <RiTimeLine />
            Timeline
          </Link>
          <Link href={"/"} className="btn">
            <MdOutlineQueryStats />
            Stats
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
