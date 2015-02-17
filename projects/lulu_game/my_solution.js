
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
