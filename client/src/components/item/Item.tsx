import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Box, Button, Typography } from "@mui/material";

import { Flex } from "../flex";
import { shades } from "../../theme";
import { ItemAmount } from "./item-amount/ItemAmount";
import { addToCart } from "../../redux-store";
import { ItemPreviewInfo } from "./item-preview-info/ItemPreviewInfo";

import ToasterMessage, { MessageType } from "../toaster-message/ToasterMessage";

interface ItemProps {
  item: any;
}

const Item = (props: ItemProps) => {
  const { item } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const { category, discountPercent, image, name, price, stock } =
    item?.attributes || {};

  const url =
    image?.data?.attributes?.formats?.medium?.url ||
    image?.data?.attributes?.formats?.small?.url ||
    "";

  const handleAddToCart = () => {
    setShowSuccessMessage(true);
    dispatch(addToCart({ item: { ...item, count } }));
  };

  return (
    <Box marginBottom="20px" alignSelf="center">
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        sx={{ "&:hover": { transition: ".3s", transform: "scale(1.02)" } }}
      >
        <img
          alt={item.name}
          width="300px"
          src={`${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ borderRadius: "4px", cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="8%"
          left="0"
          width="100%"
          paddingX="20px"
          sx={{ transition: ".3s" }}
        >
          {stock && stock > 0 ? (
            <Flex justifyContent="center" alignItems="center" gap="12px">
              <ItemAmount
                count={count}
                onRemove={() => setCount(Math.max(count - 1, 1))}
                onAdd={() => setCount(count + 1)}
              />
              <Button
                onClick={handleAddToCart}
                sx={{
                  background: shades.primary[500],
                  color: "#fff",
                  padding: "9px 14px",

                  "&:hover": { background: shades.primary[300] },
                }}
              >
                <Typography variant="h4">Add to Cart</Typography>
              </Button>
            </Flex>
          ) : (
            <Flex justifyContent="center" alignItems="center">
              <Button
                onClick={() => navigate(`/item/${item.id}`)}
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
          )}
        </Box>
      </Box>

      <ItemPreviewInfo item={item} />
      <ToasterMessage
        message="Your item has been successfully added to the cart!"
        onClose={setShowSuccessMessage}
        showMessage={showSuccessMessage}
        type={MessageType.success}
      />
    </Box>
  );
};

export default Item;
