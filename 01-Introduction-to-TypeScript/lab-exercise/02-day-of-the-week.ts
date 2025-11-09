function dayOfTheWeek(num:number){
    enum days {
        "Monday"= 1,
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    }
    console.log(days[num] || "error")
}
dayOfTheWeek(1)
dayOfTheWeek(5)
dayOfTheWeek(-1)