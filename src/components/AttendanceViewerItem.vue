<template>
  <tr>
    <th>{{dateProp.toDateString()}}</th>
    <th>
      <select v-model="attendanceDivision">
        <option value="work">Work</option>
        <option value="holiday">Holiday</option>
        <option value="substitution">Substitution holiday work</option>
      </select>
    </th>
    <th><input v-model="startTime" type="text"></th>
    <th><input v-model="endTime" type="text"></th>
    <th><input v-model="restTime" type="text"></th>
    <th>{{workTime}}</th>
    <!--<th>{{overTimeOnWorkday}}</th>
    <th>{{lateNightOverTimeOnWorkday}} </th>
    <th v-if="!isShownOvertimeHolidayProp">...</th>
    <th v-if="isShownOvertimeHolidayProp">{{overtimeOnHoliday}}</th>
    <th v-if="isShownOvertimeHolidayProp">{{lateNightOvertimeOnHoliday}}</th>
    <th>Holiday work</th>
    <th>Holiday work (overtime)</th>
    <th>Compensatory day off</th>
    <th>Substitution holiday work </th>
    <th>Substitution holiday work (overtime)</th>
    <th>e-work</th>
    <th>Note</th>-->
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Provide } from 'vue-property-decorator';
@Component
export default class AttendanceViewerItem extends Vue {
  @Prop() isShownOvertimeHolidayProp: boolean = true;
  @Prop(Date) dateProp!: Date;
  @Prop(String) startTime!: String;
  @Prop(String) endTime!: String;
  @Prop(String) restTime!: String;
  @Prop() attendanceDivision: string = 'work';

  mounted() {
    if (this.isWeekend(this.dateProp)) {
      this.attendanceDivision = 'holiday';
    }
  }

  get workTime(): string {
    if (
      !this.checkTimeFormat(this.startTime) ||
      !this.checkTimeFormat(this.endTime) ||
      !this.checkTimeFormat(this.restTime)
    ) {
      return '';
    }
    return this.calculateTimeDiff(
      this.restTime,
      this.calculateTimeDiff(this.startTime, this.endTime)
    );
  }

  /**
   * Calculate overtime (holiday)
   * @returns TODO
   */
  get overtimeOnHoliday(): string {
    if (this.attendanceDivision === 'holiday') {
      if (
        !this.checkTimeFormat(this.startTime) ||
        !this.checkTimeFormat(this.endTime) ||
        !this.checkTimeFormat(this.restTime)
      ) {
        return '';
      }
      var workTimeHours = parseInt(this.workTime.split(':')[0]);
      var workTimeMinutes = parseInt(this.workTime.split(':')[1]);
      if (workTimeHours === 8 && workTimeMinutes === 0) {
        return '';
      } else if (workTimeHours >= 8) {
        return this.formatTime(workTimeHours - 8, workTimeMinutes);
      } else {
        return '';
      }
    }
    return '';
  }

  /**
   * Calculate late-night overtime (holiday)
   * @returns if holiday, late-night overtime (holiday) else ''
   */
  get lateNightOvertimeOnHoliday(): string {
    if (this.attendanceDivision === 'holiday') {
      if (!this.checkTimeFormat(this.endTime)) {
        return '';
      }
      var endTimeHours = parseInt(this.endTime.split(':')[0]);
      var endTimeMinutes = parseInt(this.endTime.split(':')[1]);
      if (endTimeHours == 22 && endTimeMinutes == 0) {
        return '';
      } else if (endTimeHours >= 22) {
        return this.formatTime(endTimeHours - 22, endTimeMinutes);
      } else {
        return '';
      }
    }
    return '';
  }

  /**
   * Calculate late-night overtime (weekday)
   * @returns if weekday, late-night overtime (weekday) else ''
   */
  get lateNightOverTimeOnWorkday(): string {
    if (this.attendanceDivision === 'work') {
      if (!this.checkTimeFormat(this.endTime)) {
        return '';
      }
      var endTimeHours = parseInt(this.endTime.split(':')[0]);
      var endTimeMinutes = parseInt(this.endTime.split(':')[1]);
      if (endTimeHours == 22 && endTimeMinutes == 0) {
        return '';
      } else if (endTimeHours >= 22) {
        return this.formatTime(endTimeHours - 22, endTimeMinutes);
      } else {
        return '';
      }
    }
    return '';
  }

  /**
   * Calculate difference of time between startTime and endTime
   * @param startTime HH:mm
   * @param endTime HH:mm
   * @returns difference of time HH:mm
   */
  calculateTimeDiff(startTime: string, endTime: string): string {
    var calcDate = new Date(
      new Date(
        Date.UTC(
          0,
          0,
          0,
          parseInt(endTime.split(':')[0]),
          parseInt(endTime.split(':')[1])
        )
      ).getTime() -
        new Date(
          Date.UTC(
            0,
            0,
            0,
            parseInt(startTime.split(':')[0]),
            parseInt(startTime.split(':')[1])
          )
        ).getTime()
    );
    return this.formatTimeFromDate(calcDate);
  }

  /**
   * Get formated UTC time from Date.
   * @param date
   * @return formated UTC time (HH:mm)
   */
  formatTimeFromDate(date: Date): string {
    return (
      ('0' + date.getUTCHours()).slice(-2) +
      ':' +
      ('0' + date.getUTCMinutes()).slice(-2)
    );
  }
  /**
   * Get formated UTC time from hours and minutes.
   * @param hours
   * @param minutes
   * @return formated time (HH:mm)
   */
  formatTime(hours: number, minutes: number): string {
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
  }

  /**
   * Judge whether the input date is weekend or not.
   * @param date
   * @return true: if weekend, false: other
   */
  isWeekend(date: Date): boolean {
    if (date.getDay() == 0 || date.getDay() == 6) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * check time format
   * @param time
   * @returns true: if format is ok, false: other
   */
  checkTimeFormat(time: string): boolean {
    return new RegExp(/^[0-9]+:[0-9]{2}$/).test(time);
  }
}
</script>
<style scoped>
tr,
th {
  border: 1px black solid;
}
</style>
