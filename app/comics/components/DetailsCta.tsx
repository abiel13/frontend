import { Stack } from "@mui/material";
import React from "react";
import { FaStar, FaBookOpen, FaBookmark } from "react-icons/fa6";
import Link from "next/link";

const IconHolder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center  rounded-full bg-white w-[50px] h-[50px]">
      {children}
    </div>
  );
};

const DetailsCta = ({id}:{id:number}) => {
  return (
    <Stack direction="row" sx={{ gap: "1rem" }}>
      <IconHolder>
        <Link href={`/read-comics/${id}`}>
          <FaBookOpen color="black" />
        </Link>
      </IconHolder>
      <IconHolder>
        <FaStar color="black" />
      </IconHolder>
      <IconHolder>
        <FaBookmark color="black" />
      </IconHolder>
    </Stack>
  );
};

export default DetailsCta;
