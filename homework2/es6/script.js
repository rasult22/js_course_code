import 'babel-polyfill';
//import EmailParser from './emailParser';
import watchObj from './watchObj';

/* global */
window.addEventListener('load', function () {
    //let parser = new EmailParser('rasul@mail.ru');

    //console.log(parser.isCorrect);
    //console.log(parser.name);
    //console.log(parser.domain)

    let div = document.createElement('div');
    document.body.appendChild(div)


    let cleverDiv = watchObj(div, function (property, value) {
        console.log(property, value)
    })

    cleverDiv.innerHTML = "<strong><em>HI</em></strong>";
    cleverDiv.style.color ='red';
    cleverDiv.querySelector('em').style.color = 'green';

})


