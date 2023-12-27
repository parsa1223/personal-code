
const chek=document.querySelector('#loot')
const btn=document.querySelector('form');
const nameValue=document.querySelector('[name="names"]').value;
const passValue2=btn.querySelector('[name="passw"]').value;
loadEventListener();
function loadEventListener(){
    btn.addEventListener('submit',submitsf)
    redirect();

};

function submitsf(event){
    event.preventDefault();
//   const nameValue=document.querySelector('[name="names"]').value;
   const email={name1:'parsa@gmail.com',
   name2:'ahmad@gmail.com',
   name3 :'kianoosh@gmail.com'};
  
    
    if(   nameValue
    ==! email.name1||email.name2||email.name3){
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


function redirect(){
    const storage =sessionStorage.getItem('islogin')
    if (storage == 1){
            window.location.href='./sec.html'

    }else{}
};

// beforeRemember()
// function beforeRemember(){
//     const checkBox=document.querySelector('[name="qus"]').checked;
// if(checkBox != "true"){
    
// }else{
//     console.log("uuuuuuu");
// }
// };

// function remeberMe(){    
//     const checkBox=document.querySelector('[name="qus"]').checked;
//     if(checkBox == 'true'){     
//         //    
// console.log("nameValue");

//     }else{      

//     }
// };

