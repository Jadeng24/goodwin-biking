import { useEffect } from "react";

import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

import PageHeader from "../../components/page-header/PageHeader";
import { PRINTFUL_KEY } from "../../environment";
import axios from "axios";

const AccessoriesAndApparel = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const getPrintfulItems = async () => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    try {
      const response = await axios.get(
        `${CORS_PROXY}https://api.printful.com/store/products`,
        {
          headers: {
            Authorization: `Bearer ${PRINTFUL_KEY}`,
          },
        }
      );

      console.log("Printful Products:", response.data.result); // Assuming 'result' field contains products
    } catch (error) {
      console.error("Error fetching Printful products:", error);
    }
  };

  useEffect(() => {
    getPrintfulItems();
  }, []);

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
