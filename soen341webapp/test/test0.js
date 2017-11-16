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

//variables for a want post
var userID;
var category;
var title;
var desc;
var subCategory;
var likes;

//variables for user data
var userId;
var userName;
var email;
var firstName;
var lastName;
var city;
var province;
var phoneNumber;
var picture;
var skills;



//---------------------------------------------Function to add a want-----------------------------------------------
function addWant(cat, tit, descript, sub)
{
    //event.preventDefault(); // prevent page reload
    
    if (category != "" && subCategory != "" && title != "" && desc != "") {
        //if (confirm("Are you sure you want to create this want?")) { //if 
        //Posts.insert({
        //simulating the insert function
        userId = 1;
        var category = cat;
        var subCategory = sub;
        var title = tit;
        var desc = descript;
        likes = 0;
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

//--------------------------------------------Function to like a want-----------------------------------------------
function likeWant(Id)
{
    //when using more than 1 data, i'll do the following to find the user based on the id
    //var cursor = Likes.find({ "post": this._id, "likedBy": Meteor.user()._id });
    //var count = cursor.count();
    // if the user has not liked this post, like it (save post _id and user _id as like)

    if (likes == 0) {
        likes = 1;
    }
        // if the user has already liked this post, unlike it (remove like from db.likes)
    else {
        likes -= 1;
    }
    return true;   
}

//--------------------------------------------Function to add user data---------------------------------------------
function addUserData(userName, mail, fName, lName, ville, provinc, number, pic, skill)
{
   // store the user input form fields into specific variables
   //userId = Id; //id will be used in the future for the array index
   userName = userName;
   email = mail;
   firstName = fName;
   lastName = lName;
   city = ville;
   province = provinc;
   phoneNumber = number;
   picture = pic;
   skills = skill;

   if (firstName != "" && lastName != "" && city != "" && province != "" && phoneNumber != "" && picture != "" && skills != "") {
       //added the information of the user in to the collections, userdata to later display on profile card.
       //future application of the test can store the data into an array or vector

       return true;
   }

   return false;
}

//main function to perform the test
(function () {
	var assert = require("assert");
    //for now, just testing 1
    
	//if assert.ok(true) then passes
    //need suite and test to make the test actually work

    //test suite for adding a want
	suite("addWant", function() {
    test("adding want", function() {
      return assert.ok(addWant("Arts", "Testing Drawing", "Testing if this works", "I forgot what the options for this are"));
        });
	});

    //test suite for adding user data
	suite("addUserData", function () {
	    test("adding profile data", function () {
	        return assert.ok(addUserData("makerHubTester", "myemail@meme.com", "Nick", "Nic", "Montreal", "QC", 5, "www.mypic.com", "no skill"));
	    });
	});

    //test suite for liking and unliking a want
	suite("likeWant", function () {
	    for (var i = 0; i < 2; i++)
	    {
	        test("liking/unliking Want", function () {
	            return assert.ok(likeWant(1));
	        });
	    }

	});
  
}).call(this);





//--------Functions extracted from the website's js for me to use their functionality-------------

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