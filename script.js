


const newYears='1 Jan 2023';

const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');


function countdown(){
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
    const totoalSecodns = Math.floor(newYearsDate -currentDate)/1000;
    const days =Math.floor(totoalSecodns /3600/24);
    const hours=Math.floor(totoalSecodns/3600)%24;
    const mins =Math.floor(totoalSecodns/60)%60;
    const seconds =Math.floor(totoalSecodns)%60;
    

    daysEl.innerHTML=days;
    hoursEl.innerHTML=formatTime(hours);
    minsEl.innerHTML=formatTime(mins);
    secondsEl.innerHTML=formatTime(seconds);
  

    


    console.log(days,hours,mins,seconds);
}

function formatTime(time){
    return time<10 ? (`0${time}`):time;
}

countdown();

setInterval(countdown,1000);