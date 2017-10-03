import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection("posts"); // create the collection for test ads

// use meteor mongo on cmd and performed from client side
//db.Ads.insert({ text: "FirstItem-Bat", createdAt: new Date() });
//db.Ads.insert({ text: "Ball", createdAt: new Date() });
