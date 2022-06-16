window.onload = function () {
  
    let seconds = 00; 
    let tens = 00; 
    let appendTens = document.getElementById("tens") //var q adiciona centesimos 
    let appendSeconds = document.getElementById("seconds") // var q adiciona segundos
    let buttonStart = document.getElementById('start-btn');
    let buttonStop = document.getElementById('stop-btn');
    let buttonReset = document.getElementById('reset-btn');
    let Interval ;
    buttonStart.onclick = function() { //start-btn qnd precionado chama a funcao
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() { 
         clearInterval(Interval);

    }
    
  
    buttonReset.onclick = function() { // reset chama a funcao q vai resetar tudo p 00
       clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () { //startTimer add tens
      tens++; 
      
      if(tens <= 9){ // caso <= 9 recebe 0 + tens
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){ // caso maior q 9 que adiciona + tens
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) { // se tens maior q 99 adiciona os segundos
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){ // se segundos maior q 9 adiciona mais segundos
        appendSeconds.innerHTML = seconds;
      }
    }
    }