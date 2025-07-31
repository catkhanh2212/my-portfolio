'use client'

import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useActiveTab } from '../store/useActiveTab';

function Navbar() {
    const { active, setActive } = useActiveTab()
    const router = useRouter()
    const [hydrated, setHydrated] = useState(false)

    const handleClickTab = (tab: string) => {
        setActive(tab)
        router.push(`/${tab}`)
    }

    useEffect(() => {
        setHydrated(true)
    }, [])
    
    if (!hydrated) return null

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
        }}>
            <Box sx={{
                display: 'flex',
                gap: 4,
                color: 'white',
                flex: 1
            }}>
                <Typography onClick={() => handleClickTab("")} sx={{ fontFamily: "'Marcellus', serif", fontWeight: '500', fontSize: '18px', color: active == "" ? "#77B254" : 'white', cursor: 'pointer' }}>Home</Typography>
                <Typography onClick={() => handleClickTab("about")} sx={{ fontFamily: "'Marcellus', serif", fontWeight: '500', fontSize: '18px', color: active == "about" ? "#77B254" : 'white', cursor: 'pointer' }}>About</Typography>
                <Typography onClick={() => handleClickTab("portfolio")} sx={{ fontFamily: "'Marcellus', serif", fontWeight: '500', fontSize: '18px', color: active == "portfolio" ? "#77B254" : 'white', cursor: 'pointer' }}>Portfolio</Typography>
                <Typography onClick={() => handleClickTab("contact")} sx={{ fontFamily: "'Marcellus', serif", fontWeight: '500', fontSize: '18px', color: active == "contact" ? "#77B254" : 'white', cursor: 'pointer' }}>Contact</Typography>
            </Box>

            <Box sx={{
                display: 'flex',
                gap: 2
            }}>
                <Typography sx={{ fontFamily: "'Marcellus', serif", fontWeight: '500', fontSize: '18px', color: 'white' }}>Email: </Typography>
                <Typography sx={{ fontFamily: "'Marcellus', serif", fontWeight: '500', fontSize: '18px', color: '#77B254' }}>hrin2211@gmail.com</Typography>
            </Box>
        </Box>
    )
}

export default Navbar