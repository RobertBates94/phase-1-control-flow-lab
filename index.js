function scuberGreetingForFeet(someValue){ 
  let result 
    if (someValue <= 400) {
      result = 'This one is on me!';    
    }

    else if (someValue <= 2500) {
      result = 'I will gladly take your thirty bucks.';
    }

    else if (someValue > 2500) {
      result = 'No can do.';
    }
    return result
}

function ternaryCheckCity(someCity){
  const city = 'NYC'
  const result = someCity == city ? "Ok, sounds good." : "No go.";
  
  return result;
}

function switchOnCharmFromTip(someTip){


  let result;

  switch(someTip) {
    case 'generous':
    result = 'Thank you so much.';
    break;

    case 'not as generous':
    result = 'Thank you.'
    break;

    case 'thanks for everything':
    result = 'Bye.';
    break;
  }
  return result;
}