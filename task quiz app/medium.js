var div1=document.getElementById('div1');
var ques1sco=0;
var ques=['1.HTML Tags are enclosed in ?','# and #','{ and }','! and ?','< and >','d'];
var question=ques[0];
var opt1=ques[1]; 
var opt2=ques[2];
var opt3=ques[3];
var opt4=ques[4];
answer=ques[5];
div1.innerHTML='<h3>'+question+'</h3>';
 div1.innerHTML+='<div class="fstrad" id="encls"><label><input type="radio" value="'+opt1+'" name="radio"  class="radbtn">'+opt1+'</label></div>';
 div1.innerHTML+='<div class="fstrad"><label><input type="radio" value="'+opt2+'" name="radio" class="radbtn">'+opt2+'</label></div>';
div1.innerHTML+='<div class="fstrad"><label><input type="radio" value="'+opt3+'" name="radio"  class="radbtn">'+opt3+'</label></div>';
div1.innerHTML+='<div class="fstrad"><label><input type="radio" value="'+answer+'" name="radio" class="radbtn" id="ans">'+opt4+'</label></div>';
div1.innerHTML+='<button onclick="next_bt1()" class="bt1">Next</button>';

var radio=document.getElementById('ans');
radio.addEventListener('click',()=>{
    if(radio.checked==true){
        ques1sco=1;
        console.log(ques1sco);
    }
});
//------------------------radio 1st ques complete-------------------//

var ques2sco=0;
var div2=document.getElementById('div2');
ques=['2.Keywords of Variable in JS ?','Var','Const','Let','Null'];
question2=ques[0];
opt_1=ques[1];
opt_2=ques[2];
opt_3=ques[3];
opt_4=ques[4];
div2.innerHTML='<h3>'+question2+'</h3>';
div2.innerHTML+='<div id="checked"></div>';
var checkdiv=document.getElementById('checked');
checkdiv.innerHTML='<div class="check"><label><input type="checkbox" value="'+opt_1+'" name="checkbox" id="one">'+opt_1+'</label></div>';
checkdiv.innerHTML+='<div class="check"><label><input type="checkbox" value="'+opt_2+'" name="checkbox" id="two">'+opt_2+'</label></div>';
checkdiv.innerHTML+='<div class="check ch3"><label><input type="checkbox" value="'+opt_3+'" name="checkbox" id="three">'+opt_3+'</label></div>';
checkdiv.innerHTML+='<div class="check ch4"><label><input type="checkbox" value="'+opt_4+'" name="checkbox" id="four">'+opt_4+'</label></div>';
div2.innerHTML+='<button onclick="prev_bt1()" id="prevone">Prev</button>';
div2.innerHTML+='<button onclick="next_bt2()">Next</button>';

var apple=document.getElementById('one');
var radish=document.getElementById('two');
var banana=document.getElementById('three');
var Beans=document.getElementById('four');


var checking=document.getElementsByName('checkbox');
for(var i=0;i<checking.length;i++){
    checking[i].addEventListener('click',()=>{
        if(apple.checked && banana.checked && !radish.checked && !Beans.checked){
            ques2sco=1;
            console.log(ques2sco);
        }else{
            ques2sco=0;
            console.log(ques2sco);
        }
    })
}
// ----------------------checkbox 2nd ques complete---------------//

var ques3sco=0;
var div3=document.getElementById('div3');
div3.innerHTML='<h3>3.a=5+"9" ?</h3>';
div3.innerHTML+='<input type="range" list="tickmarks" step="20" max="80"  id="selector"value="0">';
div3.innerHTML+='<datalist id="tickmarks"></datalist><br>';
list=document.getElementById('tickmarks');
list.innerHTML=' <option value="0" label="0"  name="range">0</option>';
list.innerHTML+='<option value="20" label="20" name="range">20</option>';
list.innerHTML+='<option value="40" label="14" name="range">40</option>';
list.innerHTML+='<option value="60" label="59" name="range">60</option>';
list.innerHTML+='<option value="80" label="-59" name="range">80</option>';
div3.innerHTML+='<button onclick="prev_bt2()">Prev</button>';
div3.innerHTML+='<button onclick="next_bt3()">Next</button>';
var crtans=document.getElementById('selector');

crtans.addEventListener('click',()=>{
    if(crtans.value==60){
        ques3sco=1;
        console.log(ques3sco);
    }else{
        ques3sco=0;
        console.log(ques3sco);
    }
})
//------------------------Range 3rd ques complete----------------//

var ques4sco=0;
var div4=document.getElementById('div4');
div4.innerHTML='<label><h3>4.DOM Stands for ?<br><input type="text" id="textbox"></h3></label>';
div4.innerHTML+='<button onclick="prev_bt3()">Prev</button>';
div4.innerHTML+='<button onclick="next_bt4()" id="fournxt">next</button> <br></br>';
var fourthques=document.getElementById('fournxt');

    var inputans=document.getElementById('textbox');
    fourthques.addEventListener('click',()=>{
        if(inputans.value=='Document Object Model' || inputans.value=='document object model'){
            ques4sco=1;
            console.log(ques4sco);
        }else{
            ques4sco=0;
            console.log(ques4sco);
        }
});
// ------------------------Input 4th ques completed------------------//

