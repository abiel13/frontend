import { getCategories } from "@/request_api/ComicsApiRequest";
import { Categories } from "@/types/types";
import Link from "next/link";
import React from "react";

const Categories = async () => {
  const categories: Categories[] = await getCategories();
  return (
    <div className="my-4 justify-evenly w-full md:w-[80vw] flex items-center gap-4 cat_over ">
      {
        <div className="flex gap-5 my-4 items-center justify-around w-full py-5 md:w-3/4 cat_over">
          {categories?.map((item, index) => (
            <Link
              className={`${
                index == 0 ? "ml-[8rem]" : "ml-0"
              } md:ml-0 px-5 py-3 bg-red-600 text-white rounded-lg tracking-wide text-center`}
              href={`/comics/categories/${item.id}`}
              key={item.id}
            >
              {<p className="tracking-widest text-lg">{item.title}</p>}
            </Link>
          ))}
        </div>
      }
    </div>
  );
};

export default Categories;
