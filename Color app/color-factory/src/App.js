// App.js
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ColorsList from './ColorsList';
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';
import './App.css'; // Import your styles

const App = () => {
  const [colors, setColors] = useState([]);

  const addColor = (newColor) => {
    setColors((prevColors) => [newColor, ...prevColors]);
  };

  return (
    <div>
      <nav>
        <Link to="/colors">Colors</Link>
        <Link to="/colors/new">Add Color</Link>
      </nav>

      <Routes>
        <Route path="/colors" element={<ColorsList colors={colors} />} />
        <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm onAddColor={addColor} />} />
      </Routes>
    </div>
  );
};

export default App;