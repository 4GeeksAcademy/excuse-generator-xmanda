/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["cat", "racoon", "dog", "bear", "ghost"];
  let actions = ["ate my", "destroyed my", "took my", "stole my"];
  let object = ["homework", "phone", "pizza", "favorite hat"];
  let location = ["in my house", "from my car", "from my room", "in the woods"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionsIndex = Math.floor(Math.random() * actions.length);
  let objectIndex = Math.floor(Math.random() * object.length);
  let locationIndex = Math.floor(Math.random() * location.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    actions[actionsIndex] +
    " " +
    object[objectIndex] +
    " " +
    location[locationIndex]
  );
};
