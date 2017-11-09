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

