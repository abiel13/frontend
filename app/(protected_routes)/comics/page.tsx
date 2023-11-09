import "@splidejs/react-splide/css";
import React from "react";
import { Stories } from "@/types/types";
import BookCard from "./components/BookCard";
import { Container, Typography } from "@mui/material";
import { getStories } from "@/request_api/ComicsApiRequest";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
interface ComicPageProps {}

const ComicPage: ({}: ComicPageProps) => Promise<JSX.Element> = async ({}) => {
  const stories: Stories[] = await getStories();
  return (
    <div className="bg-blak flex flex-col items-center md:px-[5rem]   min-h-[100vh] px-3 py-[1rem] mt-3 font-bold">
      <Categories />
      <Banner />
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
