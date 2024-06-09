import { Flex } from "../../../components";
import { shades } from "../../../theme";

const FooterDivider = () => {
  return (
    <Flex
      width="100%"
      borderBottom={`solid 1px ${shades.neutral[300]} `}
      marginBottom="20px"
    />
  );
};

export default FooterDivider;
