const { mount } = require('@vue/test-utils');
const Vue = require('vue');
const ToastUICalendar = require('@toast-ui/vue-calendar');

describe('Calendar component', () => {
  test('renders without crashing', () => {
    const wrapper = mount(ToastUICalendar, {
      propsData: {
        calendars: [{ id: '1', name: 'Default' }],
        schedules: [],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
