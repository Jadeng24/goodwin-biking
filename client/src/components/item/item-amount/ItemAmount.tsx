import { IconButton, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

import { Flex } from "../../flex";
import { shades } from "../../../theme";

interface ItemAmountProps {
  count: number;
  onAdd: () => void;
  onRemove: () => void;
}

export const ItemAmount = (props: ItemAmountProps) => {
  const { count, onAdd, onRemove } = props;

  return (
    <Flex
      alignItems="center"
      background={shades.neutral[100]}
      borderRadius="3px"
    >
      <IconButton onClick={onRemove}>
        <Remove />
      </IconButton>
      <Typography color={shades.primary[300]}>{count}</Typography>
      <IconButton onClick={onAdd}>
        <Add />
      </IconButton>
    </Flex>
  );
};