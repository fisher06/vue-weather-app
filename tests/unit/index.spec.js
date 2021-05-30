import { createLocalVue, shallowMount } from '@vue/test-utils';
import Index from "@/pages/index.vue";
import Vuex from 'vuex';

describe('Index.vue', () => {
  
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store();
  store.dispatch = jest.fn();

  const wrapper = shallowMount(Index, {
    store, 
    localVue 
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('Child page rendered', () => {
    expect(wrapper.html()).toContain(`<app-search-stub type=\"day\"></app-search-stub>`);
    expect(wrapper.html()).toContain(`<app-forecast-day-stub></app-forecast-day-stub>`);
    expect(wrapper.html()).toContain(`<app-weather-animation-stub></app-weather-animation-stub>`);
  });

  it('The action was dispatch', () => {
    expect(store.dispatch).toHaveBeenCalledWith("fetchWeatherData" , '')
  });
});
