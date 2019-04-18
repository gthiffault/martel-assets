$(function(){
  $('.c-projetcs_container').mixItUp({
    selectors: {
      filter: '.filter-1',
      sort: '.sort-2'
    }
  });
});

$('.controls').slick({
  infinite: false,
  variableWidth: false,
  appendArrows:'.c-arrows',
responsive: [
    {
      breakpoint: 9999999999,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1284,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        //initialSlide:2,
  		// centerMode: true,
  		// focusOnSelect: true,        
      }
    },
    {
      breakpoint: 1255,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        //initialSlide:2,
  		// centerMode: true,
  		// focusOnSelect: true,        
      }
    },
    {
      breakpoint: 946,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
  		// centerMode: true,
  		// focusOnSelect: true,   
  		        //initialSlide:1,     
      }
    },
    {
      breakpoint: 742,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        //initialSlide:1,
  		// centerMode: true,
  		// focusOnSelect: true,           
      }
    },
    {
      breakpoint: 538,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        //initialSlide:0,
  		// centerMode: true,
  		// focusOnSelect: true,     
      }   
      } 
    // Yo
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]  
});



$(document).ready(function() {
$('.c-home-services_ul').slick({
  infinite: true,
  arrows: false,
responsive: [
    {
      breakpoint: 9999999999,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});



$('#grid2 img').each(function(){
    var $this = $(this); 
    $this.wrap('<div class="item"><a></a></div>');
    $('a').removeAttr('href');  
});
$('#grid2').addClass('effect-2');

$(window).on('load',function(){
  var $container = $('.grid');
  // initialize
  $container.masonry({
    //columnWidth: 200,
    fitWidth: true,
    resize: true,
  	columnWidth: 160,
  	gutter: 20,    
    itemSelector: '.item',
    // horizontalOrder: true,
    percentPosition: true
  })
  $('.item > a').removeAttr('href')
})

$('#my-form').submit(function(ev) {
    // Prevent the form from actually submitting
    ev.preventDefault();

    // Send it to the server
    $.post({
        url: '/',
        dataType: 'json',
        data: $(this).serialize(),
        success: function(response) {
            if (response.success) {
                $('#thanks').fadeIn();
				$('#my-form').find("input[type=text], textarea, select, input[type=email], input[type=select], input[type=radiobutton],input[type=file] ").val("");
				$('.succes').addClass('-active');
				$('.succes').append('<div class="c-confirmation"><div class="close"></div>Merci d’avoir communiqué avec nous.<br>Nous vous contacterons dans les plus brefs délais.</div>');
$('.close').on('click',function() {
	$('.succes').fadeOut(500, function(){ $(this).remove();});
})

            } else {
            }
        }
    });
});

$('#career').submit(function(ev) {
    // Prevent the form from actually submitting
    ev.preventDefault();

    // Send it to the server
    $.post({
        url: '/',
        dataType: 'json',
        data: $(this).serialize(),
        success: function(response) {
            if (response.success) {
                $('#thanks').fadeIn();
											$('#career').find("input[type=text], textarea, select, input[type=email], input[type=select], input[type=radiobutton],input[type=file] ").val("");
											$('#noFile-cv').text("");
				$('.succes').addClass('-active');
				$('.succes').append('<div class="c-confirmation"><div class="close"></div>Texte à modifier</div>');
$('.close').on('click',function() {
	$('.succes').fadeOut(500, function(){ $(this).remove();});
})               
            } else {

            }
        }
    });
});




// JavaScript for label effects only
		$(".c-form input").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		})

		$(".c-form textarea").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		})	



$('.c-menu_dropdown .c-parent').on('click',function() {
	$(this).next('.c-depth-one').toggleClass('-js-submenu-active');
	$(this).toggleClass('-js-submenu-active');
})			



  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $('html').toggleClass('-js-menu-active');
  });


$('.c-accordion_title').on('click',function() {
	$(this).next('.c-accordion_content').stop().slideToggle();	
	$(this).toggleClass('js-parent-active');
})


// external js: masonry.pkgd.js


$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  percentPosition: true
});

							$('#chooseFile-cv').bind('change', function () {
								var filename = $("#chooseFile-cv").val();
								if (/^\s*$/.test(filename)) {
									$(".c-file-upload").removeClass('active');
									$("#noFile-cv").text("No file chosen...");

								} else {
									$(".c-file-upload.-cv").addClass('active');
									$("#noFile-cv").text(filename.replace("C:\\fakepath\\", ""));
								}
							});

$("#career").validate({
    messages: {
        fromEmail: "*Champs requis",
        fromName: "*Champs requis",
        attachment: "*Champs requis",
        phone:"*Champs requis"
    }
});




$("#my-form").validate({
    messages: {
        fromEmail: "*Champs requis",
        fromName: "*Champs requis",
        phone:"*Champs requis",
        message:"*Champs requis",
    }
});