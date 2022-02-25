var elForm = document.querySelector(".site-form");
var elInput = document.querySelector(".site-input");
var elResultp = document.querySelector(".person");
var elResultb = document.querySelector(".bike");
var elResultc = document.querySelector(".car");
var elResultpl = document.querySelector(".plane");


function competition(p){
elForm.addEventListener("submit" , function(event){
  event.preventDefault();

  var elInputVal = elInput.value;
  if(elInputVal >=0 ){
  return elResultp.textContent = Math.round(elInputVal / p) + " soat";
  }
  else{
  return elResultp.textContent = "Manfiy son kiritmang!" ;
  }
});
}
function competitionn(b){
  elForm.addEventListener("submit" , function(event){
    event.preventDefault();
  
    var elInputVal = elInput.value;
    if(elInputVal >=0 ){
    return elResultb.textContent = Math.round(elInputVal / b) + " soat";
    }else{
      return elResultb.textContent = "Manfiy son kiritmang!" ;
      }
  });
  }
function competitionnn(c){
    elForm.addEventListener("submit" , function(event){
      event.preventDefault();
    
      var elInputVal = elInput.value;
      if(elInputVal >=0 ){
      return elResultc.textContent = Math.round(elInputVal / c) + " soat";
      }else{
        return elResultc.textContent = "Manfiy son kiritmang!" ;
        }
    });
    }
function competitionnnn(pl){
      elForm.addEventListener("submit" , function(event){
        event.preventDefault();
      
        var elInputVal = elInput.value;
        if(elInputVal >=0 ){
          if(elInputVal % 800 == 0){
        return elResultpl.textContent = (elInputVal / pl) + " soat";
        }
        else{
          return elResultpl.textContent = (elInputVal / pl).toFixed(3) + " soat";
        }
        }else{
          return elResultpl.textContent = "Manfiy son kiritmang!" ;
          }
      });
      }
console.log(competition(3.6));
console.log(competitionn(20.1));
console.log(competitionnn(70));
console.log(competitionnnn(800));