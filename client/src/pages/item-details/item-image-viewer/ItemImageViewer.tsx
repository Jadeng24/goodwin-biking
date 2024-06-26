import { useEffect, useState } from "react";
import { Box, ImageList, ImageListItem, useMediaQuery } from "@mui/material";

import { Flex } from "../../../components";
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
    const imageFormats = image?.attributes?.formats;
    return imageFormats?.medium?.url || imageFormats?.small?.url;
  });

  useEffect(() => {
    setSelectedImage(mainImage);
  }, [mainImage]);
  // TODO: Don't show mainImage in imageList when there is only one image available
  const allImages = [...[mainImage], ...urlsForImages];

  const onImageSelection = (url: string) => {
    setSelectedImage(url);
  };

  const handlePrevious = (currentUrl: string) => {
    const currentIndex = allImages.indexOf(currentUrl);

    if (currentIndex === 0) {
      // Wraps back to end of images list
      setSelectedImage(allImages[allImages.length - 1]);
    } else {
      setSelectedImage(allImages[currentIndex - 1]);
    }
  };

  const handleNext = (currentUrl: string) => {
    const currentIndex = allImages.indexOf(currentUrl);

    if (currentIndex === allImages.length - 1) {
      // Wraps to beginning of images list
      setSelectedImage(allImages[0]);
    } else {
      setSelectedImage(allImages[currentIndex + 1]);
    }
  };

  return (
    <Box sx={{ minWidth: "44%", maxWidth: "100%" }}>
      <Flex
        width="100%"
        sx={{ aspectRatio: "1 / 1" }}
        justifyContent="center"
        alignItems="center"
        onClick={() => setIsPreviewModalOpen(true)}
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
            maxWidth: "550px",
            maxHeight: "600px",
          }}
        />
      </Flex>
      <ImageList cols={isMobile ? 4 : 3}>
        {allImages?.length &&
          allImages.map((url: string) => {
            const urlSettings = "?w=164&h=164&fit=crop&auto=format";

            return (
              <Flex onClick={() => onImageSelection(url)}>
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
        movePrevious={(url: string) => handlePrevious(url)}
        moveNext={(url: string) => handleNext(url)}
      />
    </Box>
  );
};

export default ItemImageViewer;
