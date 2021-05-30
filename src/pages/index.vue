<template>
  <div class="forecast-day-app">
    <transition name="info" mode="out-in" appear>
      <div class="weaher-card">
        <app-search type="day" />
        <app-forecast-day />
      </div>
    </transition>
    <app-weather-animation />
  </div>
</template>

<script>
import AppSearch from "../components/Search.vue";
import AppForecastDay from "../components/Forecast/Day.vue";
import AppWeatherAnimation from "../components/WeatherAnimation.vue";
import { mapActions } from "vuex";

export default {
  components: {
    AppSearch,
    AppForecastDay,
    AppWeatherAnimation
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    fetchData() {
      this.fetchWeatherData('');
    }
  }
};
</script>

<style lang="scss" scoped>
.forecast-day-app {
  display: flex;
  align-items: center;
  justify-content: center;
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
    max-width: 480px;
    width: 100%;
    padding: 36px;
    margin: 24px;
    border-radius: 20px;
    background-color: #E9E9E9;
    z-index: 99;
  }
}
</style>