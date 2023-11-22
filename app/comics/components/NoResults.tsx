import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import search from "@/public/file.png";
import Image from "next/image";

const NoResults = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack>
        <Image width={200} src={search} alt="not found" />
        <Typography>No Result found for search</Typography>
      </Stack>
    </Container>
  );
};

export default NoResults;
