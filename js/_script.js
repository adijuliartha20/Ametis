jQuery(document).ready(function(e) {
   nav_top();
   jQuery(window).load(function(){
		slider()
		accom_cat_event()
		gallery_event()
		contact_scroll()
		accom_cat_scroll()
		news_detail_fisrt()
		accom_rate_first()
		close_at_hand_first()
		design_first()
		special_offer_first()
		location_first()
		news_download_first()
		news_release_first()
		
   });	
   
   nav_buttom();
   jQuery(window).scroll(function(){
	   set_header_position()
	   home_scroll()
	   accom_cat_scroll()
	   contact_scroll()
	   location_scroll()
	   close_at_hand_scroll()
	   design_scroll()
	   news_detail_scroll()
	   special_offer_scroll()
	   accom_rate_scroll()
	   news_download_scroll()
	   news_release_scroll()
	   services_scroll()
   });
   set_mobile_event();
  
});

function services_scroll(){
	if(jQuery("#the-services-txt").length==0)return;
	first_desc()
}


function news_release_first(){
	if(jQuery("#news-release").length==0)return;
	first_desc()	
	var ww  = jQuery(window).width();
	if(ww <=768 && ww>=375){
		footer_scalling_low_effect()
	}
}

function news_release_scroll(){
	footer_scalling_low_effect()
}


/*====== News Download Start ======*/
function news_download_first(){
	if(jQuery("#news-download").length==0)return;
	first_desc()	
	var ww  = jQuery(window).width();
	if(ww <=768 && ww>=375){
		footer_scalling_low_effect()
	}
}

function news_download_scroll(){
	footer_scalling_low_effect()
}
/*====== News Download End ======*/

/*====== Accommodation Rate Start ======*/
function accom_rate_scroll(){
	if(jQuery("#publish-rate-style").length==0)return;
	first_desc()
	footer_scalling_low_effect()
}

function accom_rate_first(){
	if(jQuery("#publish-rate-style").length==0)return;
	first_desc()
}
/*====== Accommodation Rate End ======*/

/*====== Special Offer Start ======*/
function special_offer_scroll(){
	if(jQuery("#special-offer-list").length==0)return;
	first_desc()
	scalling_low_effect()
	footer_scalling_low_effect()
}

function special_offer_first(){
	var scroll_top = $(window).scrollTop();
	var window_height = $(window).height();
	var ww  = jQuery(window).width();
	if(ww <=768){
		 setTimeout(function(){
			 jQuery('#special-offer-1 .inside-accom-cat').removeClass('scaling_low');
		} , 600+(100*1));
	}
	
	
	/*if(ww <=768){
		jQuery(".special-offer-style .detdac").readmore({
			collapsedHeight: 100,	
			moreLink: '<a href="#" class="more">more</a>',
			lessLink: '<a href="#" class="close-more">Close</a>'
		});
	}*/
}
/*====== Special Offer End ======*/

/*====== News Detail Start ======*/
function news_detail_fisrt(){
	if(jQuery("#news-detail-txt").length==0)return;
	first_desc()
}

function news_detail_scroll(){
	if(jQuery("#news-detail-txt").length==0)return;
	//first_desc()
	scroll_3box_default()
	footer_scalling_low_effect()
}
/*====== News Detail Start ======*/




/*====== Design Start ======*/
function design_scroll(){
	if(jQuery("#the-design-txt").length==0)return;
	first_desc()
	scroll_3box_default()
	footer_scalling_low_effect()
}

function design_first(){
	if(jQuery("#the-design-txt").length==0)return;
	load_show_content_mobile()
}
/*====== Design End ======*/
function load_show_content_mobile(){
	var scroll_top = $(window).scrollTop();
	var window_height = $(window).height();
	var ww  = jQuery(window).width();
	if(ww <=480){
		jQuery(".description_transition").each(function(index, element) {
			  var id = jQuery(this).attr('id');
			  var post_curr = jQuery('#'+id).offset();
			  var post_curr_show = post_curr.top + (jQuery('#'+id).height() * 0.3);
			  if((scroll_top+window_height)   > post_curr_show){
				  //console.log("oi masuk each description_transition");
				  setTimeout(remove_transition_desc, 600+(100*1), id,'.title');
				  setTimeout(remove_transition_desc, 600+(100*2), id,'.desc');
				  
			  }
		})
	}
}

