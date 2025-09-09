const inputBox = document.getElementById("password");


const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$56789()_-+~";
const CharAll = upperCase + lowerCase + numbers + symbol;

function createPassword (){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += CharAll[Math.floor(Math.random() * CharAll.length)];

    }

    inputBox.value = password;
}


function ClearPassWord (){
    inputBox.value = "";

}
