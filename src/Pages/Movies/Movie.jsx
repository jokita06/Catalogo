import './Movie.css';
import { MovieList } from '../../Componentes/MovieList/Lista';
import SlideMovie from '../../Componentes/Slide/SlideMovie';

export function Movies() {
    return (
        <main className='movie-container'>
            {/* Container do banner com barra de navegação */}
            <div className="hero-section" style={{ position: 'relative' }}>

                <SlideMovie />
            </div>
            
            <div className="movie-list-section">
                <MovieList />
            </div>
        </main>
    )
}