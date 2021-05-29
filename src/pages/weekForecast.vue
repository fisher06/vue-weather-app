<template>
  <div class="forecast-week-app">
    <transition name="info" mode="out-in" appear>
      <div class="weaher-card">
        <app-search type="week" />
        <app-forecast-week />
      </div>
    </transition>
    <app-weather-animation />
  </div>
</template>

<script>
import AppSearch from "../components/Search.vue";
import AppForecastWeek from "../components/Forecast/Week.vue";
import AppWeatherAnimation from "../components/WeatherAnimation.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    AppSearch,
    AppForecastWeek,
    AppWeatherAnimation
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    fetchData() {
      this.fetchWeatherData({
        city: '',
        type: 'week'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.forecast-week-app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .info-enter-active,
  .info-leave-active {
    transition: all 1s;
  }
  .info-enter,
  .info-leave-to {
    opacity: 0;
    transform: scale(0.5);
  }
  .weaher-card {
    max-width: 720px;
    width: 100%;
    padding: 36px;
    margin: 24px;
    border-radius: 20px;
    background-color: #E9E9E9;
    z-index: 99;
  }
}
</style>
