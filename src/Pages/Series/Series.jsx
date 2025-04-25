import './Serie.css';
import { SerieList } from '../../Componentes/SeriesList/Lista';
import SlideSerie from '../../Componentes/Slide/SlideSerie';

export function Series() {
    return (
        <main className='movie-container'>
            <div className="hero-section" style={{ position: 'relative' }}>

                <SlideSerie />
            </div>
            
            <div className="movie-list-section">
                <SerieList />
            </div>
        </main>
    )
}