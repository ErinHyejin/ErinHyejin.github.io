 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description: I will create a character named "Lulu" that walks through a path. There are four missions that lulu should complete: eat, pee-pee, poop, and sniff. There is a "master" who walks at steady speed. 

// Overall mission: lulu's completing all the missions keeping the distance between lulu and the master within 3 yards. 
// Goals: Not losing the master
// Characters: Lulu, master
// Objects: path, bush, flower, treat
// Functions: type, walk, sniff, pee-pee, eat

// Pseudocode
// object Lulu
//  - walk: move Lulu forward.
//  - eat, sniff, pee-pee: stop lulu and show a string that a player should type.

// object Master
// - walk: move a master forward.

// object path 
// - one way horizontal line

// variable stop: if it is true, lulu stops and complete the mission. Otherwise, lulu keeps walking. 

// function distance: if the distance between lulu and a master becomes greater than 3 yards, stop the game and prompts "You lost your master." 


// Initial Code
// var lulu = {speed: 3, position: 0}
// var master = {speed: 2, position: 0}
// var stop = false
// var pathLength = 828
// var maxDist = 100
// var curMessage = ""

// var peepee = {status: "Lulu is pee-peeing.", type: "It feels so good"}
// var eat = {status: "Lulu is eating treats.", type: "I like treats, yummy."}
// var sniff = {status: "Lulu is sniffing.", type: "Mmm, smells good."}

// var events = {60: peepee, 360: eat, 600: sniff}

// function promptMessage(event) {
//   document.getElementById("type_here").value = "";
//   document.getElementById("message").innerHTML = event.status + "<BR>Type \"" + event.type + "\" to proceed.";
//   curMessage = event.type;
// }

// var walk = setInterval(
//   function() {
//     if (Math.abs(master.position - lulu.position) > maxDist) {
//       document.getElementById("message").innerHTML = "Lulu lost her master.. :("
//       walk.clearInterval();
//     }

//     if (master.position == pathLength || lulu.position == pathLength ){
//       document.getElementById("message").innerHTML = "Lulu and you had a great walk!"
//       walk.clearInterval();
//     }

//     if (stop == false) {
//       lulu.position += lulu.speed;
//       if (lulu.position in events) {
//         stop = true
//         promptMessage(events[lulu.position])
//       }
//     } else {
//       if (document.getElementById("type_here").value == curMessage) {
//         stop = false
//         document.getElementById("type_here").value="";
//         document.getElementById("message").innerHTML = "Good Job! Lulu is walking again!"
//       }
//     }
    
//     master.position += master.speed;
//     document.getElementById("master").style.left = master.position;
//     document.getElementById("lulu").style.left = lulu.position;
//     //document.getElementById("path").innerHTML= "Lulu: " + lulu.position + "<br>Master: " + master.position;
//   }, 100
// );



// Refactored Code
var lulu = {speed: 3, position: 0};
var master = {speed: 2, position: 0};
var stop = false;
var pathLength = 828;
var maxDist = 100;
var curMessage = "";

var play = {status: "Lulu is playing.", type: "It feels so good", img: "game_imgs/lulu_play.jpg" };
var eat = {status: "Lulu is eating treats.", type: "I like treats, yummy.", img: "game_imgs/lulu_eat.jpg"};
var sniff = {status: "Lulu is sniffing.", type: "Mmm, smells good.", img: "game_imgs/lulu_sniff1.jpg"};

var events = {60: play, 360: eat, 600: sniff};

function promptMessage(event) {
  document.getElementById("type_here").value = "";
  document.getElementById("type_here").focus();
  document.getElementById("message").innerHTML = event.status + "<BR> Type \"" + event.type + "\" to proceed.";
  curMessage = event.type;
  document.getElementById("status").src = event.img;
}

var walk = setInterval(
   function(){
    if (Math.abs(master.position - lulu.position) > maxDist) {
      document.getElementById("message").innerHTML = "Lulu lost her master.. :(" ;
      document.getElementById("status").src = "game_imgs/lulu_sniff.jpg";
      walk.clearInterval();
    }

    if (master.position==pathLength || lulu.position == pathLength) {
      document.getElementById("message").innerHTML = "You and Lulu had a great walk!";
      document.getElementById("status").src = "game_imgs/finish.jpg"
      walk.clearInterval();
    }

    if (stop == false) {
      lulu.position += lulu.speed;
      if (lulu.position in events) {
        stop = true;
        promptMessage(events[lulu.position]);
      }
    } else {
      if (document.getElementById("type_here").value == curMessage) {
        stop = false;
        document.getElementById("type_here").value ="";
        document.getElementById("message").innerHTML = "Good Job! Lulu is walking again!";
        document.getElementById("status").src = "game_imgs/lulu_status_1.JPG";
      }
    }

    master.position += master.speed;
    document.getElementById("master").style.left = master.position;
    document.getElementById("lulu").style.left = lulu.position;
   }, 100
  );


// Reflection
// 
//
//
//
//
//
//
//