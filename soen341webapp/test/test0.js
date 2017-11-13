/* Random test
(function() {
  var assert = require("assert");
  var plus = function (one, two) {
    return one + two;
  };
  suite("plus", function() {
    test("2 plus 3 should equals 5", function() {
      return assert.equal(5, plus(2, 3));
    });
  });
}).call(this);
*/

//Initializing sample variables for a want post
var userID = "Nick Nic";
var category = "Arts";
var title = "Testing Drawing";
var desc = "Testing if this works";
var subCategory = "I forgot what the options for this are";
var likes = 0;


function addWant(Id, cat, tit, descript, sub, like )
{
    //event.preventDefault(); // prevent page reload
    
    if (category != "" && subCategory != "" && title != "" && desc != "") {
        //if (confirm("Are you sure you want to create this want?")) { //if 
                    //Posts.insert({
        userId = Id;
        category = cat;
        subCategory = sub;
        title = tit;
        desc = desscript;
        likes = like;
                        //createdAt: new Date()
                    //});
        /*
                    //clear form
                    event.target.reset();
                    //close modal
                    $('.modal').modal('close');
                    return false;*/
        //}
        return true;
    }
    return false;
}

(function () {


}).call(this);
