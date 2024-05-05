import { Box } from "@mui/material";

import { CarouselHeader } from "../carousel-header/CarouselHeader";

interface CarouselImageProps {
  index: number;
  imageUrl: string;
}

export const CarouselImage = (props: CarouselImageProps): JSX.Element => {
  const { imageUrl, index } = props;
  return (
    <Box key={`carousel-image-${index}`}>
      <img
        src={imageUrl}
        alt={`carousel-${index}`}
        style={{
          width: "100%",
          height: "700px",
          objectFit: "cover", // keeps it responsive
          backgroundAttachment: "fixed",
        }}
      />

      <CarouselHeader />
    </Box>
  );
};
