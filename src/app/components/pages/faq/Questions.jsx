import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { IconChevronDown } from '@tabler/icons-react';

const Questions = () => {
  return (
    (<Box>
      <Grid container spacing={3} sx={{
        justifyContent: "center"
      }}>
        <Grid
          size={{
            xs: 12,
            lg: 8
          }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 1
            }}>Frequently asked questions</Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{
              fontWeight: 400,
              textAlign: "center",
              mb: 4
            }}>Here to help you get the most form your Refinery 2.0</Typography>
          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h6"
                sx={{
                  px: 2,
                  py: 1
                }}>What is the Refinery?</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                sx={{
                  pt: 1,
                  px: 2
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                variant="h6"
                sx={{
                  px: 2,
                  py: 1
                }}>What should I study next?</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                sx={{
                  pt: 1,
                  px: 2
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                of future updates.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography
                variant="h6"
                sx={{
                  px: 2,
                  py: 1
                }}>How do I submit an assignment?</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                sx={{
                  pt: 1,
                  px: 2
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography
                variant="h6"
                sx={{
                  px: 2,
                  py: 1
                }}>I have a technical problem</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                sx={{
                  pt: 1,
                  px: 2
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>)
  );
};

export default Questions;
