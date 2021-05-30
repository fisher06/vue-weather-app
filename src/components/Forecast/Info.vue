<template>
  <div class="weather-grid">
    <div class="date">
      {{ new Date(dt * 1000) }}
    </div>
    <div class="weather-feelsLike">
      Feels like
      <strong>
        {{ feelsLike }}
        <sup>&deg;</sup>
      </strong>
      <p v-if="tempMin || tempMax">{{ 'Min : ' + tempMin + ' Max : ' + tempMax }}</p>
    </div>
    <div class="weather-temp">
      <div
        class="weather-icon"
        :style="[icon ? {'background-image': 'url(http://openweathermap.org/img/wn/' + icon + '@2x.png)'}: {}]"
      ></div>
      <span>{{ temp }}</span>
      <sup>&deg;</sup>
    </div>
    <div class="weather-description">{{ description }}</div>
    <div class="weather-info">
      <div class="weather-item">
        Wind : <span class="value">{{ wind }}</span>
      </div>
      <div class="weather-item">
        Humidity : <span class="value">%{{ humidity }}</span>
      </div>
      <div class="weather-item">
        Cloud : <span class="value">%{{ clouds }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["feelsLike", "tempMin", "tempMax", "icon", "temp", "description", "wind", "humidity", "clouds", "dt"]
};
</script>

<style lang="scss" scoped>
.weather-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
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
    margin: 15px 0;
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
      display:inline-flex;
      align-items: center;
      margin: 10px;
      .value {
        margin-left: 5px;
        font-weight: 500;
      }
    }
  }
}
</style>