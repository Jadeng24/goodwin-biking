import { Flex } from "../../../components";
import { shades } from "../../../theme";

const DrawerPill = () => {
  return (
    <Flex
      position="absolute"
      top="calc(50vh - 40px)"
      left="20px"
      height="80px"
      width="6px"
      background={shades.neutral[300]}
      borderRadius="10px"
    />
  );
};

export default DrawerPill;
