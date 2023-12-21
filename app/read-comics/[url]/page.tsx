"use client";

import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Typography } from "@mui/material";
import { FaInfoCircle } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useSwipeable } from "react-swipeable";
import SimpleSnackbar from "./Snackbar";
import Nav from "../Nav";
import LoadingComponent from "@/app/components/LoadingComponent";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ReadBookPage = ({ params }: { params: { url: string } }) => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [doc_url, setDoc_url] = useState<string>("");

  // code for snackbar
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    return;
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    fetch("https://api.alteflix.com/api/v1/stories")
      .then((res) => res.json())
      .then((data) => {
        let doc_url = data.data.filter((item: any) => item.id == params.url);
        setDoc_url(doc_url[0]?.doc_url);
      });
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const handleFlip = (direction: "left" | "right") => {
    switch (direction) {
      case "left":
        if (pageNumber >= numPages) {
          return handleClick();
        }
        setPageNumber((prev) => prev + 1);
        break;
      case "right":
        if (pageNumber <= 1) return;
        setPageNumber((prev) => prev - 1);
        break;
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleFlip("left"),
    onSwipedRight: () => handleFlip("right"),
    swipeDuration: 400,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="bg-[#121212] w-screen h-screen px-2 py-[1rem] md:px-[2rem]"
    >
      <Nav />
      <SimpleSnackbar open={open} handleClose={handleClose} />
      <div className="h-[90vh] w-full py-[1rem] flex flex-row items-center justify-between">
        <div className=" w-full md:w-[40%] h-full bg-black">
          <Document
            onLoadSuccess={onDocumentLoadSuccess}
            className={"w-[40%]"}
            file={doc_url}
            loading={
              <div className="flex items-center justify-center h-[80vh] w-[90vw] md:w-[40vw] bg-transparent mx-auto my-auto">
                <LoadingComponent />
              </div>
            }
          >
            <Page
              width={470}
              canvasBackground="transparent"
              loading={
                <div className="flex items-center justify-center h-[80vh] w-[90vw] md:w-[40vw] bg-transparent mx-auto my-auto">
                  <LoadingComponent />
                </div>
              }
              pageNumber={pageNumber}
            />
          </Document>
        </div>
        <div className="hidden md:flex flex-col items-center w-[30%] justify-between h-4/5  px-[1.5rem] py-[1rem] ">
          <div className="bg-[#0b0b0c] rounded-lg h-[80%] flex w-[80%] flex-col py-4 items-center justify-center gap-8">
            <div
              onClick={() => handleFlip("right")}
              className="rounded-full bg-[#121212] cursor-pointer w-[100px] h-[100px] flex items-center justify-center text-white border-2 border-white"
            >
              <FaArrowLeftLong fontSize={28} />
            </div>
            <p className="text-white text-xl">
              {pageNumber} of {numPages}
            </p>
            <div
              onClick={() => handleFlip("left")}
              className="rounded-full bg-[#121212] cursor-pointer flex items-center justify-center text-white w-[100px] h-[100px] border-2 border-white"
            >
              <FaArrowRightLong fontSize={28} />
            </div>
          </div>
          <div className="text-[#4B4646] flex items-center gap-2">
            <FaInfoCircle />
            swipe or click to move to next page
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBookPage;
