
(function($) {
	

	
	$('.qc-cmp-toggle').click(function(){
		var toggle = $(this);
		if(toggle.hasClass('qc-cmp-toggle-on')) {
			$(this).removeClass('qc-cmp-toggle-on');
			$(this).addClass('qc-cmp-toggle-off');
		} else {
			$(this).removeClass('qc-cmp-toggle-off');
			$(this).addClass('qc-cmp-toggle-on');
		}
		
	});
	$('.qc-cmp-show-vendors-link').click(function(e) {
		e.preventDefault();
		$(this).closest('td').find('.qc-cmp-table').toggleClass('qc-cmp-hidden');
	});
	
	$('.qc-cmp-arrow-down').click(function(e){
		$(this).toggleClass('qc-cmp-flip-up');
		$(this).closest('tr').next('.qc-cmp-vendor-info').toggleClass('qc-cmp-hidden');
	});
	 
	  

})(jQuery);

