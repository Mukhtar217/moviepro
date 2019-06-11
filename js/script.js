// JavaScript File
/* global $ */
console.log("hi");
//Discover
$("#yearB").click(function(){
    $("#yearB").hide();
   $("#gone").show(); 
});
//API
$(".SearchIMG").click(function(){
      var title = $(".tit").val();
      var year = $(".gone").val();
    $("#main").css("display","none");
    $(".titleDis").css("display","flex");
          $("#display").empty();
      var musicUrl = "https://www.omdbapi.com/?apikey=8e9ded79&y="+year+"&s="+title;
      console.log(musicUrl);
      $.ajax({
         url:musicUrl,
         method: "GET",
         success: function(output){
             $("#main").hide();
             $("#display").show();
             
             output.Search.forEach(function(film){
                console.log(film); 
                $("#display").append("<div class='apiD'><img class='MovIm' src="+film.Poster+">"+"<p class='titleM'>"+film.Title+"</p></div>");
        
                 
             });
         },
      });
      
});


//Quiz Link
var quiz = "Wierd Flex But Okay";
$(".e").click(function(){
   $(".q-main").hide();
   $(".quiz3").show();
   quiz="e";
});

$(".m").click(function(){
   $(".q-main").hide();
   $(".quiz2").show();
   quiz="m";
});

$(".h").click(function(){
   $(".q-main").hide();
   $(".quiz1").show();
   quiz="h";
});

$(".ex").click(function(){
   $(".q-main").hide();
   $(".quiz4").show();
   quiz="ex";
   
});

//Selector
function color(qz,qu){
    $(".an"+qz+"-"+qu+"-1").css("background-color","purple");
    $(".an"+qz+"-"+qu+"-1").css("color","#709FB0");
    $(".an"+qz+"-"+qu+"-1").css("border-color","black");
    $(".an"+qz+"-"+qu+"-2").css("background-color","purple");
    $(".an"+qz+"-"+qu+"-2").css("color","#709FB0");
    $(".an"+qz+"-"+qu+"-2").css("border-color","black");
    $(".an"+qz+"-"+qu+"-3").css("background-color","purple");
    $(".an"+qz+"-"+qu+"-3").css("color","#709FB0");
    $(".an"+qz+"-"+qu+"-3").css("border-color","black");
    $(".an"+qz+"-"+qu+"-4").css("background-color","purple");
    $(".an"+qz+"-"+qu+"-4").css("color","#709FB0");
    $(".an"+qz+"-"+qu+"-4").css("border-color","black");  
}
//Easy Quiz
var q1q1= false;
$(".an3-1-4").click(function() {
    color("3","1");
    $(".an3-1-4").css("background-color","green");
    $(".an3-1-4").css("color","white");
    $(".an3-1-4").css("border-color","white");  
    q1q1 = true;
});
$(".an3-1-1").click(function() {
    color("3","1");
    $(".an3-1-1").css("background-color","green");
    $(".an3-1-1").css("color","white");
    $(".an3-1-1").css("border-color","white"); 
    q1q1= false;
});
$(".an3-1-2").click(function() {
    color("3","1");
    $(".an3-1-2").css("background-color","green");
    $(".an3-1-2").css("color","white");
    $(".an3-1-2").css("border-color","white");  
    q1q1= false;
});
$(".an3-1-3").click(function() {
    color("3","1");
    $(".an3-1-3").css("background-color","green");
    $(".an3-1-3").css("color","white");
    $(".an3-1-3").css("border-color","white");
    q1q1= false;
});
console.log(q1q1);


