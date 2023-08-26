import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { JsxElement } from "typescript";

type Categories = {
  description: string;
  title: string;
  id: number;
};

type Stories = {
  author: string;
  background_url: string;
  category: string;
  category_id: number;
  doc_url: string;
  description: string;
  id: number;
  title: string;
  year: number;
  parts: [];
};

interface ComicPageProps {}

async function getCategories() {
const res =  await axios.get("https://api.alteflix.com/api/v1/categories")
 return res.data.data
}


async function  getStories () {
  const res = await axios.get('https://api.alteflix.com/api/v1/stories');
  return res.data.data
}

const ComicPage: ({}:ComicPageProps) => Promise<JSX.Element> = async ({}) => {
  const categories:Categories[] = await getCategories();
  const stories:Stories[] = await getStories();
  return (
   
   <div className="bg-blak flex flex-col items-center md:px-[5rem]   min-h-screen px-3 py-[1rem] mt-3 font-bold">
      <div className="my-4 justify-around w-full md:w-1/2 flex items-center gap-4 cat_over ">
        {categories.map((item, index) => (
            <Link
              className={`${
                index == 0 ? "ml-[5rem]" : "ml-0"
              } md:ml-0 px-5 py-3 bg-white rounded-lg  text-black text-center`}
              href={"/"}
              key={item.id}
            >
              {<p className="">{item.title}</p>}
            </Link>
        ))}
      </div>

      <div className="w-full">
        <h1 className="text-2xl text-white tracking-wide ">Latest Stories</h1>
        <div className="flex flex-wrap gap-6 ">
          {stories?.map((item) => (
            <div key={item.id}>
              <Image
                src={item.background_url}
                alt="book cover"
                width={250}
                height={250}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComicPage;
