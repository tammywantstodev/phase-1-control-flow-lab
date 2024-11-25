function scuberGreetingForFeet(){
  // Write your code here!
  if(ride<=400){
    return 'This one is on me!'
  }
  else if(ride>=400 && ride<=2000){
    return 'That will be twenty bucks.'

  }
  else if(ride>=2000 && ride<=2500){
    return 'I will gladly take your thirty bucks.'
  }
  else{
    return 'No can do.'
  }
}


function ternaryCheckCity(){
  // Write your code here!
  if(city==="NYC"){
    return "Ok, sounds good."
  }
  else{
    return "No go."
  }
}

function switchOnCharmFromTip(){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}