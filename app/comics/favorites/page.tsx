import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";

const FavoritesPage = () => {
  return (
    <Container
    sx={{
      bgcolor: "white",
      boxShadow: "10px 10px 12px rgba(0,0,0,0.3)",
      mt: "3rem",
      width: { md: "50%", sm: "90%", xs:'90%' },
      borderRadius: "2rem",
      padding: "1rem 2rem",
      minHeight: "150px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box sx={{ textAlign: "center" }}>
      <Typography color={"black"} variant="h5">
        This feature is currently under construction
      </Typography>
    </Box>
  </Container>
  );
};

export default FavoritesPage;
