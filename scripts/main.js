



$(document).ready(function(){	
	$("header > .menu-button").click(function(){
	    $("header").toggleClass("open");
	});
	
	
});








$(function() {
	
	$(document).ready(function(){	
		
		// Open overlay
		$(".overlay > .close-overlay").click(function(){
		    $(".overlay").toggleClass("visible");
		});
		
		// Close overlay
		$("#open-overlay").click(function(){
		    $(".overlay").toggleClass("visible");
		});
	});
	
	// Play Video
	// Listen for clicks
	document.addEventListener('click', function (event) {
	
		// Check if clicked element is a video thumbnail
		var videoId = event.target.getAttribute('data-video');
		if (!videoId) return;
	
		// Create iframe
		var iframe = document.createElement('div');
		iframe.innerHTML = '<p>x</p><iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '?rel=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		var video = iframe.childNodes[1];
	
		// Replace the image with the video
		event.target.parentNode.replaceChild(video, event.target);
	
		// Enter fullscreen mode
//		video.requestFullscreen();
		
	}, false);
	
	
	// Scroll To #
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	
	
	
	
	
	



});