/*====== Close At End Start ======*/
function close_at_hand_scroll(){
	if(jQuery(".slider-close-at-hand").length==0)return;
	first_desc()
	footer_scalling_low_effect()
}

function close_at_hand_first(){
	if(jQuery(".slider-close-at-hand").length==0)return;
	var scroll_top = $(window).scrollTop();
	var window_height = $(window).height();
	var ww  = jQuery(window).width();
	var n =1;
	if(ww<=768){
		setTimeout(function(){jQuery(".description_transition ").find(".title").removeClass('top_transition')},600+(100*1));
		setTimeout(function(){jQuery(".description_transition ").find(".desc").removeClass('top_transition')},600+(100*2));
	}
}
/*====== Close At End Start ======*/
/*====== Contact Start ======*/
function contact_scroll(){
	if(jQuery("#form-contact-us").length==0)return;
	first_desc()
	scalling_low_effect()
	footer_scalling_low_effect()
}
/*====== Contact End ======*/
/*====== Gallery Start ======*/
function gallery_event(){
	if(jQuery(".gallery-section").length==0) return;
	jQuery(".fancybox").fancybox();
	//alert('oii')
	jQuery('.sliders-popup .slide.item').on('click', function(){
		console.log('oiii');
		var curr = jQuery(this).find('.bg-slide').attr('data-rel');
		jQuery('.slider-fancybox a:eq('+curr+')').trigger('click');
	});
	
}
/*====== Gallery End ======*/



/*====== Accommodation Category Start ======*/
function accom_cat_scroll(){
	if(jQuery("#accom-cat").length==0)return;
	first_desc()
	scalling_low_effect()
	footer_scalling_low_effect()
}
function accom_cat_event(){
	if(jQuery("#accom-cat").length > 0 || jQuery("#special-offer-list").length > 0){
	
	} else return
	
	jQuery('.slide-accom-cat').on('init', function(event, slick, currentSlide, nextSlide){
		setTimeout(function(){
			jQuery(".slide-accom-cat .slick-slide.slick-current > .bg-slide").removeClass("scale-top")
		},1000);	
		var num = jQuery(this).find('.slide-item-cat').length;
		console.log(num);
		jQuery(this).parent().find('.pagging-slide').html('<span class="curr-slide">1</span>&nbsp;/&nbsp;<span class="max-slide">'+num+'</span>');
	});
	
	jQuery('.slide-accom-cat').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  speed: 500,
	  dots: true,
  	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  focusOnSelect:function(){
		 alert('oii');
	  }
	  
	});
	
	jQuery('.slide-accom-cat').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		//jQuery(this).parent().find('.pagging-slide .curr-slide').text(currentSlide + 1);
		
		setTimeout(function(){
			jQuery(".slide-accom-cat .slick-slide.slick-current").find('.bg-slide').removeClass("scale-top")
		},100);
		
		setTimeout(function(){
			jQuery('.slide-accom-cat .slide-item-cat').each(function(i,value){
				if(!jQuery(this).hasClass('slick-current')) jQuery(this).find('.bg-slide').addClass("scale-top");
			});
		},200);
	});
	
	jQuery('.slide-accom-cat').on('afterChange', function(event, slick, currentSlide, nextSlide){
		jQuery(this).parent().find('.pagging-slide .curr-slide').text(currentSlide + 1);
	})
	
	jQuery('.slide-accom-cat .slide-item-cat').on('click', function(){
		//var curr = jQuery(this).find('.slick-slide.slick-current .bg-slide').attr('data-rel');
		var curr = jQuery(this).find('.bg-slide').attr('data-rel');
		console.log(curr);
		jQuery(this).parent().parent().parent().parent().parent().parent().parent().find('.slide-accom-fancy a:eq('+curr+')').trigger('click');
	});
	
	
	jQuery(".fancybox").fancybox();
		
}

function bind_slide_accom(id){
	
}
/*====== Accommodation Category End ======*/

/*====== Location Start ======*/
function location_event(){
	if(jQuery("#the-location-txt").length==0)return;
	initMap();
}

function initMap() {
  var myLatLng = {lat: -8.6344521, lng: 115.1396737};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng,
	scrollwheel: false,
  });	

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
  
}

