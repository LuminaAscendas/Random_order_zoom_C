var begin_entered=false;
var zoomed_image=false;
$(document).ready(function(){
	if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
	}
	$('#text_container').html(direction_text);
	$('#heading_text').html(data[0].previewtext);
	
	$('#begin_btn').off('click').on('click',function(){
			begin_entered=true
			$('#begin_page').hide();
			setTimeout(function(){
				$('#text_container,#heading_text,#responsive_container,#restart').fadeIn(500);resizeApp();
				$('.hotspot').attr('aria-hidden','false');
			},1000);
			
			resizeApp();
			set_tab();
			if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
				$('#whole_container').removeAttr('role');
			}else{
				$('#whole_container').attr('role','application');
			}
			$('#linkId').attr('href','#restart');
	})
	$('.hotspot').off('click').on('click',function(e){
			var curr_id=e.target.id.split('_')[1];
			//$('#toggle_'+curr_id).hide();
			$('.hotspot_dummy').hide();
			$('.label_class').hide();
			
			
			//$('.dummy_popup').attr('aria-hidden','false')
			$('#heading_text').css('visibility','hidden');	
			$('#text_container').css('visibility','hidden');
			var idSelected = Number($(e.target).attr('id').split('toggle_')[1]);
			/* $('#heading_text').fadeOut(function() {
					$(this).html(data[0].description[idSelected-1]).fadeIn(500);
					$('#heading_text').attr('aria-label',$('#heading_text').text());
			}); */
			$('.popupText').html(data[0].description[idSelected-1]);//s.fadeIn(500);
			$('#heading').html(data[0].heading[idSelected-1]);//.fadeIn(1000);
			
			switch(idSelected)
			{
				case 1: 
				{
					animation(45, 88, '160%', '160%', 'imgDiv');
					$(".popupContainer").css({"width":"150px","left":"46px","top":"119px"});
					break;
				}
				case 2: 
				{
					animation(60, -205, '150%', '150%', 'imgDiv');
					$(".popupContainer").css({"width":"225px","left":"175px","top":"40px"});
					break;
				}
				case 3: 
				{
					animation(39, -407, '140%', '140%', 'imgDiv');
					$(".popupContainer").css({"width":"185px","left":"385px","top":"60px"});
					break;
				}
				case 4: 
				{
					animation(-155, -409, '150%', '150%', 'imgDiv');
					 $(".popupContainer").css({"width":"135px","left":"465px","top":"140px"});
					break;
				}
				 case 5: 
				{
					animation(-297, -249, '145%', '145%', 'imgDiv');
					$(".popupContainer").css({"width":"275px","left":"260px","top":"240px"});
					break;
				}
				 case 6: 
				{
					animation(-365, -6, '150%', '150%', 'imgDiv');
					$(".popupContainer").css({"width":"185px","left":"265px","top":"15px"});
					break;
				}
				 case 7: 
				{
				   animation(-150, 154, '150%', '150%', 'imgDiv');
				   $(".popupContainer").css({"width":"195px","left":"90px","top":"250px"});
					break;
				}
		
			}
	zoomed_image=true;
			
														////ended
			$('#label_'+curr_id).show();
			if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
				setTimeout(function(){
					$('.label_class').attr('tabindex','0').focus().css('outline','0px solid');
				},10);
			}
			//setTimeout(function(){
				$('.hotspot').fadeOut();
				$('.reset-btn').fadeIn();
				$('#heading').fadeIn();
				//$('.hotspot').removeAttr('aria-label')
			//},100);
			//setTimeout(function(){
				if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
					$('#heading').focus();
				}else {$('#focus_guard_1').focus();}
			//},120);
			setTimeout(function(){
			   $(".popupContainer").fadeIn();
				
			},200) 
			
	});
	function animation(argTop, argLeft, argWidth, argHeight, obj)
	{
		$('.'+obj).animate({
			   top: argTop,
			   left: argLeft,
			   height: argHeight,
			   width: argWidth
		}, 1000,function(){
			//$('#focus_guard_1').focus();
			//$('.reset-btn').fadeIn();
			//set_tabindex();
		});
		
	}
/* $(document).keyup(function(){
	console.log(document.activeElement);
  //$("input").css("background-color", "pink");
  
}); */	

