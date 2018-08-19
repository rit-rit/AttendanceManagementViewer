import AttendanceViewer from 'src/components/AttendanceViewer.vue';
import { shallowMount } from '@vue/test-utils';

test('mounted function test', () => {
  const wrapper = shallowMount(AttendanceViewer);

  // First item of dateArray is the first date of current month.
  expect(wrapper.vm.dateArray[0].getDate()).toEqual(1);
  // Last item of dateArray is the Last date of current month.
  expect(
    wrapper.vm.dateArray[wrapper.vm.dateArray.length - 1].getDate()
  ).toEqual(wrapper.vm.dateArray.length);
});

test('switchShowOvertimeHoliday function test.', () => {
  const wrapper = shallowMount(AttendanceViewer);
  expect(wrapper.vm.isShownOvertimeHoliday).toBeTruthy();
});

test("postAttendanceData function test.",()=>{
  const wrapper = shallowMount(AttendanceViewer);
  expect(wrapper.vm.postAttendanceData()).toBeFalsy();
})