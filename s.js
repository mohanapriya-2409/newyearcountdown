function showTime() {
    const date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";
    if (hours > 12) {
      hours -= 12; //hours = hours-12
      session = "PM";
    }
    //Ternary operator condition ? true : false
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    let time = hours + ":" + minutes + ":" + seconds + " " + session;
    document.querySelector('div').innerText = time;
  }
  
 /* setTimeout(function () {
    console.log("Called after 5 seconds");
  }, 5000);
  */
 
setInterval(function() {
showTime();   
}, 1000);
