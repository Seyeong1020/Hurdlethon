function helloName(name){
    alert(`Hello ${name}!`);
}

helloName("GDG on Campus Sogang");

const inputTxt = document.getElementById("helloName");
const helloButton = document.getElementById("helloButton");

helloButton.addEventListener("click", ()=> {
    helloName(inputTxt.value);
}); //엘리먼트라서 .value 해조야댐