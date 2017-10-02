import { Template } from 'meteor/templating';
import {Posts} from '../lib/collections.js'; // import the "table"
import {Accounts} from 'meteor/accounts-base';



//Accounts config
Accounts.ui.config({
    passwordSignupFields:'USERNAME_ONLY'
})

import './main.html';

Template.body.helpers({
    posts(){
        return Posts.find({});
    }
});


Template.addPost.events({
    'submit form': function(event, template) {
        event.preventDefault(); // prevent page reload
        var category = event.target.category.value;
        if(category!=""){
        var userId = "USERNAME";
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
    else{
      alert("You have not chosen a category");
    }
}
});
