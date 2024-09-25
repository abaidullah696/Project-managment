// src/app/components/AddProjectForm.js
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase'; // Make sure this path is correct

const AddProjectForm = ({ onProjectAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'projects'), {
      name,
      description,
      createdAt: new Date().toISOString()
    });
    const newProject = { id: docRef.id, name, description, createdAt: new Date().toISOString() };
    onProjectAdded(newProject); // Update the projects list in page.js
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">Add Project</Button>
    </form>
  );
};

export default AddProjectForm;
