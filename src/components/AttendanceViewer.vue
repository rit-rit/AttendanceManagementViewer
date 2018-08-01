<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="date">Date</th>
          <th>Attendance Division</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Rest Time</th>
          <th>Work Time</th>
          <!--<th>Overtime (Weekday)</th>
          <th>Late-night overtime (Weekday)</th>
          <th v-if="!isShownOvertimeHoliday" @click="switchShownOvertimeHoliday">Overtime (Holiday)(+)</th>
          <th v-if="isShownOvertimeHoliday" @click="switchShownOvertimeHoliday">Overtime (Holiday)(-)</th>
          <th v-if="isShownOvertimeHoliday">Late-night overtime (Holiday)</th>
          <th>Holiday work</th>
          <th>Holiday work (overtime)</th>
          <th>Compensatory day off</th>
          <th>Substitution holiday work </th>
          <th>Substitution holiday work (overtime)</th>
          <th>e-work</th>
          <th>Note</th>-->
        </tr>
      </thead>
      <tbody>
        <AttendanceViewerItem v-for="(dateItem,index) in dateArray" :key="index" v-bind:dateProp="dateItem" v-bind:isShownOvertimeHolidayProp="isShownOvertimeHoliday"></AttendanceViewerItem>
      </tbody>
    </table>
    <button @click="postAttendanceData">Submit</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AttendanceViewerItem from 'src/components/AttendanceViewerItem.vue';
import axios from 'axios';
@Component({
  components: { AttendanceViewerItem }
})
export default class AttendanceViewer extends Vue {
  dateArray: Date[] = [];
  isShownOvertimeHoliday: boolean = true;

  mounted(): void {
    const currentDate: Date = new Date();
    const lastDay: number = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    for (var curDay: number = 1; curDay <= lastDay; curDay++) {
      this.dateArray.push(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), curDay)
      );
    }
  }
  switchShownOvertimeHoliday(event: Event): void {
    this.isShownOvertimeHoliday = !this.isShownOvertimeHoliday;
  }

  postAttendanceData(): void {
    axios
      .post('http://localhost:3000/dummy', {
        id: new Date().toString(),
        content: 'AAAA'
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border: 2px black solid;
}
th {
  border: 1px black solid;
}
thead {
  border-bottom: 3px black double;
  color: red;
}
th.date {
  width: 120px;
}
</style>