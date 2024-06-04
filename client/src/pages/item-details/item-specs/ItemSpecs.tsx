import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

// SPECS
// color1
// weight1
// volume1
// material1
// length / width / height1
// max load capacity1
// type (top tube bag) */}

interface ItemSpecsProps {
  specs: any[];
}
const ItemSpecs = (props: ItemSpecsProps) => {
  const { specs } = props;
  return (
    <Box marginBottom="10px">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h4">SPECS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {specs?.map((spec) => (
            <Typography>{spec}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ItemSpecs;
