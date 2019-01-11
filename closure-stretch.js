var wrapLog = function (callback, name) {
    return function() {
      let outPutString = "";
      let args = Array.prototype.slice.call(arguments);
      outPutString += name + "(" + args.join(", ") + ") => " + callback.apply(null, arguments);

      return outPutString;
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

console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6
console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30)
console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24

