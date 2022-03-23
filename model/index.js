//Create an object for your given name: To be imported into server.js;
const gameStates = {
  name: " ",
  XP: 0,
};
const wrong = "Invalid choice";
const links = "Please choose one of the two links to decide";
const link = "Please click this link to see what happens next:";
const terminal = "or copy this link and paste in your terminal";
const civilization = "Find civilization";
const shore = "Wait on the shore";
const playAgain = "Play Again?";
const waitForHelp = "Cold, bruised and no food you guys wait on shore for help.";
const endForNow = "The end....for now!";
const restart = "Yes";


let randomName = generateRandomName();

//Start game function
function startGame() {
  gameStates.XP = 0;
  return `Welcome to 'A Weekend Getaway', a game that will test your instincts in a canoe. As you progress throughout the game 
  you will either gain or lose XP(expirence points) depending on the choices you make. Your XP has been set to ${gameStates.XP}.
  Please click this link to continue: <a href = "http://localhost:5000/api/giveName?name=Enter_your_name">Enter your name</a> ${terminal}.
  curl "http://localhost:5000/api/giveName?name=Enter_your_name"`;
}

//Create a function to enter your name
function giveName(name) {
  gameStates.name = name
  if (name === 'Enter_your_name') {
    return 'Please enter your name'
  } else {
    return `Hello ${name}. Please click this link to find out who your canoe partner is:
    <li><a href = "http://localhost:5000/api/generatedName">Generate name</a></li> ${terminal}.
    curl "http://localhost:5000/api/generatedName"`;
  }
}

//Create a function for creating an array for randomly generated name
function generateRandomName() {
    let namesList = ["Jack", "Jill", "Fred", "Steve", "John", "Sarah", "Philip", "Liana", "Maggie", "Jade", "Jodie", "Hope", "Greg",
        "Graham", "Cory", "Reid", "Patrick", "Sam", "Samatha", "Tobey", "Brian", "Ryan", "Rachel", "Elvis", "Sidney", "Lorrie", "Carly",
        "Jake", "Katie", "Nicole", "Evan", "Tim", "Tom", "Jaden", "Ashley", "Theodore", "Dory", "Jody", "Judy", "Peggy", "Wally",
        "Wallace", "Jessie", "Tony", "Ethan", "Janette", "Gord", "Jenifer", "Brandon", "Betty", "Mary", "Skyler", "Tucker", "Chelsea",
        "Ally", "Aidan", "Andrew", "Bailey", "Billy", "Bob", "Catherine", "Hayley", "Annabelle", "Kyle", "Ryder", "Marcus",
  ];
  let numOfNames = namesList.length;
  let randomIndex = Math.floor(numOfNames * Math.random());
  return namesList[randomIndex];
}

//Create a random name function
function canoePartner() {
  return `Your canoe partner for this trip is ${randomName}. ${links} what canoe to have:
  <li><a href = "http://localhost:5000/api/canoeChoice?chooseCanoe=1">Recreational Canoe</a></li>
  <li><a href = "http://localhost:5000/api/canoeChoice?chooseCanoe=2">Expedition Canoe</a></li> ${terminal}.
  curl "http://localhost:5000/api/canoeChoice?chooseCanoe=1-Recreational Canoe, 2-Expedition Canoe"`;
}

//Let the usere choose a canoe
function chooseACanoe(chooseCanoe) {
  if (chooseCanoe === "1") {
    gameStates.XP = gameStates.XP + 5;
    return `Your choice is the Recreational Canoe. You have gained 5 XP. You now have ${gameStates.XP} XP.
    Early into your trip you guys come across some windy weather. ${links} how you guys navigate the lake:
    <li><a href = "http://localhost:5000/api/onTheWater?location=Middle">Paddle in the middle of the lake</a></li>
    <li><a href = "http://localhost:5000/api/onTheWater?location=Side">Paddle near the shore</a></li> ${terminal}.
    curl "http://localhost:5000/api/onTheWater?location=Middle or Side"`;
  } else if (chooseCanoe === "2") {
    gameStates.XP = gameStates.XP + 10; 
    return `Your choice is the Expedition Canoe. You have gained 10 XP. You now have ${gameStates.XP} XP.
    Early into your trip you guys come across some windy weather. ${links} how you guys navigate the lake:
    <li><a href = "http://localhost:5000/api/onTheWater?location=Middle">Paddle in the middle of the lake</a></li>
    <li><a href = "http://localhost:5000/api/onTheWater?location=Side">Paddle near the shore</a></li> ${terminal}.
    curl "http://localhost:5000/api/onTheWater?location=Middle or Side"` 
  } else {
    return `${wrong}, please enter {1 for Recreational Canoe or 2 for Expedition Canoe}.`;
  }
}

