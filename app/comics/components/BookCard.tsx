"use client";
import { Stories } from "@/app/utils";
import React, { Suspense } from "react";
import { SplideSlide, Splide } from "@splidejs/react-splide";
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
        perPage: 2,
      },
      640: {
        perPage: 'auto',
        gap: "1rem",
      },
    },
  };

  return (
    <Suspense
      fallback={<p className="text-white text-3xl">hey am a suspense</p>}
    >
      <div className="px-4 md:px-0 ">
        {!stories?.length ? (
          <div>
              <Splide options={option}>
              {[0,0,0,0]?.map((i) => (
                <SplideSlide key={i}>
                  <div>
                <Skeleton width={250} height={250} borderRadius={10} />
                <Skeleton width={250} height={20}  count={2} borderRadius={5} />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        ) : (
          <div>
            <Splide options={option}>
              {stories?.map((item, i) => (
                <SplideSlide key={i}>
                  <Book book={item} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        )}
      </div>{" "}
    </Suspense>
  );
};

export default BookCard;
