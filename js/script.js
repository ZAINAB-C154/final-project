
var i=0;
var slidesimage =["./img/background.jpg","./img/background-1.jpg","./img/background-2.jpg"]


var slideshow = function(){

  document.slideshow.src = slidesimage[i];

  if ( i < slidesimage.length -1 ) {
      i++;
  } else{
      i=0;
  }

  setTimeout("slideshow()",2000)

}


slideshow()

