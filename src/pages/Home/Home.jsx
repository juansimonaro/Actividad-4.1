import { useEffect, useState } from 'react'
import style from './Home.module.css';
import Poster from '../../componentes/Poster/Poster'
import { buscadorPeliculaAction, peliculasPopularesAction } from '../../helpers/peliculasActions'


function Home() {
  const [loading, setLoading] = useState(false)
  const [peliculas, setPeliculas] = useState([])
  const [queryMovie, setQueryMovie] = useState('');
  const [peliculasBuscada, setPeliculaBuscada] = useState([])

  const peliculas_a_mostrar = peliculasBuscada.length ? peliculasBuscada : peliculas;

  useEffect(() => {
    peliculasPopularesAction(setLoading, setPeliculas);
  }, [])
  
  useEffect(() => { // Busqueda Debounce
    const buscarPeliculaDebounce = setTimeout(() => {
      if( peliculasBuscada.length && queryMovie === '') { // Si borran la busqueda, mostrar las peliculas que estaban
        setPeliculaBuscada([])
      }else {
        buscadorPeliculaAction(queryMovie, setPeliculaBuscada);
      }
    }, 1000);

    return () => clearTimeout(buscarPeliculaDebounce)
  }, [queryMovie])
  

  return (
    <div className={style.contenedor}>

      <div className={style.searchBox}> 
        <h3>Películas Populares</h3>
        <div className={style.busqueda}>
          <label htmlFor="busqueda">Buscar Película</label>
          <input type="search" onChange={({target}) => setQueryMovie(target.value)}  placeholder='Spiderman, Titanic...' id='busqueda'/>
        </div>
      </div>

      <div className={style.posters}>        
        { peliculas_a_mostrar.length > 0 ?
            peliculas_a_mostrar.map( movie => (
              <Poster
                movie={movie} 
                key={movie.id}
              />
            ))
          : ''
        }         
      </div>
      { loading && <p className={style.loading}>Cargando Películas....</p> }
    </div>
  )
}

export default Home;