import "@splidejs/react-splide/css";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { Stories, Categories } from "@/types/types";
import BookCard from "./components/BookCard";
import { Container, Typography } from "@mui/material";
import Skeleton from "react-loading-skeleton";
interface ComicPageProps {}

async function getCategories() {
  try {
    const res = await axios.get("https://api.alteflix.com/api/v1/categories");
    return res.data.data;
  } catch (error: any) {
    console.error(error.message);
  }
}

async function getStories() {
  try {
    const res = await axios.get("https://api.alteflix.com/api/v1/stories");
    return res.data.data;
  } catch (error: any) {
    console.error(error.message);
  }
}

const ComicPage: ({}: ComicPageProps) => Promise<JSX.Element> = async ({}) => {
  const categories: Categories[] = await getCategories();
  const stories: Stories[] = await getStories();
  return (
    <div className="bg-blak flex flex-col items-center md:px-[5rem]   min-h-[100vh] px-3 py-[1rem] mt-3 font-bold">
      <div className="my-4 justify-around w-full md:w-1/2 flex items-center gap-4 cat_over ">
        {!categories?.length ? (
          <div className="flex gap-5">
            {[0, 0, 0, 0]?.map((item, i) => (
              <Skeleton
                key={i}
                width={100}
                height={50}
                className={` md:ml-0 px-5 py-3 bg-white rounded-lg  text-black text-center`}
              />
            ))}
          </div>
        ) : (
          <div className="flex gap-5 my-4 items-center justify-around w-full py-5 md:w-3/4 cat_over">
            {categories?.map((item, index) => (
              <Link
                className={`${
                  index == 0 ? "ml-[8rem]" : "ml-0"
                } md:ml-0 px-5 py-3 bg-[#510800] text-white rounded-lg tracking-wide text-center`}
                href={`/comics/categories/${item.id}`}
                key={item.id}
              >
                {<p className="tracking-widest text-lg">{item.title}</p>}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="relative mt-[1rem] h-[150px] bg-gradient-to-r to-[#0b0b0c] from-[#510800]  shadow-2xl rounded-2xl p-[1rem] flex flex-col items-center justify-center  overflow-hidden w-full md:w-1/2 ">
        <div className="text-white flex  text-left items-center justify-center  ">
          <div>
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
              variant="h3"
            >
              Step Into AlteFlix
            </Typography>
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

      <Container sx={{ marginBlock: "3rem" }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          sx={{ marginBottom: "3rem" }}
        >
          Latest Stories
        </Typography>
        <BookCard stories={stories} />
      </Container>
    </div>
  );
};

export default ComicPage;
