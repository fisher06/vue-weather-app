<template>
  <div class="weather-main">
    <div 
      v-if="getWeatherMain.name"
      class="weather-city"
    >
      {{ 'City : ' + getWeatherMain.name }}
    </div>
    <app-forecast-info
      :feelsLike="getWeatherMain.feelsLike"
      :dt="getWeatherMain.dt"
      :tempMax="getWeatherMain.tempMax"
      :tempMin="getWeatherMain.tempMin"
      :icon="getWeatherMain.icon"
      :temp="getWeatherMain.temp"
      :description="getWeatherMain.description"
      :wind="getWeatherMain.wind"
      :humidity="getWeatherMain.humidity"
      :clouds="getWeatherMain.clouds"
    />
    <div class="weather-link">
      <p @click="requestWeekForecast">
        Daily forecast for 7 days
      </p>
    </div>
  </div>
</template>

<script>
import AppForecastInfo from "./Info";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AppForecastInfo
  },
  data() {
    return {
      name: this.$store.state.forecast.name
    };
  },
  computed: {
    ...mapGetters(["getWeatherMain"])
  },
  methods: {
    ...mapActions(["fetchWeekForecastData"]),
    requestWeekForecast() {
      this.fetchWeekForecastData();
    }
  }
};
</script>

<style lang="scss" scoped>
.weather-main {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  .weather-city {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .weather-link {
    margin-top: 20px;
    padding: 5px 8px;
    border: 2px solid #636363;
    border-radius: 68px;
    p {
      color: #131313;
      margin: 8px 5px;
      cursor: pointer;
    }
  }
}
</style>