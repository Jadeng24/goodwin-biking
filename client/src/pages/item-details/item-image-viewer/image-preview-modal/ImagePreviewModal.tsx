import {
  Close,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Box, IconButton, Modal, useMediaQuery } from "@mui/material";

import { Flex } from "../../../../components";

interface ImagePreviewModalProps {
  isOpen: boolean;
  moveNext: (url: string) => void;
  movePrevious: (url: string) => void;
  name: string;
  onClosePreview: () => void;
  selectedImage: string;
}

const ImagePreviewModal = (props: ImagePreviewModalProps) => {
  const {
    isOpen,
    moveNext,
    movePrevious,
    name,
    onClosePreview,
    selectedImage,
  } = props;

  const isMobile = useMediaQuery("(max-width:600px");

  const handlePrevious = () => {
    movePrevious(selectedImage);
  };

  const handleNext = () => {
    moveNext(selectedImage);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClosePreview}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        width={isMobile ? "96vw" : "70vw"}
        padding="20px"
        style={{
          background: "#fff",
          position: "absolute",
          top: isMobile ? "36%" : "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          outline: "none",
          maxHeight: "90vh",
          maxWidth: "90vw",
        }}
      >
        <Flex
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            background: "#fff",
            borderRadius: "50px",
          }}
        >
          <IconButton onClick={onClosePreview}>
            <Close color="success" />
          </IconButton>
        </Flex>

        <Flex
          justifyContent="space-between"
          width="100%"
          style={{
            position: "absolute",
            top: "45%",
            left: "0px",
            padding: isMobile ? "0px 6px" : "0px 20px",
          }}
        >
          <IconButton size="large" onClick={handlePrevious} key="previous">
            <KeyboardArrowLeft sx={{ color: "#fff", fontSize: "48px" }} />
          </IconButton>

          <IconButton size="large" onClick={handleNext} key="next">
            <KeyboardArrowRight sx={{ color: "#fff", fontSize: "48px" }} />
          </IconButton>
        </Flex>
        <img
          srcSet={selectedImage}
          src={selectedImage}
          alt={name}
          width="100%"
          style={{
            objectFit: "contain",
            borderRadius: "4px",
            maxHeight: "80vh",
            maxWidth: "80vw",
          }}
        />
      </Box>
    </Modal>
  );
};

export default ImagePreviewModal;
