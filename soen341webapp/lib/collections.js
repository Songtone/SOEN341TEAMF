import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection("posts"); // create the collection for storing ads
export const Likes = new Mongo.Collection("likes"); // create the collection for storing likes
export const UserData = new Mongo.Collection("userData"); // use meteor mongo on cmd and performed from client side
export const Wants = new Mongo.Collection("wants"); // create the collection for storing likes
export const Makers = new Mongo.Collection("makers"); // create the collection for storing likes
// use meteor mongo on cmd and performed from client side

// function to diplay the ad values to the user
