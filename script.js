/*function constructor

var john = {
    name: 'John',
    yearOfBirth: 1998,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2017 - this.yearOfBirth);
}

var john = new Person('John', 1990, 'teacher');
var Sathes = new Person('Sathes', 1994, 'thug');
var Meera = new Person('Meera', 2016, 'beingcute');

//object create

var personProto = {
    calculateAge: function () {
      console.log(2017 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.YearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto)
{
  name: { value: 'Jane'},
  yearOfBirth: { value: 1969},
  job: { value: 'designer'}
}

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;
obj1.age = 36;
console.log(obj1.age);
console.log(obj2.age);

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco'
}

change(age, obj);
console.log(age);
console.log(obj.city);
// passing function as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
      return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
      }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate)
console.log(ages);
console.log(rates)

//funtions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
      return function(name) {
        console.log(name + ', can you please explain what a UX designer does?')
      }
    } else if (job === 'teacher') {
          return function(name) {
            console.log('What subject do you teach, ' + name + '?');
          }
    }   else {
          return function(name) {
            console.log ('Hello ' + name + ' what do you do?')
          }
      }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('Sathes');
designerQuestion('Sathes');
designerQuestion('Prince');
teacherQuestion('Squeeze');

*/
var score = 0;
function question() {
  var x = 3;
  while (x = 3) {
  console.log('1:Canada\n2:USA')
  var firstQuestion = prompt('What country are you in?', "Enter your country");

    if (firstQuestion === "exit") {
      break;
    } else if (firstQuestion === "1")  {
        score += 1
          console.log("Correct\nYour Current Score Is " + score);
    } else {
        console.log("Wrong Answer\nYour Current Score Is " + score);
    }

  console.log('1:Bitmaker\n2:Hacker You\n3:Lighthouse Labs')
  var secondQuestion = prompt('Where is the best school?', "Enter the best school");
    if (secondQuestion === "exit") {
      break;
    } else if (firstQuestion === "1")  {
      score +=1
      console.log('Correct\nYour Current Score Is ' + score);
    } else {
      console.log('Wrong Answer\n Your Current Score Is ' + score)
    }
  }
}

question();




















// ss





























//o
