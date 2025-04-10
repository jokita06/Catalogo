import estilos from './BarraNavegacao.module.css';

export function BarraNavegacao() {
    return (
        <nav className={estilos.container}>
            <ul>
                <li>
                    <span class="material-symbols-outlined">
                        home
                    </span>
                    Home
                </li>
                <li>
                    <span class="material-symbols-outlined">
                        movie
                    </span>
                    Filme
                </li>
                <li>
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                    Conta
                </li>
            </ul>
        </nav>
    )
}