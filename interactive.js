let a;
let b;
let c;

for (let i = 0; i < 1; i++) {
  a = prompt('Enter parameter a:');
  if (isNaN(Number(a)) || Number(a) === 0) {
    Number(a) === 0
      ? alert(
          `a = ${0} \n${Error(
            `Expected a valid real number, got ${0} instead`
          )}`
        )
      : alert(
          `a = ${a} \n${Error(
            `Expected a valid real number, got ${a} instead`
          )}`
        );

    i--;
  }
}

for (let i = 0; i < 1; i++) {
  b = prompt('Enter parameter b:');

  if (isNaN(Number(b))) {
    alert(
      `b = ${b} \n${Error(`Expected a valid real number, got ${b} instead`)}`
    );
    i--;
  }
}

for (let i = 0; i < 1; i++) {
  c = prompt('Enter parameter c:');
  if (isNaN(Number(c))) {
    alert(
      `c = ${c} \n${Error(`Expected a valid real number, got ${c} instead`)}`
    );
    i--;
  }
}

const discriminant = Math.sqrt(b ** 2 - 4 * a * c);

if (discriminant > 0) {
  const root1 = parseFloat((-b - discriminant) / (2 * a)).toFixed(1);
  const root2 = parseFloat((-b + discriminant) / (2 * a)).toFixed(1);

  showResult(
    a,
    b,
    c,
    `There are 2 roots <br />
  x1 = ${root1} <br /> x2 = ${root2}
  `
  );
} else if (discriminant === 0) {
  const root = parseFloat(+(-b / (2 * a))).toFixed(1);

  showResult(
    a,
    b,
    c,
    `There are 1 roots <br />
  x1 = ${root}
  `
  );
} else {
  showResult(a, b, c, `There are 0 roots`);
}

function showResult(a, b, c, rootingText) {
  document.querySelector('.a').innerHTML = `a = <span>${a}</span>`;
  document.querySelector('.b').innerHTML = `b = <span>${b}</span>`;
  document.querySelector('.c').innerHTML = `c = <span>${c}</span>`;
  document.querySelector('.equation').textContent = `Equation is: (${Number(
    a
  ).toFixed(1)}) x^2 + (${Number(b).toFixed(1)}) x + (${Number(c).toFixed(
    1
  )}) = 0`;
  document.querySelector('.roots').innerHTML = rootingText;
}
