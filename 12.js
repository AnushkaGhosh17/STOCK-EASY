var count=1;
function showdiv(){
    count +=1;
    if(count%2==0){
        document.getElementById("tablecontainer").style.display='block';
        document.getElementById("tablebutton").style.display='block';
    }
    else{
        document.getElementById("tablecontainer").style.display='none';
        document.getElementById("tablebutton").style.display='none';       
    }
}