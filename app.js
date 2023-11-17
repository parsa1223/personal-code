
const btn=document.querySelector('form');
const chek=document.querySelector('#loot');

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
    const passLeng=btn.querySelector('[name="passw"]').value.length;
    const passValue=btn.querySelector('[name="passw"]').value;
    if(passLeng>=8){
        redirect()
        sessionStorage.setItem("password",passValue);
    }else{
      const irrre=  document.getElementById('err').innerHTML="رمز عبور باید حداقل 8 کارکتر داشته باشد"
      
    };
};

function redirect(){
    window.location.href='./sec.html'
  
};
chekbox()
function chekbox(){
    const yesv=chek.querySelector('[name="qus"]');
    if(yesv.value == "true"){
        // Store()
        console.log('ooiipp');
    }else {
        const rrre=document.getElementById('toto').innerHTML="رمز عبور ذخیره نمیشود"
    }
        
    
}

