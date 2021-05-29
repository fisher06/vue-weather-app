import axios from "axios";

const state = {
    apiBase: "https://api.openweathermap.org/data/2.5/weather?",
    apiKey: "3af79ac4f20e8a0eb977e9f622468ec9",
    defaultSearch: "paris",
    search: "",
    isError: false,
    weatherData: {}
  };

const getters = {};

const mutations = {
    ["SET_SEARCH"](state, data) {
      state.search = data.toLowerCase();
    },
    ["SET_FORECAST"](state, data) {
      state.weatherData = data;
    },
    ["SET_ERROR"](state, value) {
      state.isError = value;
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
        state.apiBase + 'q=' + state.search + '&appid=' + state.apiKey
      );
      const newWeatherData = {
        name: response.data.name,
        main: response.data.main,
        weather: response.data.weather[0],
        wind: response.data.wind,
        clouds: response.data.clouds,
        country: response.data.sys.country,
      };
      commit("SET_FORECAST", newWeatherData);
      commit("SET_ERROR", false);
    } catch (error) {
      commit("SET_FORECAST", {});
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
