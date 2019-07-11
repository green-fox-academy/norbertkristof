'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

//function drawLineToTheMiddle(x: number, y: number) {
    // ctx.strokeStyle = 'red';
    // ctx.beginPath();
    // ctx.lineWidth = 14;
    // ctx.moveTo(40, canvas.height / 2 + 27);
    // ctx.lineTo(canvas.width - 40, canvas.height / 2 + 24);
    // ctx.stroke();

    setTimeout(function () {

        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(40, canvas.height / 2 + 27);
        ctx.lineTo(canvas.width - 40, canvas.height / 2 + 24);
        ctx.stroke();
    },1200*2)

    setTimeout(function () {

        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(320, 120);
        ctx.lineTo(323, canvas.height / 2 + 27);
        ctx.stroke();
    },1200*3)

    setTimeout(function () {

        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(320, 240);
        ctx.lineTo(460, 242);
        ctx.stroke();
    },1200*4)

    setTimeout(function () {

        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(460, 234);
        ctx.lineTo(459, canvas.height / 2 + 27);
        ctx.stroke();
    },1200*5)

    setTimeout(function () {

        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(520, canvas.height / 2 + 27);
        ctx.lineTo(519, canvas.height / 2 - 141);
        ctx.stroke();
    },1200*6)

    setTimeout(function () {

        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(511, canvas.height / 2 - 142);
        ctx.lineTo(844, canvas.height / 2 - 140);
        ctx.stroke();
    },1200*7)

    setTimeout(function () {

        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(844, canvas.height / 2 - 148);
        ctx.lineTo(841, canvas.height / 2 + 27);
        ctx.stroke();
    },1200*8)

    setTimeout(function () {

        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(1044, 120);
        ctx.lineTo(1042, canvas.height / 2 + 27);
        ctx.stroke();
    },1200*9)

    setTimeout(function () {

        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(1042, 240);
        ctx.lineTo(918, 242);
        ctx.stroke();
    },1200*10)

    setTimeout(function () {

        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(920, 238);
        ctx.lineTo(922, canvas.height / 2 + 27);
        ctx.stroke();
    },1200*11)

    setTimeout(function () {
        
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(canvas.width / 2, canvas.height / 2 + 27);
        ctx.lineTo(canvas.width / 2, canvas.height / 2 + 260);
        ctx.stroke();
        
    },1200*12)

    setTimeout(function () {
        
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(canvas.width / 2, canvas.height / 2 + 180);
        ctx.lineTo(canvas.width / 2 - 50, canvas.height / 2 + 180);
        ctx.stroke();
        
    },1200*13)

    setTimeout(function () {
        
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.lineWidth = 16;
        ctx.moveTo(canvas.width / 2, canvas.height / 2 + 180);
        ctx.lineTo(canvas.width / 2 + 50, canvas.height / 2 + 180);
        ctx.stroke();
        
    },1200*14)

    setTimeout(function () {
       
        // var canvas = document.getElementById("myCanvas");
        // var ctx = canvas.getContext("2d");
        ctx.fillStyle = 'red';
        ctx.font = "38px Sarabun";
        //ctx.fillText = 'red';
        ctx.fillText("T H E   D E V I L S   T A B L E", 840, 570);
        
    },1200*15)

