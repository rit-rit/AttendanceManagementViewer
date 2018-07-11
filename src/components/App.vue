<template>
  <div>
    <Menu></Menu>
    <br>
    <span>{{message}}</span>
    <br>
    <AttendanceViewer></AttendanceViewer>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Components from 'vue-class-component';
import Menu from 'src/components/Menu.vue';
import AttendanceViewer from 'src/components/AttendanceViewer.vue';
@Components({
  components: { Menu, AttendanceViewer }
})
export default class App extends Vue {
  message: string = 'Here is App.vue!!';
}
</script>
