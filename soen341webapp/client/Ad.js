import { Template } from 'meteor/templating';
import { Posts } from '../lib/collections.js'; // import the "table"
import { Likes } from '../lib/collections.js';
import { Makers } from '../lib/collections.js';
import { Wants } from '../lib/collections.js';
import { UserData } from '../lib/collections.js'; // the collection "user info"
import { Tracker } from 'meteor/tracker';
import { Accounts } from 'meteor/accounts-base';
import './main.html';


// Function is used to grab the data from the ad post

Template.posts.events({
  'click .ad': function() {
    var postId =  Posts.findOne(this._id)._id;
    FlowRouter.go('/ad/'+ postId);
  }
});

Template.ad.helpers({
    postInfo: function() {
      var adId = FlowRouter.getParam("_id");
      return Posts.find({ "_id" : adId});
    },
    wanters: function() {
      var adId = FlowRouter.getParam("_id");
      return Wants.find({ "postId" : adId});
    },
    makers: function() {
      var adId = FlowRouter.getParam("_id");
      return Makers.find({ "postId" : adId});
    },

});

// this functions gets all the info from the post and puts them in an edit form( the edit form looks like the form used to create a new post)
Template.ad.events({'click .edit-Post': function(){
  var editModal= document.getElementById("editPost");
      editModal.style.display = "block";
      $("#edittitle").val(this.title).focus().blur();
      $("#editsubcategory").val(this.subCategory).focus().blur();
      $("#editdesc").val(this.desc).focus().blur();
      $("#editPicture").val(this.picture).focus().blur();
      $("#editID").val(this._id).focus().blur();
      $("#editUserID").val(this.userId).focus().blur();
      $("#editTime").val(this.createdAt).focus().blur();
      $("#editcategory").val(this.category)
      $("#editlikes").val(this.likes)
}
});
