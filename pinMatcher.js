
// Random number generate
function getRandomNum() {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const value = document.getElementById('randomNum').value =  randomNumber;
    return value;
}

// Display input value
function displayNumber(num){
document.getElementById('inputField').value += num;
}

//cheak pin number match or not 
function numCheak() {
  if ( document.getElementById('randomNum').value == document.getElementById('inputField').value) {
     document.getElementById('match').style.display = 'block';
     document.getElementById('notMatch').style.display = 'none';
  }
  else{
      document.getElementById('notMatch').style.display = 'block';
      document.getElementById('Match').style.display = 'none';
  }
}

// clear all values
function clearAllValue(){
document.getElementById('inputField').value = '';
}

// Remove last number

function backspace() {
    const verifyNo = document.getElementById('inputField').value.toString().slice(0, -1);
    document.getElementById('inputField').value = verifyNo;

}