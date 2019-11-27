function formGraus(){
 var p = (document.getElementById('forPO').value);
 var pL = (document.getElementById('forPL').value);
 var f = (document.getElementById('forFO').value);
 
 if(p != 0 && pL != 0){
 if(p<0){
 alert("Os calculos tornam inviavel a distancia entre o espelho e o objeto");
 document.getElementById('forPL').value = null;
 document.getElementById('forFO').value = null;
 document.getElementById('forPO').value = null;
 }else{
 document.getElementById('forFO').value = (1/((1/p)+(1/pL)));
 document.getElementById('forPL').value = null;
 document.getElementById('forPO').value = null;
 }
 }else if (f != 0 && p != 0){
 if(p<0){
 alert("Os calculos tornam inviavel a distancia entre o espelho e o objeto");
 document.getElementById('forPL').value = null;
 document.getElementById('forFO').value = null;
 document.getElementById('forPO').value = null;
 }else{
 pL = (1/((1/f)-(1/p))).toFixed(2);
 document.getElementById('forPL').value = pL;
 document.getElementById('forFO').value = null;
 document.getElementById('forPO').value = null;
 }
 
 }else if(f != 0 && pL != 0){
 if(p<0){
 alert("Os calculos tornam inviavel a distancia entre o espelho e o objeto");
 document.getElementById('forPL').value = null;
 document.getElementById('forFO').value = null;
 document.getElementById('forPO').value = null;
 }else{
 document.getElementById('forPO').value = (1/((1/f)-(1/pL)));
 document.getElementById('forFO').value = null;
 document.getElementById('forPL').value = null;
 }
 
 }
 if(pL>0){
 document.getElementById('tiIm').innerHTML = "Imagem Real(Fora do Espelho)";
 }else if(pL<0) {
 document.getElementById('tiIm').innerHTML = "Imagem Virtual(Dentro do Espelho)";
 }



}



// Calculo de aumento linear
function auLinear(){
 var i = (document.getElementById('F1').value);
 var o = (document.getElementById('F2').value);
 var a = (document.getElementById('F3').value);

 if(i != 0 && o != 0){

 document.getElementById('F3').value = (i/o);
 document.getElementById('F1').value = null;
 document.getElementById('F2').value = null;
 
 }else if(a!=0&&i!=0){
 
 document.getElementById('F2').value = (i/a);
 document.getElementById('F3').value = null;
 document.getElementById('F1').value = null;
 }else if(a!=0&&o!=00){
 
 document.getElementById('F1').value = (a/o);
 document.getElementById('F3').value = null;
 document.getElementById('F2').value = null;
 }
}


// Calculo de aumento linear (V2)

function auLinear2(){
 var pl = (document.getElementById('A1').value);
 var p = (document.getElementById('A2').value);
 var a = (document.getElementById('A3').value);

 if(pl != 0 && p != 0){

 document.getElementById('A3').value = (-pl/p);
 document.getElementById('A1').value = null;
 document.getElementById('A2').value = null;
 
 }else if(a!=0&&pl!=0){
 
 document.getElementById('A2').value = (-pl/a);
 document.getElementById('A3').value = null;
 document.getElementById('A1').value = null;
 }else if(a!=00&&p!=00){
 
 document.getElementById('A1').value = (-1*(a/p));
 document.getElementById('A3').value = null;
 document.getElementById('A2').value = null;
 }
}

