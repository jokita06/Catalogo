import { Routes, Route } from 'react-router-dom';
import { Perfil } from '../Pages/Perfil/Perfil';
import Movie from '../Pages/Movies/Movie';
import { Series } from '../Pages/Series/Series';
import Home from '../Pages/Home/home';

export function Rotas() {
    return (
        <Routes>
            <Route path='/home' element={<Home/>}>
                <Route index element={<Movie/>} />  // Conteúdo padrão quando acessar /
                <Route path='movie' element={<Movie/>} />
                <Route path='perfil' element={<Perfil/>} />
                <Route path='serie' element={<Series/>} />
            </Route>
        </Routes>
    );
}