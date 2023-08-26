"use client";
import { Stories } from "@/app/utils";
import Image from "next/image";
import React from "react";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaArrowsAlt } from "react-icons/fa";

interface BookCardI {
  stories: Stories[];
}

const BookCard: React.FC<BookCardI> = ({ stories }) => {

  const option ={
    pagination:false,
    arrows:false,
    perPage:3,
    gap:'0.5rem',
    omitEnd:true,
   breakpoints:{ 768:{
    perPage:2,
   } ,
        640:{
          perPage:2,
        }
  
  }
  }


  return (
    <div>
      {stories && (
        <Splide  options={option} >
          {stories?.map((item) => (
            <SplideSlide>
              <div className="flex flex-col gap-2">
                <Image
                  src={item.background_url}
                  alt="book cover"
                  width={250}
                  height={250}
                />
                <div className="text-white" >{item.author}</div>
                <div  className="text-white">{item.title}</div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      )}
      {!stories && (
        <Splide options={option} className="  text-5xl text-white flex">
          {[0, 0, 0, 0, 0].map((item, i) => (
            <SplideSlide className="flex flex-col items-center gap-2" key={i}>
              <Skeleton width={250} height={250} />
              <Skeleton width={250} height={30} count={2} />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
};

export default BookCard;
