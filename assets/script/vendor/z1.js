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
            } else {
                // response.error will be an object containing any validation errors that occurred, indexed by field name
                // e.g. response.error.fromName => ['From Name is required']
                alert('An error occurred. Please try again.');
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

