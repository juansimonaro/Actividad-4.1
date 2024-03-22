import style from './Integrante.module.css';


function Integrante({alumno}) {
  const colorDelTema = localStorage.getItem('tema');

  return (
    <div className={`${style.card} ${colorDelTema === 'oscuro' ? style.oscuro : ''}`}>
        <div className={style.avatar}>
            <img src={alumno.avatar} alt="icono de usuario" />
        </div>
        <div className={`${style.infoAlumno} ${colorDelTema === 'oscuro' ? style.oscuro : ''}`}>
            <h3>{alumno.nombre}</h3>
            <span><b>Github:</b> {alumno.usuarioGithub}</span>           
        </div>
    </div>
  )
}

export default Integrante;