// //Decision to stay in middle of lake or paddle near shore
function navigateTheLake(location) {
  if (location === "Middle" || location === "middle") {
    gameStates.XP =  gameStates.XP + 5;
    return `Not the best decision, the waves are difficult to steer through but you guys managed to make it. You have gained 5 XP.
    You now have ${gameStates.XP} XP. Now the lake turns into a river with three directions.
    Please choose one of the three options on which way you go?
    <li><a href = "http://localhost:5000/api/onTheRiver?direction=middle">Class III rapids-Medium Spice</a></li>
    <li><a href = "http://localhost:5000/api/onTheRiver?direction=left">Class I rapids-Mild Spice<a/></li>
    <li><a href = "http://localhost:5000/api/onTheRiver?direction=right">Class V rapids-Experts only-Carolina Reaper</a></li> ${terminal}.
    curl "http://localhost:5000/api/onTheRiver?direction=Enter left, right or middle"`;
  } else if (location === "Side" || location === "side") {
    gameStates.XP = gameStates.XP + 10;
    return `Great choice!! Waves are really manageable near the shore. You have gained 10 XP. You now have ${gameStates.XP} XP.
    Lake soon narrows into a river with three directions. Please choose one of the three options on which way you go?
    <li><a href = "http://localhost:5000/api/onTheRiver?direction=middle">Class III rapids-Medium Spice</a></li>
    <li><a href = "http://localhost:5000/api/onTheRiver?direction=left">Class I rapids-Mild Spice<a/></li>
    <li><a href = "http://localhost:5000/api/onTheRiver?direction=right">Class V rapids-Experts only-Carolina Reaper</a></li> ${terminal}.
    curl "http://localhost:5000/api/onTheRiver?direction=Enter left, right or middle"`;
  } else {
    return ` ${wrong}, please enter {Middle or Side}.`;
  }
}

// //Decision tree on where to run river
function riverDirectionChoice(direction) {
  if (direction === "left" || direction === "Left") {
    gameStates.XP = gameStates.XP + 10;
    return `This is a piece of cake. I could navigate this passage with my eyes closed. You have gained 10 XP.
    You now have ${gameStates.XP} XP. ${link} <li><a href = "http://localhost:5000/api/collisionOnRock">Collide with rock</a></li>
    ${terminal} curl "http://localhost:5000/api/collisionOnRock"`;
  } else if (direction === "right" || direction === "Right") {
    return `I'm sorry ${gameStates.name} and ${randomName}, a terrible decision is leading you over a waterfall. 
    This is a fatal fall. All your XP is lost. ${playAgain}
    <li><a href = "http://localhost:5000/api/startGame">${restart}</a></li> ${terminal}.
    curl "http://localhost:5000/api/startGame"`;
  } else if (direction === "middle" || direction === "Middle") {
    gameStates.XP = gameStates.XP + 20;
    return `The canoe is manoevering well down this passage. You have gained 20 XP. You now have ${gameStates.XP} XP. ${link}
    <li><a href = "http://localhost:5000/api/hazard">Hazard up ahead</a></li> ${terminal}. curl "http://localhost:5000/api/hazard"`;
  } else {
    return `${wrong}, please enter {left, right or middle}.`;
  }
}

