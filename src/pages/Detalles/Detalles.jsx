import { useEffect, useState } from 'react'
import style from './Detalles.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { detallesPeliculasAction } from '../../helpers/peliculasActions'


function Detalles() {
  let navigate = useNavigate();
  let location = useLocation();
  const idMovie = location.search.slice(4);

  const [dataVideo, setDataVideo] = useState({linkVideo: 'https://www.youtube.com/embed/'});
  const [loading, setLoading] = useState(false);
  
  const urlMostrarImagenPelicula = `https://image.tmdb.org/t/p/w500/${dataVideo?.poster_path}`;
  
  useEffect(() => {
    detallesPeliculasAction(idMovie, setLoading, setDataVideo);
  }, [])
  

  return (
    <div className={style.contenedor} style={{backgroundImage: `url(${urlMostrarImagenPelicula})`}}>
      <h2 className={style.titlePelicula}>{dataVideo.original_title || 'Cargando...'}</h2>
      <div className={style.marcoVideo}>
        <iframe width="600" height="400" src={dataVideo.linkVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <section className={style.detallesPelicula}>
        {loading && <p style={{textAlign: 'center', fontSize: '2rem', color: '#145cd4'}}>Cargando...</p>}
        <p><b>Descripción:</b> {dataVideo?.overview ? dataVideo.overview.slice(0,315) : ''}​</p>
        <p><b>Género:</b> {dataVideo?.genres || ''}</p>
        <p><b>Fecha de lanzamiento:</b> {dataVideo.release_date || ''}</p>
      </section>

      <button onClick={() => navigate('/')}>Volver al inicio</button>
    </div>
  )
}

export default Detalles