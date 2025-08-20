'use client';
import React from "react";
import { Typography } from "@mui/material";

const ContentArea = () => {

    return (<>
        <Typography
            variant="h1"
            sx={{
                mb: 2,
                lineHeight: 1.4,
                fontWeight: 700,

                fontSize: {
                    xs: '34px', sm: '40px'
                }
            }}>CPA at a glance</Typography>
        <Typography sx={{
            lineHeight: 1.9
        }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
    </>);
};

export default ContentArea;
