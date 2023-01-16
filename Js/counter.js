const beginningsDay = '1 march 2023';
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');


function countTime(){
  const beginnings= new Date(beginningsDay);
  const currentDate = new Date();
  let diff = (beginnings - currentDate);
  let days =  parseInt(diff/ 8.64e+7);
  let hours =parseInt((diff -(days * 8.64e+7)) / 3.6e+6);
  let minuts = parseInt((diff - ((days * 8.64e+7) + (hours * 3.6e+6))) / 60000);
  let seconds =parseInt((diff - ((days * 8.64e+7) + (hours * 3.6e+6) + (minuts * 60000))) / 1000);
  day.innerHTML = timeFormate(days);
  hour.innerHTML= timeFormate(hours);
  min.innerHTML = timeFormate(minuts);
  sec.innerHTML=timeFormate(seconds)
}

function timeFormate(time){
  return time < 10 ? `0${time}` : time;
}
setInterval(countTime , 1000);


