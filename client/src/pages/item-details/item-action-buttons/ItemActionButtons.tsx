import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, IconButton, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

import { Flex } from "../../../components";
import { shades } from "../../../theme";
import { addToCart } from "../../../redux-store";
import ToasterMessage, {
  MessageType,
} from "../../../components/toaster-message/ToasterMessage";

interface ItemActionButtonsProps {
  item: any;
}
const ItemActionButtons = (props: ItemActionButtonsProps) => {
  const { item } = props;
  const { stock } = item?.attributes || {};
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    setShowSuccessMessage(true);
    dispatch(addToCart({ item: { ...item, count } }));
  };

  return stock && stock > 0 ? (
    <Flex alignItems="center" gap="20px" marginBottom="40px">
      <Flex
        alignItems="center"
        borderRadius="4px"
        border={`1.5px solid ${shades.neutral[300]}`}
        padding="2px 5px"
      >
        <IconButton
          disabled={Boolean(count === 1)}
          onClick={() => setCount(Math.max(count - 1, 0))}
        >
          <Remove />
        </IconButton>
        <Typography sx={{ p: "0 5px" }}>{count}</Typography>
        <IconButton onClick={() => setCount(count + 1)}>
          <Add />
        </IconButton>
      </Flex>
      <Button
        sx={{
          minWidth: "150px",
          padding: "11px 40px",
          background: shades.primary[500],
          color: "#fff",
          transition: ".3s",
          textWrap: "nowrap",
          "&:hover": {
            background: shades.primary[300],
            transform: "scale(1.02)",
          },
        }}
        onClick={handleAddToCart}
      >
        <Typography variant="h4">ADD TO CART</Typography>
      </Button>
      <ToasterMessage
        message="Your item has been successfully added to the cart!"
        onClose={setShowSuccessMessage}
        showMessage={showSuccessMessage}
        type={MessageType.success}
      />
    </Flex>
  ) : (
    <Flex alignItems="center" marginBottom="40px" gap="20px">
      <Flex
        alignItems="center"
        borderRadius="4px"
        border={`1.5px solid ${shades.neutral[300]}`}
        padding="2px 5px"
      >
        <IconButton disabled={true}>
          <Remove />
        </IconButton>
        <Typography sx={{ p: "0 5px", color: shades.neutral[500] }}>
          {count}
        </Typography>
        <IconButton disabled={true}>
          <Add />
        </IconButton>
      </Flex>
      <Button
        disabled={true}
        sx={{
          background: shades.neutral[500],
          color: "#fff",
          padding: "9px 14px",

          "&:hover": { background: shades.neutral[300] },
        }}
      >
        <Typography variant="h4">Out of stock</Typography>
      </Button>
    </Flex>
  );
};

export default ItemActionButtons;
