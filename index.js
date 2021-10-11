function scuberGreetingForFeet(someValue){ 
  let result 
    if (someValue <= 400) {
      return 'This one is on me!';    
    }

    else if (someValue >= 2000) {
      return 'I will gladly take your thirty bucks.'
    }

    else if(someValue >= 2500) {
      return 'No can do.'
    }
}

function ternaryCheckCity(someCity){
  const city = 'NYC';
  const cityMessage = city ? "Ok, sounds good." : "No go.";
  
  return cityMessage;
}

function switchOnCharmFromTip(someTip){

}