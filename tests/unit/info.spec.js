import { shallowMount, createLocalVue } from '@vue/test-utils';
import Info from "@/components/Forecast/Info.vue";

describe('Info.vue', () => {

  const localVue = createLocalVue();

  const wrapper = shallowMount(Info, {
    localVue,
    propsData: {
      feelsLike: 'feelsLike',
      tempMin: 10,
      tempMax: 15,
      icon: '01d',
      temp: 18,
      description: 'description',
      wind: 'wind',
      humidity: 'humidity',
      clouds: 'clouds',
      dt: '1622374447'
    }
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('Props display success', () => {
    expect(wrapper.html()).toContain(`feelsLike`);
    expect(wrapper.html()).toContain(`<p>Min : 10 Max : 15</p>`);
    expect(wrapper.html()).toContain(`background-image: url(http://openweathermap.org/img/wn/01d@2x.png);`);
    expect(wrapper.html()).toContain(`<div class=\"weather-description\">description</div>`);
    expect(wrapper.html()).toContain(`<span class=\"value\">wind</span></div>`);
    expect(wrapper.html()).toContain(`<span class=\"value\">%humidity</span></div>`);
    expect(wrapper.html()).toContain(`<span class=\"value\">%clouds</span>`);
    expect(wrapper.html()).toContain(`Sun May 30 2021 13:34:07 GMT+0200 (Central European Summer Time)`);
    expect(wrapper.html()).toContain(`<span>18</span>`);
  });
});