import { Card } from "../components/Card";
import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {
  const { productos } = useContext(ProductosContext);

  const {agregarCompra,eliminarCompra } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };
  

  return (
    <>
      <h1>Compras: </h1>
      <hr />

      {productos.map((producto) => (
        <Card
          key={producto.id}
          image={producto.image}
          titulo={producto.title}
          description={producto.description}
          precio={producto.price}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
        ></Card>
      ))}
    </>
  );
};
