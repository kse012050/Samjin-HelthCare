import { Hill } from './hill.js';

class App{
    constructor(){
        this.canvas = document.querySelector('#mainCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.hill = new Hill(0,710);

        this.resize();

        this.animate();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        
        this.ctx.scale(2,2)
    }

    animate(){
        this.hill.draw(this.ctx)
    }
}

window.onload = () => {
    new App();
}