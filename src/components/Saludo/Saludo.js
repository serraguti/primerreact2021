function Saludo(props){
    var dato = "Y mañana será martes...";
    //var nombre = props.nombre;
    //var edad = props.edad;
    const { nombre, edad } = props;
    return (
        <div className="App">
            <h1>Saludando a {nombre} con edad {edad}!!!</h1>
    </div>);
}

export default Saludo;