function location_scroll(){
	if(jQuery("#the-location-txt").length==0)return;
	first_desc()
	scalling_low_effect()
	footer_scalling_low_effect()
}

function location_first(){
	var ww  = jQuery(window).width();
	if(ww<=768){
		jQuery(".first-desciption").find(".title").removeClass('top_transition')
		jQuery(".first-desciption").find(".desc").removeClass('top_transition')	
	}
}

/*====== Location End ======*/

/*====== Home Start ======*/
function set_mobile_event(){
	var ww = jQuery(window).width();
	console.log(ww);
	if(ww<=768){
		setTimeout(function(){jQuery("#welcome").find(".title").removeClass('top_transition')},600+(100*1));
		setTimeout(function(){jQuery("#welcome").find(".desc").removeClass('top_transition')},600+(100*2));		
	}
	
}

function slider(){
	if(jQuery('#sliders').length==0)return;
	jQuery('#sliders').on('init', function(event, slick, currentSlide, nextSlide){
		
		/*jQuery("#sliders .slick-slide").find('.brief-slide .title p:first-child').addClass("fade-effect");
		jQuery("#sliders .slick-slide").find('.brief-slide .title p:nth-child(2)').addClass("fade-effect");
		jQuery("#sliders .slick-slide").find('.brief-slide .bw40').addClass("fade-effect");
		jQuery("#sliders .slick-slide").find('.brief-slide .sub-title').addClass("fade-effect");*/
		
		jQuery(".sliders .slick-slide.slick-active").next().addClass('next-slide');
		if(jQuery("section.section-60").length>0){
			setTimeout(function(){
				
				jQuery("#sliders .slick-slide.slick-current").find('.bg-slide').removeClass("scale-top")
			},80);	
			//setTimeout(function(){jQuery("#sliders").removeClass("sliders-blank");},1000);
		}else{
			setTimeout(function(){
				jQuery("#sliders .slick-slide.slick-current").find('.bg-slide').removeClass("scale-top");
				jQuery("#sliders").removeClass("sliders-blank");
				jQuery('.slick-slide:first-child  .slide-gray').animate({opacity:1},500);				
			},800);	
		}
		
		setTimeout(function(){
			jQuery("#sliders .slick-slide.slick-active").find('.slide-gray').removeClass("fade-effect")
			jQuery("#sliders .slick-slide.slick-current").find('.title-slide').removeClass("fade-effect")
		},1100);
		
		var st = 2000;
		
		setTimeout(function(){
			jQuery("#sliders .slick-slide.slick-current").find('.brief-slide .title p:first-child').removeClass("fade-effect");
		},st);
		setTimeout(function(){
			//setTimeout(function(){jQuery("section.section-slider").removeClass("loader"),80}); 
			jQuery("#sliders .slick-slide.slick-current").find('.brief-slide .title p:nth-child(2)').removeClass("fade-effect");
			setTimeout(function(){jQuery(".hidden-before-load").removeClass("hidden-before-load"),400}); 
			
			setTimeout(function(){jQuery("body").removeClass("body-no-scroll"),400}); 
			if(jQuery(".navigation.sub-navigation").length!=0){
				setTimeout(function(){jQuery(".full-navigation > .bottom").addClass("show-bottom"),400}); 
			}	
		}, st + (1*200));
		
		if(jQuery("#sliders .slick-slide.slick-current").find('.brief-slide .title p:nth-child(3)').length>0){
			setTimeout(function(){
				jQuery("#sliders .slick-slide.slick-current").find('.brief-slide .title p:nth-child(3)').removeClass("fade-effect");
			},st+(1.5*200))
		}
		
		setTimeout(function(){
			jQuery("#sliders .slick-slide.slick-current").find('.brief-slide .bw40').removeClass("fade-effect");
		},st + (2.5*200));
		
		setTimeout(function(){
			jQuery("#sliders .slick-slide.slick-current").find('.brief-slide .sub-title').removeClass("fade-effect");
		},st + (4.5*200));
		
	});
	
	jQuery('#sliders').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav',
	  init: scale_effect,
	  dots: true,
  	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  speed: 1000,
	  cssEase: 'linear'
	});
	
	/*jQuery('#sliders').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  autoplaySpeed: 600,
	  fade: true,
	  cssEase: 'linear'
	});*/
	
	
	
	if(jQuery(".prev-next-slider").length>0){
		jQuery('.next-slider').click(function(){
			jQuery("#sliders").slick('slickNext');
		});	
		jQuery('.prev-slider').click(function(){
			jQuery("#sliders").slick('slickPrev');
		});	
	}
	
	
	jQuery('#sliders').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var n_start = 0;
		
		if(jQuery("section.section-60").length>0){
			n_start = 0;
			/*setTimeout(function(){
				jQuery("#sliders .slick-slide.slick-current").find('.bg-slide').removeClass("scale-top")
			},10);
			*/
			setTimeout(function(){
				jQuery("#sliders .slick-slide.slick-current").find('.slide-gray').removeClass("fade-effect")
				//jQuery("#sliders .slick-slide.slick-current").find('.title-slide').removeClass("fade-effect")
			}, 100);
		}else{
			n_start = 10;
			setTimeout(function(){
				jQuery("#sliders .slick-slide.slick-current").find('.slide-gray').removeClass("fade-effect");
				//jQuery("#sliders .slick-slide.slick-current").find('.bg-slide').removeClass("scale-top");
			},n_start);
			
			setTimeout(function(){
				jQuery("#sliders .slick-slide.slick-current").find('.title-slide').removeClass("fade-effect")
			}, n_start + 500);
		}	
		
		var st = 1000;
		
		setTimeout(function(){
			jQuery("#sliders .slick-slide.slick-current").find('.brief-slide .title p:first-child').removeClass("fade-effect");
		},st);
		setTimeout(function(){
			jQuery("#sliders .slick-slide.slick-current").find('.brief-slide .title p:nth-child(2)').removeClass("fade-effect");
		}, st + (1*200));
		
		if(jQuery("#sliders .slick-slide.slick-current").find('.brief-slide .title p:nth-child(3)').length>0){
			setTimeout(function(){
				jQuery("#sliders .slick-slide.slick-current").find('.brief-slide .title p:nth-child(3)').removeClass("fade-effect");
			},st+(1.5*200))
		}
		
		setTimeout(function(){
			jQuery("#sliders .slick-slide.slick-current").find('.brief-slide .bw40').removeClass("fade-effect");
		},st + (2.5*200));
		setTimeout(function(){
			jQuery("#sliders .slick-slide.slick-current").find('.brief-slide .sub-title').removeClass("fade-effect");
		},st + (4.5*200));
		
	});
	jQuery('#sliders').on('afterChange', function(event, slick, currentSlide, nextSlide){
		jQuery(".sliders .slick-slide.slick-active").removeClass('next-slide');
		jQuery(".sliders .slick-slide.slick-active").next().addClass('next-slide');
		
		jQuery(".current-slide").text(currentSlide + 1);
		jQuery("#sliders .slick-slide").each(function(){
			if(!jQuery(this).hasClass('slick-current')){
				/*jQuery(this).find('.bg-slide').addClass("scale-top");
				jQuery(this).find('.slide-gray').addClass("fade-effect");*/
				jQuery(this).find('.brief-slide .title p:first-child').addClass("fade-effect");
				jQuery(this).find('.brief-slide .title p:nth-child(2)').addClass("fade-effect");
				jQuery(this).find('.brief-slide .title p:nth-child(3)').addClass("fade-effect");
				jQuery(this).find('.brief-slide .bw40').addClass("fade-effect");
				jQuery(this).find('.brief-slide .sub-title').addClass("fade-effect");	
			}
		});
	});
}
function scale_effect(){
	jQuery(".slick-slide.slick-current").find('.bg-slide').removeClass("scale-top");
}

