var characters = require("../data/friends");

module.exports = function(app) {

//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(characters);
    });

//A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

    app.post("/api/friends", function(req, res){
        console.log(req.body.scores)

        res.json(req.body.surveyData);

         // Receive user details (name, photo, scores)
        var user = req.body;
        characters.push(user);
      console.log(JSON.stringify(user))

        //from here below you would have to loop over your scores and the characters scores subtracting the difference between responses to find the minimal difference. character and then send them back as an object like:

        //res.send(characterMatch) 

        //You could then pull the photo and the name by from the object and post them to the modal

        //I obviosly had trouble doing this and recieved an error and attempted to find a solution online but that hasn't worked out as of yet.  Thanks for reading this.

        
    });
  };
 