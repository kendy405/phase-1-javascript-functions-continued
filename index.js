function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to roller-skate!";

  }
 console.log(saturdayFun());
 console.log(saturdayFun("bathe my dog!"))
  


const mondayWork = function(activity= "go to the office") {
    return "This Monday, I will &{go to the office.}.";

} ;
console.log(mondayWork());
console.log(mondayWork("work from home"))


function wrapAdjective(door = '*') {
    return function (name, adverb = "special") {
      return (`You are ${door}${name}${door}!`)
    };
    }