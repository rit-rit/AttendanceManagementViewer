import AttendanceViewer from '@/components/AttendanceViewer.vue';
import { mount, shallowMount } from '@vue/test-utils';

const wrapper = mount(AttendanceViewer);

test('Sample test', () => {
  expect(wrapper.emitted('mounted')).toBeUndefined();
});
