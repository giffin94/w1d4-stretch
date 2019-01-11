var wrapLog = function (callback, name) {
    return function() {
      if(name === "area"){
        console.log(name + "(" + arguments[0] + ", " + arguments[1] + ") => "  + callback(arguments[0], arguments[1], arguments[2]));
      } else {
        console.log(name + "(" + arguments[0] + ", " + arguments[1] + ", " + arguments[2] + ") => "  + callback(arguments[0], arguments[1], arguments[2]));
      }
    }
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");



var volume = function (x, y, z) {
  return x * y * z;
};

var logVolume = wrapLog(volume, "volume");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24

