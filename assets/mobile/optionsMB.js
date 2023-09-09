function FP_preloadImgs() {//v1.0
 var d=document,a=arguments; if(!d.FP_imgs) d.FP_imgs=new Array();
 for(var i=0; i<a.length; i++) { d.FP_imgs[i]=new Image; d.FP_imgs[i].src=a[i]; }
}
function FP_swapImg() {//v1.0
 var doc=document,args=arguments,elm,n; doc.$imgSwaps=new Array(); for(n=2; n<args.length;
 n+=2) { elm=FP_getObjectByID(args[n]); if(elm) { doc.$imgSwaps[doc.$imgSwaps.length]=elm;
 elm.$src=elm.src; elm.src=args[n+1]; } }
}
function FP_getObjectByID(id,o) {//v1.0
 var c,el,els,f,m,n; if(!o)o=document; if(o.getElementById) el=o.getElementById(id);
 else if(o.layers) c=o.layers; else if(o.all) el=o.all[id]; if(el) return el;
 if(o.id==id || o.name==id) return o; if(o.childNodes) c=o.childNodes; if(c)
 for(n=0; n<c.length; n++) { el=FP_getObjectByID(id,c[n]); if(el) return el; }
 f=o.forms; if(f) for(n=0; n<f.length; n++) { els=f[n].elements;
 for(m=0; m<els.length; m++){ el=FP_getObjectByID(id,els[n]); if(el) return el; } }
 return null;
}
function ToggleCollapseImg(paraNum,arrowNum) {
  if (paraNum.style.display=="none") {
     paraNum.style.display="";
     arrowNum.src="blueR3/collapse.gif";
  }
   else {
     paraNum.style.display="none";
     arrowNum.src="blueR3/expand.gif";
        }
}

function isNumeric(elem, helperMsg){
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression) && elem.value > 0){
	    stopall();
		updateMemorizationData();
		
		return true;
	}else{
	    stopall();
		alert(helperMsg);
		elem.focus();
		
		return false;
	}
}

var IMAGE_PATHS = [];
IMAGE_PATHS[0] = "blueR3/pausebutton3-on.gif";
IMAGE_PATHS[1] = "blueR3/playbutton3-on.gif";
IMAGE_PATHS[3] = "blueR3/stopbutton3-flash.gif";
IMAGE_PATHS[4] = "blueR3/playbutton3-flash.gif";
IMAGE_PATHS[5] = "blueR3/pausebutton3-flash.gif";

var IMAGE_CACHE = [];
function preloadimages(){
for (var i=0; i<IMAGE_PATHS.length; i++) {
 IMAGE_CACHE[i] = new Image();
 IMAGE_CACHE[i].src = IMAGE_PATHS[i];
}
}
function imageRollover(img, imgSrc) {
 img.src = imgSrc;
}

/*********************DialogBox********************/
function dialogbx(divId) {
	var el = document.getElementById(divId);
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}
function dialogbx1(divId) {
	var el = document.getElementById(divId);
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
    $('#settings ul').toggleClass('hide'); 
}  

// Stuff for settings
//if (window.innerWidth && window.innerWidth <= 480) {
    $(document).ready(function(){ 
       // $('#settings ul').addClass('hide'); 
       // $('#settings').append('<div class="leftButton" onclick="toggleMenu()">Options</div>');
    }); 
function toggleMenu() {
        //
        $('#settings .leftButton').toggleClass('pressed');
}
//}
    function toggleHideShow(id) {
		$(id).slideToggle("slow");
}

// Change wrapper height based on device orientation. Not strictly needed by iScroll, you may also use pure CSS techniques.
function setHeight() {
	var headerH = document.getElementById('header').offsetHeight,
		footerH = document.getElementById('footer').offsetHeight,
		wrapperH = window.innerHeight - headerH - footerH;
	document.getElementById('maintext').style.height = wrapperH + 'px';
}

function stopIscroll(){
myScroll.destroy();
myScroll = null;
}
function onCompletionIscroll () {
	setTimeout(function () {
		myScroll.refresh();
	}, 0);
};