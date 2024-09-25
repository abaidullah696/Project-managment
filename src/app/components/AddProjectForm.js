// src/app/components/AddProjectForm.js
import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { styled } from '@mui/system';

// Custom styles for the form
const StyledFormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3f51b5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#2c387e',
  },
  textTransform: 'none',
}));

const AddProjectForm = ({ onProjectAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'projects'), {
      name,
      description,
      createdAt: new Date().toISOString(),
    });
    const newProject = { id: docRef.id, name, description, createdAt: new Date().toISOString() };
    onProjectAdded(newProject);
    setName('');
    setDescription('');
  };

  return (
    <StyledFormBox component="form" onSubmit={handleSubmit}>
      <TextField
        label="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        fullWidth
      />
      <StyledButton type="submit" variant="contained">
        Add Project
      </StyledButton>
    </StyledFormBox>
  );
};

export default AddProjectForm;
