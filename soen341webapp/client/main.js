import { Template } from 'meteor/templating';
import { Posts } from '../lib/collections.js'; // import the "table"
import { Accounts } from 'meteor/accounts-base';
import { Tracker } from 'meteor/tracker';
import './main.html';

//Accounts config
Accounts.ui.config({
  passwordSignupFields:'USERNAME_ONLY'
})

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

Template.addPost.events({
  'submit form': function(event, template) {
    event.preventDefault(); // prevent page reload

    var userId = "USERNAME";
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
