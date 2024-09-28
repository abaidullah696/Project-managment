import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const AddCheckIn = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '300px',
        backgroundImage: 'url(https://img.freepik.com/free-photo/view-island-middle-lake_181624-19253.jpg?ga=GA1.1.1407451264.1727376626&semt=ais_hybrid)', // Use your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '20px',
          bottom: '40px',
          zIndex: 1,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Hi! 👋 James Doe
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          It,s  nice to see you again.Keep visiting here regularly.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: '#673ab7', padding: '10px 30px', fontSize: '18px' }}
        >
          Add Check In
        </Button>
      </Box>
    </Box>
  );
};

export default AddCheckIn;
