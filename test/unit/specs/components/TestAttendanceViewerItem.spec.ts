import AttendanceViewerItem from 'src/components/AttendanceViewerItem.vue';
import { mount } from '@vue/test-utils';

test('mounted function test', () => {
  const date: Date = new Date();
  const wrapper = mount(AttendanceViewerItem, {
    propsData: { isShownOvertimeHolidayProp: true, dateProp: date }
  });
  // console.log('=====');
  wrapper.setData({ startTime: '9:00' });
  wrapper.setData({ endTime: '18:00' });
  wrapper.setData({ restTime: '1:00' });
  // console.log(wrapper.props().dateProp.toString());
  // console.log(wrapper.props().isShownOvertimeHolidayProp);

  expect(wrapper.vm.workTime).toBe('08:00');
  console.log('=====');
});
