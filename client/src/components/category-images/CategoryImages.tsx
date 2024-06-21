import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from "@mui/material";

import { Flex } from "../flex";
import { useNavigate } from "react-router-dom";
import ActionButton from "../action-button/ActionButton";

interface CategoryImagesProps {
  actionUrl?: string;
  fullWidth?: boolean;
  images: any[];
  linkText?: string;
}

const CategoryImages = (props: CategoryImagesProps) => {
  const { actionUrl, fullWidth = false, images, linkText } = props;
  const navigate = useNavigate();

  const isLessThanDesktop = useMediaQuery("(max-width:900px");

  const urlsForImages: string[] = images?.map((image) => {
    return image?.attributes?.formats?.large?.url as string;
  });

  const handleOnClick = () => {
    if (actionUrl) {
      navigate(actionUrl);
    }
  };

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
        sx={{ width: "100%", position: "relative", marginY: "2px" }}
        rowHeight={isLessThanDesktop ? 300 : 400}
      >
        {linkText && actionUrl && (
          <Button
            sx={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              zIndex: "4",
            }}
            onClick={handleOnClick}
          >
            <ActionButton linkText={linkText} />
          </Button>
        )}
        {urlsForImages.map((url) => {
          const urlSettings = "?w=164&h=164&fit=crop&auto=format";

          return (
            <ImageListItem key={url}>
              <img
                srcSet={`${url}${urlSettings}`}
                src={url}
                loading="lazy"
                alt={"goodwin biking"}
                onClick={handleOnClick}
                style={{
                  cursor: actionUrl ? "pointer" : "default",
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
