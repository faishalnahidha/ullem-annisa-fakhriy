import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';

import AltarIcon from '../../components/icons/AltarIcon.jsx';
import WeddingLocationIcon from '../../components/icons/WeddingLocationIcon.jsx';
import InstagramIcon from '../../components/icons/InstagramIcon.jsx';

import { bride, groom, akad, reception } from '../../../lib/variables.js';

const HandwritingTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Sofia, cursive',
  fontSize: '24px',
  color: theme.palette.text.dark,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '8px',
  minWidth: '256px',
  textAlign: 'center',
  color: '#fff',
  backgroundColor: theme.palette.secondary.main,
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: '0.25px',
  backgroundColor: theme.palette.background.default,
}));

const StyledInstagramIcon = styled(InstagramIcon)(({ theme }) => ({
  width: '18px',
  height: '18px',
  fill: theme.palette.primary.main,
}));

const LivestreamLogo = styled('img')(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));

export default function ContentSection() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        textAlign: 'center',
        px: 3,
        py: 6,
        flexGrow: 1,
        bgcolor: 'background.paper',
      }}
    >
      <Box pb={3}>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Assalamu&apos;alaikum Wr. Wb.
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Bismillahirrahmannirahim
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Dengan memohon rahmat Allah SWT, kami mengundang Saudara/i untuk hadir pada acara resepsi
          pernikahan kami
        </Typography>
      </Box>
      <Box py={3}>
        <Box mb={3}>
          <Fade direction="up">
            <div>
              <HandwritingTypography gutterBottom>{bride.name}</HandwritingTypography>
              <Button
                href={bride.instagramUrl}
                target="_blank"
                color="primary"
                startIcon={<StyledInstagramIcon />}
              >
                {bride.instagram}
              </Button>
              <Typography variant="body1" color="textPrimary">
                Putri Bp. {bride.father} & Ibu {bride.mother}
              </Typography>
            </div>
          </Fade>
        </Box>
        <Box mb={3}>
          <Typography variant="body2" color="textSecondary">
            dengan
          </Typography>
        </Box>
        <Box>
          <Fade direction="up" delay={300}>
            <div>
              <HandwritingTypography gutterBottom>{groom.name}</HandwritingTypography>
              <Button
                href={groom.instagramUrl}
                target="_blank"
                color="primary"
                startIcon={<StyledInstagramIcon />}
              >
                {groom.instagram}
              </Button>
              <Typography variant="body1" color="textPrimary">
                Putra Bp. {groom.father} & Ibu {groom.mother}
              </Typography>
            </div>
          </Fade>
        </Box>
      </Box>

      {/* #################### Cards Section ################## */}
      <Box py={3}>
        <AltarIcon style={{ width: '40px', height: '40px' }} />
      </Box>

      {/* ############## 'Akad Nikah' Card ############## */}
      <Box py={3}>
        <Zoom triggerOnce direction="up" duration={1500} delay={200}>
          <StyledCard elevation={0} width="100%">
            <Box p={2} pb={0}>
              <StyledChip label="Akad Nikah" />
            </Box>
            <CardContent>
              <Typography variant="body1" color="inherit" gutterBottom>
                <strong>{akad.date}</strong>
              </Typography>
              <Typography variant="body1" color="inherit" gutterBottom>
                pukul {akad.time}
              </Typography>
              <Typography variant="body1" color="inherit">
                di {akad.location}
                <br />
                {akad.locationMore}.&nbsp;
                <Link href={akad.locationUrl} target="_blank" color="primary">
                  Lihat peta
                </Link>
              </Typography>
            </CardContent>
          </StyledCard>
        </Zoom>
      </Box>
      {/* ############## 'Resepsi' Card ############## */}
      <Box pb={3}>
        <Zoom triggerOnce direction="up" duration={1500} delay={200}>
          <StyledCard elevation={0} width="100%">
            <Box p={2} pb={0}>
              <StyledChip label="Resepsi" />
            </Box>
            <CardContent>
              <Typography variant="h6" color="inherit" gutterBottom>
                {reception.date}
              </Typography>
              <Typography variant="body1" color="inherit" gutterBottom>
                pukul {reception.time}
              </Typography>
              <Typography variant="body1" color="inherit">
                di {reception.location}
                <br />
                {reception.locationMore}
              </Typography>
            </CardContent>
          </StyledCard>
        </Zoom>
      </Box>
      {/* ############## 'Pernikahan Virtual' Card ############## */}
      <Box pb={3}>
        <Zoom triggerOnce direction="up" duration={1500} delay={200}>
          <StyledCard width="100%" elevation={0} sx={{ backgroundColor: 'background.default' }}>
            <Box p={2} pb={0}>
              <StyledChip label="Pernikahan Virtual" />
            </Box>
            <CardContent>
              <Box>
                <LivestreamLogo
                  src="/img/logo/brand/a-logo-brand-instagram.svg"
                  alt="Instagram Logo"
                />
              </Box>
              <Box>
                <Button
                  href="#"
                  target="_blank"
                  variant="contained"
                  size="large"
                  color="primary"
                  disableElevation
                >
                  Lihat live streaming
                </Button>
              </Box>
            </CardContent>
          </StyledCard>
        </Zoom>
      </Box>
      <Box pt={3}>
        <WeddingLocationIcon style={{ width: '40px', height: '40px' }} />
      </Box>
    </Container>
  );
}