var q1q2= false;
$(".an3-2-2").click(function() {
    color("3","2");
    $(".an3-2-2").css("background-color","green");
    $(".an3-2-2").css("color","white");
    $(".an3-2-2").css("border-color","white");  
    q1q2 = true;
});
$(".an3-2-1").click(function() {
    color("3","2");
    $(".an3-2-1").css("background-color","green");
    $(".an3-2-1").css("color","white");
    $(".an3-2-1").css("border-color","white");  
    q1q2= false;
});
$(".an3-2-4").click(function() {
    color("3","2");
    $(".an3-2-4").css("background-color","green");
    $(".an3-2-4").css("color","white");
    $(".an3-2-4").css("border-color","white");  
    q1q2= false;
});
$(".an3-2-3").click(function() {
    color("3","2");
    $(".an3-2-3").css("background-color","green");
    $(".an3-2-3").css("color","white");
    $(".an3-2-3").css("border-color","white"); 
    q1q2= false;
});
console.log(q1q2);

var q1q3= false;
$(".an3-3-2").click(function() {
    color("3","3");
    $(".an3-3-2").css("background-color","green");
    $(".an3-3-2").css("color","white");
    $(".an3-3-2").css("border-color","white");  
    q1q3 = true;
});
$(".an3-3-1").click(function() {
    color("3","3");
    $(".an3-3-1").css("background-color","green");
    $(".an3-3-1").css("color","white");
    $(".an3-3-1").css("border-color","white");
    q1q3= false;
});
$(".an3-3-4").click(function() {
    color("3","3");
    $(".an3-3-4").css("background-color","green");
    $(".an3-3-4").css("color","white");
    $(".an3-3-4").css("border-color","white");  
    q1q3= false;
});
$(".an3-3-3").click(function() {
    color("3","3");
    $(".an3-3-3").css("background-color","green");
    $(".an3-3-3").css("color","white");
    $(".an3-3-3").css("border-color","white"); 
    q1q3= false;
});
console.log(q1q3);

var q1q4= false;
$(".an3-4-1").click(function() {
    color("3","4");
    $(".an3-4-1").css("background-color","green");
    $(".an3-4-1").css("color","white");
    $(".an3-4-1").css("border-color","white");  
    q1q4 = true;
});
$(".an3-4-4").click(function() {
    color("3","4");
    $(".an3-4-4").css("background-color","green");
    $(".an3-4-4").css("color","white");
    $(".an3-4-4").css("border-color","white");  
    q1q4= false;
});
$(".an3-4-2").click(function() {
    color("3","4");
    $(".an3-4-2").css("background-color","green");
    $(".an3-4-2").css("color","white");
    $(".an3-4-2").css("border-color","white"); 
    q1q4= false;
});
$(".an3-4-3").click(function() {
    color("3","4");
    $(".an3-4-3").css("background-color","green");
    $(".an3-4-3").css("color","white");
    $(".an3-4-3").css("border-color","white");  
    q1q4= false;
});
console.log(q1q4);

var q1q5= false;
$(".an3-5-3").click(function() {
    color("3","5");
    $(".an3-5-3").css("background-color","green");
    $(".an3-5-3").css("color","white");
    $(".an3-5-3").css("border-color","white");  
    q1q5 = true;
});
$(".an3-5-1").click(function() {
    color("3","5");
    $(".an3-5-1").css("background-color","green");
    $(".an3-5-1").css("color","white");
    $(".an3-5-1").css("border-color","white"); 
    q1q5= false;
});
$(".an3-5-2").click(function() {
    color("3","5");
    $(".an3-5-2").css("background-color","green");
    $(".an3-5-2").css("color","white");
    $(".an3-5-2").css("border-color","white"); 
    q1q5= false;
});
$(".an3-5-4").click(function() {
    color("3","5");
    $(".an3-5-4").css("background-color","green");
    $(".an3-5-4").css("color","white");
    $(".an3-5-4").css("border-color","white"); 
    q1q5= false;
});
console.log(q1q5);



//Scoring Functions

function Score0(quizN){
    $(".eI1").attr("src","https://imgur.com/JsgR52t.png");
    $(".eI2").attr("src","https://i.kym-cdn.com/news_feeds/icons/mobile/000/038/446/aa9.jpg");
    $(".QuizN").html(quizN);
    $(".scoreR").html("Score: 0/5")
}

