var count=1;
function showdiv(){
    count +=1;
    if(count%2==0){
        document.getElementById("formcontainer").style.display='block';
        document.getElementById("outer-wrapper").style.display='none';
        document.getElementById("formcontainersell").style.display='none';
        document.getElementById("right-element").style.display='block';
    }
    else if(count -=1){
        document.getElementById("formcontainer").style.display='block';
        document.getElementById("outer-wrapper").style.display='none';
        document.getElementById("formcontainersell").style.display='none';
        document.getElementById("right-element").style.display='block';
    }
    else{
        document.getElementById("formcontainer").style.display='none';
        document.getElementById("outer-wrapper").style.display='none';
        document.getElementById("formcontainersell").style.display='none';
        document.getElementById("right-element").style.display='block';
    }
}
var v=1;
function onrecord(){
    v +=1;
    if(v%2==0){
       
        document.getElementById("right-element").style.display='none';
         document.getElementById("formcontainer").style.display='none';
         document.getElementById("formcontainersell").style.display='none';
        document.getElementById("outer-wrapper").style.display='block';
    }
    else if(v -=1){
        document.getElementById("right-element").style.display='none';
         document.getElementById("formcontainer").style.display='none';
         document.getElementById("formcontainersell").style.display='none';
        document.getElementById("outer-wrapper").style.display='block';
    }
    else{
        document.getElementById("right-element").style.display='block';
        document.getElementById("outer-wrapper").style.display='none';
        document.getElementById("formcontainersell").style.display='none';
        document.getElementById("formcontainer").style.display='none';   
    }
}
var c=1;
function showsell(){
    c +=1;
    if(c%2==0){
        document.getElementById("formcontainersell").style.display='block';
        document.getElementById("outer-wrapper").style.display='none';
        document.getElementById("right-element").style.display='block';
        document.getElementById("formcontainer").style.display='none';
    }
    else if(c -=1){
        document.getElementById("formcontainersell").style.display='block';
        document.getElementById("outer-wrapper").style.display='none';
        document.getElementById("right-element").style.display='block';   
        document.getElementById("formcontainer").style.display='none';
    }
    else{
        document.getElementById("formcontainersell").style.display='none'; 
        document.getElementById("outer-wrapper").style.display='none';
        document.getElementById("right-element").style.display='block';
        document.getElementById("formcontainer").style.display='none';
    }
}
let s=1;
function save(){
    s +=1;
    if(s%2==0){
        document.getElementById("formcontainer").style.display='none';
    }
    else{
        document.getElementById("formcontainer").style.display='block';
    }
}
let g=1;
function go(){
    g +=1;
    if(g%2==0){
        document.getElementById("formcontainersell").style.display='none';
        document.getElementById("tablecontainer").style.display='block';
        document.getElementById("custform").style.display='block';
        document.getElementById("formbutton").style.display='block';
    }
    else if(stwo -=1){
        document.getElementById("formcontainersell").style.display='none';
        document.getElementById("tablecontainer").style.display='block';
        document.getElementById("custform").style.display='block';
        document.getElementById("formbutton").style.display='block';
    }
    else{
        document.getElementById("formcontainersell").style.display='block';
    }
}
let stwo=1;
function hidesell(){
    stwo +=1;
    if(stwo%2==0){
        document.getElementById("tablecontainer").style.display='none';
        document.getElementById("custform").style.display='none';
        document.getElementById("formbutton").style.display='none';
    }
    else if(stwo -=1){
        document.getElementById("tablecontainer").style.display='none';
        document.getElementById("custform").style.display='none';
        document.getElementById("formbutton").style.display='none';
    }
}
