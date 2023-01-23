function sayHelloFromHead() {
    alert("Hello world from head tag.")
}

function sayHelloFromBody() {
    alert("Hello world from body tag.")
    console.log(Number("33a"));
    console.log(parseInt("33a"));
    console.log(parseInt("a33"));


}


function sayHelloFromEventDriven() {
    alert("Hello world from body tag.")
}

function TestPromptAndConfirm(){
    var name = prompt("Enter your name: ","");

    alert("Welcome "+ name);

    var result = confirm("Are you sure?");
    if(result == true){
        alert("Thanks...");
    }
    else{
        alert("GoodBye...");
    }
}