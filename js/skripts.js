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
        return {m1, m2, m3};
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
    var malas =nolasa();
    var perimeter = malas.m1 + malas.m2 + malas.m3;
    var result = document.getElementById("result");
    result.innerHTML = "Perimetrs ir " + perimeter;
}
//šeit no pusperimetra var aprēķināt laukumu
function laukums(){
    var malas =nolasa();
    var pusper=(malas.m1+malas.m2+malas.m3)/2;
    var tlaukums=Math.sqrt(pusper*((pusper-malas.m1)*(pusper-malas.m2)*(pusper-malas.m3)));
    //console.log(tlaukums);
    //return tlaukums;
    var result1 = document.getElementById("result1");
    result1.innerHTML = "Laukums ir " + tlaukums;
    //console.log(tlaukums);
    //return tlaukums;
    var result1 = document.getElementById("result1");
    result1.innerHTML = "Laukums ir " + tlaukums;
}
 
