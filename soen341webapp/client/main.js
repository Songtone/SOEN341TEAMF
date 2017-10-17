import { Template } from 'meteor/templating';
import { Posts } from '../lib/collections.js'; // import the "table"
import { Likes } from '../lib/collections.js';
import { Accounts } from 'meteor/accounts-base'; // Accounts-ui takes care of password protection.
import { Tracker } from 'meteor/tracker';
import './main.html';

//Accounts config
Accounts.ui.config({
  passwordSignupFields:'USERNAME_ONLY'
});

//RegEx function to remove reformat search string
RegExp.escape = function(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

Posts.search = function(query) {
  console.log("looking for: " + query);
  if(_.isEmpty(query))
    return Posts.find({});
  return Posts.find({
    $or: [{'title': { $regex: RegExp.escape(query), $options: 'i' }},
    {'desc': { $regex: RegExp.escape(query), $options: 'i' }}]
  });
};

Template.posts.events({
  'keypress input': function(event, template) {
    if (event.which === 13) {
      Session.set('postsSearchQuery', event.target.value);
    }
  }
});

Template.posts.helpers({
  searchResults: function() {
    return Posts.search(Session.get('postsSearchQuery'));
  },
  postsSearchQuery: function() {
    return Session.get('postsSearchQuery');
  }
});

/* logical implementation of the like counter, likes should be stored in the 'likes' collection to allow users to
*  see which item they have liked before. Each post also has to store the amount of likes they have.
*  USE INTERNAL POST AND USER ID "_id" to get unique references to posts.
*/
Template.post.events({
  'click .like-button': function() {
    console.log("trigger like");
    var cursor = Likes.find({ "post" : this._id, "likedBy": Meteor.user()._id});
    var myDocument = cursor.nextObject();
    console.log(myDocument);
    // if the user has not liked this post
    if(_.isEmpty(myDocument)){
      console.log("like added");
      Posts.update ({ _id : this._id }, { $set : { likes: this.likes+1}});
      Likes.insert ({ "post" : this._id, "likedBy": Meteor.user()._id});
    }

    return false;
  }
});

//submit form will retrieve data from user and insert into Post collection.
Template.addPost.events({
  'submit form': function(event, template) {
    event.preventDefault(); // prevent page reload
    var userId = Meteor.user().username;
    var category = event.target.category.value;
    var title = event.target.title.value;
    var desc = event.target.desc.value;
    var subcategory= event.target.subcategory.value;
    var likes = 0;
    if(category!="" && subcategory!="" && title!="" && desc !=""){
      Posts.insert({
        userId,
        category,
        subcategory,
        title,
        desc,
        likes,
        createdAt: new Date()
      });
      //clear form
      event.target.reset();
      //close modal
      $('.modal').modal('close');
      return false;
    }
    else {
      alert("Please fill in all fields before you submit your want")
     }
  }
});

Template.posts.events({
  'click .delete-post': function() {
    Posts.remove(this._id);
    return false;
  }
});
// this functions gets all the info from the post and puts them in an edit form( the edit form looks like the form used to create a new post)
Template.posts.events({'click .edit-Post': function(){
  var editmodal= document.getElementById("editPost");
      editmodal.style.display = "block";
      $("#edittitle").val(this.title).focus().blur();
      $("#editsubcategory").val(this.subcategory).focus().blur();
      $("#editdesc").val(this.desc).focus().blur();
      $("#editID").val(this._id).focus().blur();
      $("#editUserID").val(this.userId).focus().blur();
      $("#editTime").val(this.createdAt).focus().blur();
}
});
// this function checks if the edited form is complete (no empty fields) then edits the original post 
Template.editPost.events ({'click .submit-edited-post': function(){
  var EditTitle= $("#edittitle").val();
  var EditSubCat= $("#editsubcategory").val();
  var Editdesc= $("#editdesc").val();
  var EditCat= $("#editcategory").val();
  var EditId= $("#editID").val();
  var EditTime=$("#editTime").val();
  var EditUserID=$("#editUserID").val();
  if(EditCat!="" && EditSubCat!="" && EditTitle!="" && Editdesc !=""){
  Posts.update({ _id: EditId },{ title: EditTitle, desc: Editdesc, subcategory: EditSubCat, category:EditCat, userId:EditUserID,createdAt:EditTime });
  var editmodal= document.getElementById("editPost");
  editmodal.style.display = "none";
}
  else {
    alert("Please fill in all fields before you submit your want");
   }
}
});
