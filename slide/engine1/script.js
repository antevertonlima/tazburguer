// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_stack_vertical(e,a,b){var f=jQuery;var h=f(this);var d=f("li",b);var g=f("<div>").addClass("ws_effect ws_stack_vertical").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(b);function c(m,j,k,i,l){if(e.support.transform&&e.support.transition){if(!j.transform){j.transform=""}if(j.top){j.transform+=" translate3d(0,"+(j.top?j.top:0)+"px,0)"}delete j.top;j.transition=k+"ms all "+i+"ms cubic-bezier(0.770, 0.000, 0.175, 1.000)";m.css(j);if(l){m.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",l)}}else{if(k){m.animate(j,k,"easeInOutExpo",l)}else{m.css(j)}}}this.go=function(n,k,q,p){var j=(n-k+1)%d.length;if(Math.abs(p)>=1){j=(p>0)?0:1}j=!!j^!!e.revers;var l=(e.revers?1:-1)*b.height();d.each(function(r){if(j&&r!=k){this.style.zIndex=(Math.max(0,this.style.zIndex-1))}});var m=f(".ws_list",b);var i=f("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(f(a.get(j?n:k)).clone()),o=f("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(f(a.get(j?k:n)).clone());if(e.responsive<3){i.find("img").css("width","100%");o.find("img").css("width","100%")}c(i,{top:(j?l:0)});c(o,{top:(j?0:-l*0.5)});if(j){o.appendTo(g);i.appendTo(g)}else{i.insertAfter(m);o.insertAfter(m)}if(!j){m.stop(true,true).hide().css({left:-n+"00%"});if(e.fadeOut){m.fadeIn(e.duration)}else{m.show()}}else{if(e.fadeOut){m.fadeOut(e.duration)}}setTimeout(function(){c(i,{top:(j?0:l)},e.duration,e.duration*(j?0:0.1),function(){h.trigger("effectEnd");i.remove();o.remove()});c(o,{top:(j?1:0)*b.height()*0.5},e.duration,e.duration*(j?0.1:0))},0)}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"stack_vertical",prev:"",next:"",duration:20*100,delay:20*100,width:1075,height:400,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});