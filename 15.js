var count=1;
function showdiv(){
    count +=1;
    if(count%2==0){
        document.getElementById("tablecontainer").style.display='block';
    }
    else{
        document.getElementById("tablecontainer").style.display='none';      
    }
}