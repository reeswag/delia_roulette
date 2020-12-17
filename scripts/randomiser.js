function randomiser(min,max) {
    var rand = Math.floor((Math.random() * max) + min);
    document.getElementById("result").innerHTML = "Page number: " + rand;
    document.getElementById("outro").innerHTML = "You have 7 days to cook...or...else...";
 }