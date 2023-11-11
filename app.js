
const btn=document.querySelector('form');

loadEventListener();
function loadEventListener(){
    btn.addEventListener('submit',submitsf)
};

function submitsf(event){
    event.preventDefault();
    const nameValue=btn.querySelector('[name="names"]').value;
    
    if( nameValue == 'parsa@gmail.com'){
       submitss()
   
    }else{
   const errorr= document.getElementById('err').innerHTML="نام کاربری باید فرمت ایمیل داشته باشد"
    };
};
function submitss(e){
    e.preventDefault();
    const passLeng=btn.querySelector('[name="passw"]').length;
    // const passValue=btn.querySelector('[name="passw"]').value;
    if(passLeng>=8){
        console.log(oooooopp);
        // redirect()
    }else{
      const irrre=  document.getElementById('err').innerHTML="رمز عبور باید حداقل 8 کارکتر داشته باشد"
      
    };
    
};

function redirect(){
    window.location.href='./sec.html'
  
};

