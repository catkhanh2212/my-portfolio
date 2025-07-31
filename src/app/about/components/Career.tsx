import { AccessTime, CardMembership, FiberManualRecord, FrontHand, School, Work, WorkspacePremium } from '@mui/icons-material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import React from 'react'

const certificates = [
  {
    time: '3/2024',
    degree: 'TOEIC LISTENING & READING: 875/990'
  },
  {
    time: '2/2025',
    degree: 'TOEIC SPEAKING & WRITING: 330/400'
  },
  {
    time: '11/2024',
    degree: 'AXON ACTIVE SCRUM MASTER CERTIFICATE'
  },
]

const soft_skills = [
  "Attention to details",
  "Teamwork",
  "High learnability",
  "Empathy for users",
  "Receptive to feedback"
]

function Career() {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        mx: 16,
        gap: 4
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          width: '100%',
          mx: 'auto',
        }}
      >

        {/* Education */}
        <Box sx={{
          flex: 0.5,
          position: 'relative',
          borderRadius: 8,
          minHeight: 180,
          backgroundColor: '#222222',
          p: 4,
          overflow: 'hidden'
        }}>

          <School sx={{ position: 'absolute', top: "50%", right: 0, transform: "translate(30%, -50%)", color: '#2d2d2d', fontSize: 120 }} />

          <Typography sx={{ color: '#77B254', fontSize: 24, fontWeight: 'bold', fontFamily: "'Marcellus', serif", }}> Education </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1, mt: 3 }}>
            <School sx={{ color: 'white' }} />
            <Typography sx={{ fontFamily: "'Marcellus', serif", color: 'white', fontWeight: '500' }}> Bach Khoa HCMC University</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1 }}>
            <AccessTime sx={{ color: 'white' }} />
            <Typography sx={{ fontFamily: "'Marcellus', serif", fontWeight: '500', color: 'white', mt: 0.5 }}> 9/2020 - 4/2025 </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1 }}>
            <WorkspacePremium sx={{ color: 'white' }} />
            <Typography sx={{ fontFamily: "'Marcellus', serif", fontWeight: '500', color: 'white', mt: 0.5 }}> Computer Science - Bachelor degree </Typography>
          </Box>

        </Box>

        {/* Experience */}
        <Box sx={{
          position: 'relative',
          borderRadius: 8,
          minHeight: 180,
          backgroundColor: '#222222',
          p: 4,
          flex: 0.5,
          overflow: 'hidden'
        }}>
          <Work sx={{ position: 'absolute', top: "50%", right: 0, transform: "translate(30%, -50%)", color: '#2d2d2d', fontSize: 120 }} />

          <Typography sx={{ color: '#77B254', fontSize: 24, fontWeight: 'bold', fontFamily: "'Marcellus', serif", }}> Experience </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1, mt: 3 }}>
            <Work sx={{ color: 'white' }} />
            <Typography sx={{ fontFamily: "'Marcellus', serif", color: 'white', fontWeight: '500' }}> TMA Solutions</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1 }}>
            <AccessTime sx={{ color: 'white' }} />
            <Typography sx={{ fontFamily: "'Marcellus', serif", fontWeight: '500', color: 'white', mt: 0.5 }}> 1/2024 - 4/2024 </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1 }}>
            <WorkspacePremium sx={{ color: 'white' }} />
            <Typography sx={{ fontFamily: "'Marcellus', serif", fontWeight: '500', color: 'white', mt: 0.5 }}> Internship </Typography>
          </Box>

        </Box>
      </Box>


      <Box
        sx={{
          display: 'flex',
          gap: 4,
          width: '100%',
          mx: 'auto',
        }}
      >

        {/* Certificates */}
        <Box sx={{
          flex: 0.5,
          position: 'relative',
          borderRadius: 8,
          minHeight: 180,
          backgroundColor: '#222222',
          p: 4,
          overflow: 'hidden'
        }}>

          <CardMembership sx={{ position: 'absolute', top: "50%", right: 0, transform: "translate(30%, -50%)", color: '#2d2d2d', fontSize: 120 }} />

          <Typography sx={{ color: '#77B254', fontSize: 24, fontWeight: 'bold', fontFamily: "'Marcellus', serif", }}> Certificates </Typography>

          <Timeline position="alternate">
            {certificates.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body2" color="text.secondary">
                    <Box sx={{ color: 'white' }}>
                      <Typography sx={{ fontFamily: "'Marcellus', serif" }}> {item.degree} </Typography>
                    </Box>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>

        </Box>

        {/* Soft Skills */}
        <Box sx={{
          position: 'relative',
          borderRadius: 8,
          minHeight: 180,
          backgroundColor: '#222222',
          p: 4,
          flex: 0.5,
          overflow: 'hidden'
        }}>
          <FrontHand sx={{ position: 'absolute', top: "50%", right: 0, transform: "translate(30%, -50%)", color: '#2d2d2d', fontSize: 120 }} />

          <Typography sx={{ color: '#77B254', fontSize: 24, fontWeight: 'bold', fontFamily: "'Marcellus', serif", }}> Soft skills </Typography>

          {soft_skills.map((skill, index) => (
            <Box key={index} sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              my: 1,
              p: 1,
              px: 2,
              backgroundColor: '#2d2d2d',
              borderRadius: 4,
              width: 'fit-content'
            }}>
              <FiberManualRecord sx={{ color: 'white', fontSize: '14px' }} />
              <Typography sx={{ fontFamily: "'Marcellus', serif", color: 'white', fontWeight: '500' }}> {skill} </Typography>
            </Box>
          ))}


        </Box>
      </Box>
    </Box>
  )
}

export default Career