import { Template } from 'meteor/templating';
import { Posts } from '../lib/collections.js'; // import the "table"
import { Likes } from '../lib/collections.js';
import { Makers } from '../lib/collections.js';
import { Wants } from '../lib/collections.js';
import { UserData } from '../lib/collections.js'; // the collection "user info"
import { Tracker } from 'meteor/tracker';
import { Accounts } from 'meteor/accounts-base';


// Function is used to grab the data from the ad post
// Function is used to grab the data from the ad post

Template.posts.events({
  'click .ad': function() {
    var postId =  Posts.findOne(this._id)._id;
    FlowRouter.go('/ad/'+ postId);
  }
});

Template.ad.helpers({
    postInfo: function() {
      var adId = FlowRouter.getParam("_id");
      return Posts.find({ "_id" : adId});
    },
    wanters: function() {
      var adId = FlowRouter.getParam("_id");
      return Wants.find({ "postId" : adId});
    },
    makers: function() {
      var adId = FlowRouter.getParam("_id");
      return Makers.find({ "postId" : adId});
    },

});
