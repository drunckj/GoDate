document.addEventListener("DOMContentLoaded", function(event) { 
    //adding head zeroes
    function addhead(a){
        a=a.toString()
        if(a.length==1)
            {
                a="0"+a;
            }
            return a;
    
    }
    function checktrail(date){
        if (date > 3 && date < 21) return 'th';
        switch (date % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
      
    }}
    function time(){
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var time= new Date();
        var hrs=time.getHours();
        var mns=time.getMinutes()
        var sec=time.getSeconds()
        // Check if time is in PM 
        if( hrs >12){
            hrs=hrs-12;
            //adding head zero if single digit hrs
            document.getElementById("Hrs").innerHTML=addhead(hrs);
        document.getElementById("timeofday").innerHTML="PM";
        }
        else{
            document.getElementById("Hrs").innerHTML=addhead(hrs);
            document.getElementById("timeofday").innerHTML="AM";
        }
    
            //adding head zero if single digit mintues and seconds
        document.getElementById("Mns").innerHTML=addhead(mns);
        document.getElementById("sec").innerHTML=addhead(sec);
        
        var date=time.getDate()
        document.getElementById('datenumber').innerHTML=(date.toString())+checktrail(date);
        var month=time.getMonth();
        document.getElementById('month').innerHTML=months[month];
        document.getElementById('year').innerHTML=time.getFullYear()
    }
    setInterval(time,1000)
    });