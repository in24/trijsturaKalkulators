/* funkcija nolasa formā ievadītās vērtības un 
ja ievadīto malu garumi ir lielāki par 0, 
tad funkcija atgriež vērtības `m1, m2, m3`, 
pretējā gadījumā atgriež `False`
*/

function nolasa(){
    const malas=document.getElementsByClassName('mala');    
    const m1=mala1.value;
    const m2=mala2.value;
    const m3=mala3.value;

    
    console.log(m1, m2, m3);
    if (m1>0 && m2>0 && m3>0){
        console.log({m1, m2, m3});
        return {parseFloat(m1), parseFloat(m2), parseFloat(m3)};
    } else {
        console.log(false);
        return false;
    }    
}
function perimetrs(m1,m2,m3){
    let p= m1+m2+m3;
    console.log(p);
    return p;
     
}
//vēl viens variants perimetra aprēķināšanā
function perimeter() {
    var m1 = document.getElementById("mala1").value;
    var m2 = document.getElementById("mala2").value;
    var m3 = document.getElementById("mala3").value;
    var perimeter = parseFloat(m1) + parseFloat(m2) + parseFloat(m3);
    var result = document.getElementById("result");
    result.innerHTML = "Perimetrs ir " + perimeter;
}
//šeit no pusperimetra var aprēķināt laukumu
function laukums(){
    var m1 = document.getElementById("mala1").value;
    var m2 = document.getElementById("mala2").value;
    var m3 = document.getElementById("mala3").value;
    var pusper=(m1+m2+m3)/2;
    var tlaukums=Math.sqrt(pusper*(pusper-m1)*(pusper-m2)*(pusper-m3));
    //console.log(tlaukums);
    //return tlaukums;
    var result1 = document.getElementById("result1");
    result1.innerHTML = "Laukums ir " + tlaukums;
}
// Funkcija, kura sagatavo izvadāmo informāciju
function rezultats() {
    if (function nolasa()) {
        console.log( );
    }
    else {
        console.log("nepareizi ievaddati");

    }

    if (function irTrijsturis()) {
        console.log( );
    }
    else {
        console.log("trijstūris neeksistē");

        if (function perimeter()&&laukums() ) {
            console.log( );
        }
        else {
            console.log(" ");
        
        // izsauc funkciju nolasa() - pārbauda: ja false, atgriež rezultātu, ka nepareizi ievaddati, ja true, dara tālāk
    // izsauc funkciju irTrijsturis() - pārbauda: ja false, atgriež rezultātu, ka trijstūris neeksistē, ja true, dara tālā
    // izsauc abas aprēķinu funkcijas perimeter() un laukums() - atgriež rezultātu, kā teksta virkni ar abiem aprēķinātajiem lielumiem
  }
  
  // Funkcija, kura izvada rezultāta sagatavoto informāciju
  function izvadaTekstu() {
    console.log (rezultats);// jāizsauc funkcija rezultats()
    // elementā ar id "izvade" izvada tekstu
  } 
