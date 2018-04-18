// Morse code alphabet
const alphabet = [
{letter: 'a', seq: '. _'},
{letter: 'b', seq: '_ . . .'},
{letter: 'c', seq: '_ . _ .'},
{letter: 'd', seq: '_ . .'},
{letter: 'e', seq: '.'},
{letter: 'f', seq: '. . _ .'},
{letter: 'g', seq: '_ _ .'},
{letter: 'h', seq: '. . . .'},
{letter: 'i', seq: '. .'},
{letter: 'j', seq: '. _ _ _'},
{letter: 'k', seq: '_ . _'},
{letter: 'l', seq: '. _ . .'},
{letter: 'm', seq: '_ _'},
{letter: 'n', seq: '_ .'},
{letter: 'o', seq: '_ _ _'},
{letter: 'p', seq: '. _ _ .'},
{letter: 'q', seq: '_ _ . _'},
{letter: 'r', seq: '. _ .'},
{letter: 's', seq: '. . .'},
{letter: 't', seq: '_'},
{letter: 'u', seq: '. . _'},
{letter: 'v', seq: '. . . _'},
{letter: 'w', seq: '. _ _'},
{letter: 'x', seq: '_ . . _'},
{letter: 'y', seq: '_ . _ _'},
{letter: 'z', seq: '_ _ . .'}
];

const inputWord = document.getElementById('inputWord').querySelectorAll('p');
const outputSeq = document.getElementById('outputSeq');

function populateWord(word){
  inputWord[0].textContent = word;
};

// Display given sequence
function populateSeq(seq){
  // Create node
  let para = document.createElement('p');
  // Populate node
  let child = document.createTextNode(seq);
  // Append node
  para.appendChild(child);
  outputSeq.appendChild(para);
};

// Loop through each letter in the word
function input(word){
  // Call matchChar on each letter
  word.forEach(letter => matchChar(letter));
};


// Find the character in the alphabet
function matchChar(char){
  let matchedCharacter = alphabet.filter(x => x.letter === char);
  populateSeq(matchedCharacter[0].seq);
};

let output = document.getElementById("transButton").addEventListener("click", function( event ) {
    let inputVal = document.getElementById('input').value;
    let button = document.getElementById('transButton');
    let buttonVal = button.value.toLowerCase()
    buttonVal = inputVal;
    let splitInput = buttonVal.split("");
    // Clear field
    outputSeq.innerHTML = '';

    populateWord(buttonVal);
    input(splitInput);
  }, false);
