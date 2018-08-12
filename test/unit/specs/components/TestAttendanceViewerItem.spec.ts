import AttendanceViewerItem from 'src/components/AttendanceViewerItem.vue';
import { mount } from '@vue/test-utils';

test('mounted function test(Holoday)', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const date: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: { isShownOvertimeHolidayProp: true, dateProp: date }
  });
  expect(wrapper.vm.attendanceDivision).toBe('holiday');
});

test('mounted function test(Weekday)', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const date: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: { isShownOvertimeHolidayProp: true, dateProp: date }
  });
  expect(wrapper.vm.attendanceDivision).toBe('work');
});

test('workTime function test', () => {
  const date: Date = new Date();
  const wrapper = mount(AttendanceViewerItem, {
    propsData: { isShownOvertimeHolidayProp: true, dateProp: date }
  });
  wrapper.setData({ startTime: '9:00' });
  wrapper.setData({ endTime: '18:00' });
  wrapper.setData({ restTime: '1:00' });

  expect(wrapper.vm.workTime).toBe('08:00');
});

test('overtimeOnHoliday function test. The case is that the date is weekday.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const date: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: { isShownOvertimeHolidayProp: true, dateProp: date }
  });
  expect(wrapper.vm.overtimeOnHoliday).toBe('');
});

test('overtimeOnHoliday function test.  The case is that the date is holiday.', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const date: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: { isShownOvertimeHolidayProp: true, dateProp: date }
  });

  // workTime = 8:00
  wrapper.setData({ startTime: '9:00' });
  wrapper.setData({ endTime: '18:00' });
  wrapper.setData({ restTime: '1:00' });
  expect(wrapper.vm.overtimeOnHoliday).toBe('');
});

test('overtimeOnHoliday function test.  The case is that the date is holiday.', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const date: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: { isShownOvertimeHolidayProp: true, dateProp: date }
  });

  // workTime = 8:00
  wrapper.setData({ startTime: '9:00' });
  wrapper.setData({ endTime: '19:00' });
  wrapper.setData({ restTime: '1:00' });
  expect(wrapper.vm.overtimeOnHoliday).toBe('01:00');
});
