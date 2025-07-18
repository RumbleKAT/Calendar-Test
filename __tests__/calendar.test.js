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

  test('applies custom title placeholder', () => {
    const wrapper = mount(ToastUICalendar, {
      propsData: {
        calendars: [{ id: '1', name: 'Default' }],
        schedules: [],
        template: { titlePlaceholder: '커스텀' },
      },
    });
    const opts = wrapper.vm.getInstance().getOptions();
    const placeholder = opts.template.titlePlaceholder;
    const value = typeof placeholder === 'function' ? placeholder() : placeholder;
    expect(value).toBe('커스텀');
  });
});
