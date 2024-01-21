const khoroog=document.querySelector('#logout');
const underFibon=document.querySelector('#fibonaccci');
const mirrored=document.querySelector("#mirrored");
const liste=document.querySelector('#list');
beforeLogout()

function beforeLogout(){  
      khoroog.addEventListener('submit',logout)
      underFibon.addEventListener('submit',fibonacci)
      mirrored.addEventListener('submit',mirror)
      liste.addEventListener('submit',list)
}
      ;
function logout(eve){
eve.preventDefault();   
 window.location.href='./login.html';

    localStorage.removeItem("islogin");  
      sessionStorage.removeItem('islogin');
    
};
function checklogin(){
 const sesion=sessionStorage.getItem("islogin");
const local= localStorage.getItem("islogin");
if(sesion ==1 || local == 1){

}else{
      window.location.href='./login.html';
};



};

function fibonacci(e){
      e.preventDefault()
      const fibonacciInput=document.querySelector('#fibonache').value;
      
      let n1=0 , n2=1, n3;
let num = new Array();


let text="<ul>";
for(let i=0;i<fibonacciInput;i++){
num.push(n1);
n3=n1+n2;
n1=n2;
n2=n3

     

text+="<li>"+num[i]+"</li>";
       
}         
text+="</ul>"
document.getElementById("underFibonacci").innerHTML=text
      };
      function mirror(e){
e.preventDefault();
const input=document.getElementById('mirror').value;
const inputLength=document.getElementById('mirror').value.length;
const step1=input.split('');
var step2='';
for(var i=inputLength-1;i>=0;i--){
      step2=step2+step1[i]
}



const lastStep=document.getElementById('underMiror').innerHTML=step2;
      };
      function list(e){
e.preventDefault();
const input=document.getElementById('liste').value;
const step1 =input.split('');
for(var i=1;i<input.length;i++){
      for(var j=0;j<i;j++){
if(step1[i]<step1[j]){
      var x=step1[i];
      step1[i]=step1[j];
      step1[j]=x;
}
      }
};
let text="<ul>";
for(let i=0;i<input.length;i++){
      text +="<li>"+step1[i]+"</li>";
}
text+='</ul>';
const inderList=document.getElementById('underList').innerHTML=text;
      };
      function search(){
            let input=document.getElementById("inputSearch").value;
            const tank=document.getElementById('liste').value;
            const tank1=tank.split('');
            var foul=false;
      for(i=0;i<tank1.length;i++){
            if(tank1[i]==input){
             foul=true;
             }else{

             };
      };
      if(foul){
            var x=document.getElementById("searchResult").innerHTML=input;
      }else{
            var x2=document.getElementById("searchResult").innerHTML="none";

      }
       
      };

