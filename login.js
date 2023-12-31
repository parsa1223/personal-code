
const chek=document.querySelector('#loot')
const btn=document.querySelector('form');
const nameValue=document.querySelector('[name="names"]').value;
const passValue2=btn.querySelector('[name="passw"]').value;
const khoroog=document.querySelector('#logout');
loadEventListener();

function loadEventListener(){
    btn.addEventListener('submit',submitsf)
    redirect();

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
         redirect();

        sessionStorage.setItem('islogin',1)
        
    }else{
      const irrre=  document.getElementById('err').innerHTML="رمز عبور باید حداقل 8 کارکتر داشته باشد"
      
    };
};
redirect()

function redirect(){
    const storage =sessionStorage.getItem('islogin');
    // const eternalStorage=localStorage.getItem('remember');
    if (storage == 1){
            window.location.href='./wellcom.html'

    }else{}
};


function rememberMe(){    
    const checkBox=document.querySelector('[name="qus"]').checked;
    if(checkBox == true){     
            localStorage.setItem('remember',1);

    }else{      

    }
};
