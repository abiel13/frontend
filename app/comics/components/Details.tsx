import { Stories } from "@/types/types";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import DetailsCta from "./DetailsCta";

const Details = ({ item }: { item: Stories }) => {
  return (
    <Stack
      direction={{ md: "row", xs: "column" }}
      sx={{
        minHeight: "40vh",
        bgcolor: "#434343",
        borderRadius: "1rem",
        width: "100%",
        padding: "1rem 3rem",
        alignItems: { md: "end", xs: "" },
      }}
    >
      <Stack direction={{ md: "row", xs: "column" }} sx={{ gap: "3rem" }}>
        <div className="h-[100%] w-[100%] md:w-[30%] lg:w-[20%]">
          <Image
            src={item.background_url}
            alt="background"
            width={250}
            height={200}
            className=" w-[100%] h-[100%] object-cover self-end"
          />
        </div>

        <Stack justifyContent={"space-betwseen"} spacing={1}>
          <Stack>
            <Typography color="#ddd">Title</Typography>
            <Typography
              sx={{
                fontSize: { md: "5rem", xs: "2rem" },
                fontWeight: "bolder",
              }}
            >
              {item.title}
            </Typography>
          </Stack>
          <Stack sx={{ gap: "1rem" }}>
            <Typography>{item.category}</Typography>
            <Typography>{item.author}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={3}>
          <Typography color="#ddd">Description</Typography>
          <Typography
            sx={{
              width: { md: "70%", xs: "100%" },
              fontSize: "1.3rem",
              color: "#ddd",
              textAlign: { md: "left", xs: "justify" },
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          </Typography>
          <DetailsCta id={item.id} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Details;
