$(document).ready(function() {
      $.firefly({
            color: 'lightblue',
            minPixel: 1,
            maxPixel: 3,
            total: 75,
            on: 'body'
      });


      var interval = 15000;
      var autoRefresh = setTimeout(function() {
                  refresh();
            },
            interval);


      var refresh = function() {
            $.getJSON('https://mc-api.net/v3/server/info/' + server_ip, function(json) {
                  if (json.online !== true) {
                        $(".status").html('<div class="offline"><i class="fa fa-times off-icon"></i> <span style="color: #ccc; font-weight: bolder;"> offline</span> - error:<i> ' + json.error + '</i>.</div>');
                  } else {
                        $(".status").html('<div class="online">' + json.players.online + ' gamers waiting for you!');
                  }
            });
            autoRefresh;
      }
      refresh();

});
