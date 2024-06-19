import {
  Box,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { Flex } from "../../flex";
import Item from "../../item/Item";
import { shades } from "../../../theme";

interface BagCategorySectionProps {
  title: string;
  categoryImages: any[];
  bags: any[];
}
const BagCategorySection = (props: BagCategorySectionProps) => {
  const { bags, categoryImages, title } = props;
  const isLessThanDesktop = useMediaQuery("(max-width:900px");

  const categoryImageStyles = { width: "100%", borderRadius: "8px" };

  const urlsForImages: string[] = categoryImages?.map((image) => {
    return image?.attributes?.formats?.large?.url as string;
  });

  const images: string[] = [] || [];
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
        <Box marginBottom="40px">
          <Typography variant="h3" color={shades.neutral[700]}>
            Just Wait! Products for this category are currently in
            development...
          </Typography>
        </Box>
      )}
      {urlsForImages && urlsForImages.length > 0 && (
        <Flex alignItems="center">
          <ImageList
            variant="quilted"
            cols={
              isLessThanDesktop
                ? urlsForImages.length === 2
                  ? 2
                  : 1
                : urlsForImages.length
            }
            sx={{ width: "100%" }}
            rowHeight={isLessThanDesktop ? 300 : 400}
          >
            {urlsForImages.map((url) => {
              const urlSettings = "?w=164&h=164&fit=crop&auto=format";

              return (
                <ImageListItem key={url}>
                  <img
                    srcSet={`${url}${urlSettings}`}
                    src={url}
                    loading="lazy"
                    alt={title}
                    style={{
                      //   cursor: "pointer",
                      borderRadius: "4px",
                    }}
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Flex>
      )}
    </Box>
  );
};

export default BagCategorySection;
