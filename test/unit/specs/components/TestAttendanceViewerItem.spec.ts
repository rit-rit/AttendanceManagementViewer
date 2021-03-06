import AttendanceViewerItem from 'src/components/AttendanceViewerItem.vue';
import { mount, shallowMount } from '@vue/test-utils';
import Vue from 'vue';

test('mounted function test(Holoday)', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const tmpdate: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '',
      endTime: '',
      restTime: '',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });
  expect(wrapper.vm.attendanceDivision).toBe('holiday');
});

test('mounted function test(Weekday)', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '',
      endTime: '',
      restTime: '',
      workTime: '',
      attendanceDivision: 'work'
    }
  });
  expect(wrapper.vm.attendanceDivision).toBe('work');
});

test('workTime function test', () => {
  const tmpdate: Date = new Date();
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '18:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });
  expect(wrapper.vm.workTime).toBe('08:00');
});

test('overtimeOnHoliday function test. The case is that the date is weekday.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '18:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });
  expect(wrapper.vm.overtimeOnHoliday).toBe('');
});

test('overtimeOnHoliday function test.  The case is that the date is holiday.', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const tmpdate: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '18:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });

  expect(wrapper.vm.overtimeOnHoliday).toBe('');
});

test('overtimeOnHoliday function test.  The case is that the date is holiday.', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const tmpdate: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '18:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });

  expect(wrapper.vm.overtimeOnHoliday).toBe('');
});

test('overtimeOnHoliday function test.  The case is that the date is holiday.', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const tmpdate: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: 'a',
      endTime: '18:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });
  expect(wrapper.vm.overtimeOnHoliday).toBe('');
});

test('overtimeOnHoliday function test.  The case is that the date is holiday.', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const tmpdate: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '19:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });

  expect(wrapper.vm.overtimeOnHoliday).toBe('01:00');
});

test('overtimeOnHoliday function test. The case is that the date is weekday.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '19:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });
  expect(wrapper.vm.overtimeOnHoliday).toBe('');
});

test('overtimeOnHoliday function test.  The case is that the date is holiday.', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const tmpdate: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '19:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });

  expect(wrapper.vm.overtimeOnHoliday).toBe('01:00');
});

test('overtimeOnHoliday function test.  The case is that the date is holiday.', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const tmpdate: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '17:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });

  expect(wrapper.vm.overtimeOnHoliday).toBe('');
});

test('overtimeOnHoliday function test.  The case is that the date is holiday.', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const tmpdate: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: 'a',
      endTime: '17:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });

  expect(wrapper.vm.overtimeOnHoliday).toBe('');
});

test('overtimeOnHoliday function test.  The case is that the date is holiday.', () => {
  // 2000/1/1 00:00:00.00(Sat)
  const tmpdate: Date = new Date(2000, 0, 1, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '19:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });

  expect(wrapper.vm.overtimeOnHoliday).toBe('01:00');
});

test('lateNightOverTimeOnWeekday function test. The case is that the date is weekday.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });

  expect(wrapper.vm.lateNightOverTimeOnWorkday).toBe('01:00');
});

test('lateNightOverTimeOnWeekday function test. The case is that the date is weekday.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });
  expect(wrapper.vm.lateNightOverTimeOnWorkday).toBe('01:00');
});

test('lateNightOverTimeOnWeekday function test. The case is that the date is weekday.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '21:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });

  expect(wrapper.vm.lateNightOverTimeOnWorkday).toBe('');
});

test('lateNightOverTimeOnWeekday function test. The case is that the date is weekday.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: 'aaa',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });

  expect(wrapper.vm.lateNightOverTimeOnWorkday).toBe('');
});

test('lateNightOverTimeOnWeekday function test. The case is that the date is weekday.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '22:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });

  expect(wrapper.vm.lateNightOverTimeOnWorkday).toBe('');
});

test('lateNightOverTimeOnWeekday function test. The case is that the date is holiday.', () => {
  // 2000/1/2 00:00:00.00(Sun)
  const tmpdate: Date = new Date(2000, 0, 2, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });

  expect(wrapper.vm.lateNightOverTimeOnWorkday).toBe('');
});

test('lateNightOverTimeOnWeekday function test. The case is that the date is weekday.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '21:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });

  expect(wrapper.vm.lateNightOverTimeOnWorkday).toBe('');
});

