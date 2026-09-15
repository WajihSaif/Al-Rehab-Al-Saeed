
 // -----------------------------------------دالة تقوم بعملية إنشاء حساب وإستقبال البيانات الخاصة بعمليةة الانشاء---------------------
document.addEventListener('DOMContentLoaded', function() { 
function create(event) { 
  event.preventDefault();

 let fristname = document.getElementById('fristname').value;
        let Lastname = document.getElementById('Lastname').value;
        let Email = document.getElementById('Email').value;
        let number_phone = document.getElementById('number_phone').value;
        let password = document.getElementById('password').value;
        let agin_password = document.getElementById('agin_password').value;
        let Date_born = document.getElementById('Date_born').value;
        let Gender = document.getElementById('Gender').value;
        let Country = document.getElementById('Country').value;


let userAccount = { 
            fristname: fristname,
            Lastname: Lastname,
            Email: Email,
            number_phone: number_phone,
            password: password,
            agin_password: agin_password,
            Date_born: Date_born, 
            Gender: Gender,
            Country: Country,};
        
                                                    
 if (userAccount.password != userAccount.agin_password) {
      alert('عذرا كلمات المرور غير متوافقة');
      return false;}
                                                           
localStorage.setItem('userData', JSON.stringify(userAccount));
     alert('تم حفظ بياناتك بنجاح في Local Storage!');
      location.reload();                                         
      return userAccount;}
                           
let loginForm = document.getElementById('loginForm');  
     loginForm.addEventListener('submit', create); 
  });
//------------------------------------------------------------------ -----د--------------------------الة لفحص عملية تسجيل الدخول
document.addEventListener('DOMContentLoaded', function() {                          
function check(event){        
                                       
   let name_w=document.getElementById('NAME').value;
   let email_w=document.getElementById('EMAIL').value;
   let password_w=document.getElementById('PASSWORD').value;

let Store_Data=localStorage.getItem('userData');                            
   if(Store_Data){                            
   let user=JSON.parse(Store_Data);  
   let fristname=user.fristname;     
   let email=user.email;
   let password=user.password;


if(name_w==fristname && password_w==password  ){   
      alert('لقد تم  تسجيل دخولك بنجاح ');
     location.reload();
      return true;}

else{
    alert('عذرا هناك خطأ قم بالتحقق');
    return false;}
}}
//عملية التهيئة لتنفيذ العملية 
let loginFormCheck = document.getElementById('loginFormCheck');
    loginFormCheck.addEventListener('submit', check);
});
//*****************************************************************معلومات الرحلات 
 document.addEventListener('DOMContentLoaded', function() {  
function check_Date(event){
    event.preventDefault();

let place_go=document.getElementById('go_from').value;
let plac_to=document.getElementById('go_to').value;
let date_go=document.getElementById('time_go').value;

let Date_inform ={
        place_go: place_go,
        plac_to: plac_to,
        date_go: date_go,  };

localStorage.setItem('Date_information',JSON.stringify(Date_inform));
alert('place_go: '+Date_inform.place_go+'\n place_to: '+Date_inform.plac_to +'\n Date_go: '+Date_inform.date_go+'\n ...هذه البيانات التي سيتم البحث عنها');
location.reload();
}

let checkDate=document.getElementById('information');
    checkDate.addEventListener('submit',check_Date);


});

