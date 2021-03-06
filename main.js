// MAKES THE ALBUM COVER PICTURE APPEAR
var albumCover = "";
var albumCoverFunction = allAlbums.forEach(function(el){
  albumCover +=
  "<img rel= 'insideAlbum' id= '"
  + el.albumTitle
  + "' src ='"
  + el.albumCover
  +"' />"
});

$('.albumContainer').prepend(albumCover);



// WHEN THE ALBUM COVER PICTURE IS CLICKED
// MAKING THE COVER PHOTO CORRESPOND TO ALBUM
var albumCoverRel = $('.albumContainer').find('img');

albumCoverRel.click(function(event){
  event.preventDefault();
  var changePage = '.' + $(this).attr('rel');
  $(changePage).siblings('div').addClass('inactive');
  $(changePage).removeClass('inactive');
  var album = $(this).attr('id');
  var albumToPutOnPage = allAlbums.filter(function(el){
    return el.albumTitle === album;
  }).pop();
  var albumHtmlStr="";
  albumToPutOnPage.photos.forEach(function(el){
   albumHtmlStr +=
   "<img rel= 'picturePage' id= '"
   + el.photoName
   + "' src ='"
   + el.photoThumb
   +"' />";
  });
  $('.pictureContainer').prepend(albumHtmlStr);
});





var albumStr="";
var newAlbum = allAlbums.forEach(function(el){
 albumStr +=
 "<p rel= '"
 + el.albumTitle
 + "'>"
 + el.albumTitle
 + "</p>"
});
$('aside').html(albumStr);


  var asideButton = $('aside').find('p');

  asideButton.click(function(event){
    event.preventDefault();
    var album = $(this).attr('rel');
    var albumToPutOnPage = allAlbums.filter(function(el){
      return el.albumTitle === album;
    }).pop();
    var albumHtmlStr="";
    albumToPutOnPage.photos.forEach(function(el){
     albumHtmlStr +=
     "<img rel= 'picturePage' id= '"
     + el.photoName
     + "' src ='"
     + el.photoThumb
     +"' />";
    });
    $('.pictureContainer').html(albumHtmlStr);
  });






//WHEN THE PICTURE IS CLICKED AND ENLARGED

$('.pictureContainer').on("click",'img', function(el) {
  event.preventDefault();
  var changePage = '.' + $(this).attr('rel');
  $(changePage).siblings('div').addClass('inactive');
  $(changePage).removeClass('inactive');
  var imgSrc = $(this).attr('src');
  var photoPage = "<img src ='"
  + imgSrc
  +"' />";
  $('.picturePage').append(photoPage);
});

  var backImg = $('.picturePage').find('img');

  $(".backButton").on("click", function(event) {
  event.preventDefault();
  var changePage = '.' + $(this).attr('rel');
  $(changePage).siblings('div').addClass('inactive');
  $(changePage).removeClass('inactive');
  $(backImg).addClass('inactive');
});
