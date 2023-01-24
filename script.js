let loginForm = document.querySelector('header .login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

let navbar = document.querySelector('.header .navbar');

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

var date = new Date();
var month = date.getMonth()+1;
var day = date.getDate();
var year = date.getFullYear();
var output= month + '/' +day + '/' + year;

function compareDate()
{
if(Date.parse(document.form.bookingdate.value)<Date.parse(output)){
    alert("You cannot select a date less than the current date");
    }
}

function checkNum() 
{
x = event.charCode;
if (( x >= 65  && x <=90) || (x >= 97 && x <=122))
{
    alert("Enter Numeric Value");
    document.form.num.value='';
}
}

function total()
{
if(document.form.num.value>10)
{
    alert("You cannot book more than 10 service at a time");
    document.form.num.value='';
}
else
document.form.totalprice.value=(document.form.price.value)*(document.form.num.value);
}

function check()
{
for( i = 0; i <= document.form.RB.length; i++ ){

    if(document.form.RB[0].checked==true) {
            document.form.price.value=50000;
    }else if(document.form.RB[1].checked==true) {
            document.form.price.value=75000;
    }else if(document.form.RB[2].checked==true) {
            document.form.price.value=120000;
    }
}
}

function sub()
{
if((document.form.usrname.value!='')&&(document.form.num.value!='')&&(Date.parse(document.form.bookingdate.value)>Date.parse(output)))
{
    alert("Your Services have been booked.");
}
}

function validate()
{
if((Date.parse(document.form.bookingdate.value)<Date.parse(output)))
{
    alert("Please Check again the Name, Number of service or date");
    return false
}
else
return true
}  

function send(){
    if((document.form1.usrname.value!='')&&(document.form1.email.value!='')&&(document.form1.pesan.value!=''))
{
    alert("Your Message has been sent.");
}
}
