import { Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <div
      className="relative mt-[1rem] h-[150px] bg-gradient-to-r to-[#0b0b0c] from-[#212121]  
     rounded-2xl p-[1rem] flex flex-col items-center justify-center  overflow-hidden w-full md:w-[70%] lg:w-[50%] "
    >
      <div className="text-white flex  text-left items-center justify-center  ">
        <div>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
            className="text-red-500"
          >
            Step Into AlteFlix
          </p>
          <Typography
            className="mt-[1rem]"
            sx={{
              width: { md: "80%", sm: "100% " },
              fontSize: { md: "1.2rem", sm: "1rem" },
            }}
          >
            Where the lines between fantasies and reality blur and your comics
            are brought to life
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Banner;
