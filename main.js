function clock() {
   var today = new Date();
  
  
   var hour = today.getHours();
   var minute = today.getMinutes();
   var second = today.getSeconds();
   
   hour = checkTime(hour);
   minute = checkTime(minute);
   second = checkTime(second);
  
   setTimeout(clock, 1000);



   btno.addEventListener("click",function(){

    let date = new Date();
    let hours = date.getHours();
  

   let mytext1=document.getElementById("mytext1");
   let mytext2=document.getElementById("mytext2");
   let mytext3=document.getElementById("mytext3");
   let mytext4=document.getElementById("mytext4");
   

   if (parseInt(mytext1.value) === hours ) { 
   document.getElementById("four").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"; 
   document.getElementById("image").src="good morning.jpg";
   }
   

   else if (parseInt(mytext2.value) === hours) {
   document.getElementById("four").innerHTML = "GLET'S HAVE SOME LUNCH !!"; 
   document.getElementById("image").src="good afternoon.jpg";   
   }
   
   else if (parseInt(mytext3.value) === hours ) {
   document.getElementById("four").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
   document.getElementById("image").src="good evening.jpg";
   }
   

   else if (parseInt(mytext4.value) === hours) {
   document.getElementById("four").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"; 
   document.getElementById("image").src="good night.jpg";
   }

    
   });





if(hour>=8){
    var two ="GOOD MORNING !! WEAK UP !!";
   
}
if(hour >=13){
    var two = "GOOD AFTERNOON !! TAKE SOME SLEEP";
   
}
if(hour >=16){
    var two = "GOOD EVENING !!";
   
}
if(hour >=20){
    var two =  "GOOD NIGHT !!";
    
}

document.getElementById("two").innerHTML=two;



   var prepand = (hour >= 12) ? " PM " : " AM ";
   hour = (hour >= 12) ? hour - 12 : hour;
   if (hour === 0 && prepand === ' PM ') {
       if (minute === 0 && second === 0) {
           hour = 12;
           prepand = ' Noon';
       }
       else {
           hour = 12;
           prepand = ' PM';
       }
   }
   if (hour === 0 && prepand === ' AM ') {
       if (minute === 0 && second === 0) {
           hour = 12;
           prepand = ' Midnight';
       }
       else {
           hour = 12;
           prepand = ' AM';
       }
   };
   document.getElementById("hours").innerHTML = hour;
   document.getElementById("minutes").innerHTML = minute;
   document.getElementById("seconds").innerHTML = second;
   document.getElementById("pmam").innerHTML = prepand;

 
}


function checkTime(i){
   if (i < 10) {
       i = "0" + i
   } 
  return i;
}



function passvalue(){

    
    var selecttext=document.getElementById("mytext1").options[mytext1.selectedIndex].text;     
    localStorage.setItem("ddoption",selecttext);
    document.getElementById("five1").innerHTML=localStorage.getItem("ddoption");

    var selecttext1=document.getElementById("mytext2").options[mytext2.selectedIndex].text;  
    localStorage.setItem("ddoption1",selecttext1);
    document.getElementById("five2").innerHTML=localStorage.getItem("ddoption1");

    var selecttext2=document.getElementById("mytext3").options[mytext3.selectedIndex].text;  
    localStorage.setItem("ddoption2",selecttext2);
    document.getElementById("five3").innerHTML=localStorage.getItem("ddoption2");

    var selecttext3=document.getElementById("mytext4").options[mytext4.selectedIndex].text;  
    localStorage.setItem("ddoption3",selecttext3);
    document.getElementById("five4").innerHTML=localStorage.getItem("ddoption3");

 

//     var s1 = document.getElementById("mytext1");
//     var s2 = document.getElementById("mytext2");
//     var s3 = document.getElementById("mytext3");
//     var s4 = document.getElementById("mytext4");
//     var textcon=document.getElementById("four");
//     var img=document.getElementById("image"); 
//     var button=document.getElementById("btno");


//     button.addEventListener("click",function(){

// var selectvalue1 = s1.value;
//   switch (selectvalue1) {

//    case "8AM-9AM": 
//    img.src="good morning.jpg";
//    textcon.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
//    break;
//   }
//   switch (selectvalue1) {

//     case "9AM-10AM": 
//     img.src="good morning.jpg";
//     textcon.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
//     break;
//    }
//    switch (selectvalue1) {

//     case "10AM-11AM": 
//     img.src="good morning.jpg";
//     textcon.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
//     break;
//    }
//    switch (selectvalue1) {

//     case "11AM-12AM": 
//     img.src="good morning.jpg";
//     textcon.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
//     break;
//    }
//   var selectvalue2 = s2.value;
//   switch (selectvalue2) {
//     case "12AM-1PM" : 
//     img.src="good afternoon.jpg";
//     textcon.innerHTML = "GLET'S HAVE SOME LUNCH !!";
//     break;
//    }
//    var selectvalue2 = s2.value;
//   switch (selectvalue2) {
//     case "1PM-2PM" : 
//     img.src="good afternoon.jpg";
//     textcon.innerHTML = "GLET'S HAVE SOME LUNCH !!";
//     break;
//    }
//    var selectvalue2 = s2.value;
//    switch (selectvalue2) {
//      case "2PM-3PM" : 
//      img.src="good afternoon.jpg";
//      textcon.innerHTML = "GLET'S HAVE SOME LUNCH !!";
//      break;
//     }
//     var selectvalue2 = s2.value;
//     switch (selectvalue2) {
//       case "3PM-4AM" : 
//       img.src="good afternoon.jpg";
//       textcon.innerHTML = "GLET'S HAVE SOME LUNCH !!";
//       break;
//      }



//    var selectvalue3 = s3.value;
//    switch (selectvalue3) {
//     case "4PM-5PM" : 
//     img.src="good evening.jpg";
//     textcon.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
//     break;
//    }
//    var selectvalue3 = s3.value;
//    switch (selectvalue3) {
//     case "5PM-6PM" : 
//     img.src="good evening.jpg";
//     textcon.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
//     break;
//    }

//    var selectvalue3 = s3.value;
//    switch (selectvalue3) {
//     case "6PM-7PM" : 
//     img.src="good evening.jpg";
//     textcon.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
//     break;
//    }

//    var selectvalue3 = s3.value;
//    switch (selectvalue3) {
//     case "7PM-8PM" : 
//     img.src="good evening.jpg";
//     textcon.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
//     break;
//    }


//    var selectvalue4 = s4.value;
//    switch (selectvalue4) {
//     case "8PM-9PM" : 
//     img.src="good night.jpg";
//     textcon.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
//     break;

//    }
//    var selectvalue4 = s4.value;
//    switch (selectvalue4) {
//     case "9PM-10PM" : 
//     img.src="good night.jpg";
//     textcon.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
//     break;

//    }
//    var selectvalue4 = s4.value;
//    switch (selectvalue4) {
//     case "10PM-11PM" : 
//     img.src="good night.jpg";
//     textcon.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
//     break;

//    }
//    var selectvalue4 = s4.value;
//    switch (selectvalue4) {
//     case "11PM-12PM" : 
//     img.src="good night.jpg";
//     textcon.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
//     break;

//    }
//     })




}