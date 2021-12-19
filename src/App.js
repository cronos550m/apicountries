import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home/home"
import VerPais from "./components/verPais/verPais"
import VerPaises from "./components/paises/paises"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element = { <Home />} />
        <Route path="/todoslospaises" element = { <VerPaises />} />  
        <Route path="/pais" element = { <VerPais />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
