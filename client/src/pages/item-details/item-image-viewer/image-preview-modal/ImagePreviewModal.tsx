import {
  Close,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Fab,
  IconButton,
  Modal,
  useMediaQuery,
} from "@mui/material";

import { Flex } from "../../../../components";
import PreviewActions from "./preview-actions/PreviewActions";

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
      <Flex
        width={isMobile ? "98vw" : "70vw"}
        padding="8vh 0px"
        justifyContent="center"
        style={{
          background: "#fff",
          position: "absolute",
          top: isMobile ? "45%" : "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          outline: "none",
          maxHeight: isMobile ? "94vh" : "90vh",
          maxWidth: isMobile ? "94vw" : "90vw",
          borderRadius: "14px",
        }}
      >
        <Flex
          style={{
            position: "absolute",
            top: "-6px",
            right: "-6px",
          }}
        >
          <Fab
            color="secondary"
            aria-label="add"
            size="small"
            onClick={onClosePreview}
          >
            <Close sx={{ color: "#fff" }} />
          </Fab>
        </Flex>

        <PreviewActions
          moveNext={() => moveNext(selectedImage)}
          movePrevious={() => movePrevious(selectedImage)}
        />

        <img
          srcSet={selectedImage}
          src={selectedImage}
          alt={name}
          width="100%"
          style={{
            objectFit: "contain",
            borderRadius: "4px",
            maxHeight: isMobile ? "100vh" : "80vh",
            maxWidth: isMobile ? "100vw" : "80vw",
          }}
        />
      </Flex>
    </Modal>
  );
};

export default ImagePreviewModal;
