import Button from "../components/Button";

const Inventory = () => {
    return (
      <div className="page">
        <h1>Inventario</h1>
        <p>Contenido de la sección Inventario.</p>
        <Button onClick={() => alert("Presionado")}>Botón</Button>
      </div>
    );
  };
  
  export default Inventory;
  