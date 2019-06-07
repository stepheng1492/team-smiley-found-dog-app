// require express
const express = require('express');
// require passport
const passport = require('passport');
// const Sequelize = require('sequelize');
// require('../database-psql/index.js');
const { User, Pets, Comments } = require('../database-psql/index.js');
require('dotenv').config();
const client = require('twilio')(process.env.accountSid, process.env.authToken);
//define router instance
const router = express.Router();
const app = express();
app.set('view engine', 'ejs');


//test get request to login page
router.route('/gmailLogin')
        .post((req, res, next) => {
        const { displayName, email} = req.body.result.user;
        User.findOrCreate({where: {
            name: displayName,
            email: email,
        }})
        res.send('get session from database');
    });

router.route('/signup')
    .get((req, res, next) => {
        //send response on login get request
        res.send('signup stuff');
    }).post((req, res, next) => {
        //get username and password stored in request body
        //use sequelize query on user model to check if user exists in database
            //handle errors in sequelize query
            //if user exists
                //send user already exists response
            //else
                //make a new user. call helper function to hash password
                //store new user in database
        //send response on login get request
        res.send('add user to database');
    });

router.route('/user')
    .get((req, res, next) => {
        // Grabs all pets from database
        Pets.findAll()
            .then(pets => res.send(pets))
            .catch(err => console.error(err))
        
        // res.send('heres the pets')
    }).post((req, res, next) => {
        // adds pet information from forms, and image to database
        console.log(req.body);
        const { ownerName, name, type, message, image, contact } = req.body;
        Pets.findOrCreate({where: {
          ownerName,
          name: name,
          type: type,
          message: message,
          image: image,
          contact: contact,
        }})
        
    }).put((req, res) => {
        const { petId, found } = req.body;
        const values = { found: !found }
        const selector = {
            where: {
                id: petId,
            }
        }
        Pets.update(values, selector)
            .then((result) => console.log(result))
    })


router.route('/comments')
    // gets all comments from database
    .get((req, res, next) => {
        Comments.findAll().then((messages) => {
            res.send(messages);
        })
    })
    // adds comments to the database
    .post((req, res, next) => {
        const {message, petId} = req.body;
        Comments.findOrCreate({where: {
            petId: petId,
            message: message,
        }})
        res.send('comment added');
    })

router.route('/texts')
    .post((req) => {
        client.messages.create({
            to: req.body.contact,
            from: '+15045968529',
            body: `Hey! This is an alert from FoundPets.com that someone has found your pet!`
        });
    });




module.exports = router;