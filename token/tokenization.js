var progress = 0;
var noun_answer = [];
var verb_answer = [];
var answer_list_noun = [];
var answer_list_verb = [];
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

function display_sentence() {
  e = sentenceList[progress];
  var senarr = e.split(' ');

  document.getElementById('canvas').innerHTML = '';

  var newTag = document.createElement('div');
  var newTagQue = document.createTextNode('Choose a noun for the sentence');
  newTag.appendChild(newTagQue);
  document.getElementById('canvas').appendChild(newTag);

  for (n = 0; n < senarr.length; n++) {
    // create a new div element
    var newLabel = document.createElement('label');
    var newInput = document.createElement('input');
    newLabel.setAttribute('for', 'senList' + progress + '_idx' + n);
    newInput.setAttribute('type', 'checkbox');
    newInput.setAttribute('id', 'senList' + progress + '_idx' + n);
    newInput.setAttribute('name', 'senList' + progress + '_idx' + n);
    newInput.setAttribute('class', 'check_box_noun');
    newInput.setAttribute('value', senarr[n]);
    newInput.setAttribute('style', 'margin-left: 0.5rem');
    newLabel.setAttribute('style', 'margin-right: 0.5rem');
    var newContent = document.createTextNode(senarr[n]);
    newLabel.appendChild(newContent);
    document.getElementById('canvas').appendChild(newInput);
    document.getElementById('canvas').appendChild(newLabel);
  }

  //grab all the noun input for this sentence
  var checkboxesnoun = document.getElementsByClassName('check_box_noun');
  for (var i = 0, len = checkboxesnoun.length; i < len; i++) {
    checkboxesnoun[i].onclick = saveanswernoun;
  }

  // access properties of checkbox clicked using 'this' keyword
  function saveanswernoun() {
    if (this.checked) {
      // if checked ...
      noun_answer.push(this.value, this.id);
      console.log('This is the clicked word: ' + noun_answer);
      // answer_list_noun = answer_list_noun.concat(noun_answer);
    } else {
      if (noun_answer.includes(this.value)) {
        var index = noun_answer.indexOf(this.value);
        noun_answer.splice(index, 2);
        console.log('These are the words left: ' + noun_answer);
        // answer_list_noun = answer_list_noun.concat(noun_answer);
      }
    }
  }

  var newLine = document.createElement('br');
  document.getElementById('canvas').appendChild(newLine);
  var newLine = document.createElement('br');
  document.getElementById('canvas').appendChild(newLine);

  var newTag = document.createElement('div');
  var newTagque = document.createTextNode('Choose a verb for the sentence');
  newTag.appendChild(newTagque);
  document.getElementById('canvas').appendChild(newTag);

  for (n = 0; n < senarr.length; n++) {
    // create a new div element
    var newLabel = document.createElement('label');
    var newInput = document.createElement('input');
    newLabel.setAttribute('for', 'v_senList' + progress + '_idx' + n);
    newLabel.setAttribute('id', 'v_senList' + progress + '_idx' + n + '_label');
    newInput.setAttribute('type', 'checkbox');
    newInput.setAttribute('id', 'v_senList' + progress + '_idx' + n);
    newInput.setAttribute('name', 'senList' + progress + '_idx' + n);
    newInput.setAttribute('class', 'check_box_verb');
    newInput.setAttribute('value', senarr[n]);
    newInput.setAttribute('style', 'margin-left: 0.5rem; visibility:hidden;');
    newLabel.setAttribute('style', 'margin-right: 0.5rem');
    var newContent = document.createTextNode(senarr[n]);
    newLabel.appendChild(newContent);
    document.getElementById('canvas').appendChild(newInput);
    document.getElementById('canvas').appendChild(newLabel);
  }

  //grab all the verb input for this sentence
  var checkboxesverb = document.getElementsByClassName('check_box_verb');
  for (var i = 0, len = checkboxesverb.length; i < len; i++) {
    checkboxesverb[i].onclick = saveanswerverb;
  }

  // access properties of checkbox clicked using 'this' keyword

  function saveanswerverb() {
    // var noun_answer = new Array;

    if (this.checked) {
      // if checked ...
      verb_answer.push(this.value, this.id);
      console.log('This is the clicked word: ' + verb_answer);
      document
        .getElementById(this.id + '_label')
        .setAttribute('style', 'color: red;');
    } else {
      document
        .getElementById(this.id + '_label')
        .setAttribute('style', 'color: black;');
      var index = verb_answer.indexOf(this.value);
      verb_answer.splice(index, 2);
      console.log('These are the words left: ' + verb_answer);
    }
  }
}

// var checkedValue = $("#'senList' + progress + '_idx' + n:checked").val();
// console.log(checkedValue);

function next() {
  answer_list_noun.push(noun_answer);
  console.log(answer_list_noun);
  answer_list_verb.push(verb_answer);
  console.log(answer_list_verb);
  noun_answer = [];
  verb_answer = [];

  if (progress >= sentenceList.length - 1) {
    progress = 0;
  } else {
    progress += 1;
  }
  display_sentence();
}

function testFunc(val) {
  console.log('fetch here');
  
  // fetch('https://cors-anywhere.herokuapp.com//api/post_ans', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     answer_list_noun,
  //     answer_list_verb
  //   }),
  //   cors: 'cors'
  // }).then(res => {
  //   console.log('the res:', res)
  // }).catch(err => {
  //   console.log('err:', err)
  // })
}


module.exports = {
  display_sentence,
  next,
  answer_list_noun,
  answer_list_verb,
  testFunc
};


