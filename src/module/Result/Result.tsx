import {useAppSelector} from '../../hooks';
import style from './Result.module.scss';

type Props = {};

const Result = (props: Props) => {
  const {weather, isLoading, error} = useAppSelector((state) => state.weather);
  if (isLoading) {
    <div className={style.result}>
      {isLoading ? <p>Загрузка...</p> : weather.name}
    </div>;
  }

  return (
    <div className={style.result}>
      {weather.name ? (
        <>
          <p>{weather.main.temp}&#8451;</p>
          <p>{weather.name}</p>
        </>
      ) : (
        <p>{error === 'Not Found' ? <p>Город не найден</p> : error}</p>
      )}
    </div>
  );
};

export default Result;
