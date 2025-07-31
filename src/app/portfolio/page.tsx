'use client'

import { Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react'
import PorfolioCard from './components/PorfolioCard';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

const projects = [
    {
        image: "/projects/pharmacy.png",
        title: "Pharmacy Store",
        project: "Website",
        duration: "1 month",
        framework: "Next.js",
        preview: "https://github.com/catkhanh2212/pharmacy-web-app"
    },
    {
        image: "/projects/livestream.jpg",
        title: "Livestream Platform",
        project: "Website",
        duration: "4 months",
        framework: "Next.js",
        preview: "https://drive.google.com/file/d/1wL6vGqPjbHhWlazqHcmHhb6cQDYH-cFC/view?usp=sharing"
    },
]

function Portfolio() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(1)

    const handleNext = () => {
        if (currentIndex < 2) {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % 3);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex((prev) => (prev - 1 + 3) % 3);
        }
    };

    const slideVariants = {
        enter: (dir: number) => ({
            y: dir > 0 ? '100%' : '-100%',
            opacity: 0,
            position: 'absolute'
        }),
        center: {
            y: '0%',
            opacity: 1,
            position: 'absolute'
        },
        exit: (dir: number) => ({
            y: dir > 0 ? '-100%' : '100%',
            opacity: 0,
            position: 'absolute'
        })
    }


    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                mx: 16,
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    maxWidth: { xs: "100%", md: "100px" }, // giảm chiều rộng
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography sx={{
                    color: 'white',
                    fontSize: '80px',
                    fontWeight: 'bold',
                    transform: "rotate(-90deg)",
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    lineHeight: 1,
                    flexShrink: 0,
                }}>
                    My Portfolio
                </Typography>
            </Box>


            <Box sx={{ flex: 1, position: 'relative', overflow: 'hidden', height: '100%', ml: 16 }}>
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <PorfolioCard {...projects[currentIndex]} />
                    </motion.div>
                </AnimatePresence>

            </Box>

            <Box sx={{
                right: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                ml: 8
            }}>
                <IconButton
                    onClick={handlePrev}
                    disabled={currentIndex == 0}
                    sx={{
                        backgroundColor: currentIndex === 0 ? '#393E46' : '#77B254',
                        color: 'white',
                        '&.Mui-disabled': {
                            backgroundColor: '#393E46',
                            color: 'white',
                            opacity: 1,
                        },
                        '&:hover': {
                            backgroundColor: '#A0C878'
                        }
                    }}>
                    <ArrowDropUp sx={{ fontSize: '40px' }} />
                </IconButton>
                <IconButton
                    onClick={handleNext}
                    disabled={currentIndex == projects.length - 1}
                    sx={{
                        backgroundColor: currentIndex === projects.length - 1 ? '#393E46' : '#77B254',
                        color: 'white',
                        '&.Mui-disabled': {
                            backgroundColor: '#393E46',
                            color: 'white',
                            opacity: 1,
                        },
                        '&:hover': {
                            backgroundColor: '#A0C878'
                        }
                    }}>
                    <ArrowDropDown sx={{ fontSize: '40px' }} />
                </IconButton>
            </Box>


        </Box>
    )
}

export default Portfolio