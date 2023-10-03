"use client";
import { Stories } from "@/app/utils";
import React, { Suspense } from "react";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css'

import Book from "./Book";

interface BookCardI {
  stories: Stories[];
}

const BookCard: React.FC<BookCardI> = ({ stories }) => {
  const option = {
    type: "carousel",
    pagination: false,
    arrows: false,
    perPage: 3,
    gap: "0.5rem",
    omitEnd: true,
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnHover: true,
    },
    breakpoints: {
      768: {
        perPage: 3,
      },
      640: {
        perPage: 2,
        gap: "1rem",
      },
    },
  };

  return (
    <div className='px-0 md:px-0 '>
      {stories && (
        <Splide className='py-[1rem}' options={option}>
          {stories?.map((item, i) => (
            <SplideSlide key={i}>
              <Book book={item} />
            </SplideSlide>
          ))}
        </Splide>
      )}
    
    </div>

  );
};

export default BookCard;
