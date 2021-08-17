class App{
    constructor(){
        this.canvas = document.querySelector('#mainCanvas');
        this.ctx = canvas.getContext('2d');

        resize();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        
    }
}

window.onload = () => {
    new App();
}