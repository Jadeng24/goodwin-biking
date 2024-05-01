import { Box, Divider, IconButton, Typography } from "@mui/material";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../../../../../state";
import { useDispatch } from "react-redux";
import { Add, Close, Remove } from "@mui/icons-material";
import { shades } from "../../../../../theme";
import { Flex } from "../../../../../components";

interface CartItemsProps {
  items: Array<any>; // TODO give a type
}

export const CartItems = (props: CartItemsProps) => {
  const { items } = props;

  const dispatch = useDispatch();

  return (
    <>
      {items.map((item) => {
        // ( instead of {} ?)
        const url: string =
          item?.attributes?.image?.data?.attributes?.formats?.medium?.url;
        <Box key={`${item.attributes.name}-${item.id}`}>
          <Flex padding="15px 0" justifyContent="space-between">
            <Box flex="1 1 40%">
              {/* TODO: make separate component for each item alone */}
              <img
                alt={item?.name}
                width="123px"
                height="164px"
                src={`http://localhost:1337${url}`} // TODO: don't hardcode localhost with port here
              />
            </Box>

            <Box flex="1 1 60%">
              {/* TODO: make separate component for this */}
              <Flex marginBottom="5px" justifyContent="space-between">
                <Typography fontWeight="bold">
                  {item.attributes.name}
                </Typography>
                <IconButton
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                >
                  <Close />
                </IconButton>
              </Flex>

              <Typography>{item.attributes.shortDescription}</Typography>

              {/* TODO: make component */}
              <Flex alignItems="center" justifyContent="space-between">
                <Box
                  display="flex"
                  alignItems="center"
                  border={`1.5px solid ${shades.neutral[500]}`}
                >
                  <IconButton
                    onClick={() => dispatch(decreaseCount({ id: item.id }))}
                  >
                    <Remove />
                  </IconButton>
                  <IconButton
                    onClick={() => dispatch(increaseCount({ id: item.id }))}
                  >
                    <Add />
                  </IconButton>
                </Box>

                <Typography fontWeight="bold">
                  {item.attributes.price}
                </Typography>
              </Flex>
            </Box>
          </Flex>
          <Divider />
        </Box>;
      })}
    </>
  );
};