function afterAction(){
	var current = this.owl.currentItem+1;
	jQuery(".current-slide").text(current);
}

function afterInit(){
	jQuery(".max-slide").text(this.owl.owlItems.length);
}

function nav_buttom(){
	jQuery(".nav-bottom").click(function(){
		if(jQuery(".welcome").length>0){
			var welcome = jQuery(".welcome").offset();
			jQuery('html,body').animate({scrollTop: welcome.top}, 1000);			
		}else{
			var curr = jQuery(".first-desciption-default").offset() ;
			var goto = curr.top ;//- (jQuery(".first-desciption-default").height()*0.3)
			jQuery('html,body').animate({scrollTop: goto}, 1000);
		}

	});	
}

function home_scroll(){
	if(jQuery("#our_value").length==0) return;
	var scroll_top = $(window).scrollTop();
	var window_height = $(window).height();
	
	var ww  = jQuery(window).width();
	
	
	
	if(ww>480){//alert('masuk sini');
		var welcome = jQuery("#welcome").position().top ;//+ (jQuery("#welcome").height() * 0.8);
		if(scroll_top > 100){//welcome - window_height){
			//console.log('trigger bro');
			setTimeout(function(){jQuery("#welcome").find(".title").removeClass('top_transition')},600+(100*1));
			setTimeout(function(){jQuery("#welcome").find(".desc").removeClass('top_transition')},600+(100*2));
		} else {}
		
		var ov_pos = jQuery("#our_value").offset();
		var our_value =  ov_pos.top + (jQuery("#our_value").height() * 0.8);
		if(scroll_top > our_value - window_height) jQuery("#our_value").removeClass("scaling_low");
		
		/*var our_value =  jQuery("#our_value").position().top + (jQuery("#our_value").height() * 0.8);
		if(scroll_top > our_value - window_height) jQuery("#our_value").removeClass("scaling_low");*/
		
		var ovtb_pos = jQuery("#our_value_three_box").offset();		
		var our_value_three_box = ovtb_pos.top + (jQuery("#our_value_three_box").height() * 0.8);
		if(scroll_top > our_value_three_box - window_height) jQuery("#our_value_three_box").find(".thbox").removeClass("scaling_low");
		
		
		var llo_post = jQuery("#list_latest_offers").offset();
		var list_latest_offers = llo_post.top +  (jQuery("#list_latest_offers").height() *0.8);
		if(scroll_top > list_latest_offers - window_height){
			jQuery("#list_latest_offers").find(".latest-offer").removeClass("scaling_low");
					
		} 
		
	}else{
		//alert('masuks ini');
		
		var ov_pos = jQuery("#our_value").offset();
		var our_value =  ov_pos.top + (jQuery("#our_value").height() * 0.8);
		if(scroll_top > our_value - window_height) jQuery("#our_value").removeClass("scaling_low");
		
		var ovtb_1_pos = jQuery("#our_value_three_box .thbox:first-child").offset();		
		var ovtb_1 = ovtb_1_pos.top + (jQuery("#our_value_three_box .thbox:first-child").height() * 0.8);
		if(scroll_top > ovtb_1 - window_height) jQuery("#our_value_three_box .thbox:first-child").removeClass("scaling_low");
		
		var ovtb_2_pos = jQuery("#our_value_three_box .thbox:nth-child(2)").offset();
		var ovtb_2 = ovtb_2_pos.top + (jQuery("#our_value_three_box .thbox:nth-child(2)").height() * 0.8);
		if(scroll_top > ovtb_2 - window_height) jQuery("#our_value_three_box .thbox:nth-child(2)").removeClass("scaling_low");
		
		var ovtb_3_pos = jQuery("#our_value_three_box .thbox:nth-child(3)").offset();
		var ovtb_3 = ovtb_3_pos.top + (jQuery("#our_value_three_box .thbox:nth-child(3)").height() * 0.8);
		if(scroll_top > ovtb_3 - window_height) jQuery("#our_value_three_box .thbox:nth-child(3)").removeClass("scaling_low");
		
		var llo_1_pos = jQuery("#list_latest_offers .latest-offer:first-child").offset();
		var llo_1 = llo_1_pos.top +  (jQuery("#list_latest_offers .latest-offer:first-child").height() *0.8);
		if(scroll_top > llo_1 - window_height){
			jQuery("#list_latest_offers .latest-offer:first-child").removeClass("scaling_low");		
		} 
		
		var llo_2_pos = jQuery("#list_latest_offers .latest-offer:nth-child(2)").offset();
		var llo_2 = llo_2_pos.top +  (jQuery("#list_latest_offers .latest-offer:nth-child(2)").height() *0.8);
		if(scroll_top > llo_2 - window_height){
			jQuery("#list_latest_offers .latest-offer:nth-child(2)").removeClass("scaling_low");		
		} 
		
	}
	
	//footer_scalling_low_effect();
	var for_footer_pos = jQuery("#list_latest_offers").offset();
	var for_footer = for_footer_pos.top + jQuery("#list_latest_offers").height()+300;
	if(scroll_top > for_footer - window_height){
		jQuery("#footer").removeClass("scaling_low");
	}	
}
/*====== Home End ======*/


