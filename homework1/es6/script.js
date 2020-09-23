import 'babel-polyfill';
import {wordsCount, getWords} from './stringo';

/* sglobal Symbol*/
window.addEventListener('load', function(){
    let str = '  Всем  привет! Ура ура! ';

    console.log(wordsCount(str)); // 4

    for(let some of getWords(str)){
        console.log(some);			// выводит 4 слова
    }
})
 