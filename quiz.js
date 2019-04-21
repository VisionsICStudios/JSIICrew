


var quizViewModel = function() {

  var self = this;

  self.index = ko.observable(0);

  self.questions = [

    new questionViewModel('What tool can be used to log JavaScript information?', ['squirrel.log();', 'header.log();', 'tab.log();', 'console.log();'], 'console.log();'),
    new questionViewModel('What operator can be used to compare if two values are equal in JavaScript?', ['== and ===', '==', '===', '='], '== and ==='),
    new questionViewModel('How can JavaScript test if a case matches and perform an action based on that match?', ['Shuffle Statement', 'Switch Statement', 'Swap Statement', 'If Statement'], 'Switch statement'),
    new questionViewModel('What object can hold a collection of information in JavaScript?', ['List', 'Database', 'Collector', 'Array'], 'Array'),
    new questionViewModel('What can be used to iterate over an array?', ['For Loop, ForEach Loop', 'index', 'i', 'iterator'], 'For Loop, ForEach Loop'),
    new questionViewModel('What property of an array can be used to make sure the whole array is looped over?', ['array.push', 'array.length', 'array.pop', 'array.map'], 'array.length'),
    new questionViewModel('What is a function that is passed into another function as an argument?', ['callback', 'function expression', 'IIFE', 'parameter'], 'callback'),
    new questionViewModel('What is it called when an object contains another object?', ['Array', 'Nested Object', 'Collection', 'Object Object'], 'Nested Object'),
    new questionViewModel('Which operator can be used to check if two values are not equal?', ['null', '||', '=!', '!='], '!='),
    new questionViewModel('What function can be used to create objects in JavaScript?', ['this.object', 'new Object()', 'Constructor', 'Object Literal'], 'Constructor')

  ];

  self.quizQuestion = ko.observable(self.questions[0]);

  self.next = function() {

    self.index(self.index() + 1);
    self.quizQuestion(self.questions[self.index()]);
  }

  self.previous = function() {

    self.index(self.index() - 1);
    self.quizQuestion(self.questions[self.index()]);
  }

    return self;
};

var answerViewModel = function (answer) {

  this.answer = answer;
  this.selected = ko.observable(false);

  return this;
};

var questionViewModel = function(question, answers, correct) {

  var self = this;
  var i;

  self.question = question;

  self.answers = [];

    for (i = 0; i < answers.length; i++) {

      self.answers.push(new answerViewModel(answers[i]));

    }

  self.correct = correct;

  self.select = function(answer) {

      self.answers.forEach(function(a) { a.selected(false); });
      answer.selected(true);
  }

  self.results = [];

  self.checkAnswer = function() {

    if (answers[i].select === correct) {

      self.results.push(answers[i].select);

      return '<i class="fa fa-check-circle fa-lg"> </i>';

    } else {

      return '<i class="fa fa-times-circle fa-lg"> </i>';
    }
  }

  self.current = ', you have ' + results.length + ' out of 10 correct.';

  return self;
};

ko.applyBindings(new quizViewModel());
