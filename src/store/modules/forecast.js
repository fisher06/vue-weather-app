import axios from "axios";
import router from '../../router'

const state = {
    apiBase: "https://api.openweathermap.org/data/2.5/",
    apiKey: "3af79ac4f20e8a0eb977e9f622468ec9",
    defaultSearch: "Paris",
    search: "",
    isError: false,
    weatherData: {},
    weekForecast: {}
  };

const getters = {
  getWeatherCountry(state) {
    return state.weatherData.country;
  },
  isSearched(state) {
    return state.search !== "";
  },
  getError(state) {
    return state.isError;
  },
  getWeatherMain(state) {
    const { name, temp, feelsLike, tempMin, tempMax, description, icon, info, wind, clouds, humidity, coord, dt } = state.weatherData;
    let date = new Date(dt * 1000);
    return {
      temp,
      feelsLike,
      tempMax,
      tempMin,
      description,
      info,
      icon,
      wind,
      clouds,
      humidity,
      name,
      coord,
      dt: date
    };
  }
};

const mutations = {
    ["SET_SEARCH"](state, data) {
      state.search = data.toLowerCase();
    },
    ["SET_FORECAST"](state, data) {
      state.weatherData = data;
    },
    ["SET_ERROR"](state, value) {
      state.isError = value;
    },
    ['SET_WEEK_FORECAST'](state, value) {
      state.weekForecast = value.slice(0, 7);
      for (let i = 0; i < state.weekForecast.length; i++) {
        state.weekForecast[i]['dt'] = new Date(state.weekForecast[i]['dt'] * 1000);
      }
    }
  };

const actions = {
  async fetchWeatherData({ commit, state }, data) {
    try {
      if (data) {
        commit("SET_SEARCH", data);
      } else {
        commit("SET_SEARCH", state.defaultSearch);
      }
      const response = await axios.get(
        state.apiBase + 'weather?units=metric&q=' + state.search + '&appid=' + state.apiKey
      );
      const newWeatherData = {
        name: response.data.name,
        temp: Math.round(response.data.main.temp),
        tempMin: Math.round(response.data.main.temp_min),
        tempMax: Math.round(response.data.main.temp_max),
        feelsLike: Math.round(response.data.main.feels_like),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        info: response.data.weather[0].main,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        clouds: response.data.clouds.all,
        country: response.data.sys.country,
        coord: response.data.coord,
        dt: response.data.dt
      };
      commit("SET_FORECAST", newWeatherData);
      commit("SET_ERROR", false);
    } catch (error) {
      commit("SET_FORECAST", {});
      commit("SET_ERROR", true);
    }
  },
  async fetchWeekForecastData({ commit, state }) {
    if (state.weatherData.coord && state.weatherData.coord.lat && state.weatherData.coord.lon) {
      try {
        const response = await axios.get(
          state.apiBase + 'onecall?lat=' + state.weatherData.coord.lat + '&lon=' + state.weatherData.coord.lon + '&units=metric&appid=' + state.apiKey
        );
        commit("SET_WEEK_FORECAST", response.data.daily);
        router.push('week-forecast');
      } catch (error) {
        commit("SET_ERROR", true);
      }
    } else {
      commit("SET_ERROR", true);
    }
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
