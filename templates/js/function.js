 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $(".download").click(function() {
    	Materialize.toast('Thank you for using our templates!<br/>Your download will start shortly.', 8000);
    });
    
    $(".loading").html('<div class="preloader-wrapper big active"> <div class="spinner-layer spinner-blue"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div><div class="spinner-layer spinner-red"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div><div class="spinner-layer spinner-yellow"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div><div class="spinner-layer spinner-green"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div></div>');

    $(".twitter").hover(function() {
    	$(".twitter").toggleClass("blue lighten-1");
    	$(".twitter").toggleClass("blue darken-2");
    });
    $(".youtube").hover(function() {
    	$(".youtube").toggleClass("red lighten-1-1");
    	$(".youtube").toggleClass("red darken-2");
    });
  });