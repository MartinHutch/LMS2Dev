'use client';
import React from "react";
import { Grid, Typography } from "@mui/material";

const keys = [
    {
        text: 'Founded',
        title: '2002',
        subtext: 'When we founded CPA',
    },
    {
        text: 'Satisfaction',
        title: '97.6%',
        subtext: 'Learner Satisfaction',
    },
    {
        text: 'Learners',
        title: '10k+',
        isMargin: true,
        subtext: 'Learners with CPA',
    },
    {
        text: 'Courses',
        title: '25k+',
        isMargin: true,
        subtext: 'Courses Delivered',
    },
]

const Key = () => {

    return (
        (<Grid container spacing={2}>
            {keys.map((key, i) => (
                <Grid
                    key={i}
                    sx={{
                        marginTop: {
                            lg: key.isMargin ? '32px' : 0
                        }
                    }}
                    size={{
                        xs: 6,
                        sm: 6
                    }}>
                    <Typography
                        sx={{
                            color: "primary.main",
                            textTransform: "uppercase",
                            fontSize: "13px"
                        }}>{key.text}</Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            my: 1,
                            lineHeight: 1,
                            fontWeight: 700,

                            fontSize: {
                                xs: '34px', sm: '48px'
                            }
                        }}>{key.title}</Typography>
                    <Typography variant="body1">{key.subtext}</Typography>
                </Grid>
            ))}
        </Grid>)
    );
};

export default Key;