test('lateNightOverTimeOnHoliday function test. The case is that the date is holiday.', () => {
  // 2000/1/2 00:00:00.00(Sun)
  const tmpdate: Date = new Date(2000, 0, 2, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '21:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });

  expect(wrapper.vm.lateNightOvertimeOnHoliday).toBe('');
});

test('lateNightOverTimeOnHoliday function test. The case is that the date is holiday.', () => {
  // 2000/1/2 00:00:00.00(Sun)
  const tmpdate: Date = new Date(2000, 0, 2, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '',
      endTime: '',
      restTime: '',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });
  // lateNightOverTime = 01:00
  wrapper.setData({ startTime: '' });
  expect(wrapper.vm.lateNightOvertimeOnHoliday).toBe('');
});

test('lateNightOverTimeOnHoliday function test. The case is that the date is holiday.', () => {
  // 2000/1/2 00:00:00.00(Sun)
  const tmpdate: Date = new Date(2000, 0, 2, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '22:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });

  expect(wrapper.vm.lateNightOvertimeOnHoliday).toBe('');
});

test('lateNightOverTimeOnHoliday function test. The case is that the date is holiday.', () => {
  // 2000/1/2 00:00:00.00(Sun)
  const tmpdate: Date = new Date(2000, 0, 2, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'holiday'
    }
  });

  expect(wrapper.vm.lateNightOvertimeOnHoliday).toBe('01:00');
});

test('lateNightOverTimeOnHoliday function test. The case is that the date is weekday.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });
  expect(wrapper.vm.lateNightOvertimeOnHoliday).toBe('');
});

test('checkTimeFormat function test. The case is that the time is correct format.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });

  expect(wrapper.vm.checkTimeFormat('1:00')).toBeTruthy();
});

test('checkTimeFormat function test. The case is that the time is correct format.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });

  expect(wrapper.vm.checkTimeFormat('10:30')).toBeTruthy();
});

test('checkTimeFormat function test. The case is that the time is incorrect format.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });

  expect(wrapper.vm.checkTimeFormat('10:3')).toBeFalsy();
});

test('checkTimeFormat function test. The case is that the time is incorrect format.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });

  expect(wrapper.vm.checkTimeFormat('a')).toBeFalsy();
});

test('updateAttendanceDivision function test.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });
  const input = wrapper.find('.attendanceDivision');
  input.element.nodeValue = 'work';
  input.trigger('input');
  expect(wrapper.emitted().updateAttendanceDivision).toBeTruthy();
  expect(wrapper.emitted().updateAttendanceDivision.length).toBe(2);
  expect(wrapper.emitted().updateAttendanceDivision[1]).toEqual([
    {
      index: 0,
      value: 'work'
    }
  ]);
});

test('updateStartTime function test.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });
  const input = wrapper.find('.startTime');
  input.element.nodeValue = '9:00';
  input.trigger('input');
  expect(wrapper.emitted().updateStartTime).toBeTruthy();
  expect(wrapper.emitted().updateStartTime.length).toBe(1);
  expect(wrapper.emitted().updateStartTime[0]).toEqual([
    {
      index: 0,
      value: '9:00'
    }
  ]);
});

test('updateEndTime function test.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });
  const input = wrapper.find('.endTime');
  input.element.nodeValue = '23:00';
  input.trigger('input');
  expect(wrapper.emitted().updateEndTime).toBeTruthy();
  expect(wrapper.emitted().updateEndTime.length).toBe(1);
  expect(wrapper.emitted().updateEndTime[0]).toEqual([
    {
      index: 0,
      value: '23:00'
    }
  ]);
});

test('updateRestTime function test.', () => {
  // 2000/1/3 00:00:00.00(Mon)
  const tmpdate: Date = new Date(2000, 0, 3, 0, 0, 0, 0);
  const wrapper = mount(AttendanceViewerItem, {
    propsData: {
      index: 0,
      date: tmpdate,
      isShownOvertimeHoliday: false,
      startTime: '9:00',
      endTime: '23:00',
      restTime: '1:00',
      workTime: '',
      attendanceDivision: 'work'
    }
  });
  const input = wrapper.find('.restTime');
  input.element.nodeValue = '1:00';
  input.trigger('input');
  expect(wrapper.emitted().updateRestTime).toBeTruthy();
  expect(wrapper.emitted().updateRestTime.length).toBe(1);
  expect(wrapper.emitted().updateRestTime[0]).toEqual([
    {
      index: 0,
      value: '1:00'
    }
  ]);
});
