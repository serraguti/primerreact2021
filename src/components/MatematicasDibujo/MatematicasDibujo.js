import React, {useState} from 'react';

function MatematicasDibujo(props){

    const [ suma, setSuma ] = useState(0);

    const sumarNumeros = () => {
        var sumar = parseInt(Numero1) + parseInt(Numero2);
        setSuma(sumar);
    };

    const { Numero1, Numero2, ejecutarMultiplicacion } = props;

    return (<div>
        <h1>Matematicas número1: {Numero1} y número 2: {Numero2}</h1>
        <h2 style={{color:"red"}}>La suma es {suma}</h2>
        <button onClick={() => sumarNumeros()}>
            Sumar números
        </button>
        <button onClick={() => ejecutarMultiplicacion(Numero1, Numero2)}>
            Multiplicar números
        </button>
    </div>)
}

export default MatematicasDibujo;