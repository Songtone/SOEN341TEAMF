import {Template} from 'meteor/templating';
import {UserData} from '../lib/collections.js'; // the collection "user info"
import {Posts} from '../lib/collections.js';
import {Likes} from '../lib/collections.js';
import {Tracker} from 'meteor/tracker';
import './main.html';
import {Accounts} from 'meteor/accounts-base';


//Form used to add user data to the logged in user
Template.addUserData.events({
    'submit form': function (event, template) {
        event.preventDefault(); // prevent page reload

        // store the user input form fields into specific variables
        var userId = Meteor.user()._id;
        var userName = Meteor.user().username;
        var email = Meteor.user().emails[0].address;
        var firstName = event.target.firstName.value;
        var lastName = event.target.lastName.value;
        var city = event.target.city.value;
        var province = event.target.province.value;
        var phoneNumber = event.target.phoneNumber.value;
        var picture = event.target.profilePicture.value;
        var skills = event.target.skills.value;

        if (firstName != "" && lastName != "" && city != "" && province != "" && phoneNumber != "" && picture != "" && skills != "") {
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

    },

});

Template.profile.events({
    'click .delete-post': function () {
        if (confirm("Are you sure you want to delete this post?")) {
            Posts.remove(this._id);
            //remove likes associated with this post
            Likes.find({"post": this._id, "likedBy": Meteor.user()._id}).forEach(function (like) {
                Likes.remove({_id: like._id});
            });
            return false;
        }
    }
});
Template.profile.events({
    'click .edit-Post': function () {
        var editModal = document.getElementById("editPost");
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
// helper
Template.profile.helpers({
    userInfo: function () {
        //check if person has the profile filled out
        var isExsist = UserData.find({userId: Meteor.userId()});

        if (!isExsist) {
            alert("Please complete the Fill Profile");
        }
        else {
            return UserData.find({userId: Meteor.userId()});
        }
    }

});

// helper
Template.nav.helpers({
    userInfo: function () {
        //check if person has the profile filled out
        var isExsist = UserData.find({userId: Meteor.userId()});

        if (!isExsist) {
            alert("Please complete the Fill Profile");
        }
        else {
            return UserData.find({userId: Meteor.userId()});
        }
    }

});
