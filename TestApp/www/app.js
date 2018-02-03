//
//
// function changeColor (sectionID) {
//   if(sectionID == 0) {
//     console.log("red");
//     document.body.style.backgroundColor = "red";
//
//   }
//   else if(sectionID == 1) {
//     console.log("green ugg");
//     document.body.style.backgroundColor = "green";
//
//   }
//   else if(sectionID == 2) {
//     console.log("blue");
//     document.body.style.backgroundColor = "blue";
//
//   } else {
//     document.body.style.backgroundColor = "white";
//   }
// }


function retrieverTicker() {
	setInterval( function(){
    // var parsedData = JSON.parse(httpGet());
    // console.log(parsedData['id']);
    // changeColor(parsedData['out1']);
    httpGet();

	}, 1000);

  // var parsedData = JSON.parse(httpGet());
  // console.log(parsedData['id']);
  // changeColor(parsedData['out1']);
  httpGet();
}


// function accTicker () {
//   setInterval ( accRetriever(), 50);
// }

// var fileName;
// function recordToFilename() {
//
// }

var counter = 0;
var sum = 0;
var fileName = 5;
function httpGet()
{

    var input = document.getElementById('filename'),
        fileName = input.value;
        console.log(fileName);


    var xmlHttp = new XMLHttpRequest();

    var toSend = 0;
    if (counter > 0 ) {
      toSend = parseInt(sum/counter);
    }

    xmlHttp.open( "GET", "http://10.37.101.125:8080/mobile." + fileName + "." + toSend , false ); // false for synchronous request
    xmlHttp.send( null );
    // console.log(xmlHttp.responseText);

    counter = 0;
    sum = 0;

    // console.log("### ID: ");
    // console.log(fileName);
    console.log("HEAT BELOW: ");
    var parsedData = JSON.parse(xmlHttp.responseText);
    console.log(parsedData['out1']);
    // console.log(xmlHttp.responseText['out1']);

    console.log("rgb(" + parsedData['out1'] + ",0,0)");
    document.body.style.backgroundColor = "rgb(" + parsedData['out1'] + ",0,0)";

    // if(fileName == 0) {
    //   console.log("red");
    //   document.body.style.backgroundColor = "red";
    //
    //
    // }
    // else if(fileName == 1) {
    //   console.log("green ugg");
    //   document.body.style.backgroundColor = "green";
    //
    // }
    // else if(fileName == 2) {
    //   console.log("blue");
    //   document.body.style.backgroundColor = "blue";
    //
    // } else {
    //   document.body.style.backgroundColor = "white";
    // }

    // changeColor(fileName);

    return xmlHttp.responseText;
}





function main() {

  window.ondevicemotion = function(event) {
    var accelerationX = event.accelerationIncludingGravity.x;
    var accelerationY = event.accelerationIncludingGravity.y;
    var accelerationZ = event.accelerationIncludingGravity.z;

    sum += 100*(accelerationX*accelerationX + accelerationY*accelerationY + accelerationZ*accelerationZ);
    counter++;
  }
}
