/* eslint-disable @next/next/no-img-element */
import { FiberManualRecord } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const infoLeft = [
    { label: "Age", value: "22 Years" },
    { label: "Nationality", value: "Vietnam" },
    { label: "Freelance", value: "Available" },
    { label: "Languages", value: "Vietnamese, English" },
]

const infoRight = [
    { label: "Address", value: "Ho Chi Minh city" },
    { label: "Phone", value: "0888 390 790" },
    { label: "Email", value: "hrin2211@gmai.com" },
    { label: "Github", value: "catkhanh2212" },
]

function Info() {
    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
                gap: 8
            }}
        >
            <Box sx={{
                maxWidth: '400px',
                position: "relative",
                borderRadius: 6,
                overflow: "hidden"
            }}>
                <img
                    src="/image.jpg"
                    alt='image'
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '80px',
                        color: '#77B254',
                        fontFamily: "'Marcellus', serif",
                        lineHeight: 1.5,
                    }}
                >
                    Nguyen Le
                </Typography>

                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '80px',
                        color: 'white',
                        fontFamily: "'Marcellus', serif",
                        lineHeight: 1.5,
                    }}
                >
                    Cat Khanh
                </Typography>

                <Box sx={{
                    padding: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        {infoLeft.map((item, idx) => (
                            <Box key={idx} sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <FiberManualRecord sx={{ color: '#77B254', fontSize: '14px' }} />

                                <Typography sx={{fontFamily: "'Marcellus', serif", color: '#4C585B', fontSize: '20px', ml: 2}}> {item.label}: </Typography>
                                <Typography sx={{fontFamily: "'Marcellus', serif", color: 'white', fontSize: '20px', ml: 1}}> {item.value} </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        {infoRight.map((item, idx) => (
                            <Box key={idx} sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <FiberManualRecord sx={{ color: '#77B254', fontSize: '14px' }} />

                                <Typography sx={{fontFamily: "'Marcellus', serif", color: '#4C585B', fontSize: '20px', ml: 2}}> {item.label}: </Typography>
                                <Typography sx={{fontFamily: "'Marcellus', serif", color: 'white', fontSize: '20px', ml: 1}}> {item.value} </Typography>
                            </Box>
                        ))}
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Info