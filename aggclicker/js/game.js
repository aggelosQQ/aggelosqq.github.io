$(document).ready(function () {
    $("#refresh").click(function () {
        location.reload();
    });
});

$(document).ready(function () {

function levelupeffect() {
    $("#click").fadeOut(150);
    $("#click").fadeIn(150);
    $("#click").fadeOut(150);
    $("#click").fadeIn(150);
}
function firstclick() {
     $(".gameresults").fadeIn("slow");
     $("#clicktostart").html("Have Fun!");
     $("#clicktostart").clearQueue();
     $("#clicktostart").stop();
     $("#refresh").fadeIn(7000);
     $("#powerups").fadeIn(1000);
     $(".updates").fadeOut(1000);
     $(".footer").fadeOut(1000);
}
function achievement() {
      $("body").effect("shake", 800);
      $("body").effect("bounce", 800);
      $("#click").effect("pulsate", 800);
       $("#click").effect("shake", 800);
       $("#click").effect("bounce", 800);
       $("#click").effect("pulsate", 800);
       $(".gameresults").effect("shake", 800);
       $("body").effect("shake", 800);
       $("body").effect("bounce", 800);
       $("#click").effect("pulsate", 800);
        $("#click").effect("shake", 800);
        $("#click").effect("bounce", 800);
        $("#click").effect("pulsate", 800);
        $(".gameresults").effect("shake", 800);
}
    var clickt = 0,
    levelup = "<b><u>Level Up!</u></b>",
    curlevel = "Current Level: ";


    if (clickt === 0) {

        $(".gameresults").fadeOut();
        $("#clicktostart").html("Click the Image to Start the Game!");
        $("#refresh").hide();
        $("#powerupresult").fadeOut(0);
        $("#powerups").fadeOut(0);

    }

    $("#click").click(function () {

        clickt++;



        if (clickt > 0) {
           firstclick();
        }

        $("#clicktimes").html("<br/><br/>This button has been clicked " + clickt + " times so far!<br/>");

        $("#coins").html("You have collected <strong>" + clickt + "C</strong> so far.");

        if (clickt === 10) {

            $("#result").html(levelup + " Congratulations! You have clicked this button <strong>10</strong> times! <em>Next Level Up at <strong>20</strong>!</em>");

           levelupeffect();

        } else {

            $("#result").html("You are still level <strong>0</strong>! First Level Up at: <em>10 clicks</em>! Level Up Progress: " + clickt + "/10");

        }

        if (clickt > 10) {

            $("#result").html(curlevel + "<strong>1</strong>! Level Up Progress: " + clickt + "/20!");

        }

        if (clickt === 20) {

            $("#result").html(levelup + " Congratulations! You have clicked this button <strong>20</strong> times! <em>Next Level Up at <strong>50</strong></em>.");

             levelupeffect();

        }

        if (clickt > 20) {

            $("#result").html(curlevel + "<strong>2</strong>! Level Up Progress: " + clickt + "/50!");

        }

        if (clickt === 50) {

            $("#result").html(levelup + " Congratulations! You have clicked this button <strong>50</strong> times! <em>Next Level Up at <strong>100</strong></em>.");

            $("#click").fadeOut(150);

            $("#click").fadeIn(150);

            $("#click").fadeOut(150);

            $("#click").fadeIn(150);

        }

        if (clickt > 50) {

            $("#result").html(curlevel + "<strong>3</strong>! Level Up Progress: " + clickt + "/100!");

        }

        if (clickt === 100) {

            $("#result").html(levelup + " Congratulations! You have clicked this button <strong>100</strong> times! <em>Next Level Up at <strong>200</strong></em>.");

            $("#click").fadeOut(150);

            $("#click").fadeIn(150);

            $("#click").fadeOut(150);

            $("#click").fadeIn(150);

        }

        if (clickt > 100) {

            $("#result").html(curlevel + "<strong>4</strong>! Level Up Progress: " + clickt + "/200!");

        }

        if (clickt === 200) {

            $("#result").html(levelup + " Congratulations! You have clicked this button <strong>200</strong> times! <em>Next Level Up at <strong>400</strong></em>.");
            levelupeffect();

        }

        if (clickt > 200) {

            $("#result").html(curlevel + "<strong>5</strong>! Level Up Progress: " + clickt + "/400!");

        }

        if (clickt === 400) {

            $("#result").html(levelup + " Congratulations! You have clicked this button <strong>400</strong> times! <em>Next Level Up at <strong>800</strong></em>.");

            levelupeffect();

        }

        if (clickt > 400) {

            $("#result").html(curlevel + "<strong>6</strong>! Level Up Progress: " + clickt + "/800!");

        }

        if (clickt === 800) {

            $("#result").html(levelup + " Congratulations! You have clicked this button <strong>800</strong> times! <em>Next Level Up at <strong>1600</strong>.");
             levelupeffect();

        }

        if (clickt > 800) {

            $("#result").html(curlevel + "<strong>7</strong>! Level Up Progress " + clickt + "/1600 <br> You will have an amazing surprise at 1000! " + clickt + "/1000!");

        }

        if (clickt === 1000) {

            $("#result").html("Congratulations! You reached 1000 clicks! Enjoy that shake!");
            achievement();
        }

        if (clickt > 1000) {
            $("#result").html(curlevel + "<strong>7</strong>! Level Up Progress " + clickt + "/1600.");
        }
        if (clickt === 1600) {
            $("#result").html(levelup + " Congratulations! You have clicked this button <strong>1600</strong> times! <em>Next Level at <strong>2100</strong>.");
             levelupeffect();
        }
        if (clickt > 1600) {
            $("#result").html(curlevel + "<strong>8</strong>! Level Up Progress " + clickt + "/2100");
        }
        if (clickt === 2100) {
            $("#result").html(levelup + " Congratulations! You have clicked this button <strong>2100</strong> times! <em>Next Level at <strong>2600</strong>");
             levelupeffect();
        }
        if (clickt > 2100) {
            $("#result").html(curlevel + "<strong>9</strong> Level Up Progress " + clickt + "/2600");
        }
        if (clickt === 2600) {
            $("#result").html(levelup + " Congratulations! You have clicked this button <strong>2100</strong> times! <em>Next Level at <strong>Unavailable!</strong><br>Count your levels!");
             levelupeffect();
             achievement();
        }
        if (clickt > 2600) {
            $("#result").html(curlevel + "<strong>10!</strong> Congratulations! You reached level 10! Progress: " + clickt + "/3200!");
        }
         if (clickt > 3200) {
            $("#result").html(curlevel + "<strong>11!</strong> Congratulations! You reached level 11! Progress: " + clickt + "/4000!");
             levelupeffect();
        }
         if (clickt > 4000) {
            $("#result").html(curlevel + "<strong>12!</strong> Congratulations! You reached level 12! Progress: " + clickt + "/4800!");
             levelupeffect();
        }
         if (clickt > 4800) {
            $("#result").html(curlevel + "<strong>13!</strong> Congratulations! You reached level 13! Progress: " + clickt + "/5500!");
             levelupeffect();
        }
         if (clickt > 5500) {
            $("#result").html(curlevel + "<strong>14!</strong> Congratulations! You reached level 14! Progress: " + clickt + "/6200");
             levelupeffect();
        }
         if (clickt > 6200) {
            $("#result").html(curlevel + "<strong>15!</strong> Congratulations! You reached level 15! Progress: " + clickt + "/ N/A!");
             levelupeffect();
        }



    });
});
