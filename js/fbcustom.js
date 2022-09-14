jQuery(document).ready(function($) {
	//alert('woii')
	// initialize FB CMS JS functionss
	start();
	// initialize datepickers if any
	var _date_format = "mm/dd/yy";
	// initialize datepickers if any
	$( "#date" ).datepicker({ minDate: FB_nb_day_delay, dateFormat: _date_format });

	var current_month = $("select[name=frommonth] option:selected").val();
	var current_day = $("select[name=fromday] option:selected").val();
	var current_year = $("select[name=fromyear] option:selected").val();
	
	// in case there is datepicker instead of select elements for check in, make sure the datepicker passes correct data to the select elements to work with FB CMS
	$( "#date" ).on("change", function () {
		var date = $(this).val();
		dateArr = date.split("/");

		var parent = $(this).parent();
		parent.find("option[selected=selected]").removeAttr('selected');		
		if(icl_lang  == 'en') {
			parent.find("select[name=frommonth]").find("option[value=" + (dateArr[0]) + "]").attr("selected", "selected");
			parent.find("select[name=fromday]").find("option[value=" + (dateArr[1]) + "]").attr("selected", "selected");
		} 
		parent.find("select[name=fromyear]").find("option[value=" + (dateArr[2]) + "]").attr("selected", "selected");
	});
	

});