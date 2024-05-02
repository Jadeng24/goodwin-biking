import { Flex } from "../flex";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Box, Button } from "@mui/material";

import { shades } from "../../theme";
import { ItemAmount } from "./itemAmount/ItemAmount";
import { addToCart } from "../../state";
import { ItemPreviewInfo } from "./itemPreviewInfo/ItemPreviewInfo";

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
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "blocked" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100"
          padding="0 5%"
        >
          <Flex justifyContent="space-between">
            <ItemAmount
              count={count}
              onAdd={() => setCount(Math.max(count - 1, 1))}
              onRemove={() => setCount(count + 1)}
            />

            <Button
              onClick={() => dispatch(addToCart({ ...item, count }))}
              sx={{ background: shades.primary[300], color: "#fff" }}
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
