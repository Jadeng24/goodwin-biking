import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { CarouselImage } from "./carousel-image/CarouselImage";
import { RootState } from "../../../redux-store";
import { useSelector } from "react-redux";

// Backup images if not using strapi db banner images
// const importAll = (r: __WebpackModuleApi.RequireContext) =>
//   r.keys().reduce((acc: { [x: string]: any }, item: string) => {
//     acc[item.replace("./", "")] = r(item);
//     return acc;
//   }, {});
// export const carouselImages = importAll(
//   require.context("../../../assets/carousel", false, /\.(png|jpe?g|svg)$/)
// );

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

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
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
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNext sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {sortedBanners.map((banner: any) => (
        <CarouselImage image={banner?.attributes?.image} />
      ))}
      {/* {Object.values(carouselImages).map((url, index) => (
        <CarouselImage imageUrl={url as string} index={index} />
      ))} */}
    </Carousel>
  );
};
