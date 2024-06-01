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

interface ItemActionButtonProps {
  item: any;
}
const ItemActionButton = (props: ItemActionButtonProps) => {
  const { item } = props;

  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    setShowSuccessMessage(true);
    dispatch(addToCart({ item: { ...item, count } }));
  };

  return (
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
  );
};

export default ItemActionButton;
