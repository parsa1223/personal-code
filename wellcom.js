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
      let n1=0 , n2=1, n3;

      for( i = 1;i<=fibonacciInput;i++){
            var result=document.getElementById('underFibonache').innerHTML=(n1);
            n3 =n1+n2;
            n1=n2;
            n2=n3; 
      }






}