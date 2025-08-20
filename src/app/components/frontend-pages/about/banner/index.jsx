'use client';
import React from "react";
import { Box, Stack, Typography, Container, Grid, Button } from "@mui/material";
import Link from "next/link";

const Banner = () => {


    return (
        (<Box
            sx={{
                bgcolor: "primary.light",

                paddingTop: {
                    xs: '40px',
                    lg: '100px',
                },

                paddingBottom: {
                    xs: '40px',
                    lg: '100px',
                }
            }}>
            <Container maxWidth="lg">
                <Grid container spacing={3} sx={{
                    justifyContent: "space-between"
                }}>
                    <Grid
                        size={{
                            xs: 12,
                            lg: 6
                        }}
                        sx={{
                            alignItems: "center"
                        }}>
                        <Typography
                            variant="h1"
                            sx={{
                                mb: 3,
                                lineHeight: 1.4,
                                fontWeight: 700,

                                fontSize: {
                                    xs: '34px', sm: '48px'
                                }
                            }}>Get to know the CPA Refinery 2.0</Typography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <Button variant="contained" size="large" component={Link} href="/auth/auth1/register">Create an account</Button>
                            <Button variant="outlined" size="large">Walkthrough</Button>
                        </Stack>
                    </Grid>
                    <Grid
                        size={{
                            xs: 12,
                            lg: 5
                        }}
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                        <Typography sx={{
                            lineHeight: 1.9
                        }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>)
    );
};

export default Banner;
