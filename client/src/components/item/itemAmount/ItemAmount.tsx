import { IconButton, Typography } from "@mui/material";
import { shades } from "../../../theme";
import { Flex } from "../../flex";
import { Add, Remove } from "@mui/icons-material";

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
      <IconButton onClick={onAdd}>
        <Remove />
      </IconButton>
      <Typography color={shades.primary[300]}>{count}</Typography>
      <IconButton onClick={onRemove}>
        <Add />
      </IconButton>
    </Flex>
  );
};