var div5=document.getElementById('div5');
div5.innerHTML='<h3>5.Rate Your Experience</h3>';
div5.innerHTML+='<button class="star" id="star1">&#9734</button>';
div5.innerHTML+='<button class="star" id="star1">&#9734</button>';
div5.innerHTML+='<button class="star" id="star1">&#9734</button>';
div5.innerHTML+='<button class="star" id="star1">&#9734</button>';
div5.innerHTML+='<button class="star" id="star1">&#9734</button>';
div5.innerHTML+='<P class="current-rating">0 of 5</p>';
div5.innerHTML+='<button onclick="prev_bt4()">Prev</button>';
div5.innerHTML+='<button onclick="next_bt5()" id="finish">finish</button>';

var ques5sco=0;
var current_star;
var end=document.getElementById('finish');
var stars=document.querySelectorAll('.star');
var current_rating=document.querySelector('.current-rating');
stars.forEach((star,index)=>{
star.addEventListener('click',()=>{
current_star=index+1;
if(current_star==4 || current_star==5){
    ques5sco=1;
    console.log(ques5sco);
}else{
    ques5sco=0
    console.log(ques5sco);
}
current_rating.innerText=`${current_star} of 5`;
stars.forEach((star,i)=>{
if(current_star>=i+1){
star.innerHTML='&#9733;';
}else{
star.innerHTML='&#9734;';
}
});
});
});
//--------------star 5th ques complete------------------//

var finish_index =0,timeline=15,function_index =0,empty_arry =[],summa,pre_index =0;
        function timer_hidden(){
        var empty_arry1=empty_arry.concat();
        var summa =empty_arry1[empty_arry.length-1];
        if(function_index<=summa){
            timer_div.style.display ='none';
            pre_index =1
        }else{
            timer_div.style.display ='initial';
            timer_div.style.display ='flex';
            timeline =15;
            pre_index =0
        }
        }
//-------------------prev timer hidden-----------//
           
           function next_bt1(){
            timeline=15;
            function_index =1;
            div1.style.display ="none"
            div2.style.display ="inline-block"
            timer_hidden();
         }
        function prev_bt1(){
            function_index =0;
            empty_arry.push(function_index);
            div1.style.display ="inline-block"
            div2.style.display ="none"
            summa=empty_arry.sort();
            console.log(summa);
            timer_hidden();
         }
        function next_bt2(){
            timeline=15;
            function_index =2;
            div2.style.display ="none"
            div3.style.display ="inline-block" 
            timer_hidden();
        }
        function prev_bt2(){
            function_index =1;
            empty_arry.push(function_index);
            div2.style.display ="inline-block"
            div3.style.display ="none"
            summa=empty_arry.sort();
            console.log(summa);
            timer_hidden();
         }
        function next_bt3(){
            timeline=15;
            function_index =3;
            div3.style.display ="none"
            div4.style.display ="inline-block" 
            timer_hidden();     
        }
        function prev_bt3(){
            function_index =2;
            empty_arry.push(function_index);
            div3.style.display ="inline-block"
            div4.style.display ="none"
            summa=empty_arry.sort();
            console.log(summa);
            timer_hidden();
        }
        function next_bt4(){
            timeline=15;
            function_index =4;
            div4.style.display ="none"
            div5.style.display ="inline-block"
            timer_hidden();
        }
        function prev_bt4(){
            timeline=15;
            function_index =3;
            empty_arry.push(function_index);
            div4.style.display ="inline-block"
            div5.style.display ="none" 
            summa=empty_arry.sort();
            console.log(summa);
            timer_hidden();
        }
// ------------------next,prev buttons function----------//
           
            timer_content(timeline);
            function timer_content(){
                var timing =setInterval(counter,1000);
                function counter(){
                    document.getElementById('time').textContent =timeline;
                    if(timeline>0 && finish_index==0 && timeline!=0){
                          if(pre_index ==0){
                            timeline--;
                          }else{
                            timeline =15;
                          }
                    }else {
                        if(function_index ==0){
                            timeline =15;
                            setTimeout(next_bt1,1000);
                        }else if(function_index ==1){
                            timeline=15;
                            setTimeout(next_bt2,1000);
                        }else if(function_index ==2){
                            timeline=15;
                            setTimeout(next_bt3,1000);
                        }else if(function_index ==3){
                            timeline=15;
                            setTimeout(next_bt4,1000);
                        }else if(function_index ==4){
                            timeline=15;
                            setTimeout(next_bt5,1000);
                        }
                    }
                }
            }
// -------------Timer function----------------------//

   var div6=document.getElementById('div6');
   console.log(div6)
   function next_bt5(){
    timer_div.style.display ='none';
    div5.style.display ="none"
    div6.style.display ="inline-block"
    total_score =ques1sco+ques2sco+ques3sco+ques4sco+ques5sco;
    document.getElementById('score_para').innerHTML ='Your Score '+total_score+' / 5';
    var sad=document.getElementById('sad');
    var happy=document.getElementById('happy');
if(total_score>3){
    sad.style.display="none";
    happy.style.display="initial";loadscript("jquery.confetti.js");
    RestartConfetti()
    setTimeout(DeactivateConfetti,2000);
    alert('confetti testing');
}
}
function loadscript(src){
    const script=document.createElement("script");
    script.src = src;
    document.head.prepend(script);
}
//---------------------Final display-----------------------------//