const khoroog=document.querySelector('#logout');
const underFibon=document.querySelector('#fibonaccci')
beforeLogout()

function beforeLogout(){  
      khoroog.addEventListener('submit',logout)
      underFibon.addEventListener('submit',fibonacci)
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
      
      let n1=0 , n2=1, n3,n4;
let num = new Array();
num[0]=n1;
num[1]=n2;
num[2]=n1+n2;
n3=n1+n2;
num[3]=n2+n3;

let text="<ul>";
for(let i=0;i<fibonacciInput;i++){
n4=n3+n2;
      
    n2=n3;
    n3=n4;
    

     

text+="<li>"+num[i]+"</li>";
       
}         
text+="</ul>"
document.getElementById("underFibonacci").innerHTML=text
      }
