
 var Likes = require('models/likes');


$(document).ready(function(){
  $('#container').append(JST.application());


var likes = new Likes();

$('.js-like-button').on('click', function(){
  likes.like()
});
  likes.on('change:likeCount', function(like){
    if(likes.get('likeCount') <= 1){
      $('.js-like-button').text(likes.get('likeCount') + " like");
    }else{
      $('.js-like-button').text(likes.get('likeCount') + " likes");
    }
})
})
