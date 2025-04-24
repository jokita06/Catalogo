import { Outlet } from 'react-router-dom';
import BarraNavegacao from '../../Componentes/BarraNavegacao/BarraNavegacao'

export function Home() {
    return (
        <>
            <Outlet/>
            <BarraNavegacao/>
        </>
    );
}