

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



function httpGet()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://10.37.101.125:8080/mobile.1." + accelerationX , false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}

var accelerationX;


function main() {
  // retrieverTicker();
    // accRetriever();
  window.ondevicemotion = function(event) {
    accelerationX = int(event.accelerationIncludingGravity.x * 100);
    var accelerationY = event.accelerationIncludingGravity.y;
    var accelerationZ = event.accelerationIncludingGravity.z;
  }
}
