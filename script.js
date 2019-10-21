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
        element.style.width = StartTemp + '%';
        element.innerHTML = StartTemp * 1  + '%';
      }
    }
      if(element.innerHTML <= 20){
        element.style.color(blue);
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

