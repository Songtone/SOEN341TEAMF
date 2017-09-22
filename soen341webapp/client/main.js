import { Template } from 'meteor/templating';
import './main.html';
import {Ads} from '../lib/collections.js'; // import the "table"

// add the values on the front of the page when db value exists

Template.body.helpers({
    ads(){
        return Ads.find({}); // ads is thee name of collection
    }

});
