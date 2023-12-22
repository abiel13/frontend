import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="w-full">
      <Link
        className="cursor-pointer text-white font-lighter   tracking-widest text-3xl"
        href={"/comics"}
      >
        Alte<span className="text-red-500">Flix</span>
      </Link>
    </div>
  );
};

export default Nav;
