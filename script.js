/* Add your script here */



  // Taking inputs
var StartTemp= document.getElementById("StartTemp").value;
var StopTemp= document.getElementById("StopTemp").value;
var TimeInterval= document.getElementById("TimeInterval").value;




// Progress bar
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var element = document.getElementById("myBar");
    var StartTemp= document.getElementById("StartTemp").value;
    var StopTemp= document.getElementById("StopTemp").value;
    var TimeInterval= document.getElementById("TimeInterval").value;
    // var width = 1;
    var id = setInterval(frame, TimeInterval);
    function frame() {
      if (StartTemp >= StopTemp) {
        clearInterval(id);
        i = 0;
      } else {
        StartTemp++;
        
        if(StartTemp > 0 && StartTemp <= 20){
          element.style.backgroundColor = "blue";
      }
        if(StartTemp > 21 && StartTemp <= 40){
          element.style.backgroundColor = "green";
      }
        if(StartTemp > 41 && StartTemp <= 60){
          element.style.backgroundColor = "yellow";
      }
        if(StartTemp > 61 && StartTemp <= 80){
          element.style.backgroundColor = "orange";
      }
        if(StartTemp > 81 && StartTemp <= 100){
          element.style.backgroundColor = "red";
      }
        else{
           element.style.backgroundColor = "white";
        }
       
        element.style.width = StartTemp + '%';
        element.innerHTML = StartTemp * 1  + '%';
    }
  }
     
  }
}

// $('.Btn').click(function(){
//   var $this = $(this).toggleClass('Btn');
//      if($(this).hasClass('Btn'))
//              {
//            $(this).text('Start');

//          } else {
//            $(this).text('Cooking');
//              }
// });

