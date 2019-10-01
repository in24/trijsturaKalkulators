<script>
    function irTrijsturis(m1,m2,m3){
        if(m1<m2+m3 && m2<m1+m3 && m3<m1+m2){
       // r=m1+m2+m3
       return true;
        }else{
            return false;
        }
    }
    console.log(irTrijsturis(2,3,4));
</script>