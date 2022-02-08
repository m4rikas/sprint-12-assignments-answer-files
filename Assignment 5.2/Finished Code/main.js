$(document).ready(function () {
  $("#button").click(function () {
    // Store an array of values for rgb
    let RGBvalues = randomRGBcolor();

    // Turn array into an rgb value
    let rgbcolor =
      "rgb(" + RGBvalues[0] + ", " + RGBvalues[1] + ", " + RGBvalues[2] + ")";

    // Give rgb color to the background
    $("body").css("background-color", rgbcolor);

    // Show user the rgb color
    $("#color").text(rgbcolor);
  });
});

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

// Returns an array of 3 values for rgb
function randomRGBcolor() {
  let red = randomNumber();
  let green = randomNumber();
  let blue = randomNumber();
  return [red, green, blue];
}
