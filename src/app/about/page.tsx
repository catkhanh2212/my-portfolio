'use client'

import { Box, IconButton } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Skill from './components/Skills'
import Info from './components/Info'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import Career from './components/Career'

function About() {
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
            x: dir > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({
            x: dir > 0 ? '-100%' : '100%',
            opacity: 0
        })
    }

    return (
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", position: 'relative', width: '100%', overflow: 'hidden', height: '100vh' }}>
            <AnimatePresence initial={false} custom={direction}>
                {currentIndex === 0 && (
                    <motion.div
                        key='about'
                        variants={slideVariants}
                        custom={direction}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            padding: 24,
                            boxSizing: 'border-box',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Info />

                        <IconButton
                            onClick={handleNext}
                            sx={{
                                position: 'absolute',
                                right: 24,
                                width: 56,
                                height: 56,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'white',
                                backgroundColor: '#77B254',
                                '&:hover': { backgroundColor: '#5B913B' }
                            }}
                        >
                            <ArrowRight sx={{ fontSize: '36px' }} />
                        </IconButton>
                    </motion.div>


                )}

                {currentIndex === 1 && (
                    <motion.div
                        key="skills"
                        variants={slideVariants}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            padding: 24,
                            boxSizing: 'border-box',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Skill />

                        <IconButton
                            onClick={handleNext}
                            sx={{
                                position: 'absolute',
                                right: 24,
                                width: 56,
                                height: 56,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'white',
                                backgroundColor: '#77B254',
                                '&:hover': { backgroundColor: '#5B913B' }
                            }}
                        >
                            <ArrowRight sx={{ fontSize: '36px' }} />
                        </IconButton>

                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                position: 'absolute',
                                left: 24,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'white',
                                backgroundColor: '#77B254',
                                width: 56,
                                height: 56,
                                '&:hover': { backgroundColor: '#5B913B' }
                            }}
                        >
                            <ArrowLeft sx={{ fontSize: '36px' }} />
                        </IconButton>


                    </motion.div>
                )}

                {currentIndex === 2 && (
                    <motion.div
                        key="project" // ⚠️ Đã đổi key để không trùng
                        variants={slideVariants}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            padding: 24,
                            boxSizing: 'border-box',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white'
                        }}
                    >
                        <Career />

                        {currentIndex > 0 && (
                            <IconButton
                                onClick={handlePrev}
                                sx={{
                                    position: 'absolute',
                                    left: 24,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: 'white',
                                    backgroundColor: '#77B254',
                                    width: 56,
                                    height: 56,
                                    '&:hover': { backgroundColor: '#5B913B' }
                                }}
                            >
                                <ArrowLeft sx={{ fontSize: '36px' }} />
                            </IconButton>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    )
}

export default About