/*====== Default Start ======*/
function scroll_3box_default(){//alert('masuk sini');
	var scroll_top = $(window).scrollTop();
	var window_height = $(window).height();
	var ww  = jQuery(window).width();
	if(ww>480){
		var our_value_three_box = jQuery(".three-box-scale").position().top + (jQuery(".three-box-scale").height() * 0.8);
		if(scroll_top > our_value_three_box - window_height) jQuery(".three-box-scale").find(".thbox").removeClass("scaling_low");
	}else{
		var ovtb_1 = jQuery(".three-box-scale .thbox:first-child").position().top + (jQuery(".three-box-scale.thbox:first-child").height() * 0.8);
		if(scroll_top > ovtb_1 - window_height) jQuery(".three-box-scale .thbox:first-child").removeClass("scaling_low");
		
		var ovtb_2 = jQuery(".three-box-scale .thbox:nth-child(2)").position().top + (jQuery(".three-box-scale .thbox:nth-child(2)").height() * 0.8);
		if(scroll_top > ovtb_2 - window_height) jQuery(".three-box-scale .thbox:nth-child(2)").removeClass("scaling_low");
		
		var ovtb_3 = jQuery(".three-box-scale .thbox:nth-child(3)").position().top + (jQuery(".three-box-scale .thbox:nth-child(3)").height() * 0.8);
		if(scroll_top > ovtb_3 - window_height) jQuery(".three-box-scale .thbox:nth-child(3)").removeClass("scaling_low");
	}
}

