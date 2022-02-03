const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const drawCar = () => {
  ctx.save();
  ctx.translate(35, 260);

  // Draw the trunk
  ctx.fillRect(0, 30, 15, 15);
  // Draw the car body
  ctx.fillRect(15, 20, 25, 25);
  //Draw the window
  ctx.fillStyle = 'white';
  ctx.fillRect(28, 23, 7, 7);
  ctx.fillStyle = 'black';
  // Draw the hood
  ctx.fillRect(40, 30, 15, 15);
  // Draw the wheels
  ctx.fillRect(7, 43, 10, 10);
  ctx.fillRect(37, 43, 10, 10);
  ctx.restore();
};

drawCar();
