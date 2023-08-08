// Link-Generator:


let result;
let url = prompt('Введите ссылку: ', 'https://google.com/')
let oldurl = 'Default of let oldurl !!'

// function generateLink(){
    
//    return url = 'https://google.com/listen-to-you-heart/page#1/'

// }
function generateLink(){
    
   oldurl = url;
   return url = 'https://google.com/listen-to-you-heart/page#1/'

}

function callback(generateLink){

    return console.log('Ваша Новая Ссылка: ', url),console.log('Ваша Старая Ссылка: ', oldurl)
   
}
callback(generateLink())

let sayHi = () => alert("Hello!");

sayHi(); 


// =============================================================================

// Calculator:
let a1 = +prompt('Введите число номер 1: ', '5')
let b1 = +prompt('Введите число номер 2: ', '5')

function calculate(){

    return result = a1 + b1;
}
function callback1(calculate){

    return console.log('Результат(+): ', result)
}
callback1(calculate())
