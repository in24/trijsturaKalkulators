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
