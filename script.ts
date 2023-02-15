function myFunction() : void {
    let firstName: string = "Abdelrahman";
    let secondName = "Nasser";
    console.log(typeof firstName +" "+typeof secondName);

    const json = JSON.parse("55");
    console.log(typeof json);
}

const circu = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circu(5));

/*Arrays*/

let strings = ['khaled','reda','monir','tarek'] // strings only
strings[4] = "tamer"
for (let i = 0 ; i < strings.length ; i++){
    console.log('number index'+ i + ': '+ strings[i])
}

let numbers = [1,2,3,4]
for (let i = 0 ; i < numbers.length ; i++){
    console.log('number index'+ i + ': '+ numbers[i])
}
let mixedArray = ['tamer',3,4,'sa']
mixedArray[0]=1
for (let i = 0 ; i < mixedArray.length ; i++){
    console.log('number index'+ i + ': '+ mixedArray[i])
}