var elForm = document.querySelector(".site-form");
var elInput = document.querySelector(".site-input");
var elSpan = document.querySelector(".form__span");
var elResultp = document.querySelector(".person");
var elResultb = document.querySelector(".bike");
var elResultc = document.querySelector(".car");
var elResultpl = document.querySelector(".plane");


function competition(p){
elForm.addEventListener("submit" , function(event){
  event.preventDefault();

  var elInputVal = elInput.value;
  if(elInputVal > 0 ){
    elSpan.textContent = " " ;
    elSpan.classList.remove("form__error");
  return elResultp.textContent = Math.round(elInputVal / p) + " soat " + Math.round(((elInputVal / p)*60) % 60) + " daqiqa";
  }
  else{
    if(elInputVal <= 0 || isNaN(elInputVal)){
      

      elSpan.textContent = "Iltimos 0  dan katta son kiriting !" ;
  
      elSpan.classList.add("form__error");
  
      
    }
   return elResultp.textContent = "😉!" ;;
  }
});
}
function competitionn(b){
  elForm.addEventListener("submit" , function(event){
    event.preventDefault();
  
    var elInputVal = elInput.value;
    if(elInputVal >=0 ){
    return elResultb.textContent = Math.round(elInputVal / b) + " soat " + Math.round((((elInputVal / b)*60) % 60)) + " daqiqa";
    }else{
      return elResultb.textContent = "😉!" ;
      }
  });
  }
function competitionnn(c){
    elForm.addEventListener("submit" , function(event){
      event.preventDefault();
    
      var elInputVal = elInput.value;
      if(elInputVal > 0 ){
      return elResultc.textContent = Math.floor(elInputVal / c) + " soat " + Math.ceil((((elInputVal / c)*60)%60)) + " daqiqa";
      }else{
        return elResultc.textContent = "😉!" ;
        }
    });
    }
function competitionnnn(pl){
      elForm.addEventListener("submit" , function(event){
        event.preventDefault();
      
        var elInputVal = elInput.value;
        if(elInputVal > 0 ){
          if(elInputVal % 800 == 0){
        return elResultpl.textContent = (elInputVal / pl) + " soat";
        }
        else{
          return elResultpl.textContent = Math.round(elInputVal / pl) + " soat " + Math.round(((elInputVal/pl)*60 % 60)) + " daqiqa";
        }
        }else{
          return elResultpl.textContent = "😉!" ;
          }
      });
      }
console.log(competition(3.6));
console.log(competitionn(20.1));
console.log(competitionnn(70));
console.log(competitionnnn(800));