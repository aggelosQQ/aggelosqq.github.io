$(document).ready(function() {
      var gamemodes = {
            'survival': {
                  'heading': 'Survival',
                  'text': 'Collect resources, build structures, battle mobs, manage hunger and explore the world. Will you thrive and survive?',
                  'background': 'img/gamemodes/survival.png',
                  'readMoreLink': 'https://forum.insanemc.net/forums/survival/',
                  'gamemodeIcon': 'img/gamemode-icons/survival-icon.png'
            },
            'skyblock': {
                  'heading': 'Skyblock',
                  'text': 'You are challenged to live on an isolated island in the middle of nowhere. Use your survival tactics to create blocks and make a sale to grow rich!',
                  'background': 'img/gamemodes/skyblock.png',
                  'readMoreLink': 'https://forum.insanemc.net/forums/skyblock/',
                  'gamemodeIcon': 'img/gamemode-icons/skyblock-icon.png'
            },
            'creative': {
                  'heading': 'Creative',
                  'text': 'Show off your creative side while designing and creating a plot. You have infinite blocks you may use and have a great time with your friends!',
                  'background': 'img/gamemodes/factions.png',
                  'readMoreLink': 'https://forum.insanemc.net/forums/creative/',
                  'gamemodeIcon': 'img/gamemode-icons/creative-icon.png'
            },
            'factions': {
                  'heading': 'Factions',
                  'text': 'You are challenge to defend and grow your faction. War will start as well as diplomacy so be aware! You declare war with those you choose to fight!',
                  'background': 'img/gamemodes/factions.png',
                  'readMoreLink': 'https://forum.insanemc.net/forums/factions/',
                  'gamemodeIcon': 'img/gamemode-icons/factions-icon.png'
            }
      }

      $('.gamemode-heading').html(gamemodes.survival.heading);
      $('.gamemode-subtitle').html(gamemodes.survival.text);
      $('.gamemode-background').attr('src', gamemodes.survival.background);
      $('.read_more_link').attr('href', gamemodes.survival.readMoreLink);
      $('.gamemode-icon').attr('src', gamemodes.survival.gamemodeIcon);


      $('.skyblock').click(function() {
            $('.gamemode-heading').html(gamemodes.skyblock.heading);
            $('.gamemode-subtitle').html(gamemodes.skyblock.text);
            $('.gamemode-background').attr('src', gamemodes.skyblock.background);
            $('.read_more_link').attr('href', gamemodes.skyblock.readMoreLink);
            $('.gamemode-icon').attr('src', gamemodes.skyblock.gamemodeIcon);
      });

      $('.creative').click(function() {
            $('.gamemode-heading').html(gamemodes.creative.heading);
            $('.gamemode-subtitle').html(gamemodes.creative.text);
            $('.gamemode-background').attr('src', gamemodes.creative.background);
            $('.read_more_link').attr('href', gamemodes.creative.readMoreLink);
            $('.gamemode-icon').attr('src', gamemodes.creative.gamemodeIcon);
      });

      $('.survival').click(function() {
            $('.gamemode-heading').html(gamemodes.survival.heading);
            $('.gamemode-subtitle').html(gamemodes.survival.text);
            $('.gamemode-background').attr('src', gamemodes.survival.background);
            $('.read_more_link').attr('href', gamemodes.survival.readMoreLink);
            $('.gamemode-icon').attr('src', gamemodes.survival.gamemodeIcon);
      });

      $('.factions').click(function() {
            $('.gamemode-heading').html(gamemodes.factions.heading);
            $('.gamemode-subtitle').html(gamemodes.factions.text);
            $('.gamemode-background').attr('src', gamemodes.factions.background);
            $('.read_more_link').attr('href', gamemodes.factions.readMoreLink);
            $('.gamemode-icon').attr('src', gamemodes.factions.gamemodeIcon);
      });

      $('.mob-toggle').hide();

      $('.menu').click(function() {
            $('.mob-toggle').toggle('slide');
      });



      // var ip = "play.insanemc.net:25565";
      //
      // $( document ).ready(function() {
      //     $.getJSON('https://eu.mc-api.net/v3/server/info/' + ip, function(jd) {
      //         if(jd.error) {
      //             $('#players-online').html('Server is offline');
      //         } else {
      //             $('#players-online').html(jd.players.online + ' players currenly online!');
      //         }
      //     });
      // });
      //     updateCount();
      //     function updateCount() {
      //         $.getJSON('https://us.mc-api.net/v3/server/info/' + ip, function(jd) {
      //             if(jd.error) {
      //                 $('#players-online').html('Server is offline');
      //             } else {
      //                 $('#players-online').html(jd.players.online + ' players currenly online!');
      //             }
      //         });
      //     setTimeout(updateCount, 59000);
      //     }

      $('.players-online').click(function() {
            swal({
                  title: 'Copy InsaneMC\'s IP!',
                  type: 'info',
                  html: '<input type="text" value="mc.insanemc.net" class="swal2-input text-center" disabled>'

            })
      });


      $.firefly({
            color: '#FF9800',
            minPixel: 1,
            maxPixel: 3,
            total: 75,
            on: '.header-inner',
            borderRadius: 50
      });


      new Clipboard('.players p #copy');

      // SUCCESSFULLY COPIED IP
      $('.players p #copy').click(function() {
            swal({
                  title: 'IP Copied',
                  html: 'The server IP has been successfully copied! Enter the IP on your Minecraft and start your adventure!',
                  type: 'success'

            })
      });

      // VOTING LINKS

      $("#mcmp").click(function() {
            $("iframe").fadeIn("slow").attr("src", "http://minecraft-mp.com/");
            $(".section-title b").fadeOut(800).text("Minecraft-MP").delay(200).fadeIn(1200);
      });
      $("#pmc").click(function() {
            $("iframe").fadeIn("slow").attr("src", "https://www.planetminecraft.com/");
            $(".section-title b").fadeOut(800).text("Planet Minecraft").delay(200).fadeIn(1200);
      });
      $("#mcservers").click(function() {
            $("iframe").fadeIn("slow").attr("src", "http://minecraftservers.org/");
            $(".section-title b").fadeOut(800).text("MinecraftServers.org").delay(200).fadeIn(1200);
      });
      $("#topg").click(function() {
            $("iframe").fadeIn("slow").attr("src", "https://topg.org/Minecraft/in-432811");
            $(".section-title b").fadeOut(800).text("TopG").delay(200).fadeIn(1200);
      });
});
