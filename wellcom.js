const khoroog=document.querySelector('#logout');

beforeLogout()

function beforeLogout(){  
      khoroog.addEventListener('submit',logout)};
function logout(eve){
eve.preventDefault();   
 window.location.href='./login.html';

    localStorage.removeItem("remember");  
      sessionStorage.removeItem('islogin');
    
};