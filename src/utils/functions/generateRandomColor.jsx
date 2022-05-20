export default function generateRandomColor() {
  const h = randomNumber(360);
  const s = randomNumber(100) + "%";

  const light = `hsl(${h}, ${s}, 95%)`;
  const dark = `hsl(${h}, ${s}, 30%)`;
  return { light, dark };
}

function randomNumber(range) {
  return Math.floor(Math.random() * (range + 1));
}