//Function for colliding on rock and tipping over
function collisionOnRock() {
  gameStates.XP = gameStates.XP - 10;
  return `Bang!! Canoe hits a log in the water and splits in half, all of your camping supplies is either at the bottom of the river
   or swept away. Tough luck! Not seeing this rock has cost you 10 XP. You now have ${gameStates.XP} XP.
   Choose 'option=grab' to grab canoe. Choose 'paddle=shore' to canoe to shore or continue to keep canoing down river.
   Choose 'option=land and paddle=abandoned' to leave canoe and swim to shore. Please choose one of the three links:
   <li><a href = "http://localhost:5000/api/inWater?option=land&paddle=abandoned">Swim to shore without canoe</a></li>
   <li><a href = "http://localhost:5000/api/inWater?option=grab&paddle=shore">Paddle to shore</a></li>
   <li><a href = "http://localhost:5000/api/inWater?option=grab&paddle=continue">Carry on down the river</a></li> ${terminal}
   curl "http://localhost:5000/api/inWater?option=grab&paddle=shore, continue or option =land'&'paddle=abandoned"`;
}

//Function for seeing a hazard up ahead
function hazardUpAhead() {
  return `Uh oh, ${randomName}, who is sitting in the front of the canoe sees a hazard up ahead. 
  Do they communicate with ${gameStates.name}? ${links}
  <li><a href = "http://localhost:5000/api/communicateWithStern?talking=yes">Yes</a></li>
  <li><a href = "http://localhost:5000/api/communicateWithStern?talking=no">No</a></li> ${terminal}.
  curl "http://localhost:5000/api/communicateWithStern?talking=enter yes or no"`;
}

//Function for what to do when capsized
function inWaterDecision(option, paddle) {
  if (option === "grab" || option === "Grab") {
    if (paddle === "shore" || paddle === "Shore") {
      gameStates.XP = gameStates.XP + 10;
      return `You guys were able to get back in the canoe and paddle to shore. You have gained 10 XP. 
      You now have ${gameStates.XP} XP. Now your choice is to either stay on the shore and wait for help or continue down the river.
      ${links} <li><a href = "http://localhost:5000/api/canoeToShore?shoreChoice=go">keep going</a></li>
      <li><a href = "http://localhost:5000/api/canoeToShore?shoreChoice=stay">${shore}</a></li> ${terminal}
      curl "http://localhost:5000/api/canoeToShore?shoreChoice=go or stay"`;
    } else if (paddle === "continue" || paddle === "Continue") {
      gameStates.XP = gameStates.XP - 5;
      return `You guys are troopers for carrying on soaked, I'll give you that! You have lost 5 XP however. 
      You now have ${gameStates.XP} XP. ${link}
      <li><a href = "http://localhost:5000/api/continueSoaked">Continue</a></li> ${terminal}
      curl "http://localhost:5000/api/continueSoaked"`;
    } else
      return `${wrong}, please enter {option=grab or land, paddle=shore, continue or {option=land, paddle = abandoned}.`;
  } else if (option === "land" || option === "Land") {
    if (paddle === "abandoned" || paddle === "Abandoned") {
      gameStates.XP = gameStates.XP - 5;
      return `You guys choose to swim to shore and abandon the canoe. Now there is no more option for self-rescue. 
      This decision has cost you 5 XP. You now have ${gameStates.XP} XP. Choose 'find' to venture into the wild to find civilization.
      Choose 'shore' to stay on the shore and wait for help. ${links}
      <li><a href = "http://localhost:5000/api/choiceOnShore?survive=find">${civilization}</a></li>
      <li><a href = "http://localhost:5000/api/choiceOnShore?survive=shore">${shore}</a></li> ${terminal}
      curl "http://localhost:5000/api/choiceOnShore?survive=find or shore"
      `;
    } else {
      return `${wrong}, please enter {option=grab or land, paddle=shore, continue or {option=land, paddle = abandoned}.`;
    }
  } else {
    return `${choice}, please enter {option=grab or land, paddle=shore, continue or {option=land, paddle = abandoned}.`;
  }
}

//Create a function for continuing soaked
function continueSoaked() {
  return `Time to pull off somewhere and call it a night. All your gear is gone and you guys are soaked so it will be a rough night. 
  Please go here to answer a knowledge based question: curl "http://localhost:5000/api/hypoQuestion"`;
}

//Creating a function for giving instructions for the hypothermia question.
function hypoQuestion() {
  return `You can only develop hypothermia if the outside temperature is below freezing? Please go here to answer: 
  curl "http://localhost:5000/api/hypoAnswer?knowledge=true or false"`;
}

