$.fn.delay = function( time, name ) {

    return this.queue( ( name || "fx" ), function() {
        var self = this;
        setTimeout(function() {$.dequeue(self);} , time );
    } );

};


var flyingPresi = {
  trigger : function() {
    
  $('body').addClass('flying-presi-active');
  $('.project-container .project-slide:first-child').addClass('active');
  
  },

  cancel : function() {
    
    $('body').removeClass('flying-presi-active');
    if ('pushState' in history)
        history.pushState('', document.title, window.location.pathname);
    else
        window.location.hash = '';
  },

  next : function() {
  
  }

}


Drupal.behaviors.flying_presi = function(context) {
  
  (location.hash == '#presentation') ? flyingPresi.trigger() : '';
  
  $('.flying-presi-trigger').bind('click', function() {
    flyingPresi.trigger();
    return false;
  });
  
  $(document).bind('keypress', function(e) {
    if( e.keyCode == 8218 ) {
      flyingPresi.trigger();
    }
  });
    
  $(document).bind('keyup', function(e) {
    if( $('body.flying-presi-active').length && e.keyCode == '27' ) {
      flyingPresi.cancel();
    }
  });
  

//  var counter = 0;
//  var subcounter = 0;
//  var clickable = true;
//  var speed       = 1400
//  var sub1Top     = 350;
//  var sub2Top     = 250;
//  var delayTime   = 250;
//
//	  	$('#container-'+counter).css({opacity:1});
//		$('.container .sub0').show();
//		$('.container .sub1').show();
//		$('.container .sub2').show();
//		$('.container .subie').hide();
//
//  $('.back').css({opacity:0});
//
//  $('#menu li').mouseover(function(){
//  	$(this).stop().animate({color:'#000000'},70);
//  });
//  $('#menu li').mouseout(function()
//  {
//  	if ($(this).attr('class') != 'active')
//	{
//      $(this).stop().animate({color:'#999999'},450);
//	}
//  });
// 
//  $('#menu li').click(go);
//  $('.continue').click(go);
//  $('#back').click(go);
// 
//  function go(){
//    
//    if (clickable == true)
//    {
//      $('#menu li').removeClass('active').stop().animate({color:'#999999'},450);
//      if($(this).attr('id') == 'continue')
//      {
//        var object = $('#menu li#menu-'+(parseInt(counter)+1));
//      }
//      else if($(this).attr('id') == 'back')
//      {
//        var object = $('#menu li#menu-'+(parseInt(counter)-1));
//        //var object = $('#menu li#menu-0');
//      }
//      else
//      {
//        var object = $(this);
//      }
//
//      object.addClass('active').stop().animate({color:'#000000'},70);
//      var menuobject = object.attr('id');
//
//      var count = menuobject.split('-')[1];
//      
//      if(count == $('#menu li').length - 1)
//      {
//        $('#back').css({opacity:1});
//        //$('#back').css({opacity:0});
//        ///$('#back').css({bottom:'80px'});
//        //$('#back').animate({opacity:1},1000,'easeOutQuint', function(){$(this).show();});
//
//        $('#continue').css({opacity:0});
//        //$('#continue').css({opacity:0});
//        //$('#continue').animate({opacity:0},1000,'easeOutQuint', function(){$(this).hide();});
//	  }
//      else if(count >= 1)
//      {
//	    $('#back').css({opacity:1});
//        //$('#back').css({opacity:0});
//        //$('#back').css({bottom:'220px'});
//        //$('#back').animate({opacity:1},1000,'easeOutQuint', function(){$(this).show();});
//
//        $('#continue').css({opacity:1});
//        //$('#continue').css({opacity:0});
//        //$('#continue').animate({opacity:1},1000,'easeOutQuint', function(){$(this).show();});
//      }
//      else if(count == 0)
//      {
//        $('#back').css({opacity:0});
//        //$('#back').css({opacity:0});
//        //$('#back').css({bottom:'220px'});
//      	//$('#back').animate({opacity:0},1000,'easeOutQuint', function(){$(this).hide();});
//
//        $('#continue').css({opacity:1});
//        //$('#continue').css({opacity:0});
//        //$('#continue').animate({opacity:1},1000,'easeOutQuint', function(){$(this).show();});
//      }
//
//      if(count > counter)
//      {
//          	clickable = false;
//
//		  	if($('body').attr('class') == 'browser-ie8' && $('body').attr('class') == 'browser-ie7')
//			{
//				$('#container-'+counter).animate({top:-500,opacity:0},speed,'easeOutQuint');
//	          	$('#container-'+count).css({top:500});
//	          	$('#container-'+count).delay(delayTime).animate({top:0,opacity:1},speed,'easeOutQuint', function(){clickable = true;});
//			}
//			else
//			{
//				$('#container-'+counter).animate({top:-500,opacity:0},speed,'easeOutQuint');
//				$('#container-'+counter+' .sub1').animate({top:-sub1Top},speed,'easeOutQuint');
//	          	$('#container-'+counter+' .sub2').animate({top:-sub2Top},speed,'easeOutQuint');
//	          	$('#container-'+count).css({top:500});
//	          	$('#container-'+count+' .sub1').css({top:sub1Top});
//	          	$('#container-'+count+' .sub2').css({top:sub2Top});
//	          	$('#container-'+count).delay(delayTime).animate({top:0,opacity:1},speed,'easeOutQuint', function(){clickable = true;});
//	          	$('#container-'+count+' .sub1').delay(delayTime).animate({top:0},speed,'easeOutQuint');
//	          	$('#container-'+count+' .sub2').delay(delayTime).animate({top:0},speed,'easeOutQuint');
//			}
//      }
//      else if(count < counter)
//      {
//        clickable = false;
//
//	  	if($('body').attr('class') == 'browser-ie8' && $('body').attr('class') == 'browser-ie7')
//		{
//	        $('#container-'+counter).animate({top:500,opacity:0},speed,'easeOutQuint');
//	        $('#container-'+count).css({top:-500});
//	        $('#container-'+count).delay(delayTime).animate({top:0,opacity:1},speed,'easeOutQuint', function(){clickable = true;});
//		}
//		else
//		{
//	        $('#container-'+counter).animate({top:500,opacity:0},speed,'easeOutQuint');
//	        $('#container-'+counter+' .sub1').animate({top:sub1Top},speed,'easeOutQuint');
//	        $('#container-'+counter+' .sub2').animate({top:sub2Top},speed,'easeOutQuint');
//	        $('#container-'+count).css({top:-500});
//	        $('#container-'+count+' .sub1').css({top:-sub1Top});
//	        $('#container-'+count+' .sub2').css({top:-sub2Top});
//	        $('#container-'+count).delay(delayTime).animate({top:0,opacity:1},speed,'easeOutQuint', function(){clickable = true;});
//	        $('#container-'+count+' .sub1').delay(delayTime).animate({top:0},speed,'easeOutQuint');
//	        $('#container-'+count+' .sub2').delay(delayTime).animate({top:0},speed,'easeOutQuint');
//		}
//      }
//      counter = count;
//    }
//  }
  
  
}
