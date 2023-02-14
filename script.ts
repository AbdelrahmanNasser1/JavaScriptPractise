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