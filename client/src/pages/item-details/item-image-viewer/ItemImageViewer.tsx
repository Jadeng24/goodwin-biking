import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  Modal,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { Flex } from "../../../components";
import { shades } from "../../../theme";
import { Close } from "@mui/icons-material";
import ImagePreviewModal from "./image-preview-modal/ImagePreviewModal";

interface ItemImageViewerProps {
  name: string;
  mainImage: string;
  images: any[];
}

const ItemImageViewer = (props: ItemImageViewerProps) => {
  const { name, mainImage, images } = props;

  const isMobile = useMediaQuery("(max-width: 600px");
  const [selectedImage, setSelectedImage] = useState<string>(mainImage);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState<boolean>(false);

  const urlsForImages: string[] = images?.map((image) => {
    return image?.attributes?.formats?.medium?.url;
  });

  // TODO: Don't show mainImage in imageList when there is only one image available
  const allImages = [...[mainImage], ...urlsForImages];

  const onImageSelection = (url: string) => {
    setSelectedImage(url);
  };

  const closeImagePreview = () => {};
  const openImagePreview = () => {
    setIsPreviewModalOpen(true);
  };

  return (
    <Box sx={{ minWidth: "44%", maxWidth: "100%" }}>
      <Flex
        width="100%"
        sx={{ aspectRatio: "1 / 1" }}
        onClick={openImagePreview}
        // onMouseLeave={closeImagePreview}
      >
        <img
          srcSet={selectedImage}
          src={selectedImage}
          alt={name}
          loading="lazy"
          width="100%"
          style={{
            objectFit: "contain",
            borderRadius: "4px",
            cursor: "zoom-in",
          }}
        />
      </Flex>
      <ImageList cols={isMobile ? 4 : 3}>
        {allImages?.length &&
          allImages.map((url: string) => {
            const urlSettings = "?w=164&h=164&fit=crop&auto=format";

            return (
              <Flex onMouseEnter={() => onImageSelection(url)}>
                <ImageListItem key={url}>
                  <img
                    srcSet={`${url}${urlSettings}`}
                    src={url}
                    alt={name}
                    loading="lazy"
                    style={{
                      cursor: "pointer",
                      borderRadius: "4px",
                    }}
                  />
                </ImageListItem>
              </Flex>
            );
          })}
      </ImageList>

      <ImagePreviewModal
        isOpen={isPreviewModalOpen}
        name={name}
        onClosePreview={() => setIsPreviewModalOpen(false)}
        selectedImage={selectedImage}
      />
    </Box>
  );
};

export default ItemImageViewer;
