var a = document.querySelector("input#add0")
var b = document.querySelector("input#add1")
var c = document.querySelector("input#convert")
var value_input = document.querySelector("input#value")
var result = document.querySelector("input#result")

a.addEventListener('click', add0)
b.addEventListener('click', add1)

c.addEventListener('click', convert)


function add0(){
    value_input.value = `${value_input.value}0`
}

function add1(){
    value_input.value = `${value_input.value}1`
}

function convert(){

    if(/[2-9]+/.test(value_input.value)==true){
        window.alert('Invalid input! Anything other than a 0 or 1 was entered')
    }
    else{
        var resultado = parseInt(value_input.value, 2)
        result.value = `${resultado}`
    }
}