//*******************************************************حجز تذكرة*************
document.addEventListener('DOMContentLoaded', function() {
function BOOK_aticket(event) {
  event.preventDefault();
                                                        
    let fristname = document.getElementById('Name').value;
    let Nextname = document.getElementById('Nextname').value;
    let Gender = document.getElementById('Gender').value;
    let Number_card = document.getElementById('Number_card').value;
    let place_card = document.getElementById('place_card').value;
    let begin_card = document.getElementById('begin_card').value;
    let Email = document.getElementById('Email').value;
    let password = document.getElementById('password').value;
    let agin_password = document.getElementById('agin_password').value;
    let Date_born = document.getElementById('Date_born').value;
    let visa_type = document.getElementById('visa_type').value;
    let this_place = document.getElementById('this_place').value;
    let thos_place = document.getElementById('thos_place').value;
    let port_go = document.getElementById('port_go').value;
    let port_arr = document.getElementById('port_arr').value;
    let Date_go = document.getElementById('Date_go').value;
    let visa_card = document.getElementById('visa_card').value;
    let number_phone = document.getElementById('number_phone').value;
    let aticket_type = document.getElementById('aticket_type').value;
   // let image_card=document.getElementById('File_card').value;
                                                    
let aticat = {
        fristname: fristname,
        Nextname: Nextname,
        Gender: Gender,
        Number_card: Number_card,
        place_card: place_card,
        begin_card: begin_card,
        Email: Email,
        password: password,
        agin_password: agin_password,
        Date_born: Date_born,
        visa_type: visa_type,
        this_place: this_place,
        thos_place: thos_place,
        port_go: port_go,
        port_arr: port_arr,
        Date_go: Date_go,
        visa_card: visa_card,
        number_phone: number_phone,
        aticket_type: aticket_type,
       // image_card:image_card,
 };
                                            
if (aticat.password != aticat.agin_password) {
    alert('عذرا كلمات المرور غير متوافقة');
    return false;}
  
    
if (aticat.password < 8) {
    alert('عذرا لكن كلمة المرور أقل من 8 حرف');
    return false;}
  

localStorage.setItem('Data_aticket', JSON.stringify(aticat));
  alert(' لقد تم الانشاء بنجاح وسيتم تأكيد العملية برسالة على البريد الالكتروني..');

let userWantsToNavigate = confirm("لقد تم حفظ البيانات بنجاح. هل تريد الآن عرض صفحة طباعة الفاتورة؟");
  if (userWantsToNavigate) {
       
     
  window.location.href ='../متابعة رحلتك/متابعة رحلتك.html' 

 
      }
        
    else {
        console.log("المستخدم ألغى الانتقال إلى صفحة الطباعة.");}
    
}

                                            
let information_aticat = document.getElementById('aticat');
  information_aticat.addEventListener('submit', BOOK_aticket);
});
//--------------------------------------------- دالة لطباعة البيانات --------------------------------------
document.addEventListener('DOMContentLoaded', function() {

  function display(){
 

  let print_aticat=localStorage.getItem('Data_aticket');

  if(print_aticat){
 let information_print=JSON.parse(print_aticat);
     let fristname_E=information_print.fristname;
     let Nextname_E =information_print.Nextname;
     let Gender_E= information_print.Gender;
     let Date_born_E=information_print.Date_born;
     let Number_card_E=information_print.Number_card;  
     let begin_card_E=information_print.begin_card;
     let place_card_E=information_print.place_card;
     let visa_type_E=information_print.visa_type;
     let this_place_E=information_print.this_place;
     let thos_place_E=information_print.thos_place;
     let port_go_E=information_print.port_go; 
     let port_arr_E=information_print.port_arr;
     let date_go_E=information_print.Date_go;
     let visa_card_E=information_print.visa_card;
     let number_phone_E=information_print.number_phone;
     let aticket_type_E=information_print.aticket_type; 
   // let image_card_E=information_print.image_card;


 if(fristname_E){  document.getElementById('display_fristname').innerHTML='الاسم الرباعي:'+fristname_E; }
if(Nextname_E){     document.getElementById('display_nextname').innerHTML='الكنية/اللقب: '+  Nextname_E;}
if(Gender_E){        document.getElementById('display_gender').innerHTML= 'الجنس: '+Gender_E; }
if(Date_born_E){     document.getElementById('display_Date_born').innerHTML='تاريخ الميلاد: '+Date_born_E;}
if(port_go_E){    document.getElementById('display_port_go').innerHTML=' مطار المغادرة: '+port_go_E; }
if(port_arr_E){    document.getElementById('display_port_arr').innerHTML='مطار الوصول :'+ port_arr_E; }
if(Number_card_E){     document.getElementById('display_number_card').innerHTML='رقم الجواز: '+Number_card_E;}
if(place_card_E){    document.getElementById('display_place_card').innerHTML='جهة إصدار:'+place_card_E; }
if(begin_card_E){    document.getElementById('display_begin_card').innerHTML='تاريخ الاصدار: '+begin_card_E; }
if(visa_type_E){    document.getElementById('display_visa_type').innerHTML='نوع الفيزاء: '+visa_type_E; }
if(this_place_E){    document.getElementById('display_this_place').innerHTML='بلد المغادرة: '+this_place_E; }
if(thos_place_E){    document.getElementById('display_thos_place').innerHTML='بلد الوصول: '+thos_place_E;}
if(date_go_E){       document.getElementById('display_date_go').innerHTML='تاريخ الرحله: '+date_go_E; }
if(visa_card_E){       document.getElementById('display_visa_card').innerHTML='حساب الائتمان: '+visa_card_E; }
if(number_phone_E){       document.getElementById('display_number_phone').innerHTML='رقم الهاتف: '+number_phone_E; }
if(aticket_type_E){       document.getElementById('display_aticket_type').innerHTML='نوع العملية:'+aticket_type_E; }
//if(image_card_E){       document.getElementById('display_image_card').innerHTML=' صورة الجواز:'+image_card_E; }
  
}}

window.onload=function(){
  display();
}
 
});


    

    