import './Movie.css'

import { Lista } from '../../Componentes/MovieList/Lista'
import HeroSlide  from '../../Componentes/Slide/HeroSlide'
import './Movie.css'

export function Conteudo() {
    return (
        <main className='container'>
            <HeroSlide />
            <Lista />
        </main>
    )
}