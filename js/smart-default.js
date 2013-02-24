
$(function() {
	//首頁選單開始
	var $mini_top_tab_subs = $('.dropdownmenu').find('a'),
		$showadframe = $('.showadframe'),
		$megas = $('.showadframe'),
		$lis = $('.dropdownmenu'),
		$mouseleavemenu = $('.megamenu');
	$mouseleavemenu.on('mouseleave',function(event){
		$mini_top_tab_subs.removeClass('checktime');
		$showadframe.removeClass('fadeIn').addClass('fadeOut');

	})
	$mini_top_tab_subs.on('tap',function(event) {
		event.preventDefault();
		$mini_top_tab_subs.each(function() {
			document.getElementById('showaddiv1').style.display='none';
			$('.megamenu').css('display','none');
			$showadframe.removeClass('active');
		});
		$(this).addClass('checktime');
		document.getElementById('showaddiv1').style.display='block';
		$showadframe.removeClass('fadeOut').addClass('animated').addClass('fadeIn');
		var section = $(this).data('section');
		switch(section) {
			case 'aa':
				$('.megamenu').hide();

				$('.megamenu_' + section).show().addClass('fadeIn');
				if ($('.megamenu_' + section).hasClass('checktime')){
					checktime('/test/tpl/dd1.php');// 請輸入同學會Url
				}
				break;
			case 'class':
				$('.megamenu').hide();

				$('.megamenu_' + section).show().addClass('fadeIn');
				if ($('.megamenu_' + section).hasClass('checktime')){
					checktime('/test/tpl/dd2.php'); //請輸入課程Url
				}
				break;
			case 'DVD':
				//$('.megamenu').hide();
				$('.megamenu_' + section).show().addClass('fadeIn');
				if ($('.megamenu_' + section).hasClass('checktime')){
					checktime('/test/tpl/dd3.php'); //請輸入DVD Url
				}
				break;
			case 'magazine':
				//$('.megamenu').hide();
				$('.megamenu_' + section).show().addClass('fadeIn');
				if ($('.megamenu_' + section).hasClass('checktime')){
					checktime('/test/tpl/dd4.php'); //請輸入雜誌Url
				}
				break;
			case 'book':
				location.href = '/test/tpl/dd.php'; //請輸入叢書Url
				break;
			case 'forum':
				location.href = '/test/tpl/dd.php'; //請輸入討論區Url
				break;
			case 'purchase':
				location.href = '/test/tpl/dd.php'; //請輸入限時搶購Url
				break;
		}
	});
	//首頁選單結束
}); 

function checktime(url){
	$list = $('.checktime');
	$list.on('tap', function(event) {
		console.log('yoyo');
		event.preventDefault();
		location.href = url; // 請寫同學會網址
	});
}