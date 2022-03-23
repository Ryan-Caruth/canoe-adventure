const express = require("express");
const router = express.Router();

const {
  startGame,
  giveName,
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
  trueOrFalse,
  waitOnShore,
  congrats,
  canoePartner,
} = require("../model/index");

router.get("/startGame", (req, res) => {
  let startMessage = startGame();
  res.send(`${startMessage}`);
  console.log(startMessage);
});

router.get("/giveName", (req, res) => {
  let name = req.query.name;
  let answer = giveName(name);
  res.send(`${answer}`);
  console.log(answer);
});

router.get("/generatedName", (req, res) => {
  let partner = canoePartner();
  res.send(`${partner}`);
  console.log(partner);
});

router.get("/canoeChoice", (req, res) => {
  let chooseCanoe = req.query.chooseCanoe;
  let answer = chooseACanoe(chooseCanoe);
  res.send(`${answer}.`);
  console.log(answer);
});

router.get("/canoeToShore", (req, res) => {
  let shoreChoice = req.query.shoreChoice;
  let answer = canoeToShore(shoreChoice);
  res.send(`${answer}.`);
  console.log(answer);
});

router.get("/continueSoaked", (req, res) => {
  let keepGoing = continueSoaked();
  res.send(`${keepGoing}`);
  console.log(keepGoing);
});

router.get("/hypoQuestion", (req, res) => {
  let hypothermia = hypoQuestion();
  res.send(`${hypothermia}`);
  console.log(hypothermia);
});

router.get("/hypoAnswer", (req, res) => {
  let knowledge = req.query.knowledge;
  let answer = trueOrFalse(knowledge);
  res.send(`${answer}.`);
  console.log(answer);
});

router.get("/waitOnshore", (req, res) => {
  let onShore = waitOnShore();
  res.send(`${onShore}`);
  console.log(onShore);
});

router.get("/onTheWater", (req, res) => {
  let location = req.query.location;
  let answer = navigateTheLake(location);
  res.send(`${answer}.`);
  console.log(answer);
});

router.get("/onTheriver", (req, res) => {
  let direction = req.query.direction;
  let answer = riverDirectionChoice(direction);
  res.send(`${answer}.`);
  console.log(answer);
});

router.get("/inWater", (req, res) => {
  let option = req.query.option;
  let paddle = req.query.paddle;
  let answer = inWaterDecision(option, paddle);
  res.send(`${answer}`);
  console.log(answer);
});

router.get("/collisionOnRock", (req, res) => {
  let collideWithRock = collisionOnRock();
  res.send(`${collideWithRock}`);
  console.log(collideWithRock);
});

router.get("/hazard", (req, res) => {
  let hazardInWater = hazardUpAhead();
  res.send(`${hazardInWater}`);
  console.log(hazardInWater);
});

router.get("/communicateWithStern", (req, res) => {
  let talking = req.query.talking;
  let answer = doTheyCommunicate(talking);
  res.send(`${answer}.`);
  console.log(answer);
});

router.get("/capsize", (req, res) => {
  let capsize = fallInWater();
  res.send(`${capsize}`);
  console.log(capsize);
});

router.get("/choiceOnShore", (req, res) => {
  let survive = req.query.survive;
  let answer = onShore(survive);
  res.send(`${answer}`);
  console.log(answer);
});

router.get("/madeItToSite", (req, res) => {
  let campsite = arriveAtSite();
  res.send(`${campsite}`);
  console.log(campsite);
});

router.get("/nextDay", (req, res) => {
  let day = nextDay();
  res.send(`${day}`);
  console.log(day);
});

router.get("/doWeRiskIt", (req, res) => {
  let choice = req.query.choice;
  let answer = thunderAndLightning(choice);
  res.send(`${answer}.`);
  console.log(answer);
});

router.get("/hooray", (req, res) => {
  let finished = congrats();
  res.send(`${finished}`);
  console.log(finished);
});

module.exports = router;
