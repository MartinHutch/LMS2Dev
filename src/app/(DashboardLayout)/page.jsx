'use client';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import PageContainer from '@/app/components/container/PageContainer';
// components
import YearlyBreakup from '@/app/components/dashboards/modern/YearlyBreakup';
import MonthlyEarnings from '@/app/components/dashboards/modern/MonthlyEarnings';
import TopCards from '@/app/components/dashboards/modern/TopCards';
import RevenueUpdates from '@/app/components/dashboards/modern/RevenueUpdates';
import EmployeeSalary from '@/app/components/dashboards/modern/EmployeeSalary';
import Customers from '@/app/components/dashboards/modern/Customers';
import Projects from '@/app/components/dashboards/modern/Projects';
import Social from '@/app/components/dashboards/modern/Social';
import SellingProducts from '@/app/components/dashboards/modern/SellingProducts';
import WeeklyStats from '@/app/components/dashboards/modern/WeeklyStats';
import TopPerformers from '@/app/components/dashboards/modern/TopPerformers';

import ChildCard from '@/app/components/shared/ChildCard';
import * as React from 'react';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { IconChevronDown } from "@tabler/icons-react";

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    (
    
    <PageContainer title="Dashboard" description="Learning Dashboard">
      <h1>Welcome to your Refinery 2.0 Learning Dashboard</h1>
      <br/>

      <Box sx={{
        mt: 3
      }}>
        <Grid container spacing={3}>
          {/* column */}
          <Grid
            size={{
              xs: 12,
              lg: 12
            }}>
            <TopCards />
          </Grid>
          {/* column */}
          <Grid
            size={{
              xs: 12,
              lg: 8
            }}>
            <RevenueUpdates isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid
            size={{
              xs: 12,
              lg: 4
            }}>
            <Grid container spacing={3}>
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 12
                }}>
                <YearlyBreakup isLoading={isLoading} />
              </Grid>
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 12
                }}>
                <MonthlyEarnings isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
          {/* column */}
          <Grid
            size={{
              xs: 12,
              lg: 4
            }}>
            <EmployeeSalary isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid
            size={{
              xs: 12,
              lg: 4
            }}>
            <Grid container spacing={3}>
              <Grid
                size={{
                  xs: 12,
                  sm: 6
                }}>
                <Customers isLoading={isLoading} />
              </Grid>
              <Grid
                size={{
                  xs: 12,
                  sm: 6
                }}>
                <Projects isLoading={isLoading} />
              </Grid>
              <Grid size={12}>
                <Social />
              </Grid>
            </Grid>
          </Grid>
          {/* column */}
          <Grid
            size={{
              xs: 12,
              lg: 4
            }}>
            <SellingProducts />
          </Grid>
          {/* column */}
          <Grid
            size={{
              xs: 12,
              lg: 4
            }}>
            <WeeklyStats isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid
            size={{
              xs: 12,
              lg: 8
            }}>
            <TopPerformers />
          </Grid>
        </Grid>
      </Box>

      <ChildCard title="Flight Plan #1">
          <Accordion>
          <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
              <Typography variant="h6">Assignments</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography variant="subtitle1" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
              </Typography>
          </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
          <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
          >
              <Typography variant="h6">Tutors</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography variant="subtitle1" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
              </Typography>
          </AccordionDetails>
          </Accordion>
          <Divider />
          <Accordion disabled>
          <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel3a-content"
              id="panel3a-header"
          >
              <Typography variant="h6">Disabled Accordion</Typography>
          </AccordionSummary>
          </Accordion>
      </ChildCard>

            <ChildCard title="Flight Plan #2">
            <Accordion>
          <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
              <Typography variant="h6">Tutors</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography variant="subtitle1" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
              </Typography>
          </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
          <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
          >
              <Typography variant="h6">Assignments</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography variant="subtitle1" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
              </Typography>
          </AccordionDetails>
          </Accordion>
          <Divider />
          <Accordion disabled>
          <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel3a-content"
              id="panel3a-header"
          >
              <Typography variant="h6">Disabled Accordion</Typography>
          </AccordionSummary>
          </Accordion>
      </ChildCard>

      
    </PageContainer>)
  );
}
