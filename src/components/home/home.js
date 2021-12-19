import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Bienvenidos al buscador de paises</h1>
            <h3>Para continuar elija una de las siguientes opciones</h3>
            <div><Link to="/todoslospaises">Ver listado de paises</Link></div>
            <div><Link to="/pais">Buscar pais</Link></div>
        </div>
        )
}

export default Home;