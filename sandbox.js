const date = document.querySelector(".realtime__day")
const time = document.querySelector(".realtime__time")
const getCurrentTime = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const newDate = new Date()
  const currentDay = weekday[newDate.getDay()]
  const currentTime = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
  const millisec = newDate.getTime()
  date.textContent = currentDay

  time.textContent = millisec
  // console.log(currentTime)
}

getCurrentTime()
setInterval(getCurrentTime, 1)
