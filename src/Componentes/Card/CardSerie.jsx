import estilos from './Card.module.css';


export function CardSerie({ movie, onOpenModal}) {
    return(
        <div className={estilos.container}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onClick={() => onOpenModal(movie)}/>
            <h3>{movie.name}</h3>
        </div>        
    )
}