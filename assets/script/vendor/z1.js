$(function(){
  $('.c-projetcs_container').mixItUp({
    selectors: {
      filter: '.filter-1',
      sort: '.sort-2'
    }
  });
});

$('.controls').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  variableWidth: true,
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

