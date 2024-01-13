const khoroog=document.querySelector('#logout');
const underFibon=document.querySelector('#fibonaccci');
const mirrored=document.querySelector("#mirrored");
beforeLogout()

function beforeLogout(){  
      khoroog.addEventListener('submit',logout)
      underFibon.addEventListener('submit',fibonacci)
      mirrored.addEventListener('submit',mirror)
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
const step1=input.split('');
const step2=step1.reverse();
const step3=step2.join('');
const lastStep=document.getElementById('underMiror').innerHTML=step3
      };