$('.reset-btn,#close-id').off('click').on('click',function(e){

	if(e.type=="keyup" && e.keyCode !=13){
			return  true;
	}
	zoomCounter = 0;

	$('#heading_text').html(data[0].previewtext);
			
	animation(0, 0, 665, 430, 'imgDiv')


	zoomed_image=false;
	setTimeout(function(){
		$('.hotspot').fadeIn(1000);
	 },200)
	 setTimeout(function(){
		$('#text_container').css('visibility','visible');
		$('#heading_text').attr('aria-label',$('#heading_text').text()).css('visibility','visible');
	 },200);
	 setTimeout(function(){
		if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
			
		}else {$('#toggle_1').focus();}
	 },230);
		 
	  $('.reset-btn').fadeOut();
	  $('.reset-btn').removeClass('tab_index').removeAttr('tabindex');
	  //$('.hotspot').attr('aria-hidden','true');
	  $(".popupContainer").fadeOut();
	  $('#heading').fadeOut();
})
	$('#restart').off('click').on('click',function(e){
		begin_entered=false;
		$('#begin_page').fadeIn();
		$('#text_container,#heading_text,#responsive_container,#restart').hide()
		$('.imgDiv').css({"left":"0px","top":"0px","width":"665px","height":"430px"});
		zoomed_image=false;
		$('.hotspot').show();
		$('.hotspot').attr('aria-hidden','true');
		$(".popupContainer").hide();
		$(".reset-btn").hide();
		$('#text_container').css('visibility','visible');
		$('#heading_text').html(data[0].previewtext).css('visibility','visible');
		$('#heading').hide();
		resizeApp();
		set_tab();
		//setTimeout(function(){
			$('#begin_focus').focus();
		//},200);
		$('#linkId').attr('href','#begin_btn');
	})
	resizeApp();
	set_tab();
	
	
	
	
	
	$('.label_content').on('focus',function(){
		$('#text_container').removeAttr('role');
			$('.label_class').removeAttr('tabindex')//.focus();
	})
	$('.hotspot').on('focus',function(){
		if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
			setTimeout(function(){
				$('.hotspot').attr('aria-hidden','false')
			},10);
		}
		
	})
	$('#begin_focus').on('focus',function(){
		$('.tab_index').eq(1).focus();	
	})
	$('#begin_end_focus').on('focus',function(){
		$('.tab_index').eq(1).focus();
	})
	$('.dummy_popup').on('focus',function(){
		$('.label_heading').focus();
		setTimeout(function(){
			$('.dummy_popup').attr('aria-hidden','true')
		},10)
	});
	
	/* $('#hotspot_focus_guard_1').on('focus',function(){
		setTimeout(function(){
			$('#toggle_1').focus();
			$('.hotspot_dummy').attr('aria-hidden','true')
		},10)
	})
	
	$('#hotspot_focus_guard_2').on('focus',function(){
		setTimeout(function(){
			$('#toggle_2').focus();
			$('.hotspot_dummy').attr('aria-hidden','true')
		},10)
	})
	
	$('#hotspot_dummy_3').on('focus',function(){
		setTimeout(function(){
			$('#toggle_3').focus();
			$('.hotspot_dummy').attr('aria-hidden','true')
		},10)
	})

	$('#hotspot_dummy_4').on('focus',function(){
		setTimeout(function(){
			$('#toggle_4').focus().attr('role','button')
			$('#toggle_4').focus().attr('aria-label','Hotspot')
			$('.hotspot_dummy,.dummy_popup').attr('aria-hidden','true')
		},5)
	}) */
	/* $('#hotspot_dummy_3').on('focus',function(){
		setTimeout(function(){
			$('#toggle_3').focus().attr('role','button')
			$('#toggle_3').focus().attr('aria-label','Hotspot')
			$('.hotspot_dummy,.dummy_popup').attr('aria-hidden','true')
		},5)
	}) */
	
	 $('#heading_text').on('focus',function(){
		setTimeout(function(){
			$('.hotspot').attr('aria-hidden','false')
		},100)
	}) 
	$("#begin_container,#image_container").mouseenter(function(){
		if(!begin_entered) $("#begin_container").attr("title","Challenges in conservation management");
  		else $("#image_container").attr("title","Challenges in conservation management");
	});
	
	$("#begin_container,#image_container").mouseleave(function() {
  		$("#begin_container,#image_container").removeAttr('title');
	});
	
	
	$('#focus_guard_1').on('focus',function(){
		setTimeout(function(){
			if(zoomed_image){
				$('.tab_index').eq(3).focus();
				$('.reset-btn').addClass('tab_index').attr('tabindex','0');
			}
			else{ $('.tab_index').eq(1).focus();}
		},200)
			$('#whole_container').removeAttr('role');
	})
	$('#focus_guard_2').on('focus',function(){
		$('.tab_index').eq(0).focus();
	})
	
	$('#text_container').attr('aria-label',$('#text_container').text());
	$('#heading_text').attr('aria-label',$('#heading_text').text())
	
document.body.onkeyup = function(e){
		if(e.keyCode == 32 || e.keyCode == 13){
			e.preventDefault(e);
			if(e.target.id!='label_head_1'||e.target.id!='label_head_2'||e.target.id!='label_head_3'){
				$('#'+e.target.id).trigger('click');
				$('#'+e.target.id).focus();
			}
			
		}
		
	}

});
$(window).resize(function(){
  resizeApp();
});
$(document).keyup(function(){
	//console.log(document.activeElement); 
});
function set_tab(){
	if(begin_entered==false){
		$('.tab_index').removeClass('tab_index').removeAttr('tabindex');
		$('#begin_container').addClass('tab_index');
		$('#begin_btn').addClass('tab_index');
		$('#begin_focus,#begin_end_focus').addClass('tab_index');
	}else{
		$('.tab_index').removeClass('tab_index').removeAttr('tabindex');
		$('#text_container').addClass('tab_index');
		$('#heading_text').addClass('tab_index');
		$('#heading').addClass('tab_index');
		$('.popupText').addClass('tab_index');
		$('.close-btn').addClass('tab_index');
		$('.hotspot').addClass('tab_index');
		$('.label_heading').addClass('tab_index');
		$('.label_content').addClass('tab_index');
		$('#restart').addClass('tab_index');
		//$('.reset-btn').addClass('tab_index');
		$('#focus_guard_1,#focus_guard_2,.dummy_popup,.hotspot_dummy').addClass('tab_index');
	}
	$('.tab_index').each(function(){
    		$('.tab_index').attr('tabindex','0')//.focus().blur();
  });
}

