"use client"; // Enable client-side component rendering

import { useEffect, useState } from 'react';
import { db } from '../../firebase'; // Ensure Firebase setup is correct
import { collection, getDocs } from 'firebase/firestore';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; // Material UI icon for Add button
import ProjectModal from './components/ProjectModal';
import AddProjectForm from './components/AddProjectForm';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Fetch Projects
  useEffect(() => {
    const fetchProjects = async () => {
      const projectCollection = collection(db, 'projects');
      const projectSnapshot = await getDocs(projectCollection);
      setProjects(projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProjects();
  }, []);

  // Open Modal for Project Details
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Header with title and add button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" fontWeight="bold">
          Project List
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setModalOpen(true)}
          sx={{ backgroundColor: '#4CAF50' }} // Adjust the color to match Figma
        >
          Add Project
        </Button>
      </Box>

      {/* Project List Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: '12px' }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#1976d2' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Project Name</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Description</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Date Created</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id} hover>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell>{new Date(project.createdAt).toLocaleString()}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpenModal(project)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}

      {/* Add Project Form */}
      <AddProjectForm open={modalOpen} onClose={() => setModalOpen(false)} />
    </Container>
  );
}
