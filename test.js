
	$(function() {
		/**
		 *
		 */

		var $mini_top_tab_subs = $('.dropdownmenu').find('a');

		$mini_top_tab_subs.on('click', '', {}, function(event) {
			event.preventDefault();

			$mini_top_tab_subs.each(function() {
				$(this).removeClass('active');
			});
			$(this).addClass('active');

		});
		/**
		 *
		 */
		var $lis = $('#top_tab').find('li');
		var $megas = $('.mega');

		$lis.on('click', '', {}, function(event) {

			event.preventDefault();

			if ($(this).hasClass('active')) {
				location.href = '/test/tpl/dd.php';
			}

			$lis.each(function() {
				$(this).removeClass('active');
			});
			$(this).addClass('active');

			$megas.hide();

			var section = $(this).data('section');
			switch(section) {
				case 'aa':
					$('#megamenu_' + section).show().addClass('fadeIn');
					break;
				case 'class':
					$('#megamenu_' + section).show().addClass('fadeIn');
					break;
				case 'dvd':
					$('#megamenu_' + section).show().addClass('fadeIn');
					break;
				case 'magazine':
					$('#megamenu_' + section).show().addClass('fadeIn');
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
