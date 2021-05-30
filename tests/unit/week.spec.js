import { shallowMount, createLocalVue } from '@vue/test-utils';
import Week from "@/components/Forecast/Week.vue";
import forecast from '@/store/modules/forecast.js'
import Vuex from 'vuex';

describe('Week.vue', () => {

  const localVue = createLocalVue();
  localVue.use(Vuex);
  let forecastMoke = Object.assign({}, forecast);

  const store = new Vuex.Store({
    modules: {
      forecast: forecastMoke
    }
  });
  const wrapper = shallowMount(Week, {
    store, 
    localVue 
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
