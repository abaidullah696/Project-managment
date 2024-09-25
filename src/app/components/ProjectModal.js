// components/ProjectModal.js
import { Modal, Box, Typography } from '@mui/material';

const ProjectModal = ({ project, open, onClose }) => {
  if (!project) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ p: 4, backgroundColor: 'white', margin: 'auto', width: 400 }}>
        <Typography variant="h6">{project.name}</Typography>
        <Typography variant="body1">{project.description}</Typography>
        <Typography variant="body2">Created At: {new Date(project.createdAt).toLocaleString()}</Typography>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
