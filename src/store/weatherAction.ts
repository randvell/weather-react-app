import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiKey} from '../const';
import {IWeather} from './weatherSlice';

export const fetchWeather = createAsyncThunk<IWeather, string>(
  'weather/fetch',
  async (city) => {
    const response: Response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru&units=metric`
    );

    if (response.ok && response.status >= 200 && response.status < 300) {
      return response.json();
    }

    throw new Error(response.statusText);
  }
);
