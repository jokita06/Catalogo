import estilos from './Modal.module.css';

export function Modal({ movie, onClose }){
    
    if(!movie) {
        return null;
    }

    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.modalHeader}>
                    <h2>{movie.title}</h2>
                    <button className={estilos.closeButton} onClick={onClose} aria-label="Fechar modal">
                        {/* &times; */}
                        X
                    </button>
                </div>

                <div className={estilos.imgDetails}>
                    <img className={estilos.imgModal} 
                         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                         alt={`Poster de ${movie.title}`}/>
                    
                    <div className={estilos.detailsContainer}>
                        <ul className={estilos.movieDetail}> 
                            <li><strong>Popularidade:</strong> {movie.popularity ?? 'Não disponível'}</li>
                            <li><strong>Data de Lançamento:</strong> {movie.release_date}</li>
                            <li><strong>Votos:</strong> {movie.vote_count}</li>
                            <li><strong>Sinopse:</strong> {movie.overview || 'Sinopse não disponível'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}