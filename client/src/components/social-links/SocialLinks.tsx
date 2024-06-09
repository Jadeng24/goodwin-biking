import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Facebook, YouTube } from "@mui/icons-material";

import strava from "../../assets/strava.png";
import { Flex } from "../flex";
import { linkToExternal } from "../../linkToExternal";
import { shades } from "../../theme";

interface SocialLinksProps {
  showTitle?: boolean;
}

const SocialLinks = (props: SocialLinksProps) => {
  const { showTitle = false } = props;
  const isSmallPhone = useMediaQuery("(max-width:360px)");

  const handleOnClick = (url: string) => {
    linkToExternal(url);
  };

  const stravaStyle = { maxHeight: "20px", opacity: ".6" };

  return (
    <Box width="100%">
      {showTitle && (
        <Typography
          variant="h3"
          color={shades.neutral[500]}
          marginBottom="20px"
        >
          SOCIAL LINKS
        </Typography>
      )}
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
          sx={{ height: "100%" }}
          onClick={() => handleOnClick("https://www.strava.com/clubs/1252661")}
        >
          <Flex alignItems="center" height="100%">
            <IconButton>
              <img src={strava} alt="strava" style={stravaStyle} />
            </IconButton>
            {!isSmallPhone && (
              <Typography variant="h4" color={shades.neutral[700]}>
                Strava
              </Typography>
            )}
          </Flex>
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
