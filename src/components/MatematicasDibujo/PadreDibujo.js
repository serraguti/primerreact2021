import MatematicasDibujo from "./MatematicasDibujo";
import React, {useState} from 'react';

function PadreDibujo() {

    const ejecutarMultiplicacion = (num1, num2) =>{
        var multi = num1 * num2;
        setMultiplicacion(multi);
    };

    const [ multiplicacion, setMultiplicacion ] = useState(0);

    return (<div>
        <h1 style={{color:"blue"}}>
            La multiplicación es: {multiplicacion}
        </h1>
        <MatematicasDibujo Numero1="55" Numero2="88"
        ejecutarMultiplicacion={ejecutarMultiplicacion}/>
        <MatematicasDibujo Numero1="12" Numero2="14"
        ejecutarMultiplicacion={ejecutarMultiplicacion}/>
    </div>);
}

export default PadreDibujo;