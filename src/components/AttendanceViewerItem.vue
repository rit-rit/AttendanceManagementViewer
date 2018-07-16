<template>
  <tr>
    <th>{{dateProp.toDateString()}}</th>
    <th>Attendance Division</th>
    <th><input v-model="startTime" type="text"></th>
    <th><input v-model="endTime" type="text"></th>
    <th><input v-model="restTime" type="text"></th>
    <th>{{workTime}}</th>
    <th>Overtime (Weekday)</th>
    <th>Late-night overtime (Weekday)</th>
    <th v-if="!isShown">...</th>
    <th v-if="isShown">Overtime (Holiday)</th>
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
import { Prop, Provide } from 'vue-property-decorator';
@Component
export default class AttendanceViewerItem extends Vue {
  @Prop() isShown: boolean = true;
  @Prop(Date) dateProp!: Date;
  startTime: string = '';
  endTime: string = '';
  restTime: string = '';

  get workTime(): string {
    if (this.endTime == '') {
      return '';
    } else {
      var workTime: Date = new Date(
        new Date(
          0,
          0,
          0,
          parseInt(this.endTime.split(':')[0]),
          parseInt(this.endTime.split(':')[1])
        ).getTime() -
          new Date(
            0,
            0,
            0,
            parseInt(this.startTime.split(':')[0]),
            parseInt(this.startTime.split(':')[1])
          ).getTime()
      );
      return (
        ('0' + workTime.getUTCHours().toString()).slice(-2) +
        ':' +
        ('0' + workTime.getUTCMinutes().toString()).slice(-2)
      );
    }
  }
}
</script>
<style scoped>
tr,
th {
  border: 1px black solid;
}
</style>
