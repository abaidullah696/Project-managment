import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar, Box } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        <Typography variant="h6" component="div">
          Logo
        </Typography>

        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FeedbackIcon />}
            sx={{ marginRight: '20px' }}
          >
            Feedback
          </Button>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar alt="User Profile" src="https://img.freepik.com/premium-photo/managing-user-permissions-roles-ecommerce-platforms_1104763-19809.jpg?ga=GA1.1.1407451264.1727376626&semt=ais_hybrid" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
