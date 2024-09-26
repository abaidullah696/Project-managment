import { AppBar, Toolbar, Typography, Button, Avatar, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{  padding: '0.5rem' }}>
      <Toolbar>
        {/* Left - Logo */}
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <img src="https://img.freepik.com/free-vector/colorful-abstract-logo-with-letter-p_1017-1760.jpg?semt=ais_hybrid" alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
          <Typography variant="h6" component="div">
            
          </Typography>
        </Box>

        {/* Right - Feedback Button and Profile Picture */}
        <Box display="flex" alignItems="center">
          <Button variant="contained" color="secondary" sx={{ marginRight: '20px' }}>
            Feedback
          </Button>
          <Avatar alt="Profile" src="https://img.freepik.com/premium-photo/managing-user-permissions-roles-ecommerce-platforms_1104763-19809.jpg?semt=ais_hybrid" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
