import './Movie.css'

import { Lista } from '../../Componentes/MovieList/Lista'
import HeroSlide  from '../../Componentes/Slide/HeroSlide'
import './Movie.css'

export function Movies() {
    return (
        <main className='container'>
            <HeroSlide />
            <Lista />
        </main>
    )
}