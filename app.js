
const chek=document.querySelector('#loot')
const btn=document.querySelector('form');

loadEventListener();
function loadEventListener(){
    btn.addEventListener('submit',submitsf)
};

function submitsf(event){
    event.preventDefault();
  const nameValue=document.querySelector('[name="names"]').value;
   const email={name1:'parsa@gmail.com',
   name2:'ahmad@gmail.com',
   name3 :'kianoosh@gmail.com'};
  
    
    if(   nameValue
    ==! email.name1||email.name2||email.name3){
submitss()
   
    }else{          const errorr= document.getElementById('err').innerHTML="نام کاربری باید فرمت ایمیل داشته باشد"

    };
};
function submitss(){
    const passLeng=btn.querySelector('[name="passw"]').value.length;
    const passValue=btn.querySelector('[name="passw"]').value;

    if(passLeng>=8){
                sessionStorage.setItem("password",passValue);
        redirect()
       const rrerrer=document.getElementById("tete").innerHTML=(passValue);
    }else{
      const irrre=  document.getElementById('err').innerHTML="رمز عبور باید حداقل 8 کارکتر داشته باشد"
      
    };
};

function redirect(){
    window.location.href='./sec.html'
  
};

function checkStorageAndSendToWelcomePage(eve){
eve.preventDefault();
    
    if(typeof(Storage) !== "undefined"){
        sessionStorage.setItem("islogin",1)
    }else{}
        
    
};



