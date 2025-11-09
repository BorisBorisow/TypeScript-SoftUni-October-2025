enum DayOfTheWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function reversedDayOfTheWeek(day: string): void {
  const formatted = day[0].toUpperCase() + day.slice(1).toLocaleLowerCase();
  const value = DayOfTheWeek[formatted as keyof typeof DayOfTheWeek];
  console.log(value ?? "error");
}
reversedDayOfTheWeek("monday");
reversedDayOfTheWeek("Sunday");
reversedDayOfTheWeek("SomeDay");
