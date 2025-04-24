import { Outlet } from 'react-router-dom';
import { BarraNavegacao } from '../Componentes/BarraNavegacao/BarraNavegacao'

export function Inicial() {
    return (
        <>
            <BarraNavegacao/>
            <Outlet/>
        </>
    );
}