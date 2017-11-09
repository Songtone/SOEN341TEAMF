/*import { Template } from 'meteor/templating';
import { Posts } from '../lib/collections.js'; // import the "table"
import { Likes } from '../lib/collections.js';
import { Wants } from '../lib/collections.js';
import { UserData } from '../lib/collections.js'; // the collection "user info"
import { Tracker } from 'meteor/tracker';
import { Accounts } from 'meteor/accounts-base';


// helper
Template.post.helpers({
     postInfo: function() {
           //check if post is present
           var isExsist = UserData.find({ userId: Meteor.userId()});

           if(!isExsist){
               alert("Please complete the Fill Profile");
           }
           else {
               return UserData.find({userId: Meteor.userId()});
           }

        }

});
*/
