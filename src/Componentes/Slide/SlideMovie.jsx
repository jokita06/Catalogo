import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroSlide.css';

const API_Key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_Url = 'https://api.themoviedb.org/3';

const SlideMovie = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await fetch(
                    `${API_Url}/movie/popular?api_key=${API_Key}&language=pt-BR&page=1`
                );
                
                if (!response.ok) {
                    throw new Error('Falha ao carregar filmes');
                }
                
                const data = await response.json();
                setMovies(data.results.slice(0, 5));
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPopularMovies();
    }, []);

    if (loading) return <div className="loading">Carregando...</div>;
    if (error) return <div className="error">Erro: {error}</div>;

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={1000} // Tempo da animação em ms
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active'
                }}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div 
                            className="slide-backdrop" 
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                            }}
                        >
                            <div className="slide-content">
                                <h2 className="slide-title">{movie.title}</h2>
                                <div className="slide-meta">
                                    <span className="slide-rating">
                                        ⭐ {movie.vote_average.toFixed(1)}
                                    </span>
                                    <span className="slide-year">
                                        {new Date(movie.release_date).getFullYear()}
                                    </span>
                                </div>
                                <p className="slide-overview">
                                    {movie.overview.substring(0, 150)}...
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SlideMovie;