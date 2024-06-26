import { Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

import { ImageActionTypes, ImagePreviewAction } from "../types";
import { Flex } from "../../../../../../components";

interface PreviewActionProps {
  actionType: ImagePreviewAction;
  moveNext?: () => void;
  movePrevious?: () => void;
}

const PreviewAction = (props: PreviewActionProps) => {
  const { actionType, moveNext, movePrevious } = props;

  const iconStyles = {
    color: "#fff",
    background: "rgba(0,0,0,0.3)",
    borderRadius: "35px",
    fontSize: "40px",
  };

  const actionDictionary: Record<ImageActionTypes, any> = {
    [ImageActionTypes.Previous]: {
      action: movePrevious,
      direction: "right",
      icon: <KeyboardArrowLeft fontSize="large" sx={iconStyles} />,
    },
    [ImageActionTypes.Next]: {
      action: moveNext,
      direction: "left",
      icon: <KeyboardArrowRight fontSize="large" sx={iconStyles} />,
    },
  };

  const action = actionDictionary[actionType];

  return (
    <Flex
      //   background={`linear-gradient(to ${action.direction}, rgba(255,255,255,0.8), rgba(255,255,255,0))}`}
      height="100%"
      alignItems="center"
      borderRadius="6px"
    >
      <Button
        size="medium"
        onClick={action.action}
        key="previous"
        sx={{ height: "100%" }}
      >
        {action.icon}
      </Button>
    </Flex>
  );
};

export default PreviewAction;
