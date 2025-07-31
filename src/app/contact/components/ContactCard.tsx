import { Avatar, Box, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

interface ContactCardProps {
    icon: ReactNode;
    title: string;
    content: ReactNode;
}

function ContactCard({ icon, title, content }: ContactCardProps) {
    return (
        <Box sx={{
            backgroundColor: '#222222',
            borderRadius: 8,
            p: 4,
            px: 6, 
            textAlign: 'center',
            position: 'relative',
            minHeight: '180',
            m: 4,
        }}>
            <Avatar sx={{
                backgroundColor: '#222222',
                color: '#77B254',
                width: 64,
                height: 64,
                position: "absolute",
                top: -32,
                left: "50%",
                transform: "translateX(-50%)",
                border: '2px solid black'
            }}>
                {icon}
            </Avatar>

            <Typography sx={{ fontFamily: "'Marcellus', serif", color: '#bcbcbc', fontWeight: '600', mt: 2}}> {title} </Typography>

            <Typography sx={{ fontFamily: "'Marcellus', serif", color: 'white', fontSize: '20px', fontWeight: '600', mt: 1, mb: 2}}> {content} </Typography>

        </Box>
    )
}

export default ContactCard