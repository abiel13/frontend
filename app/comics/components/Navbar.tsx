"use client";
import { useAppContext } from "@/app/context/context";
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidXCircle } from "react-icons/bi";

const Navbar = () => {
  const { userData } = useAppContext();
  const [visible, setVisible] = useState<boolean>(false);
  let initials = userData?.firstname[0] + "." + userData?.lastname[0];
  console.log(initials);
  return (
    <>
      <div
        style={{ borderBottom: "1px solid #444" }}
        className=" w-full px-3 flex font-bold items-center justify-between py-3"
      >
        <div className="text-2xl tracking-wider font-bold text-white">
          Alte<span className="text-red-700">Flix</span>
        </div>
        <div
          onClick={() => setVisible(true)}
          style={{ background: "red" }}
          className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white"
        >
          {initials == "undefined.undefined" ? "" : initials}
        </div>
      </div>
      <div
        style={{ background: "black", borderLeft: "1px solid white" }}
        className={`${
          visible ? "block" : "hidden"
        } fixed w-[80vw] md:w-[30vw] px-3  top-0 bottom-0 right-0 z-50`}
      >
        <div className="text-white w-full pt-3 flex justify-end items-center">
          <BiSolidXCircle
            onClick={() => setVisible(false)}
            fill="red"
            fontSize={24}
          />
        </div>
        <Link
          style={{ borderBottom: "1px solid white" }}
          className="flex gap-4 px-4 pb-8"
          href={"/userprofile"}
        >
          <div
            style={{ background: "red", color: "white" }}
            className="text-white font-bold px-3  py-3 rounded-lg "
          >
            {" "}
            {initials == "undefined.undefined" ? "" : initials}
          </div>
          <div className="text-white">
            <div>
              {userData?.firstname} {userData?.lastname}
            </div>
            <div>{userData?.email}</div>
          </div>
        </Link>
        <Link
          style={{ borderBottom: "1px solid white" }}
          className="flex gap-4 text-white font-normal tracking-wide px-4 py-6"
          href={"/userprofile"}
        >
          Manage Subscription
        </Link>
        <Link
          style={{ borderBottom: "1px solid white" }}
          className="flex gap-4 text-white font-normal tracking-wide px-4 py-6"
          href={"/userprofile"}
        >
          Wallet
        </Link>
        <Link
          style={{ borderBottom: "1px solid white" }}
          className="flex gap-4 text-white font-normal tracking-wide px-4 py-6"
          href={"/userprofile"}
        >
          Settings
        </Link>
        <div
          style={{ borderBottom: "1px solid white" }}
          className="flex gap-4 text-white font-normal tracking-wide px-4 py-6"
        >
          Logout
        </div>
      </div>
    </>
  );
};

export default Navbar;
