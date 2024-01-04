// DogList.js
import React from 'react';
import { Link } from 'react-router-dom';


const DogList = ({ dogs }) => {
  return (
    <div className="dog-list">
      <h1>Dog List</h1>
      <ul>
        {dogs.map(dog => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name}`}>
              <img src={dog.src} alt={dog.name} />
              <p>{dog.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;

