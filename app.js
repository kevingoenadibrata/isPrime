var number = "&lt;ENTER A NUMBER&gt;";
var elNumber = document.getElementById("tex");
var elPrime = document.getElementById("prime");
var elCalc = document.getElementById("info");
var elHelp = document.getElementById("whatisprime");
var elDark = document.getElementById("dark");
var elBody = document.body;

function start(){
  change();
  window.addEventListener('keydown', function (e) {
      if(e.keyCode > 47 && e.keyCode < 58){ //if a number
          if(number * 10 + e.keyCode-48 < Number.MAX_SAFE_INTEGER){
              number = number * 10 + e.keyCode-48;
              console.log(number);
          }
          if(typeof(number) == "string" && e.keyCode != 48){
            number = e.keyCode-48;
          }
      }
      if(e.keyCode == 8 && typeof(number) == "number"){
          if(number < 10){
            number = "&lt;ENTER A NUMBER&gt;"
          }
          else{
            number = Math.floor(number/10);
          }
      }
      change();
  })


  elBody.className += " rtob";
}

function change(){
  elNumber.innerHTML = number;
  if(typeof(number) == "number"){
    // document.getElementById("loader").style.opacity = "1.0";
    isPrime();
    // document.getElementById("loader").style.opacity = "0.0";
    elNumber.style.fontSize = "10vw";
    elNumber.style.marginBottom = "0";
    elNumber.style.marginTop = "26vh";
  }
  else{
    elNumber.style.fontSize= "5vw";
    elNumber.style.marginBottom = "9.5vh";
    elNumber.style.marginTop = "38vh";
    elPrime.innerHTML = " ";
    elCalc.innerHTML = " ";
  }
}

function isPrime(){
  if(number == 1){
    setPrime(false, number, 1);
    return;
  }
  if(number == 2){
    setPrime(true, number, 1);
    return;
  }
  if(number % 2 == 0){
    setPrime(false, number, 2);
    return;
  }
  for(i = 3; i < Math.floor(Math.sqrt(number))+1; i += 2){
      console.log(number);
      if(number % i == 0){
          setPrime(false, number, i);
          return;
      }
  }
  setPrime(true, number, 1);
  return;
}

function setPrime(bool, n, i){
  if(bool){
    elBody.className -= " btor";
    elBody.className += " rtob";
    elPrime.innerHTML = "PRIME";
  }
  else{
    elBody.className -= " rtob";
    elBody.className += " btor";
    elPrime.innerHTML = "NOT PRIME";
  }
  elCalc.innerHTML = n + " = " + i + " X " + n/i;
}


function help(bool){
  if(bool){
    // elDark.style.visibility = "visible";
    elDark.classList.remove("toDark");
    elDark.style.animationDirection = "normal";
    void elDark.offsetWidth;
    elDark.classList.add("toDark");

    // elHelp.style.visibility = "visible";
    elHelp.classList.remove("moveIn");
    elHelp.style.animationDirection = "normal";
    void elHelp.offsetWidth;
    elHelp.classList.add("moveIn");

    document.getElementById("calculator").style.filter = "blur(5px)";
    document.getElementById("footer").style.filter = "blur(5px)";
  }
  else{
    elDark.classList.remove("toDark");
    elDark.style.animationDirection = "reverse";
    void elDark.offsetWidth;
    elDark.classList.add("toDark");
    // elDark.style.visibility = "hidden";

    elHelp.classList.remove("moveIn");
    elHelp.style.animationDirection = "reverse";
    void elHelp.offsetWidth;
    elHelp.classList.add("moveIn");
    // elHelp.style.visibility = "hidden";

    document.getElementById("calculator").style.filter = "blur(0)";
    document.getElementById("footer").style.filter = "blur(0)";
  }
}
