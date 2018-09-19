<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="date header-item-middle">Date</th>
          <th class="header-item-middle">Attendance Division</th>
          <th class="header-item-small">Start Time</th>
          <th class="header-item-small">End Time</th>
          <th class="header-item-small">Rest Time</th>
          <th class="header-item-small">Work Time</th>
        </tr>
      </thead>
      <tbody>
        <AttendanceViewerItem v-for="(attendanceItem,index) in attendanceArray" :key="index" v-bind="attendanceItem" @updateStartTime="updateStartTime" @updateEndTime="updateEndTime" @updateRestTime="updateRestTime" @updateAttendanceDivision="updateAttendanceDivision" @updateWorkTime="updateWorkTime"></AttendanceViewerItem>
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
  attendanceArray: {
    index: number;
    date: Date;
    isShownOvertimeHoliday: boolean;
    startTime: string;
    endTime: string;
    restTime: string;
    workTime: string;
    attendanceDivision: string;
  }[] = [];

  mounted(): void {
    const currentDate: Date = new Date();
    const lastDay: number = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    for (var curDay: number = 1; curDay <= lastDay; curDay++) {
      this.attendanceArray.push({
        index: curDay - 1,
        date: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          curDay
        ),
        isShownOvertimeHoliday: true,
        startTime: '',
        endTime: '',
        restTime: '',
        workTime: '',
        attendanceDivision: 'work'
      });
    }
  }

  updateAttendanceDivision(value: { index: number; value: string }): void {
    this.attendanceArray[value.index].attendanceDivision = value.value;
  }
  updateWorkTime(value: { index: number; value: string }): void {
    this.attendanceArray[value.index].workTime = value.value;
  }

  updateStartTime(value: { index: number; value: string }): void {
    this.attendanceArray[value.index].startTime = value.value;
  }

  updateEndTime(value: { index: number; value: string }): void {
    this.attendanceArray[value.index].endTime = value.value;
  }

  updateRestTime(value: { index: number; value: string }): void {
    this.attendanceArray[value.index].restTime = value.value;
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

.header-item-middle {
  width: 10em;
}

.header-item-small {
  width: 6em;
}
</style>