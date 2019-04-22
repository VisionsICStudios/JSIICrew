/*
============================================
; Title: JSIICrew Group Project
; Authors: JSIICrew
; Team Captain: Aaron Wilson
; Team Developer: Jake Seever
; Team Developer: Lea Trueworthy
; Date: 26 March 2019
; Description: The Milestone 2 - Prototype.
;===========================================
*/

// Create a header variable to point to the location of the header file.
//const header = require('/header.js');

// Output to the console the header info.
// console.log(`${header.display('Team', 'JSIICrew', 'Assignment 9.4')}\n`);

var questionNumber = 1;

var quizViewModel = function() {


  function question(id, question, A, B, C, D, correctAnswer) { // Constructor for question objects.
    this.id = id;
    this.question = question;
    this.A = a;
    this.B = b;
    this.C = c;
    this.D = d;
    this.correct = correctAnswer;
  }

    // Parameter q is array of question objects.
    var quiz = ko.observableArray([
            //Each object in the q array takes three properties
       new question( {
            id: 1,
            question:'What tool can be used to log JavaScript information?',
            a:'squirrel.log();',
            b:'header.log();',
            c:'tab.log();',
            d:'console.log();',
            correct: 'console.log();'
        }),
       new question( {
            id: 2,
            question:'What operator can be used to compare if two values are equal in JavaScript?',
            a:'== and ===',
            b:'==',
            c:'===',
            d:'=',
            correct: '== and ==='
        }),
        new question({
            id: 3,
            question:'How can JavaScript test if a case matches and perform an action based on that match?',
            a:'Shuffle Statement',
            b:'Switch Statement',
            c:'Swap Statement',
            d:'If Statement',
            correct: 'Switch Statement'

        }),
        new question ({
            id: 4,
            question:'What object can hold a collection of information in JavaScript?',
            a:'List',
            b:'Database',
            c:'Collector',
            d:'Array',
            correct: 'Array'
        }),
        new question({
            id: 5,
            question:'What can be used to iterate over an array?',
            a:'i',
            b:'For Loop, ForEach Loop',
            c:'iterator',
            d:'index',
            correct: 'For Loop, ForEach Loop'
        }),
        new question({
            id: 6,
            question:'What property of an array can be used to make sure the whole array is looped over?',
            a:'array.push',
            b:'array.pop',
            c:'array.map',
            d:'array.length',
            correct: 'array.length'
        }),
        new question({
            id: 7,
            question:'What is a function that is passed into another function as an argument?',
            a:'callback',
            b:'function expression',
            c:'IIFE',
            d:'parameter',
            correct: 'callback'
        }),
        new question({
            id: 8,
            question:'What is it called when an object contains another object?',
            a:'Array',
            b:'Nested Object',
            c:'Collection',
            d:'Object Object',
            correct: 'Nested Object'
        }),
        new question({
            id: 9,
            question:'Which operator can be used to check if two values are not equal?',
            a:'null',
            b:'||',
            c:'=!',
            d:'!=',
            correct: '!='
        }),
        new question({
            id: 10,
            question:'What function can be used to create objects in JavaScript?',
            a:'this.object',
            b:'new Object()',
            c:'Constructor',
            d:'Object Literal',
            correct: 'Constructor'
        })
    ]);

    for(var i = 0; i < quiz().length; i++){
      console.log(quiz[i]);
      if(quiz[i] === questionNumber) {
        console.log(this.id);
        questionNumber++;
        break;
      }
    }
}

ko.applyBindings(new quizViewModel());
