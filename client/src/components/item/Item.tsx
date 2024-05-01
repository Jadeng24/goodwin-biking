import { Box } from "@mui/material";
import { Flex } from "../flex";

export const Item = () => {
  return (
    <Flex
      marginTop="15px"
      flexDirection="column"
      alignItems="flex-start"
      background="red"
      width="50%"
      padding="50px"
    >
      <Box>item 1</Box>
      <Box>item 2</Box>
      <Box>item 3</Box>
      <Box>item 4</Box>
      <Box>item 5</Box>
    </Flex>
  );
};
