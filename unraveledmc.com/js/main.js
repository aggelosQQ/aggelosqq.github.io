$(document).ready(function(){
      $('.parallax').parallax();
      $(".button-collapse").sideNav();
    });

    $(document).ready(function() {
    var interval = 15000;
    var autoRefresh = setTimeout(function() {
            refresh();
        },
        interval);

    var refresh = function() {
        $.getJSON("http://us.mc-api.net/v3/server/info/play.unraveledmc.com", function(json) {
            if (json.online !== true) {
                $("#unraveledmc").html('<font color="firebrick">Server Offline</font>');
            } else {
                $("#unraveledmc").html('<div class="online"><span style="color: #3a3d4a; font-weight: 800;"> Online</span> with ' + json.players.online + '/' + json.players.max + ' players online.');
            }
        });
        autoRefresh;
    }
    refresh();

    });