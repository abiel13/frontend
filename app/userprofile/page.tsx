'use client'
import React from "react";
import Form from "./Form";
import Link from "next/link";
import { useAppContext } from "../context/context";

const UserProfilePage = () => {
  const { userData } = useAppContext()
  const fullname = userData?.firstname + ' ' + userData?.lastname;
 const initials = userData?.firstname[0] + '.' +userData?.lastname[0]
  return (
    <div className="min-h-screen pt-[2rem]">
      <Link href={'/comics'} className="text-black cursor-pointer  px-4"> {'< Go Back'} </Link >
      <div className="flex   flex-col w-full items-center ">
        <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-red-700">
          <p className="text-white font-bold text-3xl">
          {initials == 'undefined.undefined' ? '' : initials}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-black mt-4 text-xl ">{fullname == 'undefined undefined'  ? '' : fullname}</p>
          <div className="bg-white w-[50px] h-[3px]" />
        </div>
       <Form />
      </div>
    </div>
  );
};

export default UserProfilePage;
