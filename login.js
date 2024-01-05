
const chek=document.querySelector('#loot')
const btn=document.querySelector('form');
const nameValue=document.querySelector('[name="names"]').value;
const khoroog=document.querySelector('#logout');
loadEventListener();

function loadEventListener(){
    btn.addEventListener('submit',submitsf)
    

};

function submitsf(event){
    event.preventDefault();
  const nameValue=document.querySelector('[name="names"]').value;
   
  
    
    if(   nameValue == 'parsa@gmail.com' ){
submitss()
   
    }else{          const errorr= document.getElementById('errr').innerHTML="نام کاربری باید فرمت ایمیل داشته باشد"

    };
};
function submitss(){
    const passLeng=btn.querySelector('[name="passw"]').value.length;

    if(passLeng>=8){
        
        submitsd()
        
    }else{
      const irrre=  document.getElementById('err').innerHTML="رمز عبور باید حداقل 8 کارکتر داشته باشد"
      
    };
};
function submitsd(){
    const passValue=btn.querySelector('[name="passw"]').value;
 if(passValue=="12345678"){
     redirect();
     rememberMe();
sessionStorage.setItem('islogin',1)
 }else{
    const irrre=  document.getElementById('err').innerHTML="رمز عبور اشتباه است"
 }
}


function redirect(){
    const storage =sessionStorage.getItem('islogin');
    const eternalStorage=localStorage.getItem('islogin');
    if (storage == 1 || eternalStorage==1){
            window.location.href='./wellcom.html'

    }else{}
};


function rememberMe(){    
    const checkBox=document.querySelector('[name="qus"]').checked;
    if(checkBox == true){     
            localStorage.setItem('islogin',1);

    }else{      

    }
};
