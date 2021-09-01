var name = prompt("Enter Your Name:");
var d = new Date();

var greeting0=document.getElementById("greeting0")
var greeting1=document.getElementById("greeting1")
var date = document.getElementById("date");

greeting0.innerHTML = "KODLUYORUZ";
greeting1.innerHTML =`Merhaba, ${name.toUpperCase()}! Hoşgeldin!`
greeting2.innerHTML="tarihinde KODLUYORUZ Frontend Web Development Patikası Javascript Bölümü 1. ödevdesiniz."


function showtime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = time.getDay();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    day = getDay(day);
    
    let currenTime = hour + ":" 
    + min + ":" + sec + " "+ day;

    date.innerHTML = currenTime;
}
showtime();
setInterval(showtime, 1000);



function getDay(number){
    if(number==0){
        return "Pazar"
    }else if(number==1){
        return "Pazartesi"
    }
    else if(number==2){
        return "Salı"
    }
    else if(number==3){
        return "Çarşamba"
    }
    else if(number==4){
        return "Perşembe"
    }
    else if(number==5){
        return "Cuma"
    }
    else if(number==6){
        return "Cumartesi"
    }
}