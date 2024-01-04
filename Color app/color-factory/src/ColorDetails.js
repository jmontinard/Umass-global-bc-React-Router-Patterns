import React from 'react';
import { Link, useParams, Navigate} from 'react-router-dom';

const ColorDetails = ({ colors }) => {
  const { color } = useParams();
  const selectedColor = colors.find((c) => c.name === color);

  if (!selectedColor) {
    // Redirect to colors index or handle appropriately
    return <Navigate to="/colors" />;
  }

  return (
    <div>
      <h1>{selectedColor.name} Color Details</h1>
      <div
        style={{
          backgroundColor: selectedColor.hex,
          color: '#ffffff', // Add logic to determine text color based on background color
          padding: '20px', // Add styling as needed
          margin: '10px',
        }}
      >
             <h1 className='colorDetial-header'>Color Details</h1>
      <p>Name: {selectedColor.name}</p>
      <p>Hex: {selectedColor.hex}</p>
      <Link to="/colors">Back to Colors</Link>
ß
      </div>
    </div>
  );
};

export default ColorDetails;
