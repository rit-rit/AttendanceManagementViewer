<template>
  <tr>
    <th>2018/01/01</th>
    <th>Attendance Division</th>
    <th><input type="text"></th>
    <th>End Time</th>
    <th>Rest Time</th>
    <th>Work Time</th>
    <th>Overtime (Weekday)</th>
    <th>Late-night overtime (Weekday)</th>
    <th>Overtime (Holiday)</th>
    <th v-if="isShown">Late-night overtime (Holiday)</th>
    <th>Holiday work</th>
    <th>Holiday work (overtime)</th>
    <th>Compensatory day off</th>
    <th>Substitution holiday work </th>
    <th>Substitution holiday work (overtime)</th>
    <th>e-work</th>
    <th>Note</th>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class AttendanceViewerItem extends Vue {
  @Prop() isShown: boolean = true;
}
</script>
<style scoped>
tr,
th {
  border: 1px red solid;
}
</style>



