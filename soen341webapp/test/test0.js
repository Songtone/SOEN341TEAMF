/*// Random test
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
        //simulating the insert function
        var userId = Id;
        var category = cat;
        var subCategory = sub;
        var title = tit;
        var desc = descript;
        var likes = like;
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

//main function to perform the test
(function () {
	var assert = require("assert");
    //for now, just testing 1 want
    
	//if assert.ok(true) then passes
	//need suite and test to make the test actually work
	suite("addWant", function() {
    test("adding want", function() {
      return assert.ok(addWant("Nick Nic", "Arts", "Testing Drawing", "Testing if this works", "I forgot what the options for this are", 0));
    });
  });
  
}).call(this);
