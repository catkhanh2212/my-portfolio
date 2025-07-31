import { Box, Typography } from '@mui/material'
import React from 'react'
import ContactCard from './components/ContactCard'
import { Email, Facebook, GitHub, Hub, LinkedIn, Phone, Place } from '@mui/icons-material'

function page() {
    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 24,
                px: 8,
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
                        Get in touch
                    </Typography>
                </Box>


                <Box sx={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box display='grid'
                        gridTemplateColumns="repeat(2, 1fr)"
                        sx={{
                            flex: 1,
                            gap: 4,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <ContactCard
                            icon={<Email />}
                            title="Email"
                            content="hrin2211@gmail.com"
                        />

                        <ContactCard
                            icon={<Phone />}
                            title="Phone"
                            content="0888 390 790"
                        />

                        <ContactCard
                            icon={<Place />}
                            title="Address"
                            content="Ho Chi Minh city, Viet Nam"
                        />

                        <ContactCard
                            icon={<Hub />}
                            title="Network"
                            content={
                                <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '20px', mt: 1, textAlign: 'center', justifyContent: 'center', gap: 2 }}>
                                    <a
                                        href="https://www.facebook.com/nguyenlecatkhanh/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'white', fontSize: '20px' }}
                                    >
                                        <Facebook />
                                    </a>

                                    <a
                                        href="https://github.com/catkhanh2212"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'white', fontSize: '20px' }}
                                    >
                                        <GitHub />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/khanh-nguyen-le-cat-31b0a027b/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'white', fontSize: '20px' }}
                                    >
                                        <LinkedIn />
                                    </a>
                                </Box>
                            }
                        />

                    </Box>
                </Box>


        </Box>
    )
}

export default page