function initMap_contact(){
  var myLatLng = {lat: -8.656706, lng: 115.131428};
  var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 17,
	center: myLatLng,
	scrollwheel: false,
  });	

  var marker = new google.maps.Marker({
	position: myLatLng,
	map: map,
	title: 'Hello World!'
  });
}

function set_header_position(){
	var ww = jQuery(window).width();
	if(ww>1024){
		var body_top = jQuery(window).scrollTop();
		if(body_top==0){
			jQuery(".navigation").removeClass("fixed");
		}else{
			jQuery(".navigation").addClass("fixed");
		}
		//console.log(body_top);
	}
}

function first_desc(){
	
	var scroll_top = $(window).scrollTop();
	var window_height = $(window).height();
	var ww  = jQuery(window).width();
	var n =1;
	jQuery(".description_transition").each(function(index, element) {
        var post_curr = jQuery(this).offset();
		if(scroll_top > 100 && jQuery(this).hasClass('first-desciption')){
			//console.log("oi masuk first");
			setTimeout(function(){jQuery(".first-desciption").find(".title").removeClass('top_transition')},600+(100*1));
			setTimeout(function(){jQuery(".first-desciption").find(".desc").removeClass('top_transition')},600+(100*2));
		}else if(jQuery(this).hasClass('show-on-load')){//alert('masuksini');
			setTimeout(function(){jQuery(".first-desciption").find(".title").removeClass('top_transition')},600+(100*1));
			setTimeout(function(){jQuery(".first-desciption").find(".desc").removeClass('top_transition')},600+(100*2));
		}else if(ww <=768){
			//console.log('oiii');
			var id = jQuery(this).attr('id');
			var post_curr = jQuery('#'+id).offset();
			var post_curr_show = post_curr.top + (jQuery('#'+id).height() * 0.3);
			if((scroll_top+window_height)   > post_curr_show){
				//console.log("oi masuk each description_transition");
				setTimeout(remove_transition_desc, 600+(100*1), id,'.title');
				setTimeout(remove_transition_desc, 600+(100*2), id,'.desc');
				n++;	
			}
		}else{
			var id = jQuery(this).attr('id');
			var post_curr = jQuery('#'+id).offset();
			var post_curr_show = post_curr.top + (jQuery('#'+id).height() * 0.3);//console.log(id);
			if((scroll_top+window_height)   > post_curr_show){
				
				//console.log("oi masuk each description_transition");
				setTimeout(remove_transition_desc, 600+(100*1), id,'.title');
				setTimeout(remove_transition_desc, 600+(100*2), id,'.desc');
				n++;	
			}
		}
    });
}

