import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal } from "@mui/material";

import { Flex } from "../../../../components";

interface ImagePreviewModalProps {
  isOpen: boolean;
  name: string;
  onClosePreview: () => void;
  selectedImage: string;
}

const ImagePreviewModal = (props: ImagePreviewModalProps) => {
  const { isOpen, name, onClosePreview, selectedImage } = props;
  return (
    <Modal
      open={isOpen}
      onClose={onClosePreview}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <Box
          width="80vw"
          padding="20px"
          style={{
            background: "#fff",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
            cursor: "zoom-out",
          }}
          onClick={onClosePreview}
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
            <IconButton>
              <Close color="success" />
            </IconButton>
          </Flex>
          <img
            srcSet={selectedImage}
            src={selectedImage}
            alt={name}
            loading="lazy"
            width="100%"
            style={{
              objectFit: "contain",
              borderRadius: "4px",
            }}
          />
        </Box>
      </>
    </Modal>
  );
};

export default ImagePreviewModal;
