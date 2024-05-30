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

const ItemSpecs = () => {
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
          {/* TODO: list out specs here in map  */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ItemSpecs;
