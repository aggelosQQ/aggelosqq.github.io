$(document).ready(function() {
    $("#refresh").hide().delay(7000).fadeIn(15000);
    $('#refresh').click(function() {
        location.reload();
    });
    var clickt = 0,
        level = 1,
        coins = 15;

    $("#click").click(function() {
        clickt++;
        coins++;
        $("#click").effect("bounce", {
            times: 1
        }, 500);
        $("#curr-score").html(clickt);
        $("#coins").html(coins);


        if (clickt > 0) {
            $("#level").html(level + " | Progress " + clickt + "/10");
        }
        if (clickt == 10) {
            $("#level").fadeOut("fast");
            level++;
            $("#level").html(level);
            $("#level").fadeIn("slow");
        }
        if (clickt > 10) {
            $("#level").html(level + " | Progress " + clickt + "/20");
        }
        if (clickt == 20) {
            $("#level").fadeOut("fast");
            level++;
            $("#level").html(level);
            $("#level").fadeIn("slow");
        }
        if (clickt > 20) {
            $("#level").html(level + " | Progress " + clickt + "/40");
        }
        if (clickt == 40) {
            $("#level").fadeOut("fast");
            level++;
            $("#level").html(level);
            $("#level").fadeIn("slow");
        }
        if (clickt > 40) {
            $("#level").html(level + " | Progress " + clickt + "/80");
        }
        if (clickt == 80) {
            $("#level").fadeOut("fast");
            level++;
            $("#level").html(level);
            $("#level").fadeIn("slow");
        }
        if (clickt > 80) {
            $("#level").html(level + " | Progress " + clickt + "/120");
        }
        if (clickt == 120) {
            $("#level").fadeOut("fast");
            level++;
            $("#level").html(level);
            $("#level").fadeIn("slow");
        }
        if (clickt > 120) {
            $("#level").html(level + " | Progress " + clickt + "/240");
        }
        if (clickt == 240) {
            $("#level").fadeOut("fast");
            level++;
            $("#level").html(level);
            $("#level").fadeIn("slow");
        }
        if (clickt > 240) {
            $("#level").html(level + " | Progress " + clickt + "/480");
        }
        if (clickt == 480) {
            $("#level").fadeOut("fast");
            level++;
            $("#level").html(level);
            $("#level").fadeIn("slow");
        }
        if (clickt > 480) {
            $("#level").html(level + " | Progress " + clickt + "/960");
        }
        if (clickt == 960) {
            $("#level").fadeOut("fast");
            level++;
            $("#level").html(level);
            $("#level").fadeIn("slow");
        }
        if (clickt > 960) {
            $("#level").html(level + " | Progress " + clickt + "/1920");
        }
        if (clickt == 1920) {
            $("#level").fadeOut("fast");
            level++;
            $("#level").html(level);
            $("#level").fadeIn("slow");
            $("img").attr("src", "http://i.imgur.com/KX0RK7Y.png");
        }
        if (clickt > 1920) {
            $("#level").html(level + " | Progress " + clickt + "/3840");
        }
        if (clickt == 3840) {
            $("#level").fadeOut("fast");
            level++;
            $("#level").html(level);
            $("#level").fadeIn("slow");
        }
        if (clickt > 3840) {
            $("#level").html(level + " | Progress " + clickt + "/INFINITE");

        }

    });


    $("#shop-nav-link").click(function() {
        $("body, html").animate({
            scrollTop: $('#shop').offset().top
        }, 1000);
    });

});