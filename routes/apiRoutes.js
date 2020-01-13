let friends = require("../data/friends.js")

module.exports = app => {

  app.get("/friends",  (req, res) => {
    // console.log(friends)
    .then(friends=>res.json(friends))
    .catch(e=>console.error(e))
  })

  app.post("friends",  (req, res) => {
    let people = req.body
    let scores = people.scores

    // let friendPostion = 0
    // let small = 51
    // let difference = 0

    for (let i = 0; i < friends.length; i++) {
  
      let scores = friends[i].scores
   
      if (difference < small) {
        small = difference;
      }
    }
    res.json(
     //??? 
    )
  })

}