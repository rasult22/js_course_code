import 'babel-polyfill';
import VueGetters from './VueGetters';
import VueProxy from './VueProxy';

import data from './proxy';
console.log(data.a)
/* global Symbol*/
window.addEventListener('load', function(){
    let vg = new VueGetters({
        el: '.elem1',
        data: {
            clicks: 1, 
            name: "Some!"
        },
            template: `<div><h2>{{ clicks }}</h2>{{ name }}</div>`
    })
    document.querySelector('.elem1').addEventListener('click', function(){
        vg.data.clicks++;
    })

    let vp = new VueProxy({
        el: '.elem2',
        data: {
            clicks: 1, 
            name: "Some!"
        },
            template: `<div><h2>{{ clicks }}</h2>{{ name }}</div>`
    })
    document.querySelector('.elem2').addEventListener('click', function(){
        vp.data.clicks++;
    })
})
 

