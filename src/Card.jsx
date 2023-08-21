import React from 'react';
import './card.css';
import { useCount } from './CountContext';

const Card = ({ image, title, description }) => {
  const { count } = useCount();

  const [showDescription, setShowDescription] = React.useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className='card-image' />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">Contador de las tarjetas: {count}</p>
        <button className="btn btn-primary" onClick={toggleDescription}>
          {showDescription ? 'Ocultar Descripción' : 'Mostrar Descripción'}
        </button>
        {showDescription && <p className="card-text">{description}</p>}
      </div>
    </div>
  );
};

export default Card;
