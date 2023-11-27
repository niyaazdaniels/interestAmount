let input = document.querySelector('#input')
let input2 = document.querySelector('#input2')
let output = document.querySelector('#output')
let btnCal = document.querySelector('#calculate').addEventListener('click',calInt)

function calInt (){
    output.innerText = `Interest on amount R${(input.value * input2.value) / 100 }  `;
}