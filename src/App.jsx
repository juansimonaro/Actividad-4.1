import { useState } from 'react'
import style from './App.module.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './componentes/Navbar/Navbar'
import Nosotros from './pages/Nosotros/Nosotros'
import Home from './pages/Home/Home'
import Detalles from './pages/Detalles/Detalles'
import LunaIcon from './assets/luna-icon.png'
import SolIcon from './assets/sol-icon.png'

function App() {
  const temaGuardado = localStorage.getItem('tema')
  const [tema, setTema] = useState(temaGuardado || 'oscuro');
  const temaEsOscuro = tema === 'oscuro';

  const colocarTema = (temaClickeado) => {
    localStorage.setItem('tema', temaClickeado);
    setTema(temaClickeado)
  }

  return (
    <Router>
      <Navbar />
      <div className={`${style.mainStyle} ${temaEsOscuro ? style.oscuro : style.claro}`}>
        <img 
            onClick={() => colocarTema(temaEsOscuro ? 'claro' : 'oscuro')}
            src={temaEsOscuro ? SolIcon : LunaIcon}
            alt="miniatura de la pelicula" 
            className={`${style.tema} `} 
        />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/nosotros" element={ <Nosotros /> } />   
          <Route path="/detalles" element={ <Detalles /> } />                    
        </Routes>
      </div>
    </Router>
  )
}

export default App
