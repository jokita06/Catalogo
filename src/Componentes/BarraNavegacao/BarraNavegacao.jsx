import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

export function BarraNavegacao() {
    return (
        <nav className={estilos.container}>
            <ul>
                <Link to="/" className={estilos.menuLinks}>
                <li>  
                    <span class="material-symbols-outlined">
                        movie
                    </span>
                    <span>Filmes</span>
                </li>
                </Link>
                
                <Link to='serie' className={estilos.menuLinks}> 
                <li>
                    <span class="material-symbols-outlined">
                        movie
                    </span>
                    <span>Séries</span>
                </li>
                </Link>
                
                <Link to='perfil' className={estilos.menuLinks}>
                <li>
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                    <span>Conta</span>
                </li>
                </Link>
            </ul>
        </nav>
    )
}