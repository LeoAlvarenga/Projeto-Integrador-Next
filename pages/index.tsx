import { MovieCard } from '../components/MovieCard';
import s from './home.module.scss';

const IndexPage = () => (
  <div className={s.main}>
    <h1 className={s.['main__title']}>Movie List</h1>
    <div className={s.['main__list']}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  </div>
)

export default IndexPage
