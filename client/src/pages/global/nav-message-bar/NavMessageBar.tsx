import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

import { IconButton, Typography } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

import { Flex } from "../../../components";
import { API_URL } from "../../../environment";
import { shades } from "../../../theme";
import { RootState, setNavMessages } from "../../../redux-store";
import { isExternalUrl } from "../../../isExternalUrl";
import { linkToExternal } from "../../../linkToExternal";

const NavMessageBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navMessages: any[] = useSelector(
    (state: RootState) => state.nav.navMessages
  );

  const [showMessageBar, setShowMessageBar] = useState<boolean>(true);
  const controlNavbar = () => {
    const hideDistance = 400; // Vertical distance down the page to hide Message bar

    if (window.scrollY < hideDistance) {
      setShowMessageBar(true);
    } else {
      setShowMessageBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

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

  const handleMessageClick = (linkUrl: string) => {
    if (isExternalUrl(linkUrl)) {
      linkToExternal(linkUrl);
    } else {
      navigate(linkUrl);
    }
  };

  return navMessages && navMessages.length > 0 ? (
    <Flex
      width="100%"
      justifyContent="center"
      background={shades.primary[500]}
      height="40px"
      sx={{
        opacity: ".95",
        transition: ".5s",
        marginTop: showMessageBar ? "0" : "-40px",
      }}
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
        renderArrowPrev={(onClickHandler, hasPrev, label) => {
          return (
            navMessages.length > 1 && (
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
            )
          );
        }}
        renderArrowNext={(onClickHandler, hasNext, label) => {
          return (
            navMessages.length > 1 && (
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
            )
          );
        }}
      >
        {navMessages?.map((msg: any) => (
          <Flex
            alignItems="center"
            justifyContent="center"
            height="40px"
            gap="4px"
            onClick={() => handleMessageClick(msg.attributes.linkUrl)}
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
