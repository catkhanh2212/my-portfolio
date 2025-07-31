import { Box, Typography } from '@mui/material';
import React from 'react';

function Greeting() {
    return (
        <Box >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1, 

                }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '150px',
                        color: 'white',
                        textShadow: '12px 12px 0 #222222',
                        lineHeight: 1.2, // giảm khoảng cách dòng nếu có
                    }}
                >
                    Hello
                </Typography>

                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '150px',
                        color: '#77B254',
                        textShadow: '12px 12px 0 #222222',
                        lineHeight: 1.2,
                    }}
                >
                    ,
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '150px',
                        color: 'white',
                        textShadow: '12px 12px 0 #222222',
                        lineHeight: 1.2,
                    }}
                >
                    I
                </Typography>

                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '150px',
                        color: 'white',
                        textShadow: '12px 12px 0 #222222',
                        lineHeight: 1.2,
                        ml: 4,
                    }}
                >
                    am
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '200px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '18px',
                            color: 'white',
                            flex: 1,
                            lineHeight: 1.5,
                        }}
                    >
                        Front-end Developer based in HoChiMinh city
                    </Typography>
                </Box>
            </Box>

            <Typography
                sx={{
                    fontWeight: 'bold',
                    fontSize: '150px',
                    color: 'white',
                    textShadow: '12px 12px 0 #222222',
                    lineHeight: 1.2,
                }}
            >
                Khanh
            </Typography>
        </Box>
    );
}

export default Greeting;
