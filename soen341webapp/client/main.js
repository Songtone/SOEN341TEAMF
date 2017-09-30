import { Template } from 'meteor/templating';
import {Posts} from '../lib/collections.js'; // import the "table"
import {Accounts} from 'meteor/accounts-base'; // Accounts-ui takes care of password protection.
import './main.html';


//Accounts config
Accounts.ui.config({
    passwordSignupFields:'USERNAME_ONLY'
})

// To obtain the posts fom the collections
Template.body.helpers({
    posts(){
        return Posts.find({}); 
    }
});


//submit form will retrive data from user and insert into Post collection.
Template.addPost.events({
    'submit form': function(event, template) {
        event.preventDefault(); // prevent page reload
        
        var userId = "USERNAME"; // change this to actual username of the person.
        var category = event.target.category.value;
        var title = event.target.title.value;
        var desc = event.target.desc.value;

        Posts.insert({
           userId,
           category,
           title,
           desc,
           createdAt: new Date()
        });
        
        //clear form
        event.target.reset();
        
        //close modal
        $('.modal').modal('close');
        
        return false;
        
    }
});
