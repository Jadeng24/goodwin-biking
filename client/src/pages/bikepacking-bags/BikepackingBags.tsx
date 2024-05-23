import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Flex } from "../../components";
import goodwinBiking from "../../assets/gb-grey.png";
import ShoppingList from "../home/shopping-list/ShoppingList";
import PageHeader from "../../components/page-header/PageHeader";

const BikepackingBags = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isLessThanDesktop = useMediaQuery("(max-width : 992px)");

  const imageStyle = {
    maxWidth: isMobile ? "85%" : "400px",
    borderRadius: "8px",
  };

  return (
    <Box padding={isMobile ? "30px" : "60px"} fontSize="16px">
      <PageHeader title="Shop Bikepacking Bags" />
      <Flex
        paddingTop="40px"
        flexDirection={isLessThanDesktop ? "column" : "row"}
        gap="20px"
      >
        <Flex marginBottom="20px" flexDirection="column" gap="20px">
          <Typography variant="h3">
            Whether riding the local trails or exploring roads found further
            away, Goodwin Bikepacking Bags are built to ride with you through
            all your exciting adventures.
          </Typography>

          <Typography variant="h3">
            We are dedicated to producing the highest-quality of bags, dry bags,
            and gear for bikepacking that is available to the general public,
            and to do so at an affordable price.
          </Typography>
          <Box></Box>
        </Flex>
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent={isLessThanDesktop ? "flex-start" : "flex-end"}
          width="100%"
        >
          <img src={goodwinBiking} style={imageStyle} alt="goodwin biking" />
          <Typography variant="h4" color="neutral" paddingTop="5px">
            Goodwin Biking
          </Typography>
        </Flex>
      </Flex>

      <ShoppingList />
    </Box>
  );
};

export default BikepackingBags;
