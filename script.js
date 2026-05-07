const canvas = document.querySelector("#hex-bg");
const ctx = canvas.getContext("2d");

let width = 0;
let height = 0;
let cells = [];

const colors = ["#dce0e8", "#ccd0da", "#bcc0cc", "#b4befe", "#94e2d5", "#89dceb"];

function resize() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const size = 22;
  const vertical = size * 0.86;
  cells = [];

  for (let y = -size; y < height + size; y += vertical) {
    for (let x = -size; x < width + size; x += size * 1.5) {
      cells.push({
        x: x + (Math.round(y / vertical) % 2 ? size * 0.75 : 0),
        y,
        phase: Math.random() * Math.PI * 2,
        speed: 0.004 + Math.random() * 0.006,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }
}

function hex(x, y, r) {
  ctx.beginPath();
  for (let i = 0; i < 6; i += 1) {
    const angle = Math.PI / 3 * i + Math.PI / 6;
    const px = x + Math.cos(angle) * r;
    const py = y + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

function draw(time) {
  ctx.clearRect(0, 0, width, height);

  for (const cell of cells) {
    const pulse = (Math.sin(time * cell.speed + cell.phase) + 1) / 2;
    if (pulse < 0.58) continue;

    ctx.globalAlpha = (pulse - 0.58) * 0.24;
    ctx.fillStyle = cell.color;
    hex(cell.x, cell.y, 17);
    ctx.fill();

    ctx.globalAlpha = (pulse - 0.58) * 0.16;
    ctx.strokeStyle = "#9ca0b0";
    ctx.lineWidth = 1;
    hex(cell.x, cell.y, 17);
    ctx.stroke();
  }

  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);

resize();
requestAnimationFrame(draw);
