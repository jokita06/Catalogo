import { Routes, Route } from 'react-router-dom';
import { Perfil } from '../Pages/Perfil/Perfil';
import { Movies } from '../Pages/Movies/Movie';
import { Series } from '../Pages/Series/Series';
import { Inicial } from '../Pages';

export function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Inicial/>}>
                <Route index element={<Movies/>} />
                <Route path='movies' element={<Movies/>} />
                <Route path='perfil' element={<Perfil/>} />
                <Route path='series' element={<Series/>} />
            </Route>
        </Routes>
    );
}


// import { Routes, Route } from 'react-router-dom';
// import { Perfil } from '../Pages/Perfil/Perfil';
// import { Movies } from '../Pages/Movies/Movie';
// import { Series } from '../Pages/Series/Series';
// import { Home } from '../Pages/Home/home';

// export function Rotas() {
//     return (
//         <Routes>
//             <Route path='/' element={<Home />} /> 
//             <Route path='home' element={<Home/>}>
//                 <Route index element={<Home/>} /> 
//                 <Route path='movie' element={<Movies/>} />
//                 <Route path='perfil' element={<Perfil/>} />
//                 <Route path='serie' element={<Series/>} />
//             </Route>
//         </Routes>
//     );
// }