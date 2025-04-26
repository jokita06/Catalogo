import estilos from './BarraNavegacao.module.css'
import { Link } from 'react-router-dom';

export function BarraNavegacao() {
    return (
        <nav className={estilos.container}>
            <ul>
                <Link to="movies" className={estilos.menuLinks}>
                <li>  
                    <span>Filmes</span>
                </li>
                </Link>
                
                <Link to='series' className={estilos.menuLinks}> 
                <li>
                    <span>Séries</span>
                </li>
                </Link>
                
                <div className={estilos.perfilContainer}>
                    <Link to='perfil' className={estilos.menuLinks}>
                    <li>
                        <div className={estilos.avatarPerfil} style={{ backgroundColor: '#4a6fa5' }}>
                            U
                        </div>
                    </li>
                    </Link>
                </div>
            </ul>
        </nav>
    )
}