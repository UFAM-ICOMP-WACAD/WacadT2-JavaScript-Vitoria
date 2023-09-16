

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomBlueShade() {
   const blue = random(0, 255);
   return `rgb(0, 0, ${blue})`;
}

class Ball {

   constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
   }

   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.moveTo(this.x, this.y - this.size);
      ctx.lineTo(this.x + this.size, this.y + this.size);
      ctx.lineTo(this.x - this.size, this.y + this.size);
      ctx.closePath();
      ctx.fill();
   }

   update() {
      if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
         this.velX = -this.velX;
      }

      if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
         this.velY = -this.velY;
      }

      this.x += this.velX;
      this.y += this.velY;
   }

   collisionDetect() {
      for (const ball of balls) {
         if (!(this === ball)) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + ball.size) {
              ball.color = this.color = randomBlueShade();
            }
         }
      }
   }

}

const balls = [];

while (balls.length < 25) {
   const size = random(10, 20);
   const ball = new Ball(
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7, 7),
      random(-7, 7),
      randomBlueShade(),
      size
   );

   balls.push(ball);
}

function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0, width, height);

   for (const ball of balls) {
     ball.draw();
     ball.update();
     ball.collisionDetect();
   }

   requestAnimationFrame(loop);
}

loop();
