import { Box, Divider, Typography } from "@mui/material";

import { Flex } from "../../flex";
import Item from "../../item/Item";
import { shades } from "../../../theme";
import CategoryImages from "../../category-images/CategoryImages";

interface BagCategorySectionProps {
  title: string;
  categoryImages: any[];
  bags: any[];
}
const BagCategorySection = (props: BagCategorySectionProps) => {
  const { bags, categoryImages, title } = props;

  return (
    <Box marginY="80px">
      <Typography variant="h2">{title}</Typography>
      <Box marginTop="20px" marginBottom="40px">
        <Divider />
      </Box>
      {bags && bags.length > 0 ? (
        <Flex
          gap="20px"
          flexWrap="wrap"
          justifyContent={bags.length === 1 ? "flex-start" : "space-around"}
        >
          {bags &&
            bags.map((item: { name: any; id: any }) => (
              <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
        </Flex>
      ) : (
        <Box marginBottom="40px">
          <Typography variant="h3" color={shades.neutral[700]}>
            Just Wait! Products for this category are currently in
            development...
          </Typography>
        </Box>
      )}
      <CategoryImages images={categoryImages} />
    </Box>
  );
};

export default BagCategorySection;
