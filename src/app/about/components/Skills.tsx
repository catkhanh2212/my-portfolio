import { Box, Typography } from '@mui/material'
import React from 'react'
import SkillCard from './SkillCard'

const skills = [
    { name: "Javascript", icon: "/skills/javascript.png" },
    { name: "Typescript", icon: "/skills/typescript.png" },
    { name: "Reactjs", icon: "/skills/react.png" },
    { name: "Nextjs", icon: "/skills/next.png" },
    { name: "SQL", icon: "/skills/sql.png" },
    { name: "Github", icon: "/skills/git.png" },
    { name: "MUI", icon: "/skills/MUI.png" },
    { name: "Figma", icon: "/skills/figma.png" },
]

function Skill() {
    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                mx: 16,
                gap: 16
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
                    My Skills
                </Typography>
            </Box>


            <Box sx={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box display='grid'
                    gridTemplateColumns="repeat(4, 1fr)"
                    sx={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        rowGap: 12
                    }}>
                    {skills.map((skill, idx) => (
                        <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                            <SkillCard name={skill.name} icon={skill.icon} />
                            <Typography sx={{ fontFamily: "'Marcellus', serif", color: 'white', fontWeight: '500', fontSize: '16px' }}> {skill.name} </Typography>
                        </Box>

                    ))}


                </Box>
            </Box>


        </Box>
    )
}

export default Skill