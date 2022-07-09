function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return "This one is on me."
  } else if (feet > 2000 && feet < 2500){
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
} 

console.log(scuberGreetingForFeet(2600))

function ternaryCheckCity(city){
  return city === "NYC" ? "Okay, sounds good." : "No go."
}

console.log(ternaryCheckCity("AR"))

function switchOnCharmFromTip(){
  // Write your code here!
}