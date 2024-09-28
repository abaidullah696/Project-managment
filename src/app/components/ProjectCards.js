import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Grid } from '@mui/material';

const ProjectCards = ({ projects }) => {
  return (
    <Grid container spacing={4}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Card sx={{ borderRadius: '15px', position: 'relative' }}>
            <CardMedia
              component="img"
              height="200"
              image={URL = 'https://img.freepik.com/free-photo/chair-nobody-summer-lifestyle-terrace_1203-4897.jpg?ga=GA1.1.1407451264.1727376626&semt=ais_hybrid'} 
              alt={project.name}
            />
            <CardContent>
              <Typography variant="h6">{project.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {project.description}
              </Typography>
            </CardContent>

            
            <Chip
              label="Checked In"
              color="primary"
              sx={{ position: 'absolute', top: '10px', right: '10px' }}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectCards;
