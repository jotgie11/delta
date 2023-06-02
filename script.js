function obliczDelte() {
  const row = document.getElementById("akw").value;

  console.log(row);
  const ax = row.substr(0, 3);
  const bx = row.substr(6, 3);
  const cx = row.substr(11);

  console.log(ax);
  console.log(bx);
  console.log(cx);
  const a = parseInt(ax.substr(0, ax.length - 2));
  const b = parseInt(bx.substr(0, bx.length - 1));
  const c = parseInt(cx);

  console.log(a);
  console.log(b);
  console.log(c);

  const delta = b * b - 4 * a * c;

  if (delta > 0) {
    const x1 = b - (Math.sqrt(delta) / 2) * a;
    const x2 = b + (Math.sqrt(delta) / 2) * a;
    const w2 = (document.getElementById("wynik").innerHTML =
      "Delta dodatnia, x1 = " + x1 + " x2 = " + x2);
  } else if (delta == 0) {
    const x = -b / (2 * a);
    const w1 = (document.getElementById("wynik").innerHTML =
      "Delta = 0, x = " + x);
  } else {
    const w0 = (document.getElementById("wynik").innerHTML =
      "Delta ujemna, brak możliwych rozwiązań");
  }
}
