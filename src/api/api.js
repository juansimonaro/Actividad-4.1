import axios from 'axios';

const API_KEY = '98afb7ea157a87d81ec88a6ff53a386a';
const API_ACCESS_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGFmYjdlYTE1N2E4N2Q4MWVjODhhNmZmNTNhMzg2YSIsInN1YiI6IjY0MmIzY2E3ZjFiNTcxMDBmNGMxNDJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U-p5IXtBi_ll9Vh8MPZCGX5cQ9g4fJBX3hiqDu0KFhw`;

const urlDetallesPelicula = (idPelicula) => {
    return `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${API_KEY}&language=es-ES&append_to_response=videos`;
}

const urlBuscadorPelicula = (nombrePelicula) => {
    return `https://api.themoviedb.org/3/search/movie?query=${nombrePelicula}&language=es-ES&api_key=${API_KEY}`
}

const generarPaginaAleatoria = () => Math.floor(Math.random()*(8-1+1)+1);

/*Peticiones a la Api peliculas*/
export const peliculasPopularesAPI = () => axios.get(`https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${generarPaginaAleatoria()}`, {headers: {"Authorization": `Bearer ${API_ACCESS_TOKEN}` }});
export const detallesPeliculasByID = (idPelicula) => axios.get(urlDetallesPelicula(idPelicula));
export const buscadorPeliculasAPI = (nombrePelicula) => axios.get(urlBuscadorPelicula(nombrePelicula));
