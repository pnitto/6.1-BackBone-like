
var Likes = Backbone.Model.extend({
  defaults: {
    likeCount: 0
  },
    like: function(){
   this.set('likeCount', this.get('likeCount') + 1);
 }
});




module.exports = Likes;
