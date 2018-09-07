import AttendanceViewer from 'src/components/AttendanceViewer.vue';
import { shallowMount } from '@vue/test-utils';

test('mounted function test', () => {
  const wrapper = shallowMount(AttendanceViewer);

  // First item of dateArray is the first date of current month.
  expect(wrapper.vm.attendanceArray[0].date.getDate()).toEqual(1);
  // Last item of dateArray is the Last date of current month.
  expect(
    wrapper.vm.attendanceArray[
      wrapper.vm.attendanceArray.length - 1
    ].date.getDate()
  ).toEqual(wrapper.vm.attendanceArray.length);
});

test('postAttendanceData function test.', () => {
  const wrapper = shallowMount(AttendanceViewer);
  expect(wrapper.vm.postAttendanceData()).toBeFalsy();
});
