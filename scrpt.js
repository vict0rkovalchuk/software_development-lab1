// * ax2+bx +c = 0

const a = 2;
const b = 1;
const c = -3;

const discriminant = Math.sqrt(b ** 2 - 4 * a * c);

if (discriminant > 0) {
  const root1 = (-b - discriminant) / (2 * a).toFixed(2);
  const root2 = (-b + discriminant) / (2 * a).toFixed(2);
  console.log(root1);
  console.log(root2);
} else if (discriminant === 0) {
  const root = +(-b / (2 * a)).toFixed(2);
  console.log(root);
} else {
  console.log('There are 0 roots');
}
