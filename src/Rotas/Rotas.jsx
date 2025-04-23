import {Routes, Route} from 'react-router-dom';
import { Inicial } from '../Pages/index';
import { Perfil } from '../Pages/Perfil';
import { Lista } from '../Componentes/MovieList/Lista';
import { Series } from '../Pages/Series'
import { Home } from '../Pages/home';

export function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Inicial/>}>
                <Route index element={<Home/>}/>
                <Route path='movie' element={<Lista/>}/>
                <Route path='perfil' element={<Perfil/>}/>
                <Route path='serie' element={<Series/>}/>
            </Route>
        </Routes>
    );
}