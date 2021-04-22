import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { MovieCard } from '../components/MovieCard';
import tmdbApi from '../services/tmdbApi';
import { formatDateBR } from '../utils/formatters';
import s from './home.module.scss';

interface IHomeProps {
  movieList: IMoviesListResponse;
}

export interface IMoviesListResponse {
  results: IMovie[];
}

export interface IMovie {
  id: number;
  poster_path: string;
  overview: string;
  release_date: string;
  title: string;
}

const IndexPage = ({ movieList }: IHomeProps) => (
    <>
    <Head>
      <title>Lista de Filmes</title>
    </Head>
      <div className={s.main}>
        <h1 className={s['main__title']}>Lista de Filmes</h1>
        <div className={s['main__list']}>
          {
            movieList.results.map(movie => (
              <MovieCard key={movie.id} date={formatDateBR(movie.release_date)} imageCover={movie.poster_path} movieId={movie.id.toString()} overview={movie.overview} title={movie.title} />
            ))
          }
        </div>
      </div>
    </>
  );

export const getServerSideProps: GetServerSideProps = async () => {
  const movieList: IMoviesListResponse = (await tmdbApi.get(`/movie/popular?api_key=4bdeca07f5aa7e579560ab19507b93e5`)).data;

  return {
    props: {
      movieList,
    }
  }
}

export default IndexPage

