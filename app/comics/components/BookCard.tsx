"use client";
import { Stories } from "@/app/utils";
import React, {Suspense} from "react";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import Book from "./Book";

interface BookCardI {
  stories: Stories[];
}

const BookCard: React.FC<BookCardI> = ({ stories }) => {
  const option = {
    pagination: false,
    arrows: false,
    perPage: 3,
    gap: "0.5rem",
    omitEnd: true,
    breakpoints: {
      768: {
        perPage: 2,
      },
      640: {
        perPage: 2,
      },
    },
  };

  return (
       <Suspense fallback={<p className="text-white text-3xl">hey am a suspense</p>}>
    <div>
      {stories && (
        <Splide options={option}>
          {stories?.map((item, i) => (
           
            <SplideSlide key={i}>
              <Book book={item} />
            </SplideSlide>
          ))}
        </Splide>
      )}
    
    </div>  </Suspense>
  );
};

export default BookCard;
