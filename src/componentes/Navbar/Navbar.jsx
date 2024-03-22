import {Link} from 'react-router-dom'
import style from './navbar.module.css'


function Navbar() {
  
  return (
    <div className={style.navbar}>
        <h2 className={style.titulopagina}>Películas Tendencia</h2>

        <ul className={style.listanav}>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/nosotros'>Nosotros</Link></li>
        </ul>
    </div>
  )
}

export default Navbar