<template>
  <div>
    <div
      class="weather-animate"
      :class="[
        {'weather-rain': getWeatherMain.info == 'Rain'},
        {'weather-snow': getWeatherMain.info == 'Snow'},
        {'weather-clear': getWeatherMain.info == 'Clear' || getWeatherMain.info == 'Mist'},
        {'weather-clouds': getWeatherMain.info == 'Clouds' || getWeatherMain.info == 'Haze'}
      ]"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getWeatherMain", "getError"])
  }
};
</script>

<style lang="scss" scoped>
.weather-animate {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-image 2s;
  background-size: cover;
  background-position: center;
}
.weather-clear {
  background-image: url("../assets/images/clear.jpg");
}
.weather-clouds {
  background-image: url("../assets/images/clouds.jpg");
}
.weather-snow {
  background-image: url("../assets/images/snow.jpg");
}
.weather-rain {
  background-image: url("../assets/images/rain.jpg");
}
</style>