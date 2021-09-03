let usrname  = document.getElementById('usrname');
let mobile   = document.getElementById('mobile');
let emails   = document.getElementById('emails');
let psw      = document.getElementById('psw');
let conpsw   = document.getElementById('conpsw');
let emailx   =document.getElementById('emailX');
let passwordx=document.getElementById('passwordX');

const indicator = document.querySelector(".indicator");
const input     = document.getElementById("psw");
const weak      = document.querySelector(".weak");
const medium    = document.querySelector(".medium");
const strong    = document.querySelector(".strong");
const text      = document.querySelector(".text");
 
let regExpWeak   = /[a-z0-9]/;
let regExpMedium = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
let regExpStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
let regExpMob    = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
let regexp       =/^([A-Za-z0-9_\-.]+)@([A-Za-z0-9_\-]+).([A-Za-z]{2,3})(.[a-z]{2,3})?$/;
var num;





function validation()
{
  //username
   if (usrname.value.trim()=="") {
      document.getElementById('username').innerHTML="** this field cannot be empty";
    
    }
   else if(usrname.value.length<=2||usrname.value.length>20) {
    document.getElementById('username').innerHTML="** Username should be between 2-20";
   
    } else{
        document.getElementById('username').innerHTML="";
   

    }
    
    //mobile number
    
    if (mobile.value=="") {
        document.getElementById('mobileno').innerHTML="** this field cannot be empty";
    }else if(regExpMob.test(mobile.value)){
        document.getElementById('mobileno').innerHTML="";
    }else{
        document.getElementById('mobileno').innerHTML="** format not accepted.Only (xxx-xxx-xxx or xxx.xxx.xxxx or xxx xxx xxxx)";
    }


    //Email id
    if (emails.value.trim()=="" ) {
        document.getElementById('emailId').innerHTML="**this field cannot be empty";
    }
   else if(!regexp.test(emails.value)) {
        document.getElementById('emailId').innerHTML="Invalid email id ";
    }else{
        document.getElementById('emailId').innerHTML="";
   
    }
    //password
     if (psw.value.trim()=="") {
         document.getElementById('pass').innerHTML="**this field cannot be empty";
      
    }else{
        document.getElementById('pass').innerHTML="";
   
    }


   
    //confirm password
    if (conpsw.value.trim()=="") {
        document.getElementById('conpass').innerHTML="**this field cannot be empty";
        return false
    }else if(conpsw.value!=psw.value) {
      document.getElementById('conpass').innerHTML="password not matching";
        return false;
    }
     if (num==3 && psw.value==conpsw.value) {
         return true;
        
      }
     
}

//function for password
function trigger(){
    if(psw.value != ""){
      indicator.style.display = "block";
      indicator.style.display = "flex";
      if(psw.value.length <= 3 && (psw.value.match(regExpWeak) || psw.value.match(regExpMedium) || psw.value.match(regExpStrong)))num=1;
      if(psw.value.length >= 6 && ((psw.value.match(regExpWeak) && psw.value.match(regExpMedium)) || (psw.value.match(regExpMedium) && psw.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))num=2;
      if(psw.value.length >= 8 && psw.value.match(regExpWeak) && psw.value.match(regExpMedium) && psw.value.match(regExpStrong))num=3;
      if(num==1){
        weak.classList.add("active");
        text.style.display = "block";
        // text.textContent = "Your password is too week"
        text.textContent=" Your password is weak.Should contain  aleast 8 characters A-Z a-z 0-9 symbol";
        text.classList.add("weak");
        return false;
      }
      if(num==2){
        medium.classList.add("active");
        // text.textContent = "Your password is medium";
        text.textContent=" Your password medium. Should contain atleast 8 character A-Z a-z 0-9 symbol";
        text.classList.add("medium");
      }else{
        medium.classList.remove("active");
        text.classList.remove("medium");
      }
      if(num==3){
        weak.classList.add("active");
        medium.classList.add("active");
        strong.classList.add("active");
        text.textContent = "Your password is strong";
        text.classList.add("strong");
      }else{
        strong.classList.remove("active");
        text.classList.remove("strong");
      }

    }else{
      indicator.style.display = "none";
      text.style.display = "none";
    
    }
  }


//   Login validation

function  loginValidation()
 {
    if (emailx.value.trim()=="" || passwordx.value.trim()=="") {
        document.getElementById('emailerror').innerHTML="**this field cannot be empty";
        document.getElementById('passError').innerHTML="**this field cannot be empty";
        return false
    }
   else if(!regexp.test(emailx.value)) {
        document.getElementById('emailerror').innerHTML="Invalid email id ";
        return false
    }
   else if(passwordx.value.length<8){
    // document.getElementById('emailerror').innerHTML="";
    document.getElementById('passError').innerHTML="password should be atleast of 8 characters";
    return false
   }else{
    document.getElementById('emailerror').innerHTML="";
    document.getElementById('passError').innerHTML="";
    return true
   }
   
      
 }
