import estilos from './Card.module.css';


// Precismos colocar a estrutura para fazer o componente
export function Card({ movie, onOpenModal}) {
    return(
        <div className={estilos.container}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onClick={() => onOpenModal(movie)}/>
            <h3>{movie.title}</h3>
        </div>        
    )
}