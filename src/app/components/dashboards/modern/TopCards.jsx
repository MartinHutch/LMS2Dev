'use client';
import Image from "next/image";
import { Box, CardContent, Grid, Typography } from "@mui/material";


const topcards = [
  {
    icon: '/images/svgs/icon-user-male.svg',
    title: "Tutors",
    digits: "2",
    bgcolor: "primary",
  },
  {
    icon: '/images/svgs/icon-briefcase.svg',
    title: "Journeys",
    digits: "2",
    bgcolor: "warning",
  },
  {
    icon: '/images/svgs/icon-mailbox.svg',
    title: "Flight Plans",
    digits: "6",
    bgcolor: "secondary",
  },
  {
    icon: '/images/svgs/icon-favorites.svg',
    title: "Flights",
    digits: "12",
    bgcolor: "error",
  },
  {
    icon: '/images/svgs/icon-speech-bubble.svg',
    title: "Notifications",
    digits: "8",
    bgcolor: "success",
  },
  {
    icon: '/images/svgs/icon-connect.svg',
    title: "Connections",
    digits: "12",
    bgcolor: "info",
  },
];

const TopCards = () => {
  return (
    (<Grid container spacing={3}>
      {topcards.map((topcard, i) => (
        <Grid
          key={i}
          size={{
            xs: 12,
            sm: 4,
            lg: 2
          }}>
          <Box bgcolor={topcard.bgcolor + ".light"} textAlign="center">
            <CardContent>
              <Image src={topcard.icon} alt={"topcard.icon"} width="50" height="50" />
              <Typography
                color={topcard.bgcolor + ".main"}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
                {topcard.title}
              </Typography>
              <Typography
                color={topcard.bgcolor + ".main"}
                variant="h4"
                fontWeight={600}
              >
                {topcard.digits}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>)
  );
};

export default TopCards;
