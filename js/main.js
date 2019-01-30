var phoneLeft = 0; 
var phoneRight = 0;

function calcoloPercentuale(val, tot) {
  return Math.round(100*val/tot)
}

function ratingLeft() { 
    document.getElementById('numberLeft').value = ++phoneLeft;
    var percLeft = calcoloPercentuale(phoneLeft, phoneLeft + phoneRight);
    var percRight = calcoloPercentuale(phoneRight, phoneLeft + phoneRight);
    
    document.getElementById('percentualeLeft').value = percLeft;
    document.getElementById('percentualeRight').value = percRight;
}

function ratingRight() {
  document.getElementById('numberRight').value = ++phoneRight;
  var percLeft = calcoloPercentuale(phoneLeft, phoneLeft + phoneRight);
  var percRight = calcoloPercentuale(phoneRight, phoneLeft + phoneRight);

  document.getElementById('percentualeLeft').value = percLeft;
  document.getElementById('percentualeRight').value = percRight;
}


var imagesArray = ["iphonex.png", "samsunggalaxys8.png"];

function loadRandomPhone() {
  alert("Load Script Random image phone");
  var num = Math.floor(Math.random() * 2); // 0...6
  document.canvas.src = 'images/'+ imagesArray[num];
  

  var num2 = Math.floor(Math.random() * 2); // 0...6
  document.canvas2.src = 'images/'+ imagesArray[num2];
}

