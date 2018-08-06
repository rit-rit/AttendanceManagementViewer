import AttendanceViewer from '@/components/AttendanceViewer.vue';
import { shallowMount } from '@vue/test-utils';

const wrapper = shallowMount(AttendanceViewer);

test('mounted function test', () => {
  expect(wrapper.emitted('mounted')).toBeUndefined();
});
