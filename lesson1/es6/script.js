import 'babel-polyfill';
import Timer from './timer';
import {gen} from './gen';
/* global Symbol*/
window.addEventListener('load', function(){
    
    let timer1 = new Timer(document.querySelector('.timer1'), 10);
    
    let forPassword = Symbol();
    const user = {
        firstName:'Name',
        lastName: 'Last',
        [forPassword]: 'JavaScript8'
    }
    
    for(let key in user){
        console.log(`${key}: ${user[key]}`);
    }

    console.log(user[forPassword])

    let someObj = {
        to:10,
        [Symbol.iterator]: function(){
            // Определение своего метода перебора
            let current = 0; // Стартовое значение
            let stop = this.to; // Конечное значение
            return {
                next(){
                    // Метод реализующий переход к следующей итерации
                    if (current <= stop){
                        return {
                            done:false,
                            value: current++
                        }
                    }
                    else {
                        return{ 
                            done:true
                        }
                    }
                }
            }
        }
    }

    for (let some of someObj){
        console.log(some)
    }
    let someGen = gen(1, 5);
    for (let some of someGen){
        console.log(some)
    }

})
 