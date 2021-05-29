import { shallowMount } from '@vue/test-utils'
import App from "@/App.vue";


describe('App.vue', () => {
  it('Child page rendered', () => {
    const wrapper = shallowMount(App);

    // Snapshot

    // test render
    expect(wrapper.html()).toContain(`<app-search-stub></app-search-stub>`);
    expect(wrapper.html()).toContain(`<app-forecast-stub></app-forecast-stub>`);
    expect(wrapper.html()).toContain(`<app-load-animation-stub></app-load-animation-stub>`);

  })
})

