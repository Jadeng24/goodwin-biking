import { useNavigate } from "react-router-dom";

import { Typography, useMediaQuery } from "@mui/material";

import { shades } from "../../../../theme";
import { Flex } from "../../../../components";
import ActionButton from "../../../../components/action-button/ActionButton";
import { isExternalUrl } from "../../../../isExternalUrl";
import { linkToExternal } from "../../../../linkToExternal";

interface CarouselHeaderProps {
  banner: any;
}

export const CarouselHeader = (props: CarouselHeaderProps): JSX.Element => {
  const { banner } = props;

  const navigate = useNavigate();
  const isGreaterThanMobile = useMediaQuery("(min-width:600px");
  const defaultUrl = "/bikepacking-bags";

  const { linkUrl, linkText, subtitle, title } = banner?.attributes || {};

  const handleOnClick = () => {
    const tempUrl = linkUrl ?? defaultUrl;
    if (isExternalUrl(tempUrl)) {
      linkToExternal(tempUrl);
    } else {
      navigate(tempUrl);
    }
  };

  return (
    <Flex
      onClick={handleOnClick}
      color="#fff"
      padding="34px 30px"
      borderRadius="6px"
      textAlign="left"
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
        fontSize={isGreaterThanMobile ? "18px" : "16px"}
        fontWeight="700"
        color={shades.neutral[500]}
        marginBottom="24px"
        maxWidth={isGreaterThanMobile ? "80%" : undefined}
      >
        {subtitle ?? "Lightweight and durable bikepacking bags that will last."}
      </Typography>
      <ActionButton linkText={linkText} linkUrl={linkUrl} />
    </Flex>
  );
};
