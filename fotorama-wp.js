(function ($) {
	$(function () {
		$.fn.fotoramaWPApapter = function () {
		    this.each(function () {
		        var $this = $(this),
		        	data = $this.data(),
		        	$fotorama = $('<div></div>');

		        $('dl', this).each(function () {
		            var $a = $('a', this);
		            $fotorama.append(
		            	$a.attr('data-caption', $('dd', this).text())
		            );
		        });

		        $this.html($fotorama.html());
		    });

		    return this;
		};

		$('.fotorama--wp')
			.fotoramaWPApapter()
			.fotorama(window.fotoramaDefaults);
	});
})(jQuery);