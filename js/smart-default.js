//var checktime = 0;
$(function() {

	var $mini_top_tab_subs = $('.dropdownmenu').find('a'),
		$showadframe = $('.showadframe'),
		$megas = $('.showadframe'),
		$lis = $('.dropdownmenu');
		

	$mini_top_tab_subs.on('tap',function(event) {
		event.preventDefault();
		$mini_top_tab_subs.each(function() {
			//$(this).removeClass('active');
			document.getElementById('showaddiv1').style.display='none';
			$('.megamenu').css('display','none');
			//$showadframe.removeClass('active');
			$showadframe.removeClass('active');
		});
		$(this).addClass('checktime');
		document.getElementById('showaddiv1').style.display='block';
		$showadframe.addClass('animated').addClass('fadeIn');

		$list = $('.checktime');
		$list.on('tap', function(event) {
			console.log('yoyo');
			event.preventDefault();
			location.href = '/test/tpl/dd.php'; // 請寫同學會網址
		});


		var section = $(this).data('section');
			switch(section) {
				case 'aa':
					$('.megamenu_' + section).show().addClass('fadeIn');
					
					break;
				case 'class':
					$('.megamenu_' + section).show().addClass('fadeIn');
					break;
				case 'dvd':
					$('.megamenu_' + section).show().addClass('fadeIn');
					break;
				case 'magazine':
					$('.megamenu_' + section).show().addClass('fadeIn');
					break;
				case 'book':
					location.href = '/test/tpl/dd.php';
					break;
				case 'forum':
					location.href = '/test/tpl/dd.php';
					break;
				case 'purchase':
					location.href = '/test/tpl/dd.php';
					break;
			}



	});


	// $lis.on('checktime', function(event) {
	// 	event.preventDefault();
	// 	if ($(this).hasClass('')) {
	// 		location.href = '/test/tpl/dd.php';
	// 	}
	// 	console.log('oh!ya')
	// 	// $lis.each(function() {
	// 	// 	//$(this).removeClass('active');
	// 	// 	//document.getElementById('showaddiv1').style.display='none';
	// 	// });
	// 	// //$(this).addClass('active');
	// 	// //document.getElementById('showaddiv1').style.display='block';
	// 	// //$megas.hide();

	// 	// var section = $(this).data('section');
	// 	// switch(section) {
	// 	// 	case 'aa':
	// 	// 		$('.megamenu_' + section).show().addClass('fadeIn');
	// 	// 		break;
	// 	// 	case 'class':
	// 	// 		$('.megamenu_' + section).show().addClass('fadeIn');
	// 	// 		break;
	// 	// 	case 'dvd':
	// 	// 		$('.megamenu_' + section).show().addClass('fadeIn');
	// 	// 		break;
	// 	// 	case 'magazine':
	// 	// 		$('.megamenu_' + section).show().addClass('fadeIn');
	// 	// 		break;
	// 	// 	case 'book':
	// 	// 		location.href = '/test/tpl/dd.php';
	// 	// 		break;
	// 	// 	case 'forum':
	// 	// 		location.href = '/test/tpl/dd.php';
	// 	// 		break;
	// 	// 	case 'purchase':
	// 	// 		location.href = '/test/tpl/dd.php';
	// 	// 		break;
	// 	// }

	// });
	$lis.on('mouseleave', '', {}, function() {

		$(window).on('mousemove', '', {}, function(event) {

			var array = ["megamenu_aa", "megamenu_class", "megamenu_dvd", "megamenu_magazine"];
			var idx = array.indexOf(event.target.id);

			if (idx == -1) {

				setTimeout(function() {

					$megas.hide();
					$lis.removeClass('active');
					$(window).off('mousemove');
				}, 200);
			} else {
				$(window).off('mousemove');
			}
		});

	});
	$megas.on('mouseleave', '', {}, function() {
		$(this).hide();
		$lis.removeClass('active');
	});
}); 

// (function ($) {


//     var $sw = $('#swipeme'),
//         $output = $('#output');

//     var $mini_top_tab_subs = $('.dropdownmenu').find('a');

// 	// $mini_top_tab_subs.on('click', '', {}, function(event) {
// 	// 	event.preventDefault();

// 	// 	$mini_top_tab_subs.each(function() {
// 	// 		$(this).removeClass('active');
// 	// 	});
// 	// 	$(this).addClass('active');

// 	// });
// 	$mini_top_tab_subs.on('tap doubletap',function (event) {
// 		event.preventDefault();
// 		$mini_top_tab_subs.each(function() {
// 			$(this).removeClass('active');
// 		});
// 		$(this).addClass('active');
// 	});

//     $sw.on('hold tap swipe doubletap transformstart transform transformend dragstart drag dragend swipe release', function (event) {
        

//         $output.prepend("Type: " + event.type + ", Fingers: " + event.touches.length + ", Direction: " + event.direction + ", distance: "+ event.distance +"<br/>");
    

//     });
//     //上述你可以加進想要呈現的data
//     // this is how you unbind an event
//     /*$sw.on('swipe', function (event) {
//         event.preventDefault();

//         $sw.off('tap');
//     });*/
// }(jQuery));