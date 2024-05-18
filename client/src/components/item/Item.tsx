import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Box, Button } from "@mui/material";

import { Flex } from "../flex";
import { shades } from "../../theme";
import { ItemAmount } from "./item-amount/ItemAmount";
import { addToCart } from "../../redux-store";
import { ItemPreviewInfo } from "./item-preview-info/ItemPreviewInfo";

interface ItemProps {
  item: any;
  width?: string;
}

const Item = (props: ItemProps) => {
  const { item, width } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const [isHovered, setIsHovered] = useState(false);

  const { category, image, name, price } = item?.attributes || {};

  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image || {}; //TODO: improve this code

  return (
    <Box width={width} marginBottom="20px">
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={`${process.env.REACT_APP_UPLOAD_URL}${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="8%"
          left="0"
          width="100%"
          padding="0 20px"
          sx={{ transition: ".3s" }}
        >
          <Flex justifyContent="center" alignItems="center" gap="8px">
            <ItemAmount
              count={count}
              onRemove={() => setCount(Math.max(count - 1, 1))}
              onAdd={() => setCount(count + 1)}
            />

            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{
                background: shades.primary[500],
                color: "#fff",
                padding: "4px 14px",
                fontSize: "14px",
                "&:hover": { background: shades.primary[300] },
              }}
            >
              Add to Cart
            </Button>
          </Flex>
        </Box>
      </Box>

      <ItemPreviewInfo category={category} name={name} price={price} />
    </Box>
  );
};

export default Item;
