import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection("posts"); // create the collection for storing ads
export const Likes = new Mongo.Collection("likes"); // create the collection for storing likes
// use meteor mongo on cmd and performed from client side