function Score1(quizN){
    $(".eI1").attr("src","https://imgur.com/VsH9wdt.png");
    $(".eI2").attr("src","https://i.kym-cdn.com/entries/icons/original/000/028/861/cover3.jpg");
    $(".QuizN").html(quizN);
    $(".scoreR").html("Score: 1/5")
}

function Score2(quizN){
    $(".eI1").attr("src","https://i.kym-cdn.com/photos/images/original/000/993/875/084.png");
    $(".eI2").attr("src","https://cdn62.picsart.com/196890258005202.png?r1024x1024");
    $(".QuizN").html(quizN);
    $(".scoreR").html("Score: 2/5")
}

function Score3(quizN){
    $(".eI1").attr("src","https://i.pinimg.com/originals/e6/15/5e/e6155ed623465757441b58a915327ef7.png");
    $(".eI2").attr("src","https://pics.me.me/nobody-rats-in-the-14th-century-55705939.png");
    $(".QuizN").html(quizN);
    $(".scoreR").html("Score: 3/5")
}

function Score4(quizN){
    $(".eI1").attr("src","https://i.chzbgr.com/full/555322112/hF1C1F21D/");
    $(".eI2").attr("src","https://i.kym-cdn.com/photos/images/original/001/477/329/0ed.jpg");
    $(".QuizN").html(quizN);
    $(".scoreR").html("Score: 4/5");
}

function Score5(quizN){
    $(".eI1").attr("src","https://i.imgur.com/M6s5YbG.gif");
    $(".eI2").attr("src","https://i.imgur.com/M6s5YbG.gif");
    $(".QuizN").html(quizN);
    $(".scoreR").html("Score: 5/5");
}

//Scoring Calc Easy
$(".n3").click(function() {
    $(".quiz3").hide();
    $("#Score").show();
    var score= 0;
    var QuizNa="Quiz: Easy";
    if (q1q1 === true) {
        score = score +1;
    }
    if (q1q2 === true) {
        score = score +1;
    }
    if (q1q3 === true) {
        score = score +1;
    }
    if (q1q4 === true) {
        score = score +1;
    }
    if (q1q5 === true) {
        score = score +1;
    }
    console.log(score);
    if (score === 5) {
        Score5(QuizNa);
    }
    else if (score === 4) {
        Score4(QuizNa);
    }
    else if (score === 3) {
        Score3(QuizNa);
    }
    else if (score === 2) {
        Score2(QuizNa);
    }
    else if (score === 1) {
        Score1(QuizNa);
    }
    else {
        Score0(QuizNa);
    }
});

//Med Quiz
var q2q1= false;
$(".an2-1-1").click(function() {
    color("2","1");
    $(".an2-1-1").css("background-color","green");
    $(".an2-1-1").css("color","white");
    $(".an2-1-1").css("border-color","white");  
    q2q1 = true;
});
$(".an2-1-4").click(function() {
    color("2","1");
    $(".an2-1-4").css("background-color","green");
    $(".an2-1-4").css("color","white");
    $(".an2-1-4").css("border-color","white"); 
    q2q1= false;
});
$(".an2-1-2").click(function() {
    color("2","1");
    $(".an2-1-2").css("background-color","green");
    $(".an2-1-2").css("color","white");
    $(".an2-1-2").css("border-color","white");  
    q2q1= false;
});
$(".an2-1-3").click(function() {
    color("2","1");
    $(".an2-1-3").css("background-color","green");
    $(".an2-1-3").css("color","white");
    $(".an2-1-3").css("border-color","white");
    q2q1= false;
});
console.log(q2q1);


var q2q2= false;
$(".an2-2-2").click(function() {
    color("2","2");
    $(".an2-2-2").css("background-color","green");
    $(".an2-2-2").css("color","white");
    $(".an2-2-2").css("border-color","white");  
    q2q2 = true;
});
$(".an2-2-1").click(function() {
    color("2","2");
    $(".an2-2-1").css("background-color","green");
    $(".an2-2-1").css("color","white");
    $(".an2-2-1").css("border-color","white");  
    q2q2= false;
});
$(".an2-2-4").click(function() {
    color("2","2");
    $(".an2-2-4").css("background-color","green");
    $(".an2-2-4").css("color","white");
    $(".an2-2-4").css("border-color","white");  
    q2q2= false;
});
$(".an2-2-3").click(function() {
    color("2","2");
    $(".an2-2-3").css("background-color","green");
    $(".an2-2-3").css("color","white");
    $(".an2-2-3").css("border-color","white"); 
    q2q2= false;
});
console.log(q2q2);

