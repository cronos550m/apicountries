import "./pais.css"

function Pais(props){
    return (
        <div key={props.indice} className="containerPais">
            <p><span className="pais">Pais:</span> {props.item.name.official}</p>
            <p><span className="capital">Capital:</span> {props.item.capital}</p>
            <p><span className="poblacion">Poblacion:</span> {props.item.population}</p>
            <img className="bandera" src={props.item.flags.png} alt="Bandera de pais en cuestion"></img>
        </div>
        )
}

export default Pais