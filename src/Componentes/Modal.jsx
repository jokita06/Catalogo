import estilos from './Modal.module.css';

export function Modal(movie, onClose ){
    
    if(!movie) {
        return null
    }

    console.log("Modal renderizada")
    console.log(movie)

    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.title}>
                    <h2>{movie.title}</h2>
                    <button onClick={onClose}>x</button>
                </div>

                <div className={estilos.imgDetails}>
                    <img  className={estilos.imgModal} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>

                    <ul> 
                        <li>{`Popularidade: ${movie.popularity ?? 'Não disponível no momento, aguarde'}`}</li>
                        <li>{`Data de Lançamento: ${movie.realise_date}`}</li>
                        <li>{`Quantidade de votos: ${movie.vote_count}`}</li>
                        <li>{`Sipnose: ${movie.overview}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}