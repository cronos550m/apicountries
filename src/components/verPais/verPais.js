import { Component } from "react";
import { Link } from "react-router-dom";
import "./verPais.css"
import Pais from "../pais/pais"

class VerPais extends Component {
    constructor(props){
        super(props)
        this.state={
            pais:[],
            busquedaPais:"argentina",
            url:"https://restcountries.com/v3.1/name/"
        }
    }

    apiCall(url, pais, consecuencia){
        fetch(url + pais)
            .then(response => response.json())
            .then(data => consecuencia(data))
    }

    actualizarData = (data) => {
        this.setState({pais:data})
    }
    componentDidMount(){
        this.apiCall("https://restcountries.com/v3.1/name/", this.state.busquedaPais, this.actualizarData)
        console.log("Componente montado")
    }
    componentDidUpdate(){
        console.log("Componente actualizado")
    }
    buscarNuevoPais = (data) => {
        let paisEscrito = document.getElementById("busquedaPais").value
        this.setState({busquedaPais:paisEscrito})
        this.apiCall(this.state.url, paisEscrito, this.actualizarData)
        document.getElementById("busquedaPais").value = ""
    }

    render(){
        let elPais = this.state.pais
        let contenido;
        if (elPais.length === 0){
            contenido = <h3>Cargando...</h3>
        }
        else {
            contenido = 
            <div className="container-pais">
                {elPais.map((pais, i)=>
                    <Pais item={pais} indice={i} />
                )}

            </div>
        }
        return(
            <div>
                <h1>Buscar pais</h1>
                <div>
                    <input id="busquedaPais" type="text" placeholder="Que pais querés buscar?"></input>
                    <button onClick={() => this.buscarNuevoPais()}>Buscar pais</button>
                </div>
                <div><Link to="/">Volver a la pagina principal</Link></div>
                <div>{this.state.contador}</div>
                {contenido}
            </div>
        )
    }
}

export default VerPais