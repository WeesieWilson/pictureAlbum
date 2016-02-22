
var albumCoverOneThree = "";
var albumFilterOne = allAlbums.filter(function(el){
  return el.albumTitle === 'Album One' || el.albumTitle === 'Album Two' || el.albumTitle === 'Album Three'
});
var albumCoverFunction = albumFilterOne.forEach(function(el){
  albumCoverOneThree +=
  "<img rel= 'insideAlbum' src ='"
  + el.albumCover
  +"' />"
});

$('.firstRowWrapper').prepend(albumCoverOneThree);


var albumCoverFourSix = "";
var albumFilterTwo = allAlbums.filter(function(el){
  return el.albumTitle === 'Album Four' || el.albumTitle === 'Album Five' || el.albumTitle === 'Album Six'
});
var albumCoverFunctionTwo = albumFilterTwo.forEach(function(el){
  albumCoverFourSix +=
  "<img rel= 'insideAlbum' src ='"
  + el.albumCover
  +"' />"
});

$('.secondRowWrapper').prepend(albumCoverFourSix);



var albumCoverRel = $('.firstRowWrapper').find('img');
albumCoverRel.click(function(event){
  event.preventDefault();
  var changePage = '.' + $(this).attr('rel');
  $(changePage).siblings('div').addClass('inactive');
  $(changePage).removeClass('inactive');

});


var photosOneThree = "";
var photosFilterOne = albumFilterOne.filter(function(el){
  return el.photos.photoName === 'Photo One' || el.photos.photoName === 'Photo Two' || el.photos.photoName === 'Photo Three'
});

var albumFunction = photosFilterOne.forEach(function(el){
  photosOneThree +=
  "<img rel= 'picturePage' src ='"
  + el.photos.photoThumb
  +"' />"
});

$('.firstRowWrapperAlbum').prepend(photosOneThree);
