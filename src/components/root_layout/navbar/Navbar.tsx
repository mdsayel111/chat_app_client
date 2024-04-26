"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoIosSettings, IoMdPersonAdd } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = ({ className }: { className?: string }) => {
  const pathName = usePathname();
  console.log();
  return (
    <div
      className="w-full lg:w-20 fixed lg:static bottom-0"
      style={{
        display:
          pathName === "/sign_up" || pathName === "/sign_in" ? "none" : "block",
      }}
    >
      <div
        className={`w-full bottom-0 p-2 lg:p-x-2 lg:py-8 flex flex-row lg:flex-col gap-8 h-fit  lg:h-screen justify-center items-center bg-tertiary ${className}`}
      >
        <div>
          <Link
            prefetch={true}
            href={"/"}
            className={`text-3xl p-2 rounded-lg inline-block text-[#858890] font-bold ${
              pathName === "/" ? "active" : ""
            }`}
          >
            <FaMessage />
          </Link>
        </div>
        <div>
          <Link
            prefetch={true}
            href={"/active_friends"}
            className={`text-3xl p-2 rounded-lg inline-block text-[#858890] font-bold ${
              pathName === "/active_friends" ? "active" : ""
            }`}
          >
            <FaUserFriends />
          </Link>
        </div>
        <div>
          <Link
            href={"/add_friends"}
            className={`text-3xl p-2 rounded-lg inline-block text-[#858890] font-bold ${
              pathName === "/add_friends" ? "active" : ""
            }`}
          >
            <IoMdPersonAdd />
          </Link>
        </div>
        <div>
          <Link
            href={"/settings"}
            className={`text-3xl p-2 rounded-lg inline-block text-[#858890] font-bold ${
              pathName === "/settings" ? "active" : ""
            }`}
          >
            <IoIosSettings />
          </Link>
        </div>
        <div>
          <Link
            href={"/profile"}
            className={`text-3xl p-2 rounded-lg inline-block text-[#858890] font-bold ${
              pathName === "/profile" ? "active" : ""
            }`}
          >
            <FaUser />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
