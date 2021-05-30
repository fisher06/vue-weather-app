import { createLocalVue, shallowMount } from '@vue/test-utils';
import Search from "@/components/Search.vue";
import forecast from '@/store/modules/forecast.js'
import Vuex from 'vuex';

describe('Index.vue', () => {
  
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let forecastMoke = Object.assign({}, forecast);
  forecastMoke.getters.isSearched = jest.fn();
  forecastMoke.getters.getWeatherCountry = jest.fn();
  forecastMoke.getters.getError = jest.fn();
  forecastMoke.getters.isSearched.mockReturnValueOnce(true);
  forecastMoke.getters.getWeatherCountry.mockReturnValueOnce('FR');
  forecastMoke.getters.getError.mockReturnValueOnce(false);

  const store = new Vuex.Store({
    modules: {
      forecast: forecastMoke
    }
  });
  store.dispatch = jest.fn();

  const wrapper = shallowMount(Search, {
    store, 
    localVue 
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('The action was dispatch', () => {
    wrapper.find(".search-input").setValue("shanghai")
    wrapper.find(".search-input").trigger("keydown.enter")

    expect(store.dispatch).toHaveBeenCalledWith("fetchWeatherData" , 'shanghai')
  });

  it('The country display event', () => {
    expect(wrapper.html()).toContain(`<span class=\"country\">(FR)</span>`);
  });

  it('The error msg display event', () => {
    expect(wrapper.html()).not.toContain(`<div class=\"error\">No results found!</div>`);
  });

});