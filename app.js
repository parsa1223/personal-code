
const selector=document.querySelector('form');
const btn=document.querySelector('form');
function submitfunctoin(selector){
const form =document.querySelector(selector)
};
loadEventListener();
function loadEventListener(){
    btn.addEventListener('submit',submitsf)
};

function submitsf(event){
    event.preventDefault();
   document.addEventListener('DOMContentLoaded',function(){submitfunctoin('.passw')})
    
    if(    document.addEventListener('DOMContentLoaded',function(){submitfunctoin('.passw')}).value
    == 'parsa@gmail.com'){
       submitss()
   
    }else{
   const errorr= document.getElementById('err').innerHTML="نام کاربری باید فرمت ایمیل داشته باشد"
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
// subb()
// function subb(){
// sub2.addEventListener('submit',chekbox)    
// }

// function chekbox(eve){
// eve.preventDefault();
//     const yesv=chek.querySelector('[name="qus"]');
//     if(yesv.checked ==! "true"){
//               const rrre=document.getElementById('toto').innerHTML="رمز عبور ذخیره نمیشود"
//     }else {
//         const rrre=document.getElementById('toto').innerHTML="رمز عبور ذخیره میشود"
//         store()
//     }
        
    
// };
// function store (){
//     const passValue=btn.querySelector('[name="passw"]');

//     localStorage.setItem("password",passValue);

// }


