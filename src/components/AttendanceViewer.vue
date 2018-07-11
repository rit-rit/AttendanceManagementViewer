<template>
  <div>
    <span>Here is AttendanceViewer</span>
    <br>
    <AttendanceViewerItem></AttendanceViewerItem>
    <br>
    <AttendanceViewerItem></AttendanceViewerItem>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AttendanceViewerItem from 'src/components/AttendanceViewerItem.vue';

@Component({
  components: { AttendanceViewerItem }
})
export default class AttendanceViewer extends Vue {}
</script>


