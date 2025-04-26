import { Outlet } from 'react-router-dom';
import { BarraNavegacao } from '../Componentes/BarraNavegacao/BarraNavegacao'
import { Footer } from '../Componentes/Footer/footer';

export function Inicial() {
    return (
        <>
            <BarraNavegacao/>
            <Outlet/>
            <Footer/>
        </>
    );
}