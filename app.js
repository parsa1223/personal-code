
const btn=document.querySelector('form');

loadEventListener();
function loadEventListener(){
    btn.addEventListener('submit',submits)
};

function submits(event){
    event.preventDefault();
    const nameValue=btn.querySelector('[name="names"]').value;
    const passValue=btn.querySelector('[name="passw"]').value;
    if( nameValue == 'kianoosh'&& passValue == 'parsa'){
       redirect()
    }else{
    alert('نام و نام خانوادگی اشتباه است')
    };
};
function redirect(){
    window.location.href='./sec.html'
  
};

