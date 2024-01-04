
// NewColorForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewColorForm = ({ onAddColor }) => {
  const [colorName, setColorName] = useState('');
  const [colorHex, setColorHex] = useState('#000000'); // Initial value set to black
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation if needed

    // Create a new color object
    const newColor = {
      name: colorName,
      hex: colorHex,
    };

    // Add the new color to the list
    onAddColor(newColor);

    // Redirect to the colors index page
    navigate('/colors');
  };

  return (
    <div>
      <h1>Add a New Color</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Color Name:
          <input
            type="text"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Color Hex:
          <input
            type="color"
            value={colorHex}
            onChange={(e) => setColorHex(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Color</button>
      </form>
      <br />
      <Link to="/colors">Back to Colors</Link>
    </div>
  );
};

export default NewColorForm;
