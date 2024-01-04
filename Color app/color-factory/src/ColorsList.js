
// ColorsList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ColorsList = ({ colors }) => {
  return (
    <div>
      <h1>Colors List</h1>
      <ul>
        {colors.map((color) => (
          <li key={color.name}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add New Color</Link>
    </div>
  );
};

export default ColorsList;