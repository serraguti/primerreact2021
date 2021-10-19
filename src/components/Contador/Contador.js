//PARA PODER UTILIZAR ESTADOS DENTRO DE REACT
//NECESITAMOS IMPORTAR useState DE LA LIBRERIA React

import React, { useState } from 'react';

function Contador(props) {
    const {Inicio} = props;
    //NECESITAMOS DECLARAR UNA VARIABLE
    //PARA EL ESTADO Y LE INDICAMOS EL TIPO (State)
    //Y SU VALOR POR DEFECTO
    const [ numero, setNumero ] = useState(parseInt(Inicio));

    const sumarContador = () => {
        //DEBEMOS CAMBIAR EL VALOR DEL CONTADOR
        setNumero(numero + 1);
    };

    return (<React.Fragment>
        <h1>Ejemplo State React</h1>
        <h2 style={{color: "blue"}}>
            Valor del contador: {numero}
        </h2>
        <button onClick={() => sumarContador()}>
            Sumar contador
        </button>
        <button onClick={() => {
            setNumero(numero - 1);
        }}>
            Restar contador
        </button>
    </React.Fragment>);
}

export default Contador;