function remove_transition_desc(id,ele){
	jQuery("#"+id).find(ele).removeClass('top_transition')
}

function scalling_low_effect(){
	var scroll_top = $(window).scrollTop();
	var window_height = $(window).height();
	var ww  = jQuery(window).width();
	var n=1;	
	jQuery('.scale_effect_scroll').each(function(){
		var id = jQuery(this).attr('id');
		var post_curr = jQuery('#'+id).offset();
		var scale_effect_scroll_top = post_curr.top + (jQuery('#'+id).height() * 0.2);
		if((scroll_top+window_height)   > (scale_effect_scroll_top)){
			setTimeout(remove_scall_low, 600+(100*n), id);
		} 
		n++;
	})	
}

function remove_scall_low(id){
	jQuery("#"+id+' .scaling_low').removeClass("scaling_low");
}


function footer_scalling_low_effect(){
	var scroll_top = $(window).scrollTop();
	var window_height = $(window).height();
	var ww  = jQuery(window).width();
	
	var id = jQuery('.footer_scalling_low_effect').attr('id');
	var post_curr = jQuery('#'+id).offset();
	var post_curr_show = post_curr.top + (jQuery('#'+id).height() * 0.2);
	if((scroll_top+window_height)   > post_curr_show){	
		jQuery("#footer").removeClass("scaling_low");
	}
}

/*====== Default End ======*/

/*====== Navigation Start ======*/
function set_navigation_pos(){
	return;
	var ww = jQuery(window).width();
	if(ww>1024){
		var body_top = jQuery(window).scrollTop();
		if(jQuery(".navigation").hasClass('scrolled') && !jQuery(".navigation").hasClass('step-3') && body_top==0){
		  jQuery(".nav").click();	
		  jQuery(".navigation").removeClass('scrolled');
		}else if(!jQuery(".navigation").hasClass('scrolled') && body_top>=0){
		  jQuery(".navigation").addClass('scrolled');
		  jQuery(".nav").click();
		}
		
	}
}

