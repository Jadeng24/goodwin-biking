import { Box, useMediaQuery } from "@mui/material";

import { CarouselHeader } from "../carousel-header/CarouselHeader";
import { BASE_URL } from "../../../../environment";

interface CarouselImageProps {
  banner: any; // TODO give a type
}

export const CarouselImage = (props: CarouselImageProps): JSX.Element => {
  const { banner } = props;

  const isMobile = useMediaQuery("(max-width:600px");
  const { image } = banner?.attributes || {};
  //   const {
  //     data: {
  //       attributes: {
  //         formats: {
  //           large: { url },
  //         },
  //       },
  //     },
  //   } = image || {};

  const url = image?.data?.attributes?.formats?.large?.url || "";

  return (
    <Box key={`carousel-image-${image.id}`}>
      <img
        src={`${BASE_URL}${url}`}
        alt={`carousel-${image.id}`}
        style={{
          width: "100%",
          height: isMobile ? "550px" : "700px",
          objectFit: "cover", // keeps it responsive
          backgroundAttachment: "fixed",
        }}
      />

      <CarouselHeader banner={banner} />
    </Box>
  );
};
