"use client";

import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import ProjectModal from './components/ProjectModal';
import AddProjectForm from './components/AddProjectForm';

// Custom styles using Material UI's 'styled' function to match Figma design
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: '#f4f5f7', // Adjust the background as per Figma
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '20px 0',
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: '#3f51b5', // Match Figma primary color for the header
  color: '#fff',
  '& th': {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '16px', // Adjust the font size according to Figma
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3f51b5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#2c387e',
  },
  textTransform: 'none',
}));

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectCollection = collection(db, 'projects');
      const projectSnapshot = await getDocs(projectCollection);
      setProjects(projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProjects();
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Project List
      </Typography>
      
      <StyledTableContainer component={Paper}>
        <Table>
          <StyledTableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date Created</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell>{new Date(project.createdAt).toLocaleString()}</TableCell>
                <TableCell>
                  <StyledButton
                    variant="contained"
                    onClick={() => handleOpenModal(project)}
                  >
                    View Details
                  </StyledButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <div style={{ marginTop: '2rem' }}>
        <Typography variant="h5">Add a New Project</Typography>
        <AddProjectForm onProjectAdded={(newProject) => setProjects([...projects, newProject])} />
      </div>
    </>
  );
}
