<template>
  <div class="week-forecast">
    <div
      v-for="(day, index) in weekForecast"
      :key="index"
      class="daily-forecast"
    >
      <app-forecast-info
        :feelsLike="day.feels_like.day"
        :dt="day.dt"
        :tempMax="day.temp.max"
        :tempMin="day.temp.min"
        :icon="day.weather[0].icon"
        :temp="day.temp.day"
        :description="day.weather[0].description"
        :wind="day.wind_speed"
        :humidity="day.humidity"
        :clouds="day.clouds"
      />
    </div>
  </div>
</template>

<script>
import AppForecastInfo from "./Info";

export default {
  components: {
    AppForecastInfo
  },
  data() {
    return {
      weekForecast: this.$store.state.forecast.weekForecast
    };
  }
};
</script>

<style lang="scss" scoped>
.week-forecast {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;

  .daily-forecast {
    flex-grow: 1;
  }
}
</style>