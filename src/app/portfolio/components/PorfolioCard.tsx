/* eslint-disable @next/next/no-img-element */
import { AccountTree, Article, HourglassTop, OpenInNew } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

interface PortfolioProps {
    image: string,
    title: string,
    project: string,
    duration: string,
    framework: string,
    preview: string
}


function PorfolioCard({ image, title, project, duration, framework, preview }: PortfolioProps) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4
        }}>
            <Box sx={{
                borderRadius: 16,
                width: '60%'
            }}>
                <img src={image} alt='image' style={{ width: '100%', minHeight: '400px', borderRadius: '16px', display: 'block' }} />
            </Box>

            <Box sx={{
                width: '40%',
            }}>
                <Typography sx={{ color: 'white', fontSize: 36, fontFamily: "'Marcellus', serif", my: 2, mb: 4, fontWeight: 'bold' }}> {title} </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
                    <Article sx={{ color: '#77B254' }} />
                    <Typography sx={{ fontFamily: "'Marcellus', serif", fontSize: '18px', color: '#77B254' }}> Project: </Typography>
                    <Typography sx={{ fontFamily: "'Marcellus', serif", fontSize: '18px', color: 'white', ml: 2 }}> {project} </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
                    <HourglassTop sx={{ color: '#77B254' }} />
                    <Typography sx={{ fontFamily: "'Marcellus', serif", fontSize: '18px', color: '#77B254' }}> Duration: </Typography>
                    <Typography sx={{ fontFamily: "'Marcellus', serif", fontSize: '18px', color: 'white', ml: 2 }}> {duration} </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
                    <AccountTree sx={{ color: '#77B254' }} />
                    <Typography sx={{ fontFamily: "'Marcellus', serif", fontSize: '18px', color: '#77B254' }}> Framework: </Typography>
                    <Typography sx={{ fontFamily: "'Marcellus', serif", fontSize: '18px', color: 'white', ml: 2 }}> {framework} </Typography>
                </Box>

                <a href={preview} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Box sx={{
                        mt: 4,
                        p: 1.5,
                        px: 4,
                        backgroundColor: '#222222',
                        color: 'white',
                        textAlign: 'center',
                        borderRadius: 8,
                        display: 'inline-block',
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#333333' }
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center' }}>
                            <Typography sx={{ fontFamily: "'Marcellus', serif", fontSize: '18px', fontWeight: 'bold' }}> Preview </Typography>
                            <OpenInNew />
                        </Box>
                    </Box>
                </a>




            </Box>
        </Box>
    )
}

export default PorfolioCard