import { ListaSerie } from '../../Componentes/SeriesList/Lista';
import HeroSlide  from '../../Componentes/Slide/HeroSlide'
import './Serie.css'

export function Series() {
    return (
        <main className='container'>
            <HeroSlide />
            <ListaSerie />
        </main>
    )
}