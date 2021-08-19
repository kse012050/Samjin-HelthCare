export class Hill{
    constructor(x,y){
        this.startX = x; // 0
        this.startY = y; // 710
        this.test = 110;

        this.points = [];

        this.points[0] = {
            x : 0,
            y : 710
        }
   
        this.points[1] = {
            x : 110,
            y : 730
        }
        this.points[2] = {
            x : 130,
            y : 690
        }
       /*  this.points[3] = {
            x : 100,
            y : 720
        } */
       /*  this.points[3] = {
            x : 142,
            y : 710
        }
        this.points[4] = {
            x : 170,
            y : 710
        } */
       
    }

    draw(ctx){
        ctx.strokeStyle = 'red';
        // ctx.lineJoin = 'round';
        // ctx.lineWidth = 10;
    /*     
        ctx.beginPath();
        // ctx.moveTo(this.startX,this.startY);
        // ctx.lineTo(this.startX + this.test,this.startY);

        let cur = this.points[0];
        let prev = cur;

        let prevCx = cur.x;
        let prevCy = cur.y;

        for(let i = 0; i < this.points.length; i++){
            cur = this.points[i];
            console.log(prev);
            
            const cx = (prev.x + cur.x) / 2;
            const cy = (prev.y + cur.y) / 2;
            ctx.quadraticCurveTo(prev.x,prev.y,cx,cy);
            
            prev = cur;  
            prevCx = cx;
            prevCy = cy;
        } */

        ctx.moveTo(0, 710);
        ctx.quadraticCurveTo(110, 710, 105, 710);
        // ctx.lineTo(120, 690);
        ctx.quadraticCurveTo(110, 710, 115, 700);
        ctx.quadraticCurveTo(121, 677, 126, 700);
        ctx.lineTo(128.7, 710);
        // ctx.lineTo(142, 710);
        ctx.quadraticCurveTo(133, 728, 139, 713);
        ctx.quadraticCurveTo(140, 710, 145, 710);
        ctx.lineTo( 170, 710);

        // ctx.lineTo(120, 690);
        // ctx.lineTo(200, 900);
        // ctx.quadraticCurveTo((this.startX + this.test + 120) / 2,  (this.startY + 685) / 2 , 120 , 685);
        // ctx.quadraticCurveTo(140, 735);

        // ctx.quadraticCurveTo(121, 650, 129, 711);
        ctx.stroke();
/* 
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(110, 710, 2, 0, 2 * Math.PI);
        ctx.fill();
 */


       /*  cur = this.points[0];
        prev = cur;

        prevCx = cur.x;
        prevCy = cur.y;
        
        for(let i = 0; i < this.points.length; i++){
            cur = this.points[i];
            const cx = (prev.x + cur.x) / 2;
            const cy = (prev.y + cur.y) / 2;
            
            ctx.fillStyle = 'rgba(0,255,0,0.5)';
            ctx.beginPath();
            ctx.arc(cx, cy, 2, 0, 2 * Math.PI);
            ctx.fill();
            
            prev = cur;
            ctx.fillStyle = 'rgba(255,0,0,0.5)';
            ctx.beginPath();
            ctx.arc(prev.x, prev.y, 2, 0, 2 * Math.PI);
            ctx.fill();
        } */
        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(120, 690, 2, 0, 2 * Math.PI);
        // ctx.fill();

        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(133, 720, 2, 0, 2 * Math.PI);
        // ctx.fill();

        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(142, 710, 2, 0, 2 * Math.PI);
        // ctx.fill();

        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(170, 710, 2, 0, 2 * Math.PI);
        // ctx.fill();
    }
}
