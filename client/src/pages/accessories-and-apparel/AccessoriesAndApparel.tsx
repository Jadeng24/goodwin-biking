import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

import PageHeader from "../../components/page-header/PageHeader";

const AccessoriesAndApparel = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box padding={isMobile ? "30px" : "60px"} fontSize="16px">
      <PageHeader title="Shop Accessories & Apparel" />

      <Typography variant="h3">
        Products coming soon! Please, check back later.
      </Typography>
      {/* TODO: List of accessories and clothing here  */}
    </Box>
  );
};

export default AccessoriesAndApparel;
