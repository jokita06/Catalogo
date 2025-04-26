import { useState } from 'react';
import './Perfil.css';

export function Perfil() {
  const [nome, setNome] = useState('Usuário');
  const [corAvatar, setCorAvatar] = useState('#4a6fa5');
  const [editandoNome, setEditandoNome] = useState(false);
  const [nomeTemporario, setNomeTemporario] = useState(nome);

  const coresDisponiveis = [
    '#4a6fa5', '#a1281b', 
    '#3e8c4f', '#daaa19', '#d973ad', '#9b59b6'
  ];

  const handleSalvarNome = () => {
    setNome(nomeTemporario);
    setEditandoNome(false);
  };

  return (
    <div className='perfil-container'>
      
      <div className='test'>
        <div className="perfil-main">
          <div className="avatar-section">
            <div 
              className="avatar" 
              style={{ backgroundColor: corAvatar }}
            >
              {nome.charAt(0).toUpperCase()}
            </div>
            
            <div className="nome-container">
              {editandoNome ? (
                <div className="editar-nome">
                  <input
                    type="text"
                    value={nomeTemporario}
                    onChange={(e) => setNomeTemporario(e.target.value)}
                    maxLength={20}
                    autoFocus
                  />
                  <div className="botoes-edicao">
                    <button className="salvar" onClick={handleSalvarNome}>Salvar</button>
                    <button className="cancelar" onClick={() => setEditandoNome(false)}>Cancelar</button>
                  </div>
                </div>
              ) : (
                <div className="exibir-nome">
                  <h2>{nome}</h2>
                  <div className="botao-editar-container">
                    <button 
                      className="botao-editar"
                      onClick={() => {
                        setNomeTemporario(nome);
                        setEditandoNome(true);
                      }}
                    >
                      Editar Nome
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Seletor de Cores */}
          <div className="seletor-cores">
            <h3>Personalize seu avatar</h3>
            <div className="cores-disponiveis">
              {coresDisponiveis.map((cor) => (
                <div
                  key={cor}
                  className={`cor-option ${cor === corAvatar ? 'selecionada' : ''}`}
                  style={{ backgroundColor: cor }}
                  onClick={() => setCorAvatar(cor)}
                  title={cor}
                />
              ))}
            </div>
          </div>
        </div>

        </div>
    </div>
  );
}