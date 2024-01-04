import React from 'react';
import { useParams, Link } from 'react-router-dom';


const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const currentDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  if (!currentDog) {
    return <div className="dog-details">Dog not found</div>;
  }

  return (
    <div className="dog-details">
      <h1>{currentDog.name}</h1>
      <img src={currentDog.src} alt={currentDog.name} />
      <p>Age: {currentDog.age}</p>
      <ul>
        {currentDog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Back to Dog List</Link>
    </div>
  );
};

export default DogDetails;