var q2q3= false;
$(".an2-3-4").click(function() {
    color("2","3");
    $(".an2-3-4").css("background-color","green");
    $(".an2-3-4").css("color","white");
    $(".an2-3-4").css("border-color","white");  
    q2q3 = true;
});
$(".an2-3-1").click(function() {
    color("2","3");
    $(".an2-3-1").css("background-color","green");
    $(".an2-3-1").css("color","white");
    $(".an2-3-1").css("border-color","white");
    q2q3= false;
});
$(".an2-3-2").click(function() {
    color("2","3");
    $(".an2-3-2").css("background-color","green");
    $(".an2-3-2").css("color","white");
    $(".an2-3-2").css("border-color","white");  
    q2q3= false;
});
$(".an2-3-3").click(function() {
    color("2","3");
    $(".an2-3-3").css("background-color","green");
    $(".an2-3-3").css("color","white");
    $(".an2-3-3").css("border-color","white"); 
    q2q3= false;
});
console.log(q2q3);

var q2q4= false;
$(".an2-4-3").click(function() {
    color("2","4");
    $(".an2-4-3").css("background-color","green");
    $(".an2-4-3").css("color","white");
    $(".an2-4-3").css("border-color","white");  
    q2q4 = true;
});
$(".an2-4-4").click(function() {
    color("2","4");
    $(".an2-4-4").css("background-color","green");
    $(".an2-4-4").css("color","white");
    $(".an2-4-4").css("border-color","white");  
    q2q4= false;
});
$(".an2-4-2").click(function() {
    color("2","4");
    $(".an2-4-2").css("background-color","green");
    $(".an2-4-2").css("color","white");
    $(".an2-4-2").css("border-color","white"); 
    q2q4= false;
});
$(".an2-4-1").click(function() {
    color("2","4");
    $(".an2-4-1").css("background-color","green");
    $(".an2-4-1").css("color","white");
    $(".an2-4-1").css("border-color","white");  
    q2q4= false;
});
console.log(q2q4);

var q2q5= false;
$(".an2-5-3").click(function() {
    color("2","5");
    $(".an2-5-3").css("background-color","green");
    $(".an2-5-3").css("color","white");
    $(".an2-5-3").css("border-color","white");  
    q2q5 = true;
});
$(".an2-5-1").click(function() {
    color("2","5");
    $(".an2-5-1").css("background-color","green");
    $(".an2-5-1").css("color","white");
    $(".an2-5-1").css("border-color","white"); 
    q2q5= false;
});
$(".an2-5-2").click(function() {
    color("2","5");
    $(".an2-5-2").css("background-color","green");
    $(".an2-5-2").css("color","white");
    $(".an2-5-2").css("border-color","white"); 
    q2q5= false;
});
$(".an2-5-4").click(function() {
    color("2","5");
    $(".an2-5-4").css("background-color","green");
    $(".an2-5-4").css("color","white");
    $(".an2-5-4").css("border-color","white"); 
    q2q5= false;
});
console.log(q2q5);

//Scoring Calc Med
$(".n2").click(function() {
    $(".quiz2").hide();
    $("#Score").show();
    var score= 0;
    var QuizNa="Quiz: Medium";
    if (q2q1 === true) {
        score = score +1;
    }
    if (q2q2 === true) {
        score = score +1;
    }
    if (q2q3 === true) {
        score = score +1;
    }
    if (q2q4 === true) {
        score = score +1;
    }
    if (q2q5 === true) {
        score = score +1;
    }
    console.log(score);
    if (score === 5) {
        Score5(QuizNa);
    }
    else if (score === 4) {
        Score4(QuizNa);
    }
    else if (score === 3) {
        Score3(QuizNa);
    }
    else if (score === 2) {
        Score2(QuizNa);
    }
    else if (score === 1) {
        Score1(QuizNa);
    }
    else {
        Score0(QuizNa);
    }
});

