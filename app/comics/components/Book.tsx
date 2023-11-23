import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Stories } from "@/types/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface BookI {
  book: Stories;
}

const Book: React.FC<BookI> = ({ book }) => {
  return (
    <Link href={`/comics/details/${book.id}`}>
      <Card
        sx={{
          width: { xl: 300, sm: 250, md: 200 },
          minHeight: { xl: 350, sm: 200, md: 250 },
          bgcolor: "transparent",
          boxShadow: "none",
        }}
      >
        <Image
          src={book.background_url}
          className="w-[150px] rounded-xl object-cover  h-[150px] md:w-[300px] md:h-[250px]"
          height={200}
          width={300}
          alt={book.title}
        />
        <CardContent>
          <Typography
            fontWeight={"bold"}
            sx={{
              fontSize: { md: "1.3rem", sm: ".8rem" },
              width: { md: 300, sm: 150 },
              color: "white",
            }}
          >
            {book.title}
          </Typography>
          <Typography variant="body2" color="white">
            {book.author}
          </Typography>
          <Typography fontWeight={"bold"} color="white">
            {book.category}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Book;
