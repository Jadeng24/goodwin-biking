import React from "react";
import { Flex } from "../../../../../components";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { linkToExternal } from "../../../../../linkToExternal";
import { Facebook, YouTube } from "@mui/icons-material";
import { shades } from "../../../../../theme";

const SocialLinks = () => {
  const isSmallPhone = useMediaQuery("(max-width:300px)");

  const handleOnClick = (url: string) => {
    linkToExternal(url);
  };

  return (
    <Box width="100%" paddingBottom="30px">
      <Typography variant="h3" color={shades.neutral[500]} marginBottom="20px">
        SOCIAL LINKS
      </Typography>
      <Flex justifyContent="space-around" width="100%">
        <Button
          onClick={() =>
            handleOnClick("https://www.facebook.com/goodwinbiking/")
          }
        >
          <IconButton>
            <Facebook />
          </IconButton>
          {!isSmallPhone && (
            <Typography variant="h4" color={shades.neutral[700]}>
              Facebook
            </Typography>
          )}
        </Button>
        <Button
          onClick={() =>
            handleOnClick("https://www.youtube.com/@goodwinbiking")
          }
        >
          <IconButton>
            <YouTube />
          </IconButton>
          {!isSmallPhone && (
            <Typography variant="h4" color={shades.neutral[700]}>
              Youtube
            </Typography>
          )}
        </Button>
      </Flex>
    </Box>
  );
};

export default SocialLinks;
