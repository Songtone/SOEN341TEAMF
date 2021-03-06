import { Template } from 'meteor/templating';
import { Posts } from '../lib/collections.js'; // import the "table"
import { Likes } from '../lib/collections.js';
import { Makers } from '../lib/collections.js';
import { Wants } from '../lib/collections.js';
import { Accounts } from 'meteor/accounts-base'; // Accounts-ui takes care of password protection.
import { Tracker } from 'meteor/tracker';
import './main.html';

//Accounts config
Accounts.ui.config({
  passwordSignupFields:'USERNAME_AND_EMAIL'
});

//RegEx function to remove reformat search string
RegExp.escape = function(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

/*	Function returns cursor of a mongoDB search result.
*	Will return posts according to the string typed in the search bar
*	As well as the option selected from the dropdown
*/
Posts.search = function(query) {
  var categoryDropdown = document.getElementById("category-dropDown");
  var selectedCategory = "";
  var searchResults;
  if(!_.isEmpty(categoryDropdown)){ // if the user selects a category
    selectedCategory = categoryDropdown.options[categoryDropdown.selectedIndex].value;
  }
  const options = {sort: {likes: -1}}; // option for the find() function call, will sort the results in descending order according to likes
  if(_.isEmpty(query)){
    searchResults = Posts.find({'category': { $regex: RegExp.escape(selectedCategory), $options: 'i' }}, options); // return posts without query except for category
  }
  else{
	  searchResults = Posts.find({
		'category': { $regex: RegExp.escape(selectedCategory), $options: 'i' },
		$or: [{'title': { $regex: RegExp.escape(query), $options: 'i' }},
		{'desc': { $regex: RegExp.escape(query), $options: 'i' }}]
	  }, options); // return posts relevant to query entered in search bar
  }
  return searchResults;
};

Template.posts.events({
  'change #category-dropDown': function(event, template){
    delete Session.keys['postsSearchQuery']; // this will reset session on search every time the category option is changed
    Session.set('postsSearchQuery', ""); // set new session on search to NULL on option change
  },
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
    var cursor = Likes.find({ "post" : this._id, "likedBy": Meteor.user()._id});
    var count = cursor.count();
    // if the user has not liked this post, like it (save post _id and user _id as like)
    if(!count){
      Likes.insert ({ "post" : this._id, "likedBy": Meteor.user()._id});
      Posts.update ({ _id : this._id }, { $set : { likes: this.likes+1}});
    }
    // if the user has already liked this post, unlike it (remove like from db.likes)
    else if(cursor){
      Likes.find({"post" : this._id, "likedBy": Meteor.user()._id}).forEach(function(like){
        Likes.remove({_id: like._id});
      });
      Posts.update ({ _id : this._id }, { $set : { likes: this.likes-1}});
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
    var date= formatDate(new Date());
    var picture = event.target.picture.value;
    var subCategory= event.target.subcategory.value;
    var likes = 0;
    if(category!="" && subCategory!="" && title!="" && desc !="" && picture !=""){
        if (confirm("Are you sure you want to create this want?")){
      Posts.insert({
        userId,
        category,
        subCategory,
        title,
        desc,
        picture,
        likes,
        createdAt: date
      });
      //clear form
      event.target.reset();
      //close modal
      $('.modal').modal('close');
      return false;
    }
  }
    else {
      alert("Please fill in all fields before you submit your Want")
     }
  }
});

// this function checks if the edited form is complete (no empty fields) then edits the original post
Template.editPost.events ({'click .submit-edited-post': function(){
  var editTitle= $("#edittitle").val();
  var editSubCat= $("#editsubcategory").val();
  var editDesc= $("#editdesc").val();
  var editPicture = $("#editPicture").val();
  var editCat= $("#editcategory").val();
  var editId= $("#editID").val();
  var editTime=$("#editTime").val();
  var editUserID=$("#editUserID").val();
  var editLikes=$("#editlikes").val();

  if(editCat!="" && editSubCat!="" && editTitle!="" && editDesc !="" && editPicture !=""){
    if (confirm("Are you sure you want to edit this want?")){
 Posts.update({ _id: editId },{ title: editTitle, desc: editDesc, picture: editPicture, subCategory: editSubCat, likes:editLikes, category:editCat, userId:editUserID,createdAt:editTime });
  var editModal= document.getElementById("editPost");
  editModal.style.display = "none";
}
else {
    var editModal= document.getElementById("editPost");
    editModal.style.display = "none";
    }
  }
  else {
    alert("Please fill in all fields before you submit your want");
   }
}
});
Template.editPost.events ({'click .close-edited-post': function(){

    var editModal= document.getElementById("editPost");
    editModal.style.display = "none";

}
});


Template.posts.events({
  'click .want-button': function() {
    var userId =  Meteor.userId();
    var postId =  Posts.findOne(this._id)._id;
    var userName = Meteor.user().username;
    var date= formatDate(new Date());
    var cursor = Wants.find({ "userId" : userId, "postId": postId, "userName": userName});
    var count = cursor.count();

    //var username = Meteor.users.findOne({ _id: userId }).username;  //to find usernmae by ID

    if(!count){
      Wants.insert({
        userId,
        postId,
        userName,
        createdAt: date
      });
    }

    else if(cursor){
      Wants.find({ "userId" : userId, "postId": postId, "userName": userName}).forEach(function(want){
        Wants.remove({_id: want._id});
      });
    }
  }
});
Template.profile.helpers({
  userPosts: function(){
  return  Posts.find({ userId: Meteor.user().username});
  },

});
Template.wants.helpers({
  userWants: function() {
    return Wants.find({ userId: Meteor.userId()});
  },
  postData: function( postId,  field) {

  var wantedData="";
  var post= Posts.findOne({ _id: postId });
  switch (field) {
    case "title":
    wantedData= post.title;
      break;
    case "category":
    wantedData= post.category;
    break;
    case "userId":
    wantedData= post.userId;
    break;
    case "description":
    wantedData= post.desc;
    break;
    case "picture":
    wantedData= post.picture;
    break;
    case "subCategory":
    wantedData= post.subCategory;
    break;
    case "creationTime":
    wantedData= post.createdAt;
    break;
    case "likes":
    wantedData= post.likes;
    break;
  }
  return wantedData;
  },
  notNull: function() {
    var test=false;
    var wantedData="";
    var post= Posts.findOne({ _id: this.postId });
    if (post.category!=null){test=true;}
    return test;
  },
});



Template.posts.events({
  'click .make-button': function() {
    var userId =  Meteor.userId();
    var postId =  Posts.findOne(this._id)._id;
    var userName = Meteor.user().username;
    var date= formatDate(new Date());
    var cursor = Makers.find({ "userId" : userId, "postId": postId, "userName": userName});
    var count = cursor.count();

    //var username = Meteor.users.findOne({ _id: userId }).username;  //to find usernmae by ID

    if(!count){
      Makers.insert({
        userId,
        postId,
        userName,
        createdAt: date
      });
    }

    else if(cursor){
      Makers.find({ "userId" : userId, "postId": postId, "userName": userName}).forEach(function(makers){
        Makers.remove({_id: makers._id});
      });
    }
  }
});
function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
