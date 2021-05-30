import { shallowMount, createLocalVue } from '@vue/test-utils';
import App from "@/App.vue";
import VueRouter from 'vue-router';

describe('App.vue', () => {

  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();

  const wrapper = shallowMount(App, {
    localVue,
    router,
    stubs: ['router-view']
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Child page rendered', () => {
    expect(wrapper.html()).toContain(`<router-view-stub name=\"default\"></router-view-stub>`);
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
