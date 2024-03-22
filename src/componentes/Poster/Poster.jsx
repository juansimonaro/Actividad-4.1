import style from './Posters.module.css';
import { useNavigate } from 'react-router-dom';


function Poster({ movie }) {
  let navigate = useNavigate();
  const urlMostrarImagenPelicula = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
    
  return (
    <div className={style.contenedor}>
        <section className={style.marco_poster}>
            <img 
                src={urlMostrarImagenPelicula}
                alt="miniatura de la pelicula" 
                className={style.Poster} 
            />
        </section>
        <h2 className={style.tituloPelicula}>{movie.original_title.slice(0,35) || ''}</h2>
        <p className={style.sinopsis}>{movie?.overview?.slice(0,136) + '...'}</p>
        <button
          onClick={() => navigate(`/detalles?id=${movie?.id}`)}
          className={style.btn_detalles}
        >
          Ver detalles
        </button>
    </div>
  )
}

export default Poster;