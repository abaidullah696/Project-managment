import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';

export default function ProjectCards({ projects, onViewDetails }) {
  return (
    <Grid container spacing={4}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="140"
              image={project.image || 'https://img.freepik.com/free-photo/wooden-table-background-cityscape_1153-3808.jpg?semt=ais_hybrid'} // Placeholder image or project image
              alt={project.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => onViewDetails(project)}>
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
