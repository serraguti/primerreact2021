function Saludo(props){
    //INVENTAMOS UN NOMBRE DE VARIABLE
    //QUE ES UN METODO PARA LLAMAR A ALGUNA
    //ACCION QUE TENGAMOS EN EL PADRE
    const { nombre, edad, metodoPadre } = props;
    return (
        <div className="App">
            <button onClick={() => metodoPadre(nombre + " " + edad)}>
                Llamar al método Padre
            </button>
            <h1>Saludando a {nombre} con edad {edad}!!!</h1>
    </div>);
}

export default Saludo;