function nav_top(){
	jQuery(".nav").click(function(){
		if(jQuery(this).hasClass('opening') || jQuery(this).hasClass('closing')) return;
		var ww = jQuery(window).width();
		if(ww>1024){
			if(jQuery(".navigation").hasClass("step-3")){
				jQuery(".navigation").addClass('open opening');
				if(jQuery(".navigation.sub-navigation").length>0){
					jQuery(".navigation").removeClass("step-3");
					jQuery(".navigation").removeClass("step-2");
				}else{
					jQuery(".navigation").removeClass("step-3");
					setTimeout(function(){jQuery(".navigation").removeClass("step-2");},100);	
				}
				
				setTimeout(function(){
					if(jQuery('.gallery-section').length >0) jQuery('.gallery-section').addClass('show-navigation');
					
					fade_menu_top('fadeIn');
					fade_form_booking('fadeIn');
					jQuery(".section-slider .logo").animate({opacity:0},600);
					jQuery(".side-menu-slider").animate({opacity:0},600);
					
				},400);
				
				setTimeout(function(){jQuery(".navigation").removeClass("opening");},1200);
			}else{
				fade_menu_top('fadeOut');
				fade_form_booking('fadeOut')
				jQuery(".navigation").addClass('closing');
				setTimeout(function(){jQuery(".navigation").addClass("step-2");},400);
				setTimeout(function(){
					if(jQuery('.gallery-section').length >0) jQuery('.gallery-section').removeClass('show-navigation');
					
					if(jQuery(".navigation").hasClass('sub-navigation')){
						var wn =195;
						if(ww<=1440) wn=175;	
						/*jQuery(".navigation .full-navigation > .bottom").animate({width:wn},300,function(){
							jQuery(".navigation").addClass("step-3")
						});*/
						
						jQuery(".navigation .full-navigation > .bottom").animate(
									{width:wn}, {
									easing: '',
									duration:400,
									complete: function() { 
										jQuery(".navigation").addClass("step-3");
										jQuery(".navigation .full-navigation > .bottom").removeAttr('style');
										/*setTimeout(function(){
											jQuery(".navigation").addClass("step-3");
											jQuery(".navigation .full-navigation > .bottom").removeAttr('style');
										},400);	*/
									}
								});
						
					}else{
						jQuery(".navigation").addClass("step-3")	
					}
					
					
					jQuery(".navigation").removeClass('open');
					jQuery(".section-slider .logo").animate({opacity:1},600);
					jQuery(".side-menu-slider").animate({opacity:1},600);
				;},1400);
				setTimeout(function(){jQuery(".navigation").removeClass("closing");},2000);	
			}
		}else{
				jQuery(".overlay-mpu").fadeIn(80,function(){
					jQuery(".menu-pop-up").toggleClass("show");	
					jQuery(".navigation").fadeOut(80);
					jQuery(".form-top-mobile").animate({opacity:0,'z-index':3},300,function(){
						jQuery(".menu-top-mobile").animate({opacity:1,'z-index':4},300);
					});
				});
			
		}
		
		
	});
	
	jQuery(".book-now").click(function(){
		var ww = jQuery(window).width();
		if(ww>1024){
			jQuery(".nav").click();
		}else{
			jQuery(".overlay-mpu").fadeIn(80,function(){
				/*jQuery(".navigation").fadeOut(80);
				jQuery(".menu-pop-up").toggleClass("show");	*/	
				jQuery(".navigation").fadeOut(80);
				jQuery(".menu-pop-up").toggleClass("show");	
				jQuery(".menu-top-mobile").animate({opacity:0,'z-index':3},300,function(){
					jQuery(".form-top-mobile").animate({opacity:1,'z-index':4},300);
				});
				//jQuery(".book-now-mtm").click();
			});
			
		}
	});
	
	
	jQuery(".input-calender").datepicker({ dateFormat : 'mm/dd/yy'});
	jQuery( "[name=check-in]" ).datepicker( "option", "minDate", 0 );
	jQuery( "[name=check-out]" ).datepicker( "option", "minDate", 1 );
	
	jQuery( "[name=check-in]" ).change(function(){
		var d1 = new Date(jQuery(this).val());
			d1.setDate(d1.getDate()+1);
		setTimeout(function(){jQuery("[name=check-out]" ).datepicker( "option", "minDate", d1 );},400);	
		//jQuery("[name=check-out]" ).datepicker( "option", "minDate", d1 );
		//jQuery( "[name=check-out]" ).datepicker( "option", "minDate", d1 );
	});	
	
	jQuery(".menu-pop-up .close img").click(function(){
		jQuery(".menu-pop-up").toggleClass("show");
		jQuery(".overlay-mpu").fadeOut(80);
		jQuery(".navigation").fadeIn(80);
	});
	
	jQuery(".book-now-mtm").click(function(){
		jQuery(".menu-top-mobile").animate({opacity:0,'z-index':3},300,function(){
			jQuery(".form-top-mobile").animate({opacity:1,'z-index':4},300);
		});
	});
	
	jQuery(".form-top-mobile .close a").click(function(){
		jQuery(".form-top-mobile").animate({opacity:0,'z-index':3},300,function(){
			jQuery(".menu-top-mobile").animate({opacity:1,'z-index':4},300);
		});
	});
	
	jQuery(".sub-menu-mobile").click(function(){
		jQuery('.sub-link-list-mtm:visible').slideUp(300);
		if(jQuery(this).parent().find('.sub-link-list-mtm').is(':visible')) jQuery(this).parent().find('.sub-link-list-mtm').slideUp(300);
		else jQuery(this).parent().find('.sub-link-list-mtm').slideDown(300);
	})
	
}


function fade_menu_top(events){
	if(events=='fadeIn'){
		jQuery('.links .link').each(function(i){
			jQuery(this).animate({opacity:1,top:0},650+(50*i));
		});		
	}else if(events=='fadeOut'){
		jQuery('.links .link').each(function(i){
			jQuery(this).animate({opacity:0,top:10},200+(50*i));
		});		
	}
}

function fade_form_booking(events){
	if(events=='fadeIn'){
		jQuery('.form-availability .fa-input').each(function(i){
			jQuery(this).animate({opacity:1,top:0},650+(50*i));
		});		
	}else if(events=='fadeOut'){
		jQuery('.form-availability .fa-input').each(function(i){
			jQuery(this).animate({opacity:0,top:10},200+(50*i));
		});		
	}
}

/*====== Navigation End ======*/


