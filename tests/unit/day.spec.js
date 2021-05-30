import { shallowMount, createLocalVue } from '@vue/test-utils';
import Day from "@/components/Forecast/Day.vue";
import forecast from '@/store/modules/forecast.js'
import Vuex from 'vuex';

describe('App.vue', () => {

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
  store.dispatch = jest.fn();

  const wrapper = shallowMount(Day, {
    store, 
    localVue 
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Child page rendered', () => {
    expect(wrapper.html()).toContain(`<app-forecast-info-stub dt=\"1622368280\" clouds=\"0\" humidity=\"55\" wind=\"2.68\" description=\"clear sky\" temp=\"20\" icon=\"01d\" tempmax=\"22\" tempmin=\"18\" feelslike=\"19\"></app-forecast-info-stub>`);
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('div rendered', () => {
    expect(wrapper.find(".weather-city").text()).toBe("City : Paris");
  });

  it('The action was dispatch', () => {
    wrapper.find(".weather-link p").trigger("click")

    expect(store.dispatch).toHaveBeenCalledWith("fetchWeekForecastData");
  });
});
