<template>
  <div class="weather-main">
    <div class="weather-city">
      {{ 'City : ' + getWeatherMain.name }}
    </div>
    <div class="weather-feelsLike">
      Feels like
      <strong>
        {{ getWeatherMain.feelsLike }}
        <sup>&deg;</sup>
      </strong>
      <p>{{ 'Min : ' + getWeatherMain.tempMin + ' Max : ' + getWeatherMain.tempMax }}</p>
    </div>
    <div class="weather-temp">
      <div
        class="weather-icon"
        :style="[getWeatherMain.icon ? {'background-image': 'url(http://openweathermap.org/img/wn/'+getWeatherMain.icon+'@2x.png)'}: {}]"
      ></div>
      <span>{{getWeatherMain.temp}}</span>
      <sup>&deg;</sup>
    </div>
    <div class="weather-description">{{getWeatherMain.description}}</div>
    <div class="weather-info">
      <div class="weather-item">
        Wind : <span class="value">{{getWeatherMain.wind}}</span>
      </div>
      <div class="weather-item">
        Humidity : <span class="value">%{{getWeatherMain.humidity}}</span>
      </div>
      <div class="weather-item">
        Cloud : <span class="value">%{{getWeatherMain.clouds}}</span>
      </div>
    </div>
    <div class="weather-link">
      <router-link to="/week-forecast">
        Daily forecast for 7 days
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      name: this.$store.state.forecast.name
    };
  },
  computed: {
    ...mapGetters(["getWeatherMain"])
  }
};
</script>

<style lang="scss" scoped>
.weather-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  .weather-city {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .weather-feelsLike,
  .weather-description {
    font-size: 18px;
    color: var(--darkColor);
    text-transform: capitalize;
    sup {
      position: relative;
      top: 5px;
      left: -2px;
      font-size: 18px;
    }
  }
  .weather-temp {
    position: relative;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: #fff;
    margin: 40px 0;
    span {
      font-size: 80px;
      font-weight: 800;
      letter-spacing: -2px;
      position: relative;
    }
    sup {
      position: relative;
      top: -21px;
      font-size: 40px;
    }
  }
  .weather-icon {
    position: absolute;
    top: -35px;
    left: -35px;
    width: 110px;
    height: 110px;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .weather-info {
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid #131313;
    padding-top: 20px;
    .weather-item {
      display: flex;
      align-items: center;
      margin: 10px;
      .value {
        margin-left: 5px;
        font-weight: 500;
      }
    }
  }
  .weather-link {
    margin-top: 20px;
    padding: 5px 8px;
    border: 2px solid #636363;
    border-radius: 68px;
    a {
      text-decoration: none;
      color: #131313;
    }
  }
}
</style>