function canoeToShore(shoreChoice) {
  if (shoreChoice === "stay" || shoreChoice === "Stay") {
    return `You guys decide to stay on shore and wait for help. Please click here to find out what happens next: 
    curl "http://localhost:5000/api/waitOnShore"`;
  } else if (shoreChoice === "Go" || shoreChoice === "go") {
    gameStates.XP = gameStates.XP - 5;
    return `You guys decided to push on despite being cold and wet. You have lost 5 XP. You now have ${(gameStates.XP)} XP.
    Please click here to find out what happens next: curl "http://localhost:5000/api/continueSoaked"`;
  } else {
    return `${wrong}. Please enter {stay or go}.`;
  }
}

//Creating a function for wait on the shore after you canoe to shore
function waitOnShore() {
  gameStates.XP = gameStates.XP - 5;
  return `${waitForHelp} You have lost 5 XP. You now have ${gameStates.XP} XP.
  ${endForNow} ${playAgain} <li><a href = "http://localhost:5000/api/startGame">${restart}</a></li> ${terminal}
  curl "http://localhost:5000/api/startGame"`;
}

//front of canoe communicate with back of canoe
function doTheyCommunicate(talking) {
  if (talking === "yes" || talking === "Yes") {
    gameStates.XP = gameStates.XP + 30;
    return `You guys successfully maneuver around the hazard. For this great communication you have gained 30 XP.
    You now have ${gameStates.XP} XP. ${link}:
    <li><a href = "http://localhost:5000/api/madeItToSite">Campsite</a></li> ${terminal}.
    curl "http://localhost:5000/api/madeItToSite"`;
  } else if (talking === "no" || talking === "No") {
    gameStates.XP = gameStates.XP - 20;
    return `Bang!! Canoe hits a log in the water and taco's, all of your camping supplies are either at the bottom of the river 
    or swept away. Bad communication has led you to lose 20 XP. You now have ${gameStates.XP} XP. ${link}
    <li><a href = "http://localhost:5000/api/capsize">Capsize</a></li> ${terminal} 
    curl "http://localhost:5000/api/capsize"`;
  } else {
    return `${wrong}, please enter {yes or no}.`;
  }
}

//Create a function for finishing the day up and arriving at a campsite.
function arriveAtSite() {
  return `Hooray!! You too had a very successful day out on the water today. 
  Now rest up at this campsite and leave bright and early tomorrow morning. ${link}
  <li><a href = "http://localhost:5000/api/nextDay">Next day</a></li> ${terminal}
  curl "http://localhost:5000/api/nextDay"`;
}

//Create a function for starting the next day.
function nextDay() {
  return `Rise and shine time to hit the water. Uh oh you guys see thunder clouds rolling in. 
  Do you risk it and go out on the water or wait on land. ${links}
  <li><a href = "http://localhost:5000/api/doWeRiskIt?choice=wait">Wait</a></li>
  <li><a href = "http://localhost:5000/api/doWeRiskIt?choice=go">Risk it</a></li> ${terminal}
  curl "http://localhost:5000/api/doWeRiskIt?choice=enter wait or go"`;
}

//Create a function for capsizing after they hit the hazard
function fallInWater() {
  return `The two of you fall into the water and get swept underneath a log jam.
    Fortunately the current lets go and you guys bob back up gasping for air and are able to swim to shore.
    On the shore you have a decision to make on what to do next. Choose 'find' to venture into the wild to find civilization,
    choose 'shore' to stay on the shore and wait for help. ${links}
    <li><a href = "http://localhost:5000/api/choiceOnShore?survive=find">${civilization}</a></li>
    <li><a href = "http://localhost:5000/api/choiceOnShore?survive=shore">${shore}</a></li> ${terminal}
    curl "http://localhost:5000/api/choiceOnShore?survive=find or shore"`;
}

