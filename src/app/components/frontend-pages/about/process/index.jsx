'use client';
import React from "react";
import { Box, Stack, Typography, Grid, Container, Divider } from "@mui/material";
import Image from "next/image";

const Process = () => {

    return (
        (<Box sx={{
            pt: 10
        }} >
            <Container maxWidth="lg">
                <Grid container spacing={3} sx={{
                    justifyContent: "center"
                }}>
                    <Grid
                        size={{
                            xs: 12,
                            lg: 7
                        }}
                        sx={{
                            textAlign: "center"
                        }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "700",
                                mt: 5,

                                fontSize: {
                                    lg: '40px',
                                    xs: '35px'
                                }
                            }}>The hassle-free learning process</Typography>
                    </Grid>
                </Grid>
                <br/>
                <Grid container spacing={3} sx={{
                    mt: 3
                }}>
                    <Grid
                        size={{
                            xs: 12,
                            sm: 6,
                            lg: 3
                        }}>
                        <Box
                            sx={{
                                mb: 3,
                                bgcolor: "warning.light",
                                borderRadius: "24px"
                            }}>
                            <Box
                                sx={{
                                    px: "20px",
                                    py: "32px"
                                }}>
                                <Stack
                                    direction="column"
                                    spacing={2}
                                    sx={{
                                        mt: 2,
                                        textAlign: "center"
                                    }}>
                                    <Box sx={{
                                        textAlign: "center"
                                    }}>
                                        <Image src="/images/svgs/icon-briefcase.svg" alt="icon1" width={40} height={40} />
                                    </Box>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 700
                                    }}>Study Scheuldes To Suit You</Typography>
                                    <Typography variant="body1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        size={{
                            xs: 12,
                            sm: 6,
                            lg: 3
                        }}>
                        <Box
                            sx={{
                                textAlign: "center",
                                mb: 3,
                                bgcolor: "secondary.light",
                                borderRadius: "24px",
                                overflow: "hidden"
                            }}>
                            <Box
                                sx={{
                                    px: "20px",
                                    pt: "26px",
                                    pb: "20px"
                                }}>
                                <Stack direction="column" spacing={2} sx={{
                                    textAlign: "center"
                                }}>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            px: 1,
                                            lineHeight: 1.4
                                        }}>Rich Library of Learning Materials</Typography>
                                    <Typography variant="body1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>

                                </Stack>
                            </Box>
                            <Box sx={{
                                height: "70px"
                            }}>
                                <Image src="/images/frontend-pages/homepage/feature-apps.png" alt="icon1" width={250} height={70} />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                            sm: 6,
                            lg: 3
                        }}>
                        <Box
                            sx={{
                                textAlign: "center",
                                mb: 3,
                                bgcolor: "success.light",
                                borderRadius: "24px"
                            }}>
                            <Box
                                sx={{
                                    px: "20px",
                                    py: "32px"
                                }}>
                                <Stack
                                    direction="column"
                                    spacing={2}
                                    sx={{
                                        mt: 2,
                                        textAlign: "center"
                                    }}>
                                    <Box sx={{
                                        textAlign: "center"
                                    }}>
                                        <Image src="/images/svgs/icon-speech-bubble.svg" alt="icon1" width={40} height={40} />
                                    </Box>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 700
                                    }}>Continous Feedback</Typography>
                                    <Typography variant="body1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        size={{
                            xs: 12,
                            sm: 6,
                            lg: 3
                        }}>
                        <Box
                            sx={{
                                textAlign: "center",
                                mb: 3,
                                bgcolor: "error.light",
                                borderRadius: "24px"
                            }}>
                            <Box
                                sx={{
                                    px: "20px",
                                    py: "32px"
                                }}>
                                <Stack
                                    direction="column"
                                    spacing={2}
                                    sx={{
                                        mt: 2,
                                        textAlign: "center"
                                    }}>
                                    <Box sx={{
                                        textAlign: "center"
                                    }}>
                                        <Image src="/images/svgs/icon-favorites.svg" alt="icon1" width={40} height={40} />
                                    </Box>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 700
                                    }}>Staged Progression</Typography>
                                    <Typography variant="body1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
            <Divider sx={{
                mt: '65px'
            }} />
        </Box>)
    );
};

export default Process;
