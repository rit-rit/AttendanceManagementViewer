import AttendanceViewer from '@/components/AttendanceViewer.vue';
import { shallowMount } from '@vue/test-utils';

test('mounted function test', () => {
  const wrapper = shallowMount(AttendanceViewer);
  expect(wrapper.emitted('mounted')).toBeUndefined();
});
