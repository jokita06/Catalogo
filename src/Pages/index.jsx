import { Cabecalho } from "../Componentes/Cabecalho/Cabecalho";
import { BarraNavegacao } from "../Componentes/BarraNavegacao/BarraNavegacao";


// Outlet é um espaço que serve para redenrizar o componeneteroa; Então se clicar no perfil, vai exibir o compenente que corresponde ao endereço perfil Rotas.
import { Outlet } from 'react-router-dom'


export function Inicial() {
    return (
        <>
            <Cabecalho/>
            <BarraNavegacao/>
            <Outlet/>
        </>
    )
}