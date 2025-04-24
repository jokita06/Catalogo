import { Lista } from '../../Componentes/SeriesList/Lista'
import { HeroSlide } from '../../Componentes/Slide/HeroSlide'
import './Serie.css'

export function Conteudo() {
    return (
        <main className='container'>
            <HeroSlide />
            <Lista />
        </main>
    )
}