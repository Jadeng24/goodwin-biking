import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { AlignItemsType, JustifyContentType } from "./types";

interface FlexProps {
  alignItems?: AlignItemsType;
  justifyContent?: JustifyContentType;
  flexDirection?: "row" | "column";
  background?: string;
}

/**
 * Used to extend Box. Accepts any Box props
 * Implement props if you want a default value
 */
export const Flex = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${(style) => style.flexDirection ?? "row"}
  justify-content: ${(style) => style.justifyContent ?? "start"};
  align-items: ${(style) => style.alignItems ?? "start"};
  background: ${(style) => style.background ?? "transparent"};
`;
