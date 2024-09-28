"use client";

import { useEffect, useState } from 'react';
import { db } from '../../firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import Navbar from './components/Navbar';
import AddCheckIn from './components/AddCheckIn';
import ProjectCards from './components/ProjectCards';
import AddProjectForm from './components/AddProjectForm';
import ProjectModal from './components/ProjectModal';
import { Button,Typography } from '@mui/material';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectDetailsModalOpen, setProjectDetailsModalOpen] = useState(false);

  
  useEffect(() => {
    const fetchProjects = async () => {
      const projectCollection = collection(db, 'projects');
      const projectSnapshot = await getDocs(projectCollection);
      setProjects(projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProjects();
  }, []);

 
  const handleProjectAdded = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  
  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setProjectDetailsModalOpen(true);
  };

  return (
    <>
      
      <Navbar />

      
      <AddCheckIn />

      <div style={{ marginTop: '20px', padding: '0 20px' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Added CheckIns
        </Typography>
        <ProjectCards projects={projects} onViewDetails={handleViewDetails} />
      </div>

      
      <AddProjectForm
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onProjectAdded={handleProjectAdded}
      />

      
      <ProjectModal
        project={selectedProject}
        open={projectDetailsModalOpen}
        onClose={() => setProjectDetailsModalOpen(false)}
      />

      
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
