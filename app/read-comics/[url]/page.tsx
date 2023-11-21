"use client";

import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Typography } from "@mui/material";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { useSwipeable } from "react-swipeable";
import SimpleSnackbar from "./Snackbar";
import Link from "next/link";

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

  const handleFlip = (direction: string) => {
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
      className="w-[100vw] min-h-[80vh] max-h-[100vh] flex items-center text-white justify-center flex-col text-3xl"
    >
      <Link href={'/comics'}>
      Go Back
      </Link>
      <Document  file={doc_url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page loading={<></>} pageNumber={pageNumber} />
      </Document>
      <div className="hidden md:flex items-center justify-around gap-5 mt-[1rem]">
        <BiChevronLeftCircle
          fill="white"
          fontSize={40}
          onClick={() => handleFlip("right")}
        />
        <Typography className="text-white">
          Page {pageNumber} of {numPages}
        </Typography>
        <BiChevronRightCircle
          fill="white"
          fontSize={40}
          onClick={() => handleFlip("left")}
        />
      </div>
      <SimpleSnackbar open={open} handleClose={handleClose} />
    </div>
  );
};

export default ReadBookPage;
