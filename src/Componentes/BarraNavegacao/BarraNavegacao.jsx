import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

export function BarraNavegacao() {
    return (
        <nav className={estilos.container}>
            <ul>
            <Link to="/">
                <li>  
                    <span class="material-symbols-outlined">
                        movie
                    </span>
                    Filmes
                </li>
            </Link>
            <Link to ='serie'> 
                
                <li>
                    <span class="material-symbols-outlined">
                        movie
                    </span>
                    Séries
                </li>
                </Link>
                <Link to ='perfil'>
                <li>
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                    Conta
                </li>
                </Link>
            </ul>
        </nav>
    )
}