//Hard Quiz
var q3q1= false;
$(".an1-1-3").click(function() {
    color("1","1");
    $(".an1-1-3").css("background-color","green");
    $(".an1-1-3").css("color","white");
    $(".an1-1-3").css("border-color","white");  
    q3q1 = true;
});
$(".an1-1-4").click(function() {
    color("1","1");
    $(".an1-1-4").css("background-color","green");
    $(".an1-1-4").css("color","white");
    $(".an1-1-4").css("border-color","white"); 
    q3q1= false;
});
$(".an1-1-2").click(function() {
    color("1","1");
    $(".an1-1-2").css("background-color","green");
    $(".an1-1-2").css("color","white");
    $(".an1-1-2").css("border-color","white");  
    q3q1= false;
});
$(".an1-1-1").click(function() {
    color("1","1");
    $(".an1-1-1").css("background-color","green");
    $(".an1-1-1").css("color","white");
    $(".an1-1-1").css("border-color","white");
    q3q1= false;
});
console.log(q3q1);


var q3q2= false;
$(".an1-2-4").click(function() {
    color("1","2");
    $(".an1-2-4").css("background-color","green");
    $(".an1-2-4").css("color","white");
    $(".an1-2-4").css("border-color","white");  
    q3q2 = true;
});
$(".an1-2-1").click(function() {
    color("1","2");
    $(".an1-2-1").css("background-color","green");
    $(".an1-2-1").css("color","white");
    $(".an1-2-1").css("border-color","white");  
    q3q2= false;
});
$(".an1-2-2").click(function() {
    color("1","2");
    $(".an1-2-2").css("background-color","green");
    $(".an1-2-2").css("color","white");
    $(".an1-2-2").css("border-color","white");  
    q3q2= false;
});
$(".an1-2-3").click(function() {
    color("1","2");
    $(".an1-2-3").css("background-color","green");
    $(".an1-2-3").css("color","white");
    $(".an1-2-3").css("border-color","white"); 
    q3q2= false;
});
console.log(q3q2);

var q3q3= false;
$(".an1-3-1").click(function() {
    color("1","3");
    $(".an1-3-1").css("background-color","green");
    $(".an1-3-1").css("color","white");
    $(".an1-3-1").css("border-color","white");  
    q3q3 = true;
});
$(".an1-3-4").click(function() {
    color("1","3");
    $(".an1-3-4").css("background-color","green");
    $(".an1-3-4").css("color","white");
    $(".an1-3-4").css("border-color","white");
    q3q3= false;
});
$(".an1-3-2").click(function() {
    color("1","3");
    $(".an1-3-2").css("background-color","green");
    $(".an1-3-2").css("color","white");
    $(".an1-3-2").css("border-color","white");  
    q3q3= false;
});
$(".an1-3-3").click(function() {
    color("1","3");
    $(".an1-3-3").css("background-color","green");
    $(".an1-3-3").css("color","white");
    $(".an1-3-3").css("border-color","white"); 
    q3q3= false;
});
console.log(q3q3);

var q3q4= false;
$(".an1-4-4").click(function() {
    color("1","4");
    $(".an1-4-4").css("background-color","green");
    $(".an1-4-4").css("color","white");
    $(".an1-4-4").css("border-color","white");  
    q3q4 = true;
});
$(".an1-4-3").click(function() {
    color("1","4");
    $(".an1-4-3").css("background-color","green");
    $(".an1-4-3").css("color","white");
    $(".an1-4-3").css("border-color","white");  
    q3q4= false;
});
$(".an1-4-2").click(function() {
    color("1","4");
    $(".an1-4-2").css("background-color","green");
    $(".an1-4-2").css("color","white");
    $(".an1-4-2").css("border-color","white"); 
    q3q4= false;
});
$(".an1-4-1").click(function() {
    color("1","4");
    $(".an1-4-1").css("background-color","green");
    $(".an1-4-1").css("color","white");
    $(".an1-4-1").css("border-color","white");  
    q3q4= false;
});
console.log(q3q4);

