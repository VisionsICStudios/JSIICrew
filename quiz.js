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
const header = require('/header.js');

// Output to the console the header info.
console.log(`${header.display('Team', 'JSIICrew', 'Assignment 9.4')}\n`);

var quizViewModel = function() {

    // Parameter q is array of question objects.
    this.quiz = observableArray[{
            //Each object in the q array takes three properties
            question:'What tool can be used to log JavaScript information?',
            choices: [
                'squirrel.log();',
                'header.log();',
                'tab.log();',
                'console.log();'
            ],
            correct: 'console.log();'
        },
        {
            question:'What operator can be used to compare if two values are equal in JavaScript?',
            choices: [
                '== and ===',
                '==',
                '===',
                '='
            ],
            correct: '== and ==='
        },
        {
            question:'How can JavaScript test if a case matches and perform an action based on that match?',
            choices: [
                'Shuffle Statement',
                'Switch Statement',
                'Swap Statement',
                'If Statement'
            ],
            correct: 'Switch Statement'

        },
        {
            question:'What object can hold a collection of information in JavaScript?',
            choices: [
                'List',
                'Database',
                'Collector',
                'Array'
            ],
            correct: 'Array'
        },
        {
            question:'What can be used to iterate over an array?',
            choices: [
                'i',
                'For Loop, ForEach Loop',
                'iterator',
                'index'
            ],
            correct: 'For Loop, ForEach Loop'
        },
        {
            question:'What property of an array can be used to make sure the whole array is looped over?',
            choices: [
                'array.push',
                'array.pop',
                'array.map',
                'array.length'
            ],
            correct: 'array.length'
        },
        {
            question:'What is a function that is passed into another function as an argument?',
            choices: [
                'callback',
                'function expression',
                'IIFE',
                'parameter'
            ],
            correct: 'callback'
        },
        {
            question:'What is it called when an object contains another object?',
            choices: [
                'Array',
                'Nested Object',
                'Collection',
                'Object Object'
            ],
            correct: 'Nested Object'
        },
        {
            question:'Which operator can be used to check if two values are not equal?',
            choices: [
                'null',
                '||',
                '=!',
                '!='
            ],
            correct: '!='
        },
        {
            question:'What function can be used to create objects in JavaScript?',
            choices: [
                'this.object',
                'new Object()',
                'Constructor',
                'Object Literal'
            ],
            correct: 'Constructor'
        }
    ];
}

ko.applyBindings(new quizViewModel());
