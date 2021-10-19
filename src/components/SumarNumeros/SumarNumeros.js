import batman from './../../assets/images/batman.jpeg';


function SumarNumeros(props) {
    const { Numero1, Numero2} = props;

    var imagesize = {
        width: "150px", height: "150px"
    };

    const sumarNumero = (numero1, numero2) => {
        var num1 = parseInt(props.Numero1);
        var num2 = parseInt(props.Numero2);
        var suma = num1 + num2;
        console.log("La suma es " + suma);
    };

    return (<div className="App">
            <h1>Ejemplo sumar números básico</h1>
            <img src={batman} className="App-logo" style={imagesize}/>
            <button onClick={() => sumarNumero(5,9)}>
                Sumar números
            </button>
        </div>);
}

export default SumarNumeros;