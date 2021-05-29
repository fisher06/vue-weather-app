<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search City"
      class="search-input"
      v-model.trim="search"
      @keydown.enter="getData"
    />
    <span class="country" v-if="isSearched">({{ getWeatherCountry }})</span>
    <div class="error" v-if="getError">No results found!</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      search: this.$store.state.forecast.search
    };
  },
  computed: {
    ...mapGetters(["isSearched", "getWeatherCountry", "getError"])
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    getData() {
      this.fetchWeatherData(this.search);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  .search-input {
    width: 60%;
    height: 48px;
    border: 2px solid fade(#131313, 10);
    border-radius: 68px;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    padding-left: 20px;
  }
  .error {
    position: absolute;
    color: #c84c4c;
    text-align: center;
    bottom: -35px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 14px;
  }
  .country {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    color: var(#636363);
  }
}
</style>