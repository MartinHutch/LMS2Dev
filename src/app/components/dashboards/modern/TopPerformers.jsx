'use client';
import React from 'react';
import DashboardCard from '../../shared/DashboardCard';
import CustomSelect from '../../forms/theme-elements/CustomSelect';
import {
  MenuItem,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  TableContainer,
  Stack,
} from '@mui/material';
import TopPerformerData from './TopPerformerData';

const performers = TopPerformerData;

const TopPerformers = () => {
  // for select
  const [month, setMonth] = React.useState('1');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
   <></>
  );
};

export default TopPerformers;
