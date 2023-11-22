let input = document.querySelector('#input')
let output = document.querySelector('#output')
let btnCal = document.querySelector('#calculate').addEventListener('click',calInt)

function calInt (){
    output.innerText = 'Interest would be R' + (input.value * 15) / 100 ;
}