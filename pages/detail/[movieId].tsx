import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import tmdbApi from '../../services/tmdbApi';
import { formatDateBR, minutesToHours } from '../../utils/formatters';
import s from './style.module.scss';

interface IMovieResponse {
    revenue: number;
    overview: string;
    poster_path: string;
    title: string;
    release_date: string;
    runtime: string;
    videos: {
        results: {
            key: string;
        }[];
    };
}

interface IDetailPage {
    movie: IMovieResponse;
}

const Detail = ({ movie }: IDetailPage) => (
        <>
        <Head>
            <title>{movie.title}</title>
        </Head>
            <div className={s.container}>
                <img className={s['container__img']} src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="Titulo do filme" />
                <div className={s['container__content']}>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <div className={s.infoWrapper}>
                        <div className={s['infoWrapper__info']}>
                            <span>Data de Lançamento</span>
                            <p>{formatDateBR(movie.release_date)}</p>
                        </div>
                        <div className={s['infoWrapper__info']}>
                            <span>Duração</span>
                            <p>{minutesToHours(Number(movie.runtime))}</p>
                        </div>
                        <div className={s['infoWrapper__info']}>
                            <span>Receita</span>
                            <p>{movie.revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' })}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    console.log({ params });

    const movie: IMovieResponse = (await tmdbApi.get(`/movie/${params?.movieId}?api_key=4bdeca07f5aa7e579560ab19507b93e5&language=pt-BR`)).data;

    return {
        props: {
            movie,
        }
    }
}

export default Detail;
