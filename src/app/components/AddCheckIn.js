import { Box, Typography, Button } from '@mui/material';

export default function AddCheckIn() {
  return (
    <Box
      sx={{
        height: '400px',
        backgroundImage: 'url("https://img.freepik.com/free-photo/view-island-middle-lake_181624-19253.jpg?semt=ais_hybrid")', // Replace with your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Add Check-In
      </Typography>
      <Button variant="contained" color="secondary">
        Start Check-In
      </Button>
    </Box>
  );
}
