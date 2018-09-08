import AttendanceViewerItem from 'src/components/AttendanceViewerItem.vue';
import { mount, shallowMount } from '@vue/test-utils';
import Vue from 'vue';

test('mounted function test(Holoday)', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const date: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date,
      isShownOvertimeHoliday: false,
      startTime: '',
      endTime: '',
      restTime: '',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });
  expect(wrapper.vm.attendanceDivision).toBe('holiday');
});
