// Axios permite a comunicação com as páginas http (https)
import axios from "axios";
// As ferramentas começadas 
import React, {useState, useEffect} from "react";
import { Card } from '../Card/Card';
import estilos from "./Lista.module.css";
import { Modal } from "../Modal/Modal";

const API_Key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_Url = 'https://api.themoviedb.org/3'

export function Lista() {
    const [movies, setMovie] = useState([])

    // mostra se foi selecionado um filme para a vizualização
    const [SelectedMovie, setSelectedMovie] = useState(null)
    
    // Efete trabalha com uma estrutura específica parêmetros (), script {} e dependências
    useEffect(() => {
        axios.get(`${API_Url}/movie/popular?api_key=${API_Key}&language=pt-BR`)
            .then(response => {
                console.log(response.data.results);
                // Atualize o estado movies com os resultados da API
                setMovie(response.data.results);
            })
            .catch(error => {
                console.log('Error', error);
            });
    }, []);    

    const handleOpenModal = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null)
    }

    return(
        <div className={estilos.container}>
            <figure style={{display: "flex", flexWrap:'wrap'}}>
                {movies.map(movie=> (
                    <Card key={movie.id}
                    movie = {movie}
                    onOpenModal = {handleOpenModal}/>   
                ))}
            </figure>
            {SelectedMovie && (<Modal movie={SelectedMovie} onClose = {handleCloseModal}/>)}
        </div>
    )
}