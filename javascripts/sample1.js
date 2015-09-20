function drawWalk()
{
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  ctx.clearRect(0, 0, c.width, c.height);
  ctx.strokeStyle = "#000099";
  ctx.beginPath();

  var x = 200;
  var y = 200;
  ctx.moveTo(x, y);

  for (var i = 0; i < 1000; i++) {
   x += Math.round((Math.random() * 10)) - 5;
   y += Math.round((Math.random() * 10)) - 5;
   ctx.lineTo(x,y);
   ctx.stroke();
  }

}
