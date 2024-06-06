import React, { useState } from 'react';
import axios from 'axios';

const uploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    if (file) {
      formData.append('image', file);
    }

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading the image', error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Enter name" required />
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default uploadForm;
