//  The "refresh" function implementations are identical
//  to our regular "JavaScript-Refresh" example.  The only
//  difference from our JavaScript Refresh example is
//  we do not have a doLoad function that starts our
//  refresh timer (since we use a refresh button).

var sURL = unescape(window.location.pathname);

function refresh()
{
    window.location.href = sURL;
}

function refresh()
{
    window.location.replace( sURL );
}


function refresh()
{
    window.location.reload( false );
}

/*********************************************************************/
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
/******************************************************************/

//---------------------------Image Replacement Code Begins---------------------------------
//A required Variable for the loadImages() function



//-----------------------Close Window ------------------------------------//
function clswin() { 
close();
} 
function killIt()
{
        window.open('','_parent','');
        window.close();
}

 function closeMyWindow(){
 // Close previously opened window
top.window.close()

 }

 
 /******************************************************************/
function ToggleCollapseImg(paraNum,arrowNum) {
  if (paraNum.style.display=="none") {
     paraNum.style.display="";
     arrowNum.src="imgs-Rel2/collapse.gif";
  }
   else {
     paraNum.style.display="none";
     arrowNum.src="imgs-Rel2/expand.gif";
        }
}


function ChangeImg(paraNum,arrowNum) {
  if (paraNum.style.display=="none") {
     paraNum.style.display="";
    
        
      if (arrowNum == hideoptionsimg){ arrowNum.src="imgs-Rel2/hideoptions.gif";  $("#homepic").show();}
      if (arrowNum == hidetransimg){  arrowNum.src="imgs-Rel2/hidetrans.gif";}
      if (arrowNum == hidequranimg){ arrowNum.src="imgs-Rel2/hidequran.gif"; }
      
      }
   else {
     paraNum.style.display="none";
     if (arrowNum == hideoptionsimg){ arrowNum.src="imgs-Rel2/showoptions.gif"; $("#homepic").hide();}
     if (arrowNum == hidetransimg){  arrowNum.src="imgs-Rel2/showtrans.gif";}
     if (arrowNum == hidequranimg){ arrowNum.src="imgs-Rel2/showquran.gif"; }

     }
}

function flashAudioButtons(id){
	 if (id == 'stop_a'){
		stop_a.src="imgs-Rel2/stopbutton3-flash.gif"
		setTimeout(' stop_a.src="imgs-Rel2/stopbutton3.gif"',600);
	 }
}
function ChangeAudioImgs(WhatIsOn) {
  
      
	  if (WhatIsOn == 'playing'){
	     play_a.src="imgs-Rel2/playbutton3-flash.gif";
	      setTimeout('play_a.src="imgs-Rel2/playbutton3-on.gif"',300);
          pause_a.src="imgs-Rel2/pausebutton3.gif"
		 
      }
      else if (WhatIsOn == 'pausing') {
         play_a.src="imgs-Rel2/playbutton3.gif";
         pause_a.src="imgs-Rel2/pausebutton3-flash.gif"
		 setTimeout(' pause_a.src="imgs-Rel2/pausebutton3-on.gif"',300);
     }else {
	        play_a.src="imgs-Rel2/playbutton3.gif";
            pause_a.src="imgs-Rel2/pausebutton3.gif"
		   }
}



/***********************************************
* Cool DHTML tooltip script II- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/

var offsetfromcursorX=1 //Customize x offset of tooltip
var offsetfromcursorY=10 //Customize y offset of tooltip

var offsetdivfrompointerX=10 //Customize x offset of tooltip DIV relative to pointer image
var offsetdivfrompointerY=14 //Customize y offset of tooltip DIV relative to pointer image. Tip: Set it to (height_of_pointer_image-1).

document.write('<div id="dhtmltooltip"></div>') //write out tooltip DIV
document.write('<img id="dhtmlpointer" src="arrow2.gif">') //write out pointer image

var ie=document.all
var ns6=document.getElementById && !document.all
var enabletip=false
if (ie||ns6)
var tipobj=document.all? document.all["dhtmltooltip"] : document.getElementById? document.getElementById("dhtmltooltip") : ""

var pointerobj=document.all? document.all["dhtmlpointer"] : document.getElementById? document.getElementById("dhtmlpointer") : ""

function ietruebody(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function ddrivetip(thetext, thewidth, thecolor){
if (ns6||ie){
if (typeof thewidth!="undefined") tipobj.style.width=thewidth+"px"
if (typeof thecolor!="undefined" && thecolor!="") tipobj.style.backgroundColor=thecolor
tipobj.innerHTML=thetext
enabletip=true
return false
}
}

function positiontip(e){
if (enabletip){
var nondefaultpos=false
var curX=(ns6)?e.pageX : event.clientX+ietruebody().scrollLeft;
var curY=(ns6)?e.pageY : event.clientY+ietruebody().scrollTop;
//Find out how close the mouse is to the corner of the window
var winwidth=ie&&!window.opera? ietruebody().clientWidth : window.innerWidth-20
var winheight=ie&&!window.opera? ietruebody().clientHeight : window.innerHeight-20

var rightedge=ie&&!window.opera? winwidth-event.clientX-offsetfromcursorX : winwidth-e.clientX-offsetfromcursorX
var bottomedge=ie&&!window.opera? winheight-event.clientY-offsetfromcursorY : winheight-e.clientY-offsetfromcursorY

var leftedge=(offsetfromcursorX<0)? offsetfromcursorX*(-1) : -1000

//if the horizontal distance isn't enough to accomodate the width of the context menu
if (rightedge<tipobj.offsetWidth){
//move the horizontal position of the menu to the left by it's width
tipobj.style.left=curX-tipobj.offsetWidth+"px"
nondefaultpos=true
}
else if (curX<leftedge)
tipobj.style.left="5px"
else{
//position the horizontal position of the menu where the mouse is positioned
tipobj.style.left=curX+offsetfromcursorX-offsetdivfrompointerX+"px"
pointerobj.style.left=curX+offsetfromcursorX+"px"
}

//same concept with the vertical position
if (bottomedge<tipobj.offsetHeight){
tipobj.style.top=curY-tipobj.offsetHeight-offsetfromcursorY+"px"
nondefaultpos=true
}
else{
tipobj.style.top=curY+offsetfromcursorY+offsetdivfrompointerY+"px"
pointerobj.style.top=curY+offsetfromcursorY+"px"
}
tipobj.style.visibility="visible"
if (!nondefaultpos)
pointerobj.style.visibility="visible"
else
pointerobj.style.visibility="hidden"
}
}

function hideddrivetip(){
if (ns6||ie){
enabletip=false
tipobj.style.visibility="hidden"
pointerobj.style.visibility="hidden"
tipobj.style.left="-1000px"
tipobj.style.backgroundColor=''
//tipobj.style.width=''
}
}

document.onmousemove=positiontip

var IMAGE_PATHS = [];
IMAGE_PATHS[0] = "imgs-Rel2/pausebutton3-on.gif";
IMAGE_PATHS[1] = "imgs-Rel2/playbutton3-on.gif";
IMAGE_PATHS[2] = "imgs-Rel2/houseofquran-on.gif";
IMAGE_PATHS[3] = "imgs-Rel2/stopbutton3-flash.gif";
IMAGE_PATHS[4] = "imgs-Rel2/playbutton3-flash.gif";
IMAGE_PATHS[5] = "imgs-Rel2/pausebutton3-flash.gif";


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