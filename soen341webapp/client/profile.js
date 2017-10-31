import { Template } from 'meteor/templating';
import { UserData } from '../lib/collections.js'; // the collection "user info"
import { Tracker } from 'meteor/tracker';
import './main.html';
import { Accounts } from 'meteor/accounts-base';



//Form used to add user data to the logged in user
Template.addUserData.events({
    'submit form': function(event, template) {
        event.preventDefault(); // prevent page reload

        // store the user input form fields into specific variables
        var userId = Meteor.user()._id;
        var firstName = event.target.firstName.value;
        var lastName = event.target.lastName.value;
        var city = event.target.city.value;
        var province= event.target.province.value;
        var phoneNumber = event.target.phonenumber.value;

        if(firstName!="" && lastName!="" && city!="" && province!="" && phoneNumber!=""){
            //added the information of the user in to the collections, userdata to later display on profile card.
            UserData.insert({
                userId,
                firstName,
                lastName,
                city,
                province,
                phoneNumber
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

// helper
Template.profile.helpers({
     userInfo: function() {
         //check if person has the profile filled out
         var isExsist = UserData.find({ userId: Meteor.userId()});

         if(!isExsist){
             alert("Please complete the Fill Profile");
         }
         else {
             return UserData.find({userId: Meteor.userId()});
         }
        }

});
