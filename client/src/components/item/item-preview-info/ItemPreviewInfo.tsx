import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

import ItemPrice from "../../item-price/ItemPrice";

interface ItemPreviewInfoProps {
  item: any;
}

export const ItemPreviewInfo = (props: ItemPreviewInfoProps) => {
  const { item } = props;
  const { category, discountPercent, discountPrice, name, price } =
    item?.attributes;

  const {
    palette: { info },
  } = useTheme() as any;

  const categoryFormatted: string = category
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str: string) => str.toUpperCase());

  return (
    <Box marginTop="3px">
      <Typography variant="subtitle2" color={info.dark}>
        {categoryFormatted}
      </Typography>
      <Typography variant="h4">{name}</Typography>
      <ItemPrice
        price={price}
        discountPercent={discountPercent}
        discountPrice={discountPrice}
      />
    </Box>
  );
};
