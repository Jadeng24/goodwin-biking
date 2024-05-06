import { Link, useNavigate } from "react-router-dom";

import { Typography, useMediaQuery } from "@mui/material";

import { shades } from "../../../../theme";
import { Flex } from "../../../../components";
import { linkToExternal } from "../../../../linkToExternal";

interface CarouselHeaderProps {
  banner: any;
}
export const CarouselHeader = (props: CarouselHeaderProps): JSX.Element => {
  const { banner } = props;
  const navigate = useNavigate();
  const isGreaterThanMobile = useMediaQuery("(min-width:600px");
  // TODO: use actual banner title/subtitle/link etc
  const { appUrl, externalUrl, linkText, subtitle, title } =
    banner?.attributes || {};

  console.log(appUrl, externalUrl, linkText, subtitle, title);

  const handleOnClick = () => {
    const defaultUrl = "/products";
    if (externalUrl) {
      linkToExternal(externalUrl);
    } else {
      navigate(appUrl ?? defaultUrl);
    }
  };

  return (
    <Flex
      onClick={handleOnClick}
      color="#fff"
      padding="34px 30px"
      borderRadius="6px"
      textAlign="left"
      //   background="rgb(0, 0, 0, 0.5)"
      background="linear-gradient(45deg, rgb(0, 0, 0, 0.6), rgb(0, 0, 0, 0.4))"
      position="absolute"
      flexDirection="column"
      top={isGreaterThanMobile ? "43%" : "20%"}
      left={isGreaterThanMobile ? "10%" : "0"}
      right={isGreaterThanMobile ? undefined : "0"}
      margin={isGreaterThanMobile ? undefined : "0 auto"}
      maxWidth={isGreaterThanMobile ? "70%" : "82%"}
      style={{ cursor: "pointer" }}
      sx={{ transition: ".2s", "&:hover": { transform: "scale(1.02)" } }}
    >
      <Typography
        variant={isGreaterThanMobile ? "h1" : "h2"}
        fontWeight="bold"
        marginBottom="12px"
      >
        {title ?? "Summer Sale"}
      </Typography>
      <Typography
        variant="h4"
        fontSize="16px"
        fontWeight="700"
        color={shades.neutral[500]}
        marginBottom="24px"
        maxWidth={isGreaterThanMobile ? "80%" : undefined}
      >
        {subtitle ?? "Lightweight and durable bikepacking bags that will last."}
      </Typography>
      <Typography
        variant="h4"
        fontWeight="bold"
        fontSize="18px"
        color="#222"
        sx={{
          background: shades.neutral[300],
          padding: "9px 22px",
          borderRadius: "30px",
          transition: ".3s",
          border: "solid 4px transparent",
          "&:hover": {
            borderColor: externalUrl
              ? shades.primary[500]
              : shades.secondary[500],
          },
        }}
      >
        {linkText ?? "Discover More"}
      </Typography>
    </Flex>
  );
};
