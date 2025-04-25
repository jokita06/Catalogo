import './Movie.css';
import { Lista } from '../../Componentes/MovieList/Lista';
import HeroSlide from '../../Componentes/Slide/HeroSlide';

export function Movies() {
    return (
        <main className='movie-container'>
            {/* Container do banner com barra de navegação */}
            <div className="hero-section" style={{ position: 'relative' }}>

                <HeroSlide />
            </div>
            
            <div className="movie-list-section">
                <Lista />
            </div>
        </main>
    )
}