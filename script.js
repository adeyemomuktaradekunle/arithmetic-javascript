function demoConst() {
    const school = "xAi Academy";
    const pi =3.14159;

    document.getElementById("constOutput").innerHTML =
    `const school ="${school}"<br>
    const pi =${pi}<br><br>
    created sucessfully <br>
    you cannot change a const later it will throw an error`;
}
let score = 2;
function demoLet() {
    score = score + 10;

    document.getElementById("letOutput").innerHTML =
    `let score = ${score} <br><br>
    value changed succesfully <br>
    Current score is now: <strong>${score}</strong>`;
}
function demoVar() {
    var oldMessage ="i am old";

    document.getElementById("varOutput").innerHTML =
    `var oldMessage =${oldMessage} <br><br>
    this still works but we avoid using it <br>
    it has strange scoping rules and cause bugs`;   
    
}