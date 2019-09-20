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