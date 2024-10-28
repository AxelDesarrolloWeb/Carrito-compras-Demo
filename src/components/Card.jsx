import { useState } from "react";
import "../style/card.css";
import PropTypes from "prop-types";

export const Card = ({ image, titulo, description, price, handleAgregar, handleQuitar, handleAumentar, handleDisminuir  }) => {

  const [added, setAdded] = useState(false);

  const clickAgregar = () => {
    handleAgregar();
    setAdded(true);
  };
  const clickQuitar = () => {
    handleQuitar();
    setAdded(false);
  };

  

  return (
    <div className="tarjeta">
      <img className="tajeta-img" src={image} alt={titulo} />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{description}</p>
        <p className="tarjeta-precio">{price}</p>

        {added ? (
          <button type="button" className="boton-quitar" onClick={clickQuitar}>
            Quitar del Carrito
          </button>
        ) : (
          <button type="button" className="boton-agregar" onClick={clickAgregar}>
            Agregar Carrito
          </button>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleAgregar: PropTypes.func.isRequired,
  handleQuitar: PropTypes.func.isRequired,
  handleAumentar: PropTypes.func,
  handleDisminuir: PropTypes.func,}