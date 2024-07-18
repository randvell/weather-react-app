import {createSlice} from '@reduxjs/toolkit';
import {fetchWeather} from './weatherAction';

export interface IWeather {
  isLoading: boolean;
  error: string;
  weather: any;
}

const initialState: IWeather = {
  isLoading: false,
  error: '',
  weather: {},
};

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.weather = {};
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weather = action.payload;
        state.error = action.payload.error ?? '';
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Ошибка';
      });
  },
});

export default weatherSlice.reducer;
