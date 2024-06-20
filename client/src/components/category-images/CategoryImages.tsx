import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";

import { Flex } from "../flex";

interface CategoryImagesProps {
  fullWidth?: boolean;
  images: any[];
}

const CategoryImages = (props: CategoryImagesProps) => {
  const { fullWidth = false, images } = props;

  const isLessThanDesktop = useMediaQuery("(max-width:900px");

  const urlsForImages: string[] = images?.map((image) => {
    return image?.attributes?.formats?.large?.url as string;
  });

  return urlsForImages && urlsForImages.length > 0 ? (
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
                alt={"goodwin biking"}
                style={{
                  //   cursor: "pointer",
                  borderRadius: fullWidth ? 0 : "4px",
                }}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Flex>
  ) : (
    <></>
  );
};

export default CategoryImages;
