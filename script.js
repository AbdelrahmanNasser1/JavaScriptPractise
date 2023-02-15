function myFunction() {
    var firstName = "Abdelrahman";
    var secondName = "Nasser";
    console.log(typeof firstName + " " + typeof secondName);
    var json = JSON.parse("55");
    console.log(typeof json);
}
var circu = function (diameter) {
    return diameter * Math.PI;
};
console.log(circu(5));
/*Arrays*/
var strings = ['khaled', 'reda', 'monir', 'tarek']; // strings only
strings[4] = "tamer";
for (var i = 0; i < strings.length; i++) {
    console.log('number index' + i + ': ' + strings[i]);
}
var numbers = [1, 2, 3, 4];
for (var i = 0; i < numbers.length; i++) {
    console.log('number index' + i + ': ' + numbers[i]);
}
var mixedArray = ['tamer', 3, 4, 'sa'];
mixedArray[0] = 1;
for (var i = 0; i < mixedArray.length; i++) {
    console.log('number index' + i + ': ' + mixedArray[i]);
}
