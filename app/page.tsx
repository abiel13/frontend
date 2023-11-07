'use client'
import React from "react";
import Link from "next/link";


const Home: React.FC = () => {
  return (
    <div className="h-screen px-2 w-screen overflow-x-hidden flex-col flex items-center bg-black justify-center gap-8 text-white home  ">
     <div className="flex flex-col items-center uppercase gap-5">
      <h1 className="font-bold text-4xl  tracking-wider">Alte<span className="text-red-700">Flix</span></h1>
<p className="text-2xl tracking-wide">The art of Mordern Comic...</p>
     </div>

      <div className="w-full flex justify-center gap-4">
        <Link className="px-6 py-3 text-xl rounded-lg text-center font-normal tracking-wide  bg-red-500 " href={"/auth/login"}>Sign in</Link>
        <Link className="px-6 py-3 text-xl rounded-lg text-center font-normal tracking-wide  bg-red-500 " href={"/auth/signup"}>Sign up</Link>
      </div>
    </div>
  );
};
export default Home;
