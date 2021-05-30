import { createLocalVue, shallowMount } from '@vue/test-utils';
import WeatherAnimation from "@/components/WeatherAnimation.vue";
import forecast from '@/store/modules/forecast.js'
import Vuex from 'vuex';

describe('weatherAnimation.vue', () => {
  
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let forecastMoke = Object.assign({}, forecast);
  forecastMoke.getters.getWeatherMain = jest.fn();
  forecastMoke.getters.getWeatherMain.mockReturnValueOnce({
    "name": "Paris",
    "temp": 20,
    "tempMin": 18,
    "tempMax": 22,
    "feelsLike": 19,
    "description": "clear sky",
    "icon": "01d",
    "info": "Clear",
    "wind": 2.68,
    "humidity": 55,
    "clouds": 0,
    "country": "FR",
    "coord": {
      "lon":2.3488,
      "lat":48.8534
    },
    "dt": 1622368280
  });
  const store = new Vuex.Store({
    modules: {
      forecast: forecastMoke
    }
  });

  const wrapper = shallowMount(WeatherAnimation, {
    store, 
    localVue 
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('div rendered', () => {
    expect(wrapper.html()).toContain(`<div class=\"weather-animate weather-clear\">`);
  });
});