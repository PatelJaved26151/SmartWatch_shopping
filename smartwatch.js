console.log('Js loading ')

function mytime()
   {
   var d=new Date();
   ap="am";
   h=d.getHours();
   m=d.getMinutes();
   s=d.getSeconds();
   if (h>11) { ap = "pm"; }
   if (h>12) { h = h-12; }
   if (h==0) { h = 12; }
   if (m<10) { m = "0" + m; }
   if (s<10) { s = "0" + s; }
   document.getElementById('timehere').innerHTML=h + ":" + m + ":" + s + " " + ap;
   t=setTimeout('mytime()',500);
   }

   var redwatch = document.getElementById('red-watch');
   var blackwatch = document.getElementById('black-watch');
   var bluewatch = document.getElementById('blue-watch');
   var pinkwatch = document.getElementById('pink-watch');
   var purplewatch = document.getElementById('purple-watch');

   var blackcolor = document.getElementById('color1');
   var bluecolor = document.getElementById('color2');
   var pinkcolor = document.getElementById('color3');
   var purplecolor = document.getElementById('color4');

   var buy = document.getElementById('buy-btn');
   var heartbtn =document.getElementById('heart-beat');
   var timebtn = document.getElementById('time');
   var timezone = document.getElementById('timehere');
   var heartrate = document.getElementById('heart');

   buy.addEventListener('click', function(){
       alert('paisa hai kya tere paas bheegmange');
   })

   heartbtn.addEventListener('click', function(){
           heartrate.classList.remove('hidden');
           heartrate.classList.add('show'); 
           timezone.classList.remove('show');
           timezone.classList.add('hidden');   
   })

   timebtn.addEventListener('click', function(){
    heartrate.classList.remove('show');
    heartrate.classList.add('hidden'); 
    timezone.classList.remove('hidden');
    timezone.classList.add('show'); 
   })

   blackcolor.addEventListener('click', function(){
       if(blackwatch.classList.contains('hidden')) {
        redwatch.classList.remove('show');
        redwatch.classList.add('hidden');
        bluewatch.classList.remove('show');
        bluewatch.classList.add('hidden');
        pinkwatch.classList.remove('show');
        pinkwatch.classList.add('hidden');
        purplewatch.classList.remove('show');
        purplewatch.classList.add('hidden');
        blackwatch.classList.remove('hidden');
        blackwatch.classList.add('show');
       }else{
        redwatch.classList.remove('hidden');
        redwatch.classList.add('show');
        blackwatch.classList.remove('show');
        blackwatch.classList.add('hidden');
       }
   });

   bluecolor.addEventListener('click', function(){
    if(bluewatch.classList.contains('hidden')) {
        redwatch.classList.remove('show');
        redwatch.classList.add('hidden');
        bluewatch.classList.remove('hidden');
        bluewatch.classList.add('show');
        pinkwatch.classList.remove('show');
        pinkwatch.classList.add('hidden');
        purplewatch.classList.remove('show');
        purplewatch.classList.add('hidden');
        blackwatch.classList.remove('show');
        blackwatch.classList.add('hidden');
    }else{
     redwatch.classList.remove('hidden');
     redwatch.classList.add('show');
     bluewatch.classList.remove('show');
     bluewatch.classList.add('hidden');
    }
   });

   pinkcolor.addEventListener('click', function(){
    if(pinkwatch.classList.contains('hidden')) {
        redwatch.classList.remove('show');
        redwatch.classList.add('hidden');
        bluewatch.classList.remove('show');
        bluewatch.classList.add('hidden');
        pinkwatch.classList.remove('hidden');
        pinkwatch.classList.add('show');
        purplewatch.classList.remove('show');
        purplewatch.classList.add('hidden');
        blackwatch.classList.remove('show');
        blackwatch.classList.add('hidden');
    }else{
     redwatch.classList.remove('hidden');
     redwatch.classList.add('show');
     pinkwatch.classList.remove('show');
     pinkwatch.classList.add('hidden');
    }
   });

   purplecolor.addEventListener('click' ,function(){
    if(purplewatch.classList.contains('hidden')) {
        redwatch.classList.remove('show');
        redwatch.classList.add('hidden');
        bluewatch.classList.remove('show');
        bluewatch.classList.add('hidden');
        pinkwatch.classList.remove('show');
        pinkwatch.classList.add('hidden');
        purplewatch.classList.remove('hidden');
        purplewatch.classList.add('show');
        blackwatch.classList.remove('show');
        blackwatch.classList.add('hidden');
    }else{
     redwatch.classList.remove('hidden');
     redwatch.classList.add('show');
     purplewatch.classList.remove('show');
     purplewatch.classList.add('hidden');
    }

   });


