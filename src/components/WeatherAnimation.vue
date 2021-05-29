<template>
  <div>
    weather Animation
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
</style>