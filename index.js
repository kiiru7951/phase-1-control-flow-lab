function scuberGreetingForFeet(feet){
  let greeting
  if (feet <= 400) {
    greeting = 'This one is on me!';
  } else if (feet > 2000 && feet < 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    greeting = 'No can do.';
  }
  return greeting
}

function ternaryCheckCity(city){
 let greeting
 (city === 'NYC') ? (greeting = 'Ok, sounds good.') : (greeting = 'No go.');
 return greeting
}

function switchOnCharmFromTip(tip){
  let charm;
  switch (tip) {
    case 'generous':
      charm = 'Thank you so much.';
      break;
    case 'not as generous':
      charm = 'Thank you.';
      break;
    default:
      charm = 'Bye.';
      break;
  }
  return charm
}