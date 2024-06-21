import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Flex } from "../../../components";
import { API_URL } from "../../../environment";
import { shades } from "../../../theme";
import { RootState, setNavMessages } from "../../../redux-store";
import { Carousel } from "react-responsive-carousel";
import { IconButton, Typography } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const NavMessageBar = () => {
  const dispatch = useDispatch();
  const navMessages: any[] = useSelector(
    (state: RootState) => state.nav.navMessages
  );

  async function getNavMessage() {
    const message = await fetch(`${API_URL}/nav-messages?populate=*`, {
      method: "GET",
    });
    const messageJson = await message.json();

    dispatch(setNavMessages(messageJson.data));
  }

  useEffect(() => {
    getNavMessage();
  }, []);

  const handleMessageClick = () => {
    // navigate to app or external (use func) with linkUrl
  };

  return navMessages && navMessages.length > 0 ? (
    <Flex
      width="100%"
      justifyContent="center"
      background={shades.primary[500]}
      height="40px"
      sx={{ opacity: ".95" }}
    >
      <Carousel
        autoPlay
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        transitionTime={300}
        className="messageCarousel"
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "4px",
              left: "10px",
              color: "white",
              padding: "6px",
              zIndex: "10",
              opacity: ".3",
            }}
          >
            <NavigateBefore sx={{ fontSize: 20 }} />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "4px",
              right: "10px",
              color: "white",
              padding: "6px",
              zIndex: "10",
              opacity: ".3",
            }}
          >
            <NavigateNext sx={{ fontSize: 20 }} />
          </IconButton>
        )}
      >
        {navMessages?.map((msg: any) => (
          <Flex
            alignItems="center"
            justifyContent="center"
            height="40px"
            gap="10px"
            onClick={handleMessageClick}
            sx={{ cursor: "pointer" }}
          >
            <Typography variant="h4" color="#fff">
              {msg?.attributes?.message}
            </Typography>
            <Typography
              variant="h4"
              color="#fff"
              sx={{ textDecoration: "underline" }}
            >
              {msg?.attributes?.linkText}
            </Typography>
          </Flex>
        ))}
      </Carousel>
    </Flex>
  ) : (
    <></>
  );
};

export default NavMessageBar;
