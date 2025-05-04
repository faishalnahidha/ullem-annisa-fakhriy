import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from '@mui/material/Link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      minWidth="100%"
      sx={{
        bgcolor: '#0e696e',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          paddingY: { xs: 2, sm: 3 },
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={6}
            lg={12}
            sx={{
              textAlign: { xs: 'center', sm: 'left', lg: 'center' },
            }}
          >
            <Typography variant="body1" color="primary.contrastText">
              Made with{' '}
              <FavoriteIcon
                style={{
                  fontSize: 16,
                  color: '#f03434',
                  position: 'relative',
                  top: 2,
                  margin: '0 2px',
                }}
              />{' '}
              in Indonesia
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={12}
            sx={{
              textAlign: { xs: 'center', sm: 'right', lg: 'center' },
            }}
          >
            <Typography variant="body1" color="primary.contrastText">
              &copy; {year}{' '}
              <Link href="https://ullem.com" target="_blank" color="secondary.variant" underline='hover'>
                Ullem Undangan Online
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