//Function for decision on shore
function onShore(survive) {
  if (survive === "find" || survive === "Find") {
    gameStates.XP = gameStates.XP - 10;
    return `Cold, bruised and no food, you start venturing into the woods in hopes of finding civilization. You have lost 10 XP.
    You are at ${gameStates.XP} XP. The end....For now. ${playAgain}
    <li><a href = "http://localhost:5000/api/startGame">${restart}</a></li> ${terminal}
    curl "http://localhost:5000/api/startGame"`;
  } else if (survive === "shore" || survive === "Shore") {
    gameStates.XP = gameStates.XP - 5; 
    return `Cold, bruised and no food, you guys wait on shore for other canoers to spot you. You have lost 5 XP. 
    You are at ${gameStates.XP} XP. The end....For now. ${playAgain}
    <li><a href = "http://localhost:5000/api/startGame">${restart}</a></li> ${terminal} 
    curl "http://localhost:5000/api/startGame"`;
  } else {
    return `${wrong}, please enter {find of shore}.`;
  }
}

//Do you guys go out in a thunderstorm or not, is therre lightning
function thunderAndLightning(choice) {
  let isLightning = ["true", "false"];
  let numOfChoices = isLightning.length;
  let randomNum = Math.floor(numOfChoices * Math.random());
  let lightning = isLightning[randomNum];

  if (choice === "go" && lightning === isLightning[0] || choice === "Go" && lightning === isLightning[0]) {
    return `You guys decided to risk it and go out during a storm. You guys got struck by lightning. You have lost all your XP.
    ${playAgain} <li><a href = "http://localhost:5000/api/startGame">${restart}</a></li> ${terminal}. 
    curl "http://localhost:5000/api/startGame"`;
  } else if (choice === "go" && lightning === isLightning[1] || choice === "Go" && lightning === isLightning[1]) {
    gameStates.XP = gameStates.XP - 20;
    return `You are Lucky! You too have managed to escape the storm injury free. You have lost 20 XP for this poor decision however. 
    You now have ${gameStates.XP} XP. ${link} <li><a href = "http://localhost:5000/api/hooray">Congrats</a></li> ${terminal}.
    curl "http://localhost:5000/api/hooray"`;
  } else if (choice === "wait" || choice === "Wait") {
    gameStates.XP = gameStates.XP + 30;
    return `Smart choice, within one hour the storm stopped. The lake became very flat and still, perfect for a paddle.
      This great decision has earned you 30 XP. You now have ${gameStates.XP} XP. ${link}
      <li><a href = "http://localhost:5000/api/hooray">Congrats</a></li> ${terminal}.
      curl "http://localhost:5000/api/hooray" `;
  } else {
    return `${wrong}, please enter {wait or go}.`;
  }
}

//Creating a function for answering true or false for the hypothermia question
function trueOrFalse(knowledge) {
  if (knowledge === "true" || knowledge === "True") {
    return `I am sorry wrong answer. ${gameStates.name} and ${randomName}, you too have succumb to your injuries and passed away. 
    You have lost all your XP. ${playAgain}
    curl "http://localhost:5000/api/startGame"`;
  } else if (knowledge === "false" || knowledge === "False") {
    gameStates.XP = gameStates.XP + 30; 
    return `Correct!! ${gameStates.name} and ${randomName}, you too a strong willed and were able to canoe the whole circuit.
    You have gained 30 XP for this. You now have ${(gameStates.XP)} XP. You win!
    Time to celebrate at the pub. ${playAgain}
    curl "http://localhost:5000/api/startGame"`;
  } else {
    return `${wrong}, please enter {true or false}.`;
  }
}

//Create a function for 'Congragulations'
function congrats() {
  return `Congrats you guy's have made it out. Now go celebrate at the pub. ${playAgain}
  <li><a href = "http://localhost:5000/api/startGame">${restart}</a></li> ${terminal}.
  curl "http://localhost:5000/api/startGame"`;
}

module.exports = {
  startGame,
  gameStates,
  giveName,
  randomName,
  canoePartner,
  chooseACanoe,
  navigateTheLake,
  riverDirectionChoice,
  collisionOnRock,
  hazardUpAhead,
  doTheyCommunicate,
  arriveAtSite,
  nextDay,
  fallInWater,
  thunderAndLightning,
  onShore,
  inWaterDecision,
  continueSoaked,
  hypoQuestion,
  canoeToShore,
  waitOnShore,
  trueOrFalse,
  congrats,
};
