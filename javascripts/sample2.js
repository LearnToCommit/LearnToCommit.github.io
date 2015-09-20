function getRndColor() {
    var r = Math.round(Math.random() * 255),
        g = Math.round(Math.random() * 255),
        b = Math.round(Math.random() * 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function draw()
{
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  var x, y, size;
  for (var i = 0; i < 100; i++) {
    x = Math.round(Math.random() * 400);
    y = Math.round(Math.random() * 400);
    size = Math.round(Math.random() * 50) + 5;
    ctx.beginPath();
    ctx.rect(x, y, x + size, y + size);
    ctx.fillStyle = getRndColor();
    ctx.fill();
  }
}
