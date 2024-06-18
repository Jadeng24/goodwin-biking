import { Box, Divider, Typography } from "@mui/material";

import { Flex } from "../../flex";
import Item from "../../item/Item";
import { shades } from "../../../theme";

interface BagCategorySectionProps {
  title: string;
  categoryImages?: string[];
  bags: any[];
}
const BagCategorySection = (props: BagCategorySectionProps) => {
  const { bags, categoryImages, title } = props;

  const categoryImageStyles = { width: "100%", borderRadius: "8px" };

  return (
    <Box marginY="80px">
      <Typography variant="h2">{title}</Typography>
      <Box marginTop="20px" marginBottom="40px">
        <Divider />
      </Box>
      {bags && bags.length > 0 ? (
        <Flex gap="20px" flexWrap="wrap" justifyContent="space-around">
          {bags &&
            bags.map((item: { name: any; id: any }) => (
              <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
        </Flex>
      ) : (
        <Typography variant="h3" color={shades.neutral[700]}>
          Just Wait! Products for this category are currently in development...
        </Typography>
      )}

      {categoryImages && categoryImages.length > 0 && (
        <Flex>
          {categoryImages.map((image: any) => {
            const url = image?.attributes?.formats?.large?.url;
            //  todo: implement a ImageList mui component for 3+ images on a section
            return (
              <Flex>
                <img src={url} style={categoryImageStyles} />
              </Flex>
            );
          })}
        </Flex>
      )}
    </Box>
  );
};

export default BagCategorySection;
