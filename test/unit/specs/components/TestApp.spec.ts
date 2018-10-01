import App from 'src/components/App.vue';
import { shallowMount } from '@vue/test-utils';
import Menu from 'src/components/Menu.vue';
import AttendanceViewer from 'src/components/AttendanceViewer.vue';

test('Components test', () => {
  const wrapper = shallowMount(App);
  // expect(wrapper.contains(Menu)).toBe(true);
  // expect(wrapper.contains(AttendanceViewer)).toBe(true);
});
