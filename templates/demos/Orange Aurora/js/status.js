	$(document).ready(function() {

	    var server_name = "Add on status.js"; // Add your server name
	    $("#server_name").text(server_name);
	    var interval = 15000;
	    var refresh = function() {
	        $.getJSON("http://us.mc-api.net/v3/server/info/play.immafreedom.eu", function (json) { // Change the IP to the IP of your server.
	            if (json.online !== true) {
	                $("#server_status").html(server_name + ' is<br/> <span id="offline">offline</span>');
	            } else {
	                $("#server_status").html(server_name + ' is<br/> <span id="online">online</span>');
	            }
	            $("#server_players").html(server_name + ' has <br/><span id="player_status">' + json.players.online + '/' + json.players.max + '</span> <br/>players online.');
	        });
	        setTimeout(function() {
	                refresh();
	            },
	            interval);
	    }
	    refresh();
	});