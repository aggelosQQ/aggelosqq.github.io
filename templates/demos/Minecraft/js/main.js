$(document).ready(function() {
    $('#fullpage').fullpage({
    anchors: ['header', 'about', 'vote'],
    menu: '#menu'
});
});
$(document).ready(function() {
    var interval = 15000;
    var autoRefresh = setTimeout(function() {
            refresh();
        },
        interval);

    var refresh = function() {
        $.getJSON("https://eu.mc-api.net/v3/server/info/play.unraveledmc.com", function(json) { // Change the IP
            if (json.online !== true) {
                $("#online").html('Server Offline');
            } else {
                $("#online").html('With ' + json.players.online + ' players online!');
            }
        });
        autoRefresh;
    }
    refresh();

});