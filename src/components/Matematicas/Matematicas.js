function Matematicas (props) {
    const { numero, ejecutarTriple } = props;

    //METODO PARA MOSTRAR EL DOBLE
    const ejecutarDoble = () => {
        var doble = numero * 2;
        console.log("El doble es " + doble);
    };

    return (<div>
        <h1>Soy mates {numero}</h1>
        <button onClick={() => ejecutarDoble()}>
            Doble (Hijo)
        </button>
        <button onClick={() => ejecutarTriple(numero)}>
            Triple (Padre)
        </button>
    </div>);
}
export default Matematicas;