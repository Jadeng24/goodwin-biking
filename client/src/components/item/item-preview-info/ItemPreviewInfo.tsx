import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

interface ItemPreviewInfoProps {
  name: string;
  category: string;
  price: number;
}

export const ItemPreviewInfo = (props: ItemPreviewInfoProps) => {
  const { category, name, price } = props;

  const {
    palette: { info },
  } = useTheme() as any;

  const categoryFormatted: string = category
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());

  return (
    <Box marginTop="3px">
      <Typography variant="subtitle2" color={info.dark}>
        {categoryFormatted}
      </Typography>
      <Typography variant="h4">{name}</Typography>
      <Typography fontWeight="bold">${price}</Typography>
    </Box>
  );
};
