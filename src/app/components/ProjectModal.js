import { Modal, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledModalBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
  margin: 'auto',
  textAlign: 'center',
}));

const ProjectModal = ({ project, open, onClose }) => {
  if (!project) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalBox>
        <Typography variant="h6" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {project.description}
        </Typography>
        <Typography variant="body2">
          Created At: {new Date(project.createdAt).toLocaleString()}
        </Typography>
      </StyledModalBox>
    </Modal>
  );
};

export default ProjectModal;
