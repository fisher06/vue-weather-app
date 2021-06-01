<template>
  <div class="forecast-week-app">
    <transition name="info" mode="out-in" appear>
      <div class="weather-card">
        <app-forecast-week />
        <div class="weather-link">
          <router-link to="/">
            Go back...
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import AppForecastWeek from "../components/Forecast/Week.vue";
import AppWeatherAnimation from "../components/WeatherAnimation.vue";

export default {
  components: {
    AppForecastWeek,
    AppWeatherAnimation
  }
};
</script>

<style lang="scss" scoped>
.forecast-week-app {
  display: flex;
  .info-enter-active,
  .info-leave-active {
    transition: all 1s;
  }
  .info-enter,
  .info-leave-to {
    opacity: 0;
    transform: scale(0.5);
  }
  .weather-card {
    width: 100%;
    padding: 36px;
    margin: 24px;
    border-radius: 20px;
    background-color: #E9E9E9;
    z-index: 99;
  }
  .weather-link {
    a {
      color: #131313;
      text-decoration: none;
      margin-top: 20px;
      padding: 5px 8px;
      border: 2px solid #636363;
      border-radius: 68px;
    }
  }
}
</style>
