import { Theme, useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

interface customTheme extends Theme {
  palette: any;
}

interface ItemPreviewInfoProps {
  name: string;
  category: string;
  price: number;
}
export const ItemPreviewInfo = (props: ItemPreviewInfoProps) => {
  const { category, name, price } = props;

  const {
    palette: { neutral }, // TODO: info instead?
  } = useTheme() as customTheme;

  const categoryFormatted: string = category
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());

  return (
    <Box marginTop="3px">
      <Typography variant="subtitle2" color={neutral.dark}>
        {categoryFormatted}
      </Typography>
      <Typography>{name}</Typography>
      <Typography fontWeight="bold">{price}</Typography>
    </Box>
  );
};
