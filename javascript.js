var executeButton = document.getElementById("executeButton");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("myInput");

var activites = [
  "eat",
  "sleep",
  "pray on someones downfall",
  "meditate",
  "hold space for the lyrics of Defying Gravity",
  "hold someones finger",
  "listen to music",
  "do your homework",
  "do someone elses homework",
];

executeButton.addEventListener("click", function () {
  var currentInputText = inputElement.value;
  generate(currentInputText);
  restyle();
});

function generate(incUserInput) {
  var randomIndex = Math.floor(Math.random() * activites.length);
  var selectedRandonTimeText = activites[randomIndex];
  outputParagraph.innerText =
    incUserInput + " is going to " + selectedRandonTimeText + " today!";
}

function restyle() {
  var randColor = Math.random() * 255;
  var randR = Math.random() * 255;
  var randG = Math.random() * 255;
  var randB = Math.random() * 255;
  var randSize = Math.random() * 255;
  var randOutputColor =
    "rgb(" + randColor + "," + randColor + "," + randColor + ")";
  var randOutputColorV2 = "rgb(" + randR + "," + randG + "," + randB + ")";
  outputParagraph.style.color = randOutputColor;
  outputParagraph.style.backgroundColor = randOutputColorV2;
  outputParagraph.style.fontSize = randSize + "px";
}
