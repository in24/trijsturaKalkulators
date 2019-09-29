/* funkcija nolasa formā ievadītās vērtības un 
ja ievadīto malu garumi ir lielāki par 0, 
tad funkcija atgriež vērtības `m1, m2, m3`, 
pretējā gadījumā atgriež `False`
*/

function nolasa() {
  const malas = document.getElementsByClassName("mala");
  const m1 = parseFloat(mala1.value);
  const m2 = parseFloat(mala2.value);
  const m3 = parseFloat(mala3.value);

  console.log(m1, m2, m3);
  if (m1 > 0 && m2 > 0 && m3 > 0) {
    console.log({ m1, m2, m3 });
    return { m1, m2, m3 };
  } else {
    console.log(false);
    return false;
  }
}

// tā var, bet ņemšu to, kas lejā
function perimetrs(m1, m2, m3) {
  let p = m1 + m2 + m3;
  console.log(p);
  return p;
}

//vēl viens variants perimetra aprēķināšanā
function perimeter() {
  var malas = nolasa();
  var perimeter = malas.m1 + malas.m2 + malas.m3;
  // Vajag atgriezt izrēķināto perimetru
}

//šeit no pusperimetra var aprēķināt laukumu
function laukums() {
  var malas = nolasa();
  var pusper = (malas.m1 + malas.m2 + malas.m3) / 2;
  var tlaukums = Math.sqrt(
    pusper * ((pusper - malas.m1) * (pusper - malas.m2) * (pusper - malas.m3))
  );
  console.log(tlaukums);
  return tlaukums;
}

// Funkcija, kura pārbauda, vai eksistē trijstūris ar nolasītajām malām
function irTrijsturis() {
    // izsauc funkciju nolasa()
    // pārbauda, vai izpildās trijstūra nevienādība
    // atgriež true vai false
}

// Funkcija, kura sagatavo izvadāmo informāciju
function rezultats() {
  // izsauc funkciju nolasa() - pārbauda: ja false, atgriež rezultātu, ka nepareizi ievaddati, ja true, dara tālāk
  // izsauc funkciju irTrijsturis() - pārbauda: ja false, atgriež rezultātu, ka trijstūris neeksistē, ja true, dara tālā
  // izsauc abas aprēķinu funkcijas perimeter() un laukums() - atgriež rezultātu, kā teksta virkni ar abiem aprēķinātajiem lielumiem
}

// Funkcija, kura izvada rezultāta sagatavoto informāciju
function izvadaTekstu() {
  // jāizsauc funkcija rezultats()
  // elementā ar id "izvade" izvada tekstu
}
