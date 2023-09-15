import "@splidejs/react-splide/css";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { Stories, Categories } from "../utils";
import BookCard from "./components/BookCard";
import Paper from "@mui/material/Paper";
import web from "../../public/hero.png";
import { Typography, Stack } from "@mui/material";

interface ComicPageProps {}

async function getCategories() {
  try {
    const res = await axios.get("https://api.alteflix.com/api/v1/categories");
    return res.data.data;
  } catch (error) {
    console.log("an error occured");
  }
}

async function getStories() {
  try {
    const res = await axios.get("https://api.alteflix.com/api/v1/stories");
    return res.data.data;
  } catch (error) {
    console.log("an error occured");
  }
}

const ComicPage: ({}: ComicPageProps) => Promise<JSX.Element> = async ({}) => {
  const categories: Categories[] = await getCategories();
  const stories: Stories[] = await getStories();
  return (
    <div className="bg-blak flex flex-col items-center md:px-[5rem]   min-h-[100vh] px-3 py-[1rem] mt-3 font-bold">
      <div className="my-4 justify-around w-full md:w-1/2 flex items-center gap-4 cat_over ">
        {categories?.map((item, index) => (
          <Link
            className={`${
              index == 0 ? "ml-[5rem]" : "ml-0"
            } md:ml-0 px-5 py-3 bg-white rounded-lg shadow-lg text-black text-center`}
            href={`/comics/categories/${item.id}`}
            key={item.id}
          >
            {<p className="">{item.title}</p>}
          </Link>
        ))}
      </div>
      <div className="relative overflow-hidden w-full md:w-1/2">
        <Image
          src={web}
          alt="image"
          className="h-[150px] w-full rounded-2xl"
          width={`250`}
          height={"250"}
        />
        <div className="text-white flex  text-left items-center justify-centers top-0  absolute">
          <div>
            <Typography
              sx={{ fontSize: "2rem", fontWeight: "bold" }}
              variant="h3"
            >
              Welcome To AlteFlix
            </Typography>
            <Typography sx={{width:'80%', fontSize:'1.2rem'}}>
              Where Your Comic Fantasies are Brought to Reality
            </Typography>
          </div>
        </div>
      </div>

      <div className="w-full  flex flex-col items-center ">
        <h1 className="text-2xl text-white tracking-wide  self-start mb-8 ">
          Latest Stories
        </h1>
        <div className="flex items-center justify-between  mt-5 ">
          <BookCard stories={stories} />
        </div>
      </div>
    </div>
  );
};

export default ComicPage;
