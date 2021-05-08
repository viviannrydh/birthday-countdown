const countDown=()=>{
    const targetDate=new Date('June 16, 2024 00:00:00').getTime();
    const now=new Date().getTime();
    const timeDifference=targetDate-now;

    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;

    const daysDifference=Math.floor(timeDifference/day);
    const hoursDifference=Math.floor(timeDifference%day/hour)
    const minutesDifference=Math.floor(timeDifference%hour/minute)
    const secondsDifference=Math.floor(timeDifference%minute/second)
    
    document.querySelector('.day').innerText=daysDifference;
    document.querySelector('.hour').innerText=hoursDifference;
    document.querySelector('.minute').innerText=minutesDifference;
    document.querySelector('.second').innerText=secondsDifference;

}

setInterval(countDown,1000)