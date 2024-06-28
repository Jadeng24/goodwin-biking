import { Typography } from "@mui/material";

import { shades } from "../../theme";
import { Flex } from "../flex";

interface ItemPriceProps {
  price: number;
  discountPercent?: number;
  discountPrice?: number;
  hidePercentLabel?: boolean;
}

const ItemPrice = (props: ItemPriceProps) => {
  const {
    discountPercent,
    discountPrice,
    hidePercentLabel = false,
    price,
  } = props;

  return discountPrice ? (
    <Flex gap="8px" alignItems="center">
      <Typography
        fontSize={hidePercentLabel ? "14px" : "16px"}
        fontWeight="bold"
        sx={{ color: shades.secondary[500] }}
      >
        ${discountPrice}
      </Typography>
      <Typography
        sx={{ textDecoration: "line-through", color: shades.neutral[700] }}
      >
        ${price}
      </Typography>
      {!hidePercentLabel && (
        <Flex
          padding="2px 6px"
          background={shades.neutral[300]}
          sx={{ borderRadius: "3px" }}
        >
          <Typography fontWeight="bold" variant="h4">
            {discountPercent}% off
          </Typography>
        </Flex>
      )}
    </Flex>
  ) : (
    <Typography fontSize="14px" fontWeight="bold">
      ${price}
    </Typography>
  );
};

export default ItemPrice;
