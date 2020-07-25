function toggleClass() {
  const body = document.querySelector('body')
  body.classList.toggle('light')
}

const hr = document.querySelector("#hr")
const mn = document.querySelector("#mn")
const sc = document.querySelector("#sc")

setInterval(()=>{
  let day = new Date()
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;
  
  hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`
  
  let hour = document.querySelector("#hour")
  let minutes = document.querySelector("#minutes")
  let seconds = document.querySelector("#seconds")
  let ampm = document.querySelector("#ampm")
  let good = document.querySelector("#good")
  
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  var am = "AM";
  var morning = "Good Night";
  
  if (h > 1 && h < 11) {
    var morning = "Good Morning"
  } else if (h > 10 && h < 17) {
    var morning = "Good Afternoon"
  } else if (h > 16 && h < 23) {
    var morning = "Good Night"
  }
  
  if (h > 12) {
    h = h - 12
    var am = "PM"
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  hour.innerHTML = h+":";
  minutes.innerHTML = m+":";
  seconds.innerHTML = s+"&nbsp";
  ampm.innerHTML = am;
  good.innerHTML = morning;
  
 })