

function changeColor (sectionID) {
  if(sectionID == 0) {
    console.log("red");
    document.body.style.backgroundColor = "red";

  }
  else if(sectionID == 1) {
    console.log("green ugg");
    document.body.style.backgroundColor = "green";

  }
  else if(sectionID == 2) {
    console.log("blue");
    document.body.style.backgroundColor = "blue";

  }
}


function retrieverTicker() {
	setInterval( function(){
    var parsedData = JSON.parse(httpGet());
    console.log(parsedData['id']);
    changeColor(parsedData['out1']);
	}, 1000);

  var parsedData = JSON.parse(httpGet());
  console.log(parsedData['id']);
  changeColor(parsedData['out1']);
  httpGet();
}


// function accTicker () {
//   setInterval ( accRetriever(), 50);
// }

var accelerationX;

var counter = 0;
var sum = 0;
function httpGet()
{
    var xmlHttp = new XMLHttpRequest();

    var toSend = 0;
    if (counter > 0 ) {
      toSend = parseInt(sum/counter);
    }
    xmlHttp.open( "GET", "http://10.37.101.125:8080/mobile.1." + toSend , false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);

    counter = 0;

    return xmlHttp.responseText;
}


function main() {
  // retrieverTicker();
    // accRetriever();
  window.ondevicemotion = function(event) {
    var accelerationX = event.accelerationIncludingGravity.y;
    var accelerationY = event.accelerationIncludingGravity.y;
    var accelerationZ = event.accelerationIncludingGravity.z;

    sum += 100*(accelerationX*accelerationX + accelerationY*accelerationY + accelerationZ*accelerationZ);
  }
}
