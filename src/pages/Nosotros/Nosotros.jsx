import Integrante from '../../componentes/Integrante/Integrante'
import style from './nosotros.module.css';
import Juan from '../../assets/juan.jpg';
import Daniel from '../../assets/daniel.jpg';
import Endelkys from '../../assets/Endelkys.jpg';


function Nosotros() {
  const integrantes = [
    {
      nombre: 'Juan Simonaro',
      usuarioGithub: 'juansimonaro',
      avatar: Juan
    },
    {
      nombre: 'Daniel Rendon',
      usuarioGithub: 'SrryBro',
      avatar: Daniel
    },
    {
      nombre: 'Endelkys Matos',
      usuarioGithub: 'Endelkys',
      avatar: Endelkys
    },
  ]

  return (
    <div className={style.contenedor}>

    <div className={style.contentTitulo}> 
      <h3>Participantes</h3>
    </div>

    <div className={style.integrantes}>        
      { 
          integrantes.map( (integrante, indice) => (
          <Integrante
            alumno={integrante}
            key={indice}
          />
        ))  
      }         
    </div>
  </div>
  )
}

export default Nosotros