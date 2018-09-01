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
        </tr>
      </thead>
      <tbody>
        <AttendanceViewerItem v-for="(dateItem,index) in dateArray" :key="index" v-bind:dateProp="dateItem" v-bind:isShownOvertimeHolidayProp="isShownOvertimeHoliday" :startTimeProp="startTime" @updateStartTime="updateStartTime" :endTimeProp="endTime" @updateEndTime="updateEndTime"></AttendanceViewerItem>
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
  startTime: string = '9:00';
  endTime: string = '18:00';
  restTime: string = '';

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
  updateStartTime(value: string): void {
    this.startTime = value;
  }
  updateEndTime(value: string): void {
    this.endTime = value;
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