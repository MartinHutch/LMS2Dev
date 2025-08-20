'use client';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TestimonialTitle from './TestimonialTitle';
import BlankCard from '../../shared/BlankCard';
import AnimationFadeIn from '../animation/Animation';

//Carousel slider for product
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './testimonial.css';

const SliderData = [
  {
    title: 'Darren Woods',
    subtitle: 'Fully featured',
    avatar: '/images/profile/user-1.jpg',
    subtext:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Minshan Cui',
    subtitle: 'Fully featured',
    avatar: '/images/profile/user-2.jpg',
    subtext:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Eminson Mendoza',
    subtitle: 'Fully featured',
    avatar: '/images/profile/user-3.jpg',
    subtext:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Darren Woods',
    subtitle: 'Fully featured',
    avatar: '/images/profile/user-4.jpg',
    subtext:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Minshan Cui',
    subtitle: 'Fully featured',
    avatar: '/images/profile/user-5.jpg',
    subtext:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Eminson Mendoza',
    subtitle: 'Fully featured',
    avatar: '/images/profile/user-6.jpg',
    subtext:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Testimonial = () => {
  const [value, setValue] = React.useState(5);

  const settings = {
    className: 'testimonial-slider',
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    (<Box
      sx={{
        pt: 14,
        pb: 11
      }}>
      <Container maxWidth="lg">
        <TestimonialTitle />
        <Box sx={{
          mt: 5
        }}>
          <AnimationFadeIn>
            <Slider {...settings}>
              {SliderData.map((slider, index) => (
                <Box key={index} sx={{
                  p: "15px"
                }}>
                  <BlankCard>
                    <CardContent>
                      <Stack direction="row">
                        <Avatar src={slider.avatar} alt="user" sx={{ width: 40, height: 40 }} />
                        <Box sx={{
                          ml: 2
                        }}>
                          <Typography variant="h6">{slider.title}</Typography>
                          <Typography color="textSecondary" variant="subtitle1">
                            {slider.subtitle}
                          </Typography>
                        </Box>
                        <Box sx={{
                          ml: "auto"
                        }}>
                          <Rating
                            size="small"
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Box>
                      </Stack>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "15px",
                          mt: 3
                        }}>
                        {slider.subtext}
                      </Typography>
                    </CardContent>
                  </BlankCard>
                </Box>
              ))}
            </Slider>
          </AnimationFadeIn>
        </Box>
      </Container>
    </Box>)
  );
};

export default Testimonial;
