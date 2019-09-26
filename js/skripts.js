/* funkcija nolasa formā ievadītās vērtības un 
ja ievadīto malu garumi ir lielāki par 0, 
tad funkcija atgriež vērtības `m1, m2, m3`, 
pretējā gadījumā atgriež `False`
*/

function nolasa(){
    const malas=document.getElementsByClassName('mala');    
    const m1=parseFloat(mala1.value);
    const m2=parseFloat(mala2.value);
    const m3=parseFloat(mala3.value);

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
 
