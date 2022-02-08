function readTextFile(file) {
  let rawFile = new XMLHttpRequest();
  rawFile.open('GET', file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        let allText = rawFile.responseText;
        // if (!/\d\s\d\s\d\r\n$/.test(allText)) {
        if (!/\d\s\d\s\d\s$/.test(allText)) {
          alert(Error('Invalid file format'));
        } else {
          const convertedArr = [];
          allText.split(' ').forEach(item => {
            convertedArr.push(Number(item));
          });
          let a = convertedArr[0];
          let b = convertedArr[1];
          let c = convertedArr[2];

          if (a === 0) {
            alert(Error('a cannot be 0'));
          } else {
            const discriminant = Math.sqrt(b ** 2 - 4 * a * c);

            if (discriminant > 0) {
              const root1 = parseFloat((-b - discriminant) / (2 * a)).toFixed(
                1
              );
              const root2 = parseFloat((-b + discriminant) / (2 * a)).toFixed(
                1
              );

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
              showResult(a, b, c, 'There are 0 roots');
            }

            function showResult(a, b, c, rootingText) {
              document.querySelector('.a').innerHTML = `a = <span>${a}</span>`;
              document.querySelector('.b').innerHTML = `b = <span>${b}</span>`;
              document.querySelector('.c').innerHTML = `c = <span>${c}</span>`;
              document.querySelector(
                '.equation'
              ).textContent = `Equation is: (${Number(a).toFixed(
                1
              )}) x^2 + (${Number(b).toFixed(1)}) x + (${Number(c).toFixed(
                1
              )}) = 0`;
              document.querySelector('.roots').innerHTML = rootingText;
            }
          }
        }
      } else {
        alert(Error(`file ${file} does not exist`));
      }
    }
  };
  rawFile.send(null);
}

readTextFile('../test_valid.txt');
