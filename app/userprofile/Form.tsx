'use client'
import React from "react";
import { FaToggleOff } from "react-icons/fa";


const Form = () => {
  return (
    <div className="mt-[2rem] w-full md:w-1/3 flex flex-col gap-7 px-8">
      <div>
        <p className="text-white text-xl">First Name</p>
        <input
          placeholder="Abiel"
          className="text-black  w-full bg-white py-4 px-2 rounded-xl "
          type="text"
        />
      </div>
      <div>
        <p className="text-white text-xl">Last Name</p>
        <input
          placeholder="Asimiea"
          className="text-black  w-full bg-white py-4 px-2 rounded-xl "
          type="text"
        />
      </div>
      <div>
        <p className="text-white text-xl">Email Adress</p>
        <input
          placeholder="dbestabi28@gmail.com"
          className="text-black  w-full bg-white py-4 px-2 rounded-xl "
          type="text"
        />
      </div>
      <div>
        <p className="text-white text-xl">PassWord</p>
        <div className=" relative">
          {" "}
          <input
            placeholder="XXXXXXXX"
            className="text-black text-base  w-full bg-white py-4 px-2 rounded-xl "
            type="text"
          />
          <div className="text-red-500 text-normmal absolute top-[50%] right-[10%] -translate-y-[50%] translate-x-[10%] ">
            Change
          </div>
        </div>
      </div>
    <div className="flex justify-between items-center">
    <FaToggleOff />
   <p className="text-white">Subscribe To NewsLetter</p>
    </div>
    <div className="w-full mb-10">
        <button className="bg-red-600 w-full px-4 py-5 rounded-lg text-white font-bold text-lg">Update Profile</button>
    </div>
    </div>
  );
};

export default Form;
