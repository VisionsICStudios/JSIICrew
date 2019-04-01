// ModelView Constructor.
function QuizViewModel() {
    this.title = "JSIICrew JavaScript Trivia Quiz Prototype";
    this.qOne = "Question One: ";
    this.q1ChoiceA = "squirrel.log();";
    this.q1ChoiceB = "header.log();";
    this.q1ChoiceC = "tab.log();";
    this.q1ChoiceD = "console.log(); *";
    this.qTwo = "Question Two: ";
    this.q2ChoiceA = "=";
    this.q2ChoiceB = "==";
    this.q2ChoiceC = "===";
    this.q2ChoiceD = "Answers B and C *";
    this.qThree = "Question Three: ";
    this.q3ChoiceA = "Shuffle statement";
    this.q3ChoiceB = "Swap statement";
    this.q3ChoiceC = "Switch statement *";
    this.q3ChoiceD = "";
    this.qFour = "Question Four: ";
    this.q4ChoiceA = "List";
    this.q4ChoiceB = "Object";
    this.q4ChoiceC = "Variable";
    this.q4ChoiceD = "Array *";

}

// Activates knockout.js.
ko.applyBindings(new QuizViewModel());

/ Automatic JQuery Statement to let the DOM know is is ready.
$(document).ready(function() {

  // Hide all other sections.
  $("#q2, #q3, #q4").hide();

  // Run ths JQuery code when the home button is clicked.
  $("#q1Next").click(function () {
    $("#q2").show();
    $("#q1, #q3, #q4").hide();
  });

  // Run ths JQuery code when the home button is clicked.
  $("#q2Prev").click(function () {
    $("#q1").show();
    $("#q2, #q3, #q4").hide();
  });

  // Run ths JQuery code when the about button is clicked.
  $("#q2Next").click(function () {
    $("#q3").show();
    $("#q1, #q2, #q4").hide();
  });

  // Run ths JQuery code when the logo is clicked.
  $("#q3Prev").click(function () {
    $("#q2").show();
    $("#q1, #q3, #q4").hide();
  });

  // Run ths JQuery code when the portfolio button is clicked.
  $("#q3Next").click(function () {
    $("#q4").show();
    $("#q1, #q2, #q3").hide();
  });

  // Run ths JQuery code when the contact button is clicked.
  $("#q4Prev").click(function () {
    $("#q3").show();
    $("#q1, #q2, #q4").hide();
  });
});