
function  updatetime(){
 var date=new Date();
var hours =date.getHours();
var minutes =date.getMinutes();
var seconds =date.getSeconds();
 var ampm=document.getElementById("am_pm");

//   ab yahan 12 ke baad 13 ata hai to chnage karte hai
if(hours >=12){
    ampm.innerHTML ="PM"; // agar 12 se 13 baj rahe to 
}
else{
    ampm.innerHTML="AM";   // agar raat ke 12 baj rahe toh
} 
// this is for if 12 ke bad 1 bajna chahiye to 13 bajte hai ,, so for this we willl change here
 if(hours >12){
    hours=hours-12;
 }  
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;   /// ye all js se liye huye hai 
document.getElementById("seconds").innerHTML=seconds;

}
// this is for run the program 
// this line is most imp for run the clock exact time 
setInterval(updatetime,1000);  
