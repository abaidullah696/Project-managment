import { Modal, Box, Typography, Button } from '@mui/material';

export default function ProjectModal({ project, open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '10px',
        }}
      >
        <Typography variant="h6" mb={2} fontWeight="bold">
          {project.name}
        </Typography>
        <Typography variant="body1" mb={2}>
          {project.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>
          Created At: {new Date(project.createdAt).toLocaleString()}
        </Typography>
        <Button variant="contained" color="primary" onClick={onClose} fullWidth>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
