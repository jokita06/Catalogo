import estilos from './Modal.module.css';

export function Modal({ movie, onClose }) {
    if (!movie) {
        return null;
    }

    return (
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.modalHeader}>
                    <button className={estilos.closeButton} onClick={onClose} aria-label="Fechar modal">
                        <span>X</span>
                    </button>
                </div>

                <div className={estilos.modalContent}>
                    <div className={estilos.posterContainer}>
                        <img 
                            className={estilos.imgModal} 
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            alt={`Poster de ${movie.title}`}
                        />
                    </div>
                    
                    <div className={estilos.infoContainer}>
                        <h2 className={estilos.movieTitle}>{movie.title}</h2>
                        
                        <div className={estilos.movieMeta}>
                            <span className={estilos.rating}>
                                ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
                            </span>
                            <span className={estilos.year}>
                                {new Date(movie.release_date).getFullYear() || 'N/A'}
                            </span>
                            <span className={estilos.runtime}>
                                • {Math.floor(Math.random() * 60) + 90} min
                            </span>
                        </div>
                        
                        <div className={estilos.genres}>
                            <span>Ação</span>
                            <span>Aventura</span>
                            <span>Ficção Científica</span>
                        </div>
                        
                        <h3 className={estilos.sectionTitle}>Sinopse</h3>
                        <p className={estilos.overview}>
                            {movie.overview || 'Sinopse não disponível.'}
                        </p>
                        
                        <div className={estilos.detailsGrid}>
                            <div className={estilos.detailItem}>
                                <span className={estilos.detailLabel}>Popularidade:</span>
                                <span className={estilos.detailValue}>{movie.popularity?.toFixed(0) || 'N/A'}</span>
                            </div>
                            <div className={estilos.detailItem}>
                                <span className={estilos.detailLabel}>Total de Votos:</span>
                                <span className={estilos.detailValue}>{movie.vote_count || 'N/A'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}