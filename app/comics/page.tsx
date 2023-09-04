import {Splide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { Stories, Categories } from "../utils";
import BookCard from "./components/BookCard";


interface ComicPageProps {}

async function getCategories() {
  try {
    const res = await axios.get("https://api.alteflix.com/api/v1/categories");
    return res.data.data;
  } catch (error) {
   console.log('an error occured')
  }
}

async function getStories() {
  try {
      const res = await axios.get("https://api.alteflix.com/api/v1/stories");
  return res.data.data;
  } catch (error) {
   console.log('an error occured')
  }

}

const ComicPage: ({}: ComicPageProps) => Promise<JSX.Element> = async ({}) => {
  const categories: Categories[] = await getCategories();
  const stories: Stories[] = await getStories();
  return (
    <div className="bg-blak flex flex-col items-center md:px-[5rem]   min-h-[100vh] px-3 py-[1rem] mt-3 font-bold">
      <div className="my-4 justify-around w-full md:w-1/2 flex items-center gap-4 cat_over ">

        {!categories?.length ? <div className='flex gap-5'>
        { [0,0,0,0]?.map((item) => (
          <Skeleton
          width={100}
          height={50}
         
            className={` md:ml-0 px-5 py-3 bg-white rounded-lg  text-black text-center`}
          /> 
        ))}
        </div> : <div>{ categories?.map((item, index) => (
          <Link
            className={`${
              index == 0 ? "ml-[5rem]" : "ml-0"
            } md:ml-0 px-5 py-3 bg-white rounded-lg  text-black text-center`}
            href={`/comics/categories/${item.id}`}
            key={item.id}
          >
            {<p className="">{item.title}</p>}
          </Link>
        ))}</div> }
      </div>

      <div className="w-full  flex flex-col items-center ">
        <h1 className="text-2xl text-white tracking-wide  self-start mb-8 ">Latest Stories</h1>
        <div className="flex items-center justify-between  mt-5 ">
         <BookCard stories={stories} /> 
        </div>
      </div>

      <div className="w-full mt-[2rem]  flex flex-col items-center ">
        <h1 className="text-2xl text-white tracking-wide  self-start mb-8 ">Characters</h1>
        <div className="flex items-center justify-between  mt-5 ">
         <BookCard stories={stories} /> 
        </div>
      </div>

      <div className="w-full mt-[2rem]  flex flex-col items-center ">
        <h1 className="text-2xl text-white tracking-wide  self-start mb-8 ">Other Stories</h1>
        <div className="flex items-center justify-between  mt-5 ">
         <BookCard stories={stories} /> 
        </div>
      </div>

    </div>
  );
};

export default ComicPage;
