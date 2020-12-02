var input = require('readline-sync');
var color = require('chalk');

var userName=input.question(color.yellow.bold("What's you name?\n"));

console.log(color.bgCyanBright.bold.black.underline("Hello! "+userName+" Let's find out whether you were born in a leap year or not!\n"));

function ask(){
  var userName=input.question(color.green.bold("Enter your date of birth in the format DD/MM/YYYY :"));
  const dob=userName.split('/');
  return dob[2];
}

year=ask();
check(year);

function check(y) {
  if(isNaN(parseInt(y))){
    console.log(color.redBright("Please Enter valid date of birth!!"));
    y=ask();
    check(y);
  }
  else{
    if(y>=1000 && y<=9999){
      if(y%400 == 0){
        console.log(color.yellow.bold("\n"+userName+"was born on a Leap Year!"));
        console.log(color.bgCyanBright.bold.black("\nThank You " + userName + " for trying this! You can share the screenshot of the result in your social media if you want!"));
      }
      else if(y%100 ===0){
        console.log(color.cyan.bold("\n"+userName+"was born on a Non-Leap Year!"));
        console.log(color.bgCyanBright.bold.black("\nThank You " + userName + " for trying this! You can share the screenshot of the result in your social media if you want!"));   
      }
      else if(y%4 === 0){
        console.log(color.yellow.bold("\n"+userName+"was born on a Leap Year!"));
        console.log(color.bgCyanBright.bold.black("\nThank You " + userName + " for trying this! You can share the screenshot of the result in your social media if you want!"));
      }
      else{
        console.log(color.cyan.bold("\n"+userName+"was born on a Non-Leap Year!"));
        console.log(color.bgCyanBright.bold.black("\nThank You " + userName + " for trying this! You can share the screenshot of the result in your social media if you want!"));
      }
    }
  }
}
