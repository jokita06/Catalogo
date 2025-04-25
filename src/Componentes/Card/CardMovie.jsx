// import estilos from './Card.module.css';


// // Precismos colocar a estrutura para fazer o componente
// export function CardMovie({ movie, onOpenModal}) {
//     return(
//         <div className={estilos.container}>
//             <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onClick={() => onOpenModal(movie)}/>
//             <h3>{movie.title}</h3>
//         </div>        
//     )
// }

import estilos from './Card.module.css';
import PlayIcon from '../../assets/Play.png';

export function CardMovie({ movie, onOpenModal }) {
    return(
        <div className={estilos.container}>
            <div className={estilos.imageContainer} onClick={() => onOpenModal(movie)}>
                <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={`Poster de ${movie.title}`}
                    className={estilos.movieImage}
                />
                <div className={estilos.playOverlay}>
                    <img src={PlayIcon} alt="Play" className={estilos.playIcon}/>
                </div>
            </div>
            <h3>{movie.title}</h3>
        </div>        
    )
}