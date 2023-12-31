beforeLogout()
function beforeLogout(){  
      khoroog.addEventListener('submit',logout)};
function logout(eve){
eve.preventDefault();   
 window.location.href='./index.html';

    localStorage.removeItem("remember");  
      sessionStorage.removeItem('islogin');
    
};