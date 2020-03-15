const Workout = require("../models/workout.js")

module.exports = function(app){

    // create the get route to retrieve workouts 

    app.get("/api/workouts", function(req,res){
        Workout.find()
        .then(data =>{
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    })

    app.post("/api/workouts", function(req,res){
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
    })

    app.put("/api/workout/:id", ({ body, params}, res) =>{
        Workout.findByIdAndUpdate(
            params.id,
            { $push: {exercises: body}},
            {new: true, runValidators: true}
        )
        .then(data => res.json(data))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
    })
}