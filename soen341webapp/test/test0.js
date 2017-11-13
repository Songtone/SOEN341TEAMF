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

function addWant()
{
            event.preventDefault(); // prevent page reload
            if (category != "" && subCategory != "" && title != "" && desc != "") {
                if (confirm("Are you sure you want to create this want?")) {
                    Posts.insert({
                        userId,
                        category,
                        subCategory,
                        title,
                        desc,
                        likes,
                        createdAt: new Date()
                    });
                    //clear form
                    event.target.reset();
                    //close modal
                    $('.modal').modal('close');
                    return false;
                }
            }
            else {
                alert("Please fill in all fields before you submit your Want")
            }
        }
    });

}
