'use client';
import React from 'react';
import { Box, Grid, Typography, Container, Divider, Stack, Tooltip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
    {
        id: 1,
        children: [
            {
                title: true,
                titleText: 'Useful Links',
            },
            {
                title: false,
                titleText: 'Useful Link 1',
                link: '/',
            },
            {
                title: false,
                titleText: 'Useful Link 2',
                link: '/',
            },
            {
                title: false,
                titleText: 'Useful Link 3',
                link: '/',
            },
            {
                title: false,
                titleText: 'Useful Link 4',
                link: '/',
            }
        ],
    },
    {
        id: 2,
        children: [
            {
                title: true,
                titleText: 'Policies',
            },
            {
                title: false,
                titleText: 'Complaints and Appeals Policy',
                link: 'https://www.professionalacademy.com/about-us/complaints-and-appeals-policy/',
            },
            {
                title: false,
                titleText: 'Privacy Policy',
                link: 'https://www.professionalacademy.com/privacy-policy/',
            },
            {
                title: false,
                titleText: 'Professional Development Policy',
                link: 'https://www.professionalacademy.com/about-us/professional-development-policy/',
            },
            {
                title: false,
                titleText: 'Apprenticeship Continuity Plan',
                link: 'https://www.professionalacademy.com/about-us/apprenticeship-continuity-plan/',
            },
            {
                title: false,
                titleText: 'Terms & Conditions',
                link: 'https://www.professionalacademy.com/about-us/terms/',
            },
            {
                title: false,
                titleText: 'Professional Qualifications',
                link: 'https://www.professionalacademy.com/professional-qualifications/',
            },
        ],
    },
    {
        id: 3,
        children: [
            {
                title: true,
                titleText: '',
            },
            {
                title: false,
                titleText: 'Equality & Diversity Policy',
                link: 'https://www.professionalacademy.com/about-us/equality-and-diversity-policy/',
            },
            {
                title: false,
                titleText: 'Well Being & Safety Policy',
                link: 'https://www.professionalacademy.com/Well Being-and-safety-policy/',
            },
            {
                title: false,
                titleText: 'Safeguarding & PREVENT Policy',
                link: 'https://www.professionalacademy.com/safeguarding-and-prevent-policy/',
            },
            {
                title: false,
                titleText: 'Assessment Malpractice and Maladministration Policy',
                link: 'https://www.professionalacademy.com/Assessment-Malpractice-and-Maladministration-Policy/',
            },
            {
                title: false,
                titleText: 'Apprenticeships',
                link: 'https://www.professionalacademy.com/apprenticeships/',
            }
        ],
    },
];

const Footer = () => {
    return (<>
        <Container maxWidth="lg" sx={{
            pt: {
                xs: '30px',
                lg: '60px'
            }
        }}>
            <Grid
                container
                spacing={3}
                sx={{
                    justifyContent: "space-between",
                    mb: 7
                }}>
                {footerLinks.map((footerlink, i) => (
                    <Grid
                        key={i}
                        size={{
                            xs: 6,
                            sm: 4,
                            lg: 2
                        }}>
                        {footerlink.children.map((child, i) => (
                            <React.Fragment key={i}>
                                {
                                    child.title ?
                                        <Typography
                                            sx={{
                                                fontSize: "17px",
                                                fontWeight: "600",
                                                mb: '22px'
                                            }}>{child.titleText}</Typography>
                                        :
                                        <Link href={child.link} ><Typography sx={{
                                            display: 'block',
                                            padding: '10px 0',
                                            fontSize: '15px',
                                            color: (theme) => theme.palette.text.primary,
                                            '&:hover': {
                                                color: (theme) => theme.palette.primary.main,
                                            }
                                        }} component="span">{child.titleText}</Typography></Link>
                                }
                            </React.Fragment>
                        ))}




                    </Grid>
                ))}
                <Grid
                    size={{
                        xs: 6,
                        sm: 6,
                        lg: 2
                    }}>
                    <Typography
                        sx={{
                            fontSize: "17px",
                            fontWeight: "600",
                            mb: '22px'
                        }}>Follow us</Typography>

                    <Stack direction="row" sx={{
                        gap: "20px"
                    }}>
                        <Tooltip title="Facebook">
                            <Link href="#">
                                <Image src="/images/frontend-pages/icons/icon-facebook.svg" alt="facebook" width={22} height={22} />
                            </Link>
                        </Tooltip>
                        <Tooltip title="Twitter">
                            <Link href="#">
                                <Image src="/images/frontend-pages/icons/icon-twitter.svg" alt="twitter" width={22} height={22} />
                            </Link>
                        </Tooltip>
                        <Tooltip title="Instagram">
                            <Link href="#">
                                <Image src="/images/frontend-pages/icons/icon-instagram.svg" alt="instagram" width={22} height={22} />
                            </Link>
                        </Tooltip>
                    </Stack>
                </Grid>
            </Grid>

            <Divider />

            <Box
                useflexgap="true"
                sx={{
                    py: "40px",
                    flexWrap: "wrap",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                <Stack
                    direction="row"
                    sx={{
                        gap: 1,
                        alignItems: "center"
                    }}>
                    <Image src="/images/logos/logoIcon.jpg" width={20} height={20} alt="logo" />
                    <Typography variant="body1" sx={{
                        fontSize: "15px"
                    }}>Copyright Cambridge Professional Academy 2025</Typography>
                </Stack>
                <Typography variant="body1" sx={{
                    fontSize: "15px"
                }}>Produced by <Typography component={Link} href="https://synapture.co.uk/" sx={{
                    color: "primary.main"
                }}>Synapture</Typography>.</Typography>
            </Box>
        </Container >
    </>);
};

export default Footer;
