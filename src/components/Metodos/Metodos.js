import { isCompositeComponentWithType } from "react-dom/test-utils";

function Metodos() {
    var ejemplo = "Soy una variable de ejemplo";

    const mostrarMensaje = () => {
        console.log("Has pulsado un botón");
        ejemplo = "He cambiado con el click!!!!";
        console.log(ejemplo);
    }

    //METODO CON PARAMETROS
    const dobleNumero = (numero) => {
        var doble = numero * 2;
        console.log(doble);
    }

    var estilofeo = {
        color: "white", backgroundColor: "fuchsia"
    };
    return (
        <div>
            <h1 style={estilofeo}>Ejemplo de métodos React</h1>
            <h2 style={{color:"red"}}> { ejemplo } </h2>
            <button onClick={ () => mostrarMensaje() }>
                Pulsa para mensaje
            </button>
            <hr/>
            <button onClick={ () => dobleNumero(7) }>
                Número doble
            </button>
        </div>
    );
}

export default Metodos;