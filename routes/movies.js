var express = require('express');
var router = express.Router();
var config = require('config');
var db = require('../db/db');
var Users = db.import('../models/users');
var Movies = db.import('../models/movies');
var Ratings = db.import('../models/ratings');

router.post('/create', function(req, res, next) {
    var name = req.body.name;
    var actor_name = req.body.actor_name;
    var year = req.body.year;
    var description = req.body.description;

    Movies.create({
        name: name,
        actor_name: actor_name,
        description: description,
        year: year,
        created: new Date(),
        updated: new Date()
    }).then(function(user) {
        return res.status(200).send('Movie Successfully created');
    }).catch(function(err) {
        console.log(err);
        return res.status(500).send(err);
    })
});


router.post('/rate_movie', async function(req, res, next) {
    // console.log(req.session.user);

    // if (!req.session.user) {
    //     return res.status(401).send({
    //         error: "Please login"
    //     })
    // }
    console.log(req.session.user);
    var user_id = req.body.user_id; 
    var movie_id = req.body.movie_id;
    var ratings = req.body.ratings;
    var ratings_sum = 0;
    try {
        var result = await Ratings.create({
            user_id: user_id,
            movie_id: movie_id,
            ratings: ratings,
            created: new Date(),
            updated: new Date()
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }

    try {
        var ratingsInst = await Ratings.findAll({
            where: {
                movie_id: movie_id
            }
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
    console.log(ratingsInst);
    if (ratingsInst.length > 0) {
        var total_ratings = ratingsInst.length;
        for (var i = 0; i < ratingsInst.length; i++) {
            ratings_sum += (ratingsInst[i].ratings);
        }
        var avg_rating = Number((ratings_sum / total_ratings).toFixed(0))
    }

    try {
        console.log(1, total_ratings)
        console.log(2, ratings_sum);
        console.log(4, avg_rating);
        var update_rating = await Movies.update({
                avg_rating: avg_rating,
                updated: new Date()
            }, {
                where: {
                    id: movie_id
                }
            })
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
    return res.send(result);
});


router.get('/getAll', function (req, res, next) {
	Movies.findAll().then(function (movies) {
		return res.status(200).send(movies);
	}).catch(function (err) {
		return res.status(500).send(err);
	})
})

module.exports = router;