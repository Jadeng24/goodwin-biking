import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Box, Button, Typography } from "@mui/material";

import { Flex } from "../flex";
import { shades } from "../../theme";
import { ItemAmount } from "./item-amount/ItemAmount";
import { addToCart } from "../../redux-store";
import { ItemPreviewInfo } from "./item-preview-info/ItemPreviewInfo";
import { BASE_URL } from "../../environment";

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

  const url = image?.data?.attributes?.formats?.medium?.url || "";

  return (
    <Box width={width} marginBottom="20px" alignSelf="center">
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        sx={{ "&:hover": { transition: ".3s", transform: "scale(1.02)" } }}
      >
        <img
          alt={item.name}
          width="300px"
          src={`${BASE_URL}${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ borderRadius: "4px", cursor: "pointer" }}
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
          <Flex justifyContent="center" alignItems="center" gap="12px">
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
                padding: "9px 14px",

                "&:hover": { background: shades.primary[300] },
              }}
            >
              <Typography variant="h4">Add to Cart</Typography>
            </Button>
          </Flex>
        </Box>
      </Box>

      <ItemPreviewInfo category={category} name={name} price={price} />
    </Box>
  );
};

export default Item;
