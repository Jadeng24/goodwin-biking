import { Box } from "@mui/material";

import { CarouselHeader } from "../carousel-header/CarouselHeader";

interface CarouselImageProps {
  banner: any; // TODO give a type
}

export const CarouselImage = (props: CarouselImageProps): JSX.Element => {
  const { banner } = props;

  const { image } = banner?.attributes || {};
  const {
    data: {
      attributes: {
        formats: {
          large: { url },
        },
      },
    },
  } = image || {};

  return (
    <Box key={`carousel-image-${image.id}`}>
      <img
        src={`http://localhost:1337${url}`} //TODO use env
        alt={`carousel-${image.id}`}
        style={{
          width: "100%",
          height: "700px",
          objectFit: "cover", // keeps it responsive
          backgroundAttachment: "fixed",
        }}
      />

      <CarouselHeader banner={banner} />
    </Box>
  );
};
