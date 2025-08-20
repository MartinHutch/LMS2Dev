'use client';
import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import "./carousel.css"
import { useTheme } from "@mui/material/styles";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        (<Box
            className={className}
            onClick={onClick}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: 'pointer',
                position: 'absolute',
                top: { xs: 'unset ', sm: '-100px' },
                bottom: { xs: '-60px', sm: 'unset' },
                right: 0,
                backgroundColor: (theme) => theme.palette.grey[100],
                width: '48px',
                height: '48px',
                borderRadius: '50%'
            }}>
            <IconArrowRight />
        </Box>)
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        (<Box
            className={className}
            onClick={onClick}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: 'pointer',
                position: 'absolute',
                top: { xs: 'unset ', sm: '-100px' },
                bottom: { xs: '-60px', sm: 'unset' },
                right: '60px',
                backgroundColor: (theme) => theme.palette.grey[100],
                width: '48px',
                height: '48px',
                borderRadius: '50%'
            }}>
            <IconArrowLeft />
        </Box>)
    );
}




const LeaderShipCarousel = () => {

     const theme = useTheme();

    const slideStyle = {
        padding: "0 30px", // Add padding between slides
    };

     const UserBox = styled(Box)(() => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.background.default
        : "white",
    maxWidth: "calc(100% - 51px)",
    marginLeft: "15px",
    borderRadius: "8px",
    marginTop: "-30px !important",
    boxShadow: "0px 6px 12px rgba(127, 145, 156, 0.12)",
    marginBottom: "10px",
  }));


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        className: "slider variable-width",
        centerMode: false,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        (<Slider {...settings} className="leadership-carousel" style={{ marginLeft: '15px' }}>
            <div style={slideStyle}>
                <Image src='/images/frontend-pages/homepage/user1.jpg' alt="user-img" width={270} height={290} style={{ borderRadius: '16px', }}  />
                <UserBox bgcolor="white" px='10px' py='16px' textAlign="center" position="relative" zIndex="1">
                    <Typography variant="h5" sx={{
                        mb: 1
                    }}>Martin Hutchins</Typography>
                    <Typography variant="body1">CEO & Founder</Typography>
                </UserBox>
            </div>
            <div style={slideStyle}>
                <Image src='/images/frontend-pages/homepage/user2.jpg' alt="user-img" width={270} height={290} objectFit="cover" style={{ borderRadius: '16px' }} />
                <UserBox bgcolor="white" px='10px' py='16px' textAlign="center" position="relative" zIndex="1">
                    <Typography variant="h5" sx={{
                        mb: 1
                    }}>Philip Knowles</Typography>
                    <Typography variant="body1">Head of Learning DipM PGCE FCIM</Typography>
                </UserBox>
            </div>
            <div style={slideStyle}>
                <Image src='/images/frontend-pages/homepage/user3.jpg' alt="user-img" width={270} height={290} objectFit="cover" style={{ borderRadius: '16px' }} />
                <UserBox bgcolor="white" px='10px' py='16px' textAlign="center" position="relative" zIndex="1">
                    <Typography variant="h5" sx={{
                        mb: 1
                    }}>Diane Earles</Typography>
                    <Typography variant="body1">Senior Mentor MA MCIM, FMAAT, AIEM, Chartered Marketer</Typography>
                </UserBox>
            </div>
            <div style={slideStyle}>
                <Image src='/images/frontend-pages/homepage/user4.jpg' alt="user-img" width={270} height={290} objectFit="cover" style={{ borderRadius: '16px' }} />
                <UserBox bgcolor="white" px='10px' py='16px' textAlign="center" position="relative" zIndex="1">
                    <Typography variant="h5" sx={{
                        mb: 1
                    }}>Marcus Kilvington</Typography>
                    <Typography variant="body1">Tutor</Typography>
                </UserBox>
            </div>
            <div style={slideStyle}>
                <Image src='/images/frontend-pages/homepage/user5.jpg' alt="user-img" width={270} height={290} objectFit="cover" style={{ borderRadius: '16px' }} />
                <UserBox bgcolor="white" px='10px' py='16px' textAlign="center" position="relative" zIndex="1">
                    <Typography variant="h5" sx={{
                        mb: 1
                    }}>Dr Margaret Hyde</Typography>
                    <Typography variant="body1">Tutor BA (Hons) MA MRes DipM PGCE</Typography>
                </UserBox>
            </div>
            <div style={slideStyle}>
                <Image src='/images/frontend-pages/homepage/hazel.jpg' alt="user-img" width={270} height={290} objectFit="cover" style={{ borderRadius: '16px' }} />
                <UserBox bgcolor="white" px='10px' py='16px' textAlign="center" position="relative" zIndex="1">
                    <Typography variant="h5" sx={{
                        mb: 1
                    }}>Hazel Lott-Canning</Typography>
                    <Typography variant="body1">Head of Operations</Typography>
                </UserBox>
            </div>
            <div style={slideStyle}>
                <Image src='/images/frontend-pages/homepage/hayley.jpg' alt="user-img" width={270} height={290} objectFit="cover" style={{ borderRadius: '16px' }} />
                <UserBox bgcolor="white" px='10px' py='16px' textAlign="center" position="relative" zIndex="1">
                    <Typography variant="h5" sx={{
                        mb: 1
                    }}>Hayley O'Flynn</Typography>
                    <Typography variant="body1">eLearning Content Developer</Typography>
                </UserBox>
            </div>
        </Slider>)
    );
};

export default LeaderShipCarousel;
