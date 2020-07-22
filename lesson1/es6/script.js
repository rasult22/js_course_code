window.addEventListener('load', function(){
    
    let timer1 = new Timer(document.querySelector('.timer1'), 10);
    
    console.log(timer1);
})

class Timer{
    constructor(el, time){
        this.el = el;
        this.time = time;
        this.interval;

        this.render()
        this.start()
    }

    start(){
        this.interval = setInterval(this.tick, 1000);
    }

    stop(){
        clearInterval(this.interval);
    }

    tick(){
        this.time--;
        this.render();

        if(this.time < 0){
            this.stop();
        }
    }

    render(){
        this.el.innerHTML = this.time;
    }
}