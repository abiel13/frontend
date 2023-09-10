import React from "react";
import Form from "./Form";
import Link from "next/link";


const UserProfilePage = () => {
  return (
    <div className="min-h-screen pt-[2rem]">
      <Link href={'/comics'} className="text-white cursor-pointer  px-4"> {'< Go Back'} </Link >
      <div className="flex   flex-col w-full items-center ">
        <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-red-700">
          <p className="text-white font-bold text-3xl">A.A</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white text-2xl ">Abiel Asimiea</p>
          <div className="bg-white w-[50px] h-[3px]" />
        </div>
       <Form />
      </div>
    </div>
  );
};

export default UserProfilePage;
