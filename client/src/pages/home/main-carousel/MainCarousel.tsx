import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { CarouselImage } from "./carousel-image/CarouselImage";
import { RootState } from "../../../redux-store";
import { useSelector } from "react-redux";

export const MainCarousel = () => {
  // eslint-disable-next-line array-callback-return
  const banners = useSelector((state: RootState) => state.banner.banners);
  const sortBanners = [...banners];

  const sortedBanners = sortBanners.sort((a: any, b: any) => {
    if (a.attributes.slot < b.attributes.slot) {
      return -1;
    }
    if (a.attributes.slot > b.attributes.slot) {
      return 1;
    }

    return 0;
  });

  return banners?.length ? (
    // TODO: Get this swipeable so mobile can refresh and swipe down while thumbs on carousel
    <Carousel
      autoFocus
      autoPlay
      emulateTouch={true}
      infiniteLoop={true}
      interval={7000}
      showIndicators={true}
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows
      transitionTime={500}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "8px",
            zIndex: "10",
          }}
        >
          <NavigateBefore sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "8px",
            zIndex: "10",
          }}
        >
          <NavigateNext sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {sortedBanners?.map((banner: any) => (
        <CarouselImage banner={banner} />
      ))}
    </Carousel>
  ) : (
    <></>
  );
};
