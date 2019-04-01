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
console.log(`${header.display('Team', 'JSIICrew', 'Assignment 3.4')}\n`);

let questions;
let answers;
let correct;
let result;

const buildQuiz = (q, a, r) => {

    // Parameter q is array of question objects.
    q = [{
            //Each object in the q array takes three properties 
            question:'',
            choices: [
                '',
                '',
                '',
                ''
            ],
            answer: ''
        },
        {
            question:'',
            choices: [
                '',
                '',
                '',
                ''
            ],
            answer: ''
        },
        {
            question:'',
            choices: [
                '',
                '',
                '',
                ''
            ],
            answer: ''

        },
        {
            question:'',
            choices: [
                '',
                '',
                '',
                ''
            ],
            answer: ''
        },
        {
            question:'',
            choices: [
                '',
                '',
                '',
                ''
            ],
            answer: ''
        },
        {
            question:'',
            choices: [
                '',
                '',
                '',
                ''
            ],
            answer: ''
        },
        {
            question:'',
            choices: [
                '',
                '',
                '',
                ''
            ],
            answer: ''
        },
        {
            question:'',
            choices: [
                '',
                '',
                '',
                ''
            ],
            answer: ''
        },
        {
            question:'',
            choices: [
                '',
                '',
                '',
                ''
            ],
            answer: ''
        },
        {
            question:'',
            choices: [
                '',
                '',
                '',
                ''
            ],
            answer: ''
        }
    ];
}