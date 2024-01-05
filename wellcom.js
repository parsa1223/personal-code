const khoroog=document.querySelector('#logout');

beforeLogout()

function beforeLogout(){  
      khoroog.addEventListener('submit',logout)};
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

};



};