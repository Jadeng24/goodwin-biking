import { Typography, useMediaQuery } from "@mui/material";
import { Flex } from "../../../../components";
import { shades } from "../../../../theme";
import { useNavigate } from "react-router-dom";

export const CarouselHeader = (): JSX.Element => {
  const navigate = useNavigate();
  const isGreaterThanMobile = useMediaQuery("(min-width:600px");

  return (
    <Flex
      onClick={() => navigate("/products")} // TODO navigate to shop page
      color="#fff"
      padding="20px"
      borderRadius="px"
      textAlign="left"
      background="rgb(0, 0, 0, 0.6)"
      position="absolute"
      flexDirection="column"
      top="46%"
      left={isGreaterThanMobile ? "10%" : "0"}
      right={isGreaterThanMobile ? undefined : "0"}
      margin={isGreaterThanMobile ? undefined : "0 auto"}
      maxWidth={isGreaterThanMobile ? undefined : "240px"}
      style={{ cursor: "pointer" }}
    >
      <Typography fontSize="16px" fontWeight="700" color={shades.neutral[500]}>
        -- NEW ITEMS
      </Typography>
      <Typography variant="h1">Summer Sale</Typography>
      <Typography
        fontWeight="bold"
        color={shades.secondary[400]}
        sx={{ textDecoration: "underline" }}
      >
        Discover More
      </Typography>
    </Flex>
  );
};
