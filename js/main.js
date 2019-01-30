var phoneLeft = 0; 
var phoneRight = 0;

function calcoloPercentuale(val, tot) {
  return Math.round(100*val/tot)
}

function ratingLeft() { 
    document.getElementById('numberLeft').value = ++phoneLeft;
    var percLeft = calcoloPercentuale(phoneLeft, phoneLeft + phoneRight)
    var percRight = calcoloPercentuale(phoneRight, phoneLeft + phoneRight)
    
    document.getElementById('percentualeLeft').value = percLeft;
    document.getElementById('percentualeRight').value = percRight;
}

function ratingRight() {
  document.getElementById('numberRight').value = ++phoneRight;
  var percLeft = calcoloPercentuale(phoneLeft, phoneLeft + phoneRight)
  var percRight = calcoloPercentuale(phoneRight, phoneLeft + phoneRight)

  document.getElementById('percentualeLeft').value = percLeft;
  document.getElementById('percentualeRight').value = percRight;
}


