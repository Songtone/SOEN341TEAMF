import { Template } from 'meteor/templating';
import { Posts } from '../lib/collections.js'; // import the "table"
import { Likes } from '../lib/collections.js';
import { Wants } from '../lib/collections.js';
import { UserData } from '../lib/collections.js'; // the collection "user info"
import { Tracker } from 'meteor/tracker';
import { Accounts } from 'meteor/accounts-base';


// Function is used to grab the data from the ad post
Template.ad.helpers({
     postInfo: function() {
           //check if post is present
               return Posts.find();
           }

});

Template.ad.helpers({
  retrieveAdData: function( postId,  field) {
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
});
