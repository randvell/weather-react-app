import {useState} from 'react';
import style from './Search.module.scss';
import {ReactComponent as SearchIcon} from './img/search.svg';
import {fetchWeather} from '../../store/weatherAction';
import {useAppDispatch} from '../../hooks';

type Props = {};

const Search = (props: Props) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(fetchWeather(search));
  };

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="search"
        className={style.search}
        onChange={handleChange}
        value={search}
      />
      <button className={style.btn} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
