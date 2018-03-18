function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("alternateshippingadd");
  if (checkBox.checked == true){
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}

function move(x,y) {
  var elem = document.getElementById("ProgressBar");   
  var width = x;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= y) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}