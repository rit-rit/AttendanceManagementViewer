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
