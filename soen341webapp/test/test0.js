/*// Random test
(function() {
  var assert = require("assert");
  var plus = function (one, two) {
    return one + two;
  };
  suite("plus", function() {
    test("2 plus 3 should equals 5", function() {
      return assert.equal(5, plus(2, 3));
    });
  });
}).call(this);
*/

//functions to consider adding
//find a want
//like a want
//i will make this
//editing a post
//helper to find a want base on userid
//add userdata 

//Initializing sample variables for a want post
var userID = "Nick Nic";
var category = "Arts";
var title = "Testing Drawing";
var desc = "Testing if this works";
var subCategory = "I forgot what the options for this are";
var likes = 0;


function addWant(Id, cat, tit, descript, sub, like )
{
    //event.preventDefault(); // prevent page reload
    
    if (category != "" && subCategory != "" && title != "" && desc != "") {
        //if (confirm("Are you sure you want to create this want?")) { //if 
        //Posts.insert({
        //simulating the insert function
        var userId = Id;
        var category = cat;
        var subCategory = sub;
        var title = tit;
        var desc = descript;
        var likes = like;
                        //createdAt: new Date()
                    //});
        /*
                    //clear form
                    event.target.reset();
                    //close modal
                    $('.modal').modal('close');
                    return false;*/
        //}
        return true;
    }
    return false;
}

//main function to perform the test
(function () {
	var assert = require("assert");
    //for now, just testing 1 want
    
	//if assert.ok(true) then passes
	//need suite and test to make the test actually work
	suite("addWant", function() {
    test("adding want", function() {
      return assert.ok(addWant("Nick Nic", "Arts", "Testing Drawing", "Testing if this works", "I forgot what the options for this are", 0));
    });
  });
  
}).call(this);





//--------Functions extracted from the website's js for me to use their functionality-------------
//---for the likes---
/*Template.post.events({
    'click .like-button': function () {
        var cursor = Likes.find({ "post": this._id, "likedBy": Meteor.user()._id });
        var count = cursor.count();
        // if the user has not liked this post, like it (save post _id and user _id as like)
        if (!count) {
            Likes.insert({ "post": this._id, "likedBy": Meteor.user()._id });
            Posts.update({ _id: this._id }, { $set: { likes: this.likes + 1 } });
        }
            // if the user has already liked this post, unlike it (remove like from db.likes)
        else if (cursor) {
            Likes.find({ "post": this._id, "likedBy": Meteor.user()._id }).forEach(function (like) {
                Likes.remove({ _id: like._id });
            });
            Posts.update({ _id: this._id }, { $set: { likes: this.likes - 1 } });
        }
        return false;
    }
});*/

//---for editing a post---
// this functions gets all the info from the post and puts them in an edit form( the edit form looks like the form used to create a new post)
/*Template.posts.events({
    'click .edit-Post': function () {
        var editModal = document.getElementById("editPost");
        editModal.style.display = "block";
        $("#edittitle").val(this.title).focus().blur();
        $("#editsubcategory").val(this.subCategory).focus().blur();
        $("#editdesc").val(this.desc).focus().blur();
        $("#editID").val(this._id).focus().blur();
        $("#editUserID").val(this.userId).focus().blur();
        $("#editTime").val(this.createdAt).focus().blur();
        $("#editcategory").val(this.category)
        $("#editlikes").val(this.likes)
    }
});
// this function checks if the edited form is complete (no empty fields) then edits the original post
Template.editPost.events({
    'click .submit-edited-post': function () {
        var editTitle = $("#edittitle").val();
        var editSubCat = $("#editsubcategory").val();
        var editDesc = $("#editdesc").val();
        var editCat = $("#editcategory").val();
        var editId = $("#editID").val();
        var editTime = $("#editTime").val();
        var editUserID = $("#editUserID").val();
        var editLikes = $("#editlikes").val();

        if (editCat != "" && editSubCat != "" && editTitle != "" && editDesc != "") {
            if (confirm("Are you sure you want to edit this want?")) {
                Posts.update({ _id: editId }, { title: editTitle, desc: editDesc, subCategory: editSubCat, likes: editLikes, category: editCat, userId: editUserID, createdAt: editTime });
                var editModal = document.getElementById("editPost");
                editModal.style.display = "none";
            }
            else {
                var editModal = document.getElementById("editPost");
                editModal.style.display = "none";
            }
        }
        else {
            alert("Please fill in all fields before you submit your want");
        }
    }
});*/

//---i want this---
/*Template.posts.events({
    'click .want-button': function () {
        var userId = Meteor.userId();
        var postId = Posts.findOne(this._id)._id;

        var cursor = Wants.find({ "userId": userId, "postId": postId });
        var count = cursor.count();

        //var username = Meteor.users.findOne({ _id: userId }).username;  //to find usernmae by ID

        if (!count) {
            Wants.insert({
                userId,
                postId,
                createdAt: new Date()
            });
        }

        else if (cursor) {
            Wants.find({ "userId": userId, "postId": postId }).forEach(function (want) {
                Wants.remove({ _id: want._id });
            });
        }
    }
});*/

//---Add profile data---
/*Template.addUserData.events({
    'submit form': function(event, template) {
        event.preventDefault(); // prevent page reload

        // store the user input form fields into specific variables
        var userId = Meteor.user()._id;
        var userName = Meteor.user().username;
        var email = Meteor.user().emails[0].address;
        var firstName = event.target.firstName.value;
        var lastName = event.target.lastName.value;
        var city = event.target.city.value;
        var province= event.target.province.value;
        var phoneNumber = event.target.phoneNumber.value;
        var picture = event.target.profilePicture.value;
        var skills = event.target.skills.value;

        if(firstName!="" && lastName!="" && city!="" && province!="" && phoneNumber!="" && picture!="" && skills!=""){
            //added the information of the user in to the collections, userdata to later display on profile card.
            UserData.insert({
                userId,
                userName,
                email,
                firstName,
                lastName,
                city,
                province,
                phoneNumber,
                picture,
                skills
            });
            //clear form
            event.target.reset();
            //close modal
            $('.modal').modal('close');
            return false;

        }
        else {
            alert("Please fill in all fields before you complete your Profile")
        }

    }
});*/