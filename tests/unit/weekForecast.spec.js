import { shallowMount, createLocalVue } from '@vue/test-utils';
import WeekForecast from "@/pages/weekForecast.vue";
import VueRouter from 'vue-router'

describe('weekForecast.vue', () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();

  const wrapper = shallowMount(WeekForecast, {
    localVue,
    router,
    stubs: ['router-view']
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('Child page rendered', () => {
    expect(wrapper.html()).toContain(`<app-forecast-week-stub></app-forecast-week-stub>`);
    expect(wrapper.html()).toContain(`<transition-stub name=\"info\" `);
    expect(wrapper.html()).toContain(`<router-link-stub to=\"/\" tag=\"a\" ariacurrentvalue=\"page\" `);
  });
});
