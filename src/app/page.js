// src/app/page.js
"use client"; // Mark this as a client-side component

import { useEffect, useState } from 'react';
import { db } from '../../firebase'; // Ensure this path is correct
import { collection, getDocs } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import ProjectModal from './components/ProjectModal'; // Correct path for ProjectModal
import AddProjectForm from './components/AddProjectForm'; // Correct path for AddProjectForm

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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date Created</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map(project => (
              <TableRow key={project.id}>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell>{new Date(project.createdAt).toLocaleString()}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleOpenModal(project)}>
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ProjectModal project={selectedProject} open={modalOpen} onClose={() => setModalOpen(false)} />

      <div style={{ marginTop: '2rem' }}>
        <h2>Add a New Project</h2>
        <AddProjectForm onProjectAdded={(newProject) => setProjects([...projects, newProject])} />
      </div>
    </>
  );
}
