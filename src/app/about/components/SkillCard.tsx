/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material'
import React from 'react'

interface SkillCardProps {
    name: string,
    icon: string
  }

function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <Box sx={{
        backgroundColor: '#222222',
        width: 120,
        height: 120,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "rotate(-45deg)",
        "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
    }}>
        <img src={icon} alt={name} width={50} height={50} style={{ transform: "rotate(45deg)",}} />
    </Box>
  )
}

export default SkillCard