var q3q5= false;
$(".an1-5-2").click(function() {
    color("1","5");
    $(".an1-5-2").css("background-color","green");
    $(".an1-5-2").css("color","white");
    $(".an1-5-2").css("border-color","white");  
    q3q5 =true;
});
$(".an1-5-1").click(function() {
    color("1","5");
    $(".an1-5-1").css("background-color","green");
    $(".an1-5-1").css("color","white");
    $(".an1-5-1").css("border-color","white"); 
    q3q5= false;
});
$(".an1-5-3").click(function() {
    color("1","5");
    $(".an1-5-3").css("background-color","green");
    $(".an1-5-3").css("color","white");
    $(".an1-5-3").css("border-color","white"); 
    q3q5= false;
});
$(".an1-5-4").click(function() {
    color("1","5");
    $(".an1-5-4").css("background-color","green");
    $(".an1-5-4").css("color","white");
    $(".an1-5-4").css("border-color","white"); 
    q3q5= false;
});
console.log(q3q5);

//Scoring Calc Hard
$(".n1").click(function() {
    $(".quiz1").hide();
    $("#Score").show();
    var score= 0;
    var QuizNa="Quiz: Hard";
    if (q3q1 === true) {
        score = score +1;
    }
    if (q3q2 === true) {
        score = score +1;
    }
    if (q3q3 === true) {
        score = score +1;
    }
    if (q3q4 === true) {
        score = score +1;
    }
    if (q3q5 === true) {
        score = score +1;
    }
    console.log(score);
    if (score === 5) {
        Score5(QuizNa);
    }
    else if (score === 4) {
        Score4(QuizNa);
    }
    else if (score === 3) {
        Score3(QuizNa);
    }
    else if (score === 2) {
        Score2(QuizNa);
    }
    else if (score === 1) {
        Score1(QuizNa);
    }
    else {
        Score0(QuizNa);
    }
});

//Expert Quiz
var q4q1= false;
$(".an4-1-2").click(function() {
    color("4","1");
    $(".an4-1-2").css("background-color","green");
    $(".an4-1-2").css("color","white");
    $(".an4-1-2").css("border-color","white");  
    q4q1 = true;
});
$(".an4-1-4").click(function() {
    color("4","1");
    $(".an4-1-4").css("background-color","green");
    $(".an4-1-4").css("color","white");
    $(".an4-1-4").css("border-color","white"); 
    q4q1= false;
});
$(".an4-1-1").click(function() {
    color("4","1");
    $(".an4-1-1").css("background-color","green");
    $(".an4-1-1").css("color","white");
    $(".an4-1-1").css("border-color","white");  
    q4q1= false;
});
$(".an4-1-3").click(function() {
    color("4","1");
    $(".an4-1-3").css("background-color","green");
    $(".an4-1-3").css("color","white");
    $(".an4-1-3").css("border-color","white");
    q4q1= false;
});
console.log(q4q1);


var q4q2= false;
$(".an4-2-3").click(function() {
    color("4","2");
    $(".an4-2-3").css("background-color","green");
    $(".an4-2-3").css("color","white");
    $(".an4-2-3").css("border-color","white");  
    q4q2 = true;
});
$(".an4-2-1").click(function() {
    color("4","2");
    $(".an4-2-1").css("background-color","green");
    $(".an4-2-1").css("color","white");
    $(".an4-2-1").css("border-color","white");  
    q4q2= false;
});
$(".an4-2-4").click(function() {
    color("4","2");
    $(".an4-2-4").css("background-color","green");
    $(".an4-2-4").css("color","white");
    $(".an4-2-4").css("border-color","white");  
    q4q2= false;
});
$(".an4-2-2").click(function() {
    color("4","2");
    $(".an4-2-2").css("background-color","green");
    $(".an4-2-2").css("color","white");
    $(".an4-2-2").css("border-color","white"); 
    q4q2= false;
});
console.log(q4q2);

