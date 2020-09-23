

export function wordsCount(str){
    let words = str.split(' ')
    let counter = 0;

    words.forEach(element => {
        if(element !== ''){
            counter++;
        }
    });
    return counter;
}

export function* getWords(str){
    let wordsArray = str.split(' ');
    let words = [];
    wordsArray.forEach(element =>{
        if(element !== ''){
            words.push(element)
        }
    })

    for(let i = 0; i< words.length; i++){
        yield words[i];
    }
    
}