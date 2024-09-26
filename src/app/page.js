"use client";

import { useEffect, useState } from 'react';
import { db } from '../../firebase'; // Ensure Firebase is correctly set up
import { collection, getDocs } from 'firebase/firestore';
import { Container, Button } from '@mui/material';
import Navbar from './components/Navbar';
import AddCheckIn from './components/AddCheckIn';
import ProjectCards from './components/ProjectCards';
import AddProjectForm from './components/AddProjectForm';
import ProjectModal from './components/ProjectModal';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectDetailsModalOpen, setProjectDetailsModalOpen] = useState(false);

  // Fetch Projects
  useEffect(() => {
    const fetchProjects = async () => {
      const projectCollection = collection(db, 'projects');
      const projectSnapshot = await getDocs(projectCollection);
      setProjects(projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProjects();
  }, []);

  // Add Project to State
  const handleProjectAdded = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  // View Project Details
  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setProjectDetailsModalOpen(true);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Add Check-In Section */}
      <AddCheckIn />

      {/* Project Cards */}
      <Container sx={{ mt: 4 }}>
        <ProjectCards projects={projects} onViewDetails={handleViewDetails} />
      </Container>

      {/* Add Project Modal */}
      <AddProjectForm
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onProjectAdded={handleProjectAdded}
      />

      {/* View Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        open={projectDetailsModalOpen}
        onClose={() => setProjectDetailsModalOpen(false)}
      />

      {/* Button to Open Add Project Modal */}
      <Button
        variant="contained"
        color="secondary"
        sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
        onClick={() => setModalOpen(true)}
      >
        Add Project
      </Button>
    </>
  );
}