var q4q3= false;
$(".an4-3-4").click(function() {
    color("4","3");
    $(".an4-3-4").css("background-color","green");
    $(".an4-3-4").css("color","white");
    $(".an4-3-4").css("border-color","white");  
    q4q3 = true;
});
$(".an4-3-1").click(function() {
    color("4","3");
    $(".an4-3-1").css("background-color","green");
    $(".an4-3-1").css("color","white");
    $(".an4-3-1").css("border-color","white");
    q4q3= false;
});
$(".an4-3-2").click(function() {
    color("4","3");
    $(".an4-3-2").css("background-color","green");
    $(".an4-3-2").css("color","white");
    $(".an4-3-2").css("border-color","white");  
    q4q3= false;
});
$(".an4-3-3").click(function() {
    color("4","3");
    $(".an4-3-3").css("background-color","green");
    $(".an4-3-3").css("color","white");
    $(".an4-3-3").css("border-color","white"); 
    q4q3= false;
});
console.log(q4q3);

var q4q4= false;
$(".an4-4-4").click(function() {
    color("4","4");
    $(".an4-4-4").css("background-color","green");
    $(".an4-4-4").css("color","white");
    $(".an4-4-4").css("border-color","white");  
    q4q4 = true;
});
$(".an4-4-3").click(function() {
    color("4","4");
    $(".an4-4-3").css("background-color","green");
    $(".an4-4-3").css("color","white");
    $(".an4-4-3").css("border-color","white");  
    q4q4= false;
});
$(".an4-4-2").click(function() {
    color("4","4");
    $(".an4-4-2").css("background-color","green");
    $(".an4-4-2").css("color","white");
    $(".an4-4-2").css("border-color","white"); 
    q4q4= false;
});
$(".an4-4-1").click(function() {
    color("4","4");
    $(".an4-4-1").css("background-color","green");
    $(".an4-4-1").css("color","white");
    $(".an4-4-1").css("border-color","white");  
    q4q4= false;
});
console.log(q4q4);

var q4q5= false;
$(".an4-5-1").click(function() {
    color("4","5");
    $(".an4-5-1").css("background-color","green");
    $(".an4-5-1").css("color","white");
    $(".an4-5-1").css("border-color","white");  
    q4q5 = true;
});
$(".an4-5-3").click(function() {
    color("4","5");
    $(".an4-5-3").css("background-color","green");
    $(".an4-5-3").css("color","white");
    $(".an4-5-3").css("border-color","white"); 
    q4q5= false;
});
$(".an4-5-2").click(function() {
    color("4","5");
    $(".an4-5-2").css("background-color","green");
    $(".an4-5-2").css("color","white");
    $(".an4-5-2").css("border-color","white"); 
    q4q5= false;
});
$(".an4-5-4").click(function() {
    color("4","5");
    $(".an4-5-4").css("background-color","green");
    $(".an4-5-4").css("color","white");
    $(".an4-5-4").css("border-color","white"); 
    q4q5= false;
});
console.log(q4q5);

//Scoring Calc Expert
$(".n4").click(function() {
    $(".quiz4").hide();
    $("#Score").show();
    var score= 0;
    var QuizNa="Quiz: Expert";
    if (q4q1 === true) {
        score = score +1;
    }
    if (q4q2 === true) {
        score = score +1;
    }
    if (q4q3 === true) {
        score = score +1;
    }
    if (q4q4 === true) {
        score = score +1;
    }
    if (q4q5 === true) {
        score = score +1;
    }
    console.log(score);
    if (score === 5) {
        Score5(QuizNa);
    }
    else if (score === 4) {
        Score4(QuizNa);
    }
    else if (score === 3) {
        Score3(QuizNa);
    }
    else if (score === 2) {
        Score2(QuizNa);
    }
    else if (score === 1) {
        Score1(QuizNa);
    }
    else {
        Score0(QuizNa);
    }
});