var progress = 0;
var noun_answer = [];
var verb_answer = [];
var answer_list_noun = []; //export this list to post_ans.js
var answer_list_verb = []; //export this list to post_ans.js

function display_sentence() {
  //the sentence will be imported from db in the future
  var sentenceList = [
  'The weather is nice today.',
  'The raven excludes others from joining them.',
  'The mechanism outdoes the traditional work.',
  'The abuser adores the aggressor.',
  'The adolescent begrudges the drinker.',
  'The choreographer bridles at the choir.',
  'The adjuster despairs at the executive.',
  'The Federal Bureau of Investigation loathes the drug peddler.'
  ];

  //separate a sentence in to words in an array
  e = sentenceList[progress];
  var senarr = e.split(' ');

  //the canvas should be empty before adding a new sentence
  document.getElementById('canvas').innerHTML = '';

  //create the question for noun tag
  var newTag = document.createElement('div');
  var newTagQue = document.createTextNode('Choose a noun for the sentence');

  newTag.appendChild(newTagQue);
  document.getElementById('canvas').appendChild(newTag);

  //create a sentence
  for (n = 0; n < senarr.length; n++) {
    // create a new elements
    var newLabel = document.createElement('label');
    var newInput = document.createElement('input');
    var newContent = document.createTextNode(senarr[n]);
    // add attributes
    newLabel.setAttribute('for', 'senList' + progress + '_idx' + n);
    newInput.setAttribute('type', 'checkbox');
    newInput.setAttribute('id', 'senList' + progress + '_idx' + n);
    newInput.setAttribute('name', 'senList' + progress + '_idx' + n);
    newInput.setAttribute('class', 'check_box_noun');
    newInput.setAttribute('value', senarr[n]);
    newInput.setAttribute('style', 'margin-left: 0.5rem');
    newLabel.setAttribute('style', 'margin-right: 0.5rem');
    // add elements to canvas
    newLabel.appendChild(newContent);
    document.getElementById('canvas').appendChild(newInput);
    document.getElementById('canvas').appendChild(newLabel);
  }

  //grab all the nouns selected by the user for the above sentence
  var checkboxesnoun = document.getElementsByClassName('check_box_noun');
  for (var i = 0, len = checkboxesnoun.length; i < len; i++) {
    checkboxesnoun[i].onclick = saveanswernoun;
  }

  // access properties of checkbox clicked using 'this' keyword
  function saveanswernoun() {
    if (this.checked) {
      // if checked change color to blue
      noun_answer.push(this.value, this.id);
      console.log('This is the clicked word: ' + noun_answer);
      document
        .getElementById(this.id + '_label')
        .setAttribute('style', 'color: blue;');
    } else {
      // if the unchecked word exists in the noun_answer array remove it
      if (noun_answer.includes(this.value)) {
        document
        .getElementById(this.id + '_label')
        .setAttribute('style', 'color: black;');
        var index = noun_answer.indexOf(this.value);
        noun_answer.splice(index, 2);
        console.log('These are the words left: ' + noun_answer);
      }
    }
  }

  // create a line space between noun question and verb questions
  var newLine = document.createElement('br');
  document.getElementById('canvas').appendChild(newLine);

  //create the question for verb tag
  var newTag = document.createElement('div');
  var newTagque = document.createTextNode('Choose a verb for the sentence');

  newTag.appendChild(newTagque);
  document.getElementById('canvas').appendChild(newTag);

  //create a sentence
  for (n = 0; n < senarr.length; n++) {
    // create new elements
    var newLabel = document.createElement('label');
    var newInput = document.createElement('input');
    var newContent = document.createTextNode(senarr[n]);
    // add attributes
    newLabel.setAttribute('for', 'v_senList' + progress + '_idx' + n);
    newLabel.setAttribute('id', 'v_senList' + progress + '_idx' + n + '_label');
    newInput.setAttribute('type', 'checkbox');
    newInput.setAttribute('id', 'v_senList' + progress + '_idx' + n);
    newInput.setAttribute('name', 'senList' + progress + '_idx' + n);
    newInput.setAttribute('class', 'check_box_verb');
    newInput.setAttribute('value', senarr[n]);
    newInput.setAttribute('style', 'margin-left: 0.5rem; visibility:hidden;');
    newLabel.setAttribute('style', 'margin-right: 0.5rem');
    // add elements to canvas
    newLabel.appendChild(newContent);
    document.getElementById('canvas').appendChild(newInput);
    document.getElementById('canvas').appendChild(newLabel);
  }

  //grab all the verbs selected by the user for the above sentence
  var checkboxesverb = document.getElementsByClassName('check_box_verb');
  for (var i = 0, len = checkboxesverb.length; i < len; i++) {
    checkboxesverb[i].onclick = saveanswerverb;
  }

  // access properties of checkbox clicked using 'this' keyword
  function saveanswerverb() {
    if (this.checked) {
      // if checked change color to red
      verb_answer.push(this.value, this.id);
      console.log('This is the clicked word: ' + verb_answer);
      document
        .getElementById(this.id + '_label')
        .setAttribute('style', 'color: red;');
    } else {
        // if the unchecked word exists in the noun_answer array remove it
        document
          .getElementById(this.id + '_label')
          .setAttribute('style', 'color: black;');
        var index = verb_answer.indexOf(this.value);
        verb_answer.splice(index, 2);
        console.log('These are the words left: ' + verb_answer);
    }
  }
}

//move to the next sentence
function next() {
  var sentenceList = [
    'The weather is nice today.',
    'The raven excludes others from joining them.',
    'The mechanism outdoes the traditional work.',
    'The abuser adores the aggressor.',
    'The adolescent begrudges the drinker.',
    'The choreographer bridles at the choir.',
    'The adjuster despairs at the executive.',
    'The Federal Bureau of Investigation loathes the drug peddler.'
  ];

  //add the current answer to answer_list_noun and answer_list_verb before moving to the next sentence
  answer_list_noun.push(noun_answer);
  answer_list_verb.push(verb_answer);
  console.log(answer_list_noun);
  console.log(answer_list_verb);

  //set the noun_answer and verb_answer to empty array for creating new sentence
  noun_answer = [];
  verb_answer = [];

  // add progress to move onto the next sentence
  if (progress >= sentenceList.length - 1) {
    progress = 0;
  } else {
    progress += 1;
  }

  //trigger display sentence function
  display_sentence();
}

//Function: fetch answer_list_noun and answer_list_verb and post to post_ans.js
//How: maybe you can use flask to do api work, I use fetch because I don't know how.
//Current Problem 1: I can get response on browser, but the body is a readstream, I can't use the body.
//Current Problem 2: On post_ans.js, I can't get the req and res in http.createServer(function (req, res).
function testFunc(val) {
  fetch('https://cors-anywhere.herokuapp.com//api/post_ans', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'answer_list_noun': answer_list_noun,
      'answer_list_verb':answer_list_verb
    }),
    cors: 'cors'
  }).then(res => {
    console.log('the res from api is now:', res);
  }).catch(err => {
    console.log('err:', err)
  })
}
