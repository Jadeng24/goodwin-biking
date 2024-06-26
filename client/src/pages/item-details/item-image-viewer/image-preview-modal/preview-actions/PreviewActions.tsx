import PreviewAction from "./preview-action/PreviewAction";
import { ImageActionTypes } from "./types";
import { Flex } from "../../../../../components";

interface PreviewActionsProps {
  moveNext: () => void;
  movePrevious: () => void;
}

const PreviewActions = (props: PreviewActionsProps) => {
  const { moveNext, movePrevious } = props;

  return (
    <Flex
      justifyContent="space-between"
      width="100%"
      height="86%"
      alignItems="center"
      style={{
        position: "absolute",
        top: "8%",
        left: "0px",
      }}
    >
      <PreviewAction
        actionType={ImageActionTypes.Previous}
        movePrevious={movePrevious}
      />

      <PreviewAction actionType={ImageActionTypes.Next} moveNext={moveNext} />
    </Flex>
  );
};

export default PreviewActions;
