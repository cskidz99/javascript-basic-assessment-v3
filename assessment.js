// Create a var called hi that says seeya.
var hi = "seeya";
// Use iLove to create a new var called iLoveCode that says "I love code"
var iLove = 'I love';
var iLoveCode = iLove + " code";

// Make an object called Dane// Dane has height 4ft (string)
// Dane has age 4 (number)
// Dane has shirt with color violet and size S (object)
// Dane likes Sleek Cotton Salad, Awesome Metal Chair and Incredible Concrete Tuna (array of strings)
// Dane is not broken(boolean)
var Dane = {
  height: "4ft",
  age: 4,
  shirt: {
    color: 'violet',
    size: 'S',
  },
  likes: ["Sleek Cotton Salad","Awesome Metal Chair","Incredible Concrete Tuna"],
  broken: false
}

// Change myShirt type to mediocre and color to blue using dot notation.
  var myShirt = {
    type: 'wool',
		color: 'yellow',

  };
myShirt.type = 'mediocre';
myShirt.color = 'blue';
// Change myOtherShirt type to muddy and color to lavender using square bracket notation
  var myOtherShirt = {
  	type: 'heavy',
		color: 'olive',

  };
myOtherShirt['type'] = 'muddy';
myOtherShirt['color'] = 'lavender';
// Create an object that tracks a count of animals in a zoo. Call it 'zoo'
    // The key should be the animal name(string) and the value should be how many there are.
    // Our zoo has 71 sloths, 98 chimpanzees and 84 foxes
var zoo = {
  sloths: 71,
  chimpanzees: 98,
  foxes: 84,
}
// Loop through this object and change all properties that start with the letter h to have a value of 'h'

    var canonizer = {
      "tradership": "waterbok",
      "hissing": "snowland",
      "hippiedom": "figure",
      "dimness": "loses",
      "hederic": "somebodyll"
    }
for (var key in canonizer){
  if(key[0] === 'h'){
    canonizer[key] = 'h';
  }
}

// Create an array of strings containing days of week called daysOfWeek.
// There are 5.
var daysOfWeek = ['monday','tuesday','wednesday','thursday','friday']
//  Using this array do the following
var heroes = ['White Tiger', 'Wolf Cub', 'Colt'];
// add 'Weapon Omega' to the end
heroes.push('Weapon Omega');
// remove 'White Tiger' and store him in a var called firstHero
firstHero = heroes.shift();
// add 'Ozymandias' to the start of the array
heroes.unshift('Ozymandias');
// remove 'Colt' from the array and store him in a var called secondHero
secondHero = heroes.splice(2,1).toString();
console.log(secondHero)
// leave 'Wolf Cub' in the array but put a copy of him on a var called thirdHero
thirdHero = heroes.slice(1,2).toString();
// Write a function called addItem, that takes in an array, and an item, and adds the item to
// the array.
function addItem(array,item){
  array.push(item);
  return array;
}

// Write function called doubleTheFun that takes 1 parameter: A number or a string. It doubles (x2) numbers, and repeats strings. Example: 4 -> 8, 'Awesome' -> AwesomeAwesome'
function doubleTheFun(par){
  if(!isNaN(par)){
    return par * 2;
  } else {
    return par + par;
  }
}

// #14 Create a function called spiderTest that takes in an object that is an actor, it looks to see if the actor's name is Andrew Garfield and changes the actor object to have a property called spiderRating with a value of 10.  If their name is Tobey Maguire set spiderRating to 0.  otherwise set spiderRating to 'not a spiderman'.
function spiderTest(actor){
  if(actor.name === "Andrew Garfield"){
    actor.spiderRating = 10;
  } else if(actor.name === "Tobey Maguire"){
    actor.spiderRating = 0;
  } else {
    actor.spiderRating = 'not a spiderman';
  }
}



// #15 Create a function called whatIsItOutside that takes in a temperature (number), a humidity(number), and a cloudiness(number), in that order. Using the following to return the correct values
/*
    temperature over 85 and humidity over 45 - return "I'm all sweat"
    temperature under 40 and cloudiness over 60 - return "I have icicles"
    temperature over 85 and humidity under 45 and cloudiness under 20 - return "I'm literally in the desert"
    temperature over 90 or humidity over 55 or cloudiness over 65 - return "Hmm, probably not"
    Otherwise - return "I love outside"
*/
function whatIsItOutside(temp,hum,cloud){
  if(temp > 85 && hum > 45){
    return "I'm all sweat";
  } else if(temp < 40 && cloud > 60){
    return "I have icicles";
  } else if(temp > 85 && hum < 45 && cloud < 20){
    return "I'm literally in the desert";
  } else if(temp > 90 || hum > 55 || cloud > 65){
    return "Hmm, probably not";
  } else {
    return "I love outside";
  }
}

// #16 Create a function called callerBack that takes in a function (holla) and a string parameter(back) and invokes it(holla) with the string(back) + ' back'.
  // IE - If I call you with 'Give it' you should invoke holla with 'Give it back'
function callerBack(holla,back){
  var hollaback = back + ' back';
  holla(hollaback);
}

// Write a function called clockIn that takes in an employee and department name and returns an object with a name, department, and timestamp which is the current time as a Date object
function clockIn(name,dept){
  var clockPunch = {
    name: name,
    department: dept,
    timestamp: new Date(),
  }
  return clockPunch;
}
