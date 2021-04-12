import { MovieCard } from '../components/MovieCard';
import s from './home.module.css';

const IndexPage = () => (
  <div className={s.container}>
    <h1 className={s.title}>Hello</h1>
    <MovieCard />
  </div>
)

export default IndexPage
