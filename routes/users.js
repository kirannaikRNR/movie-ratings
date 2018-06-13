var express = require('express');
var router = express.Router();
var config = require('config');
var db = require('../db/db');
var Users = db.import('../models/users')
var crypto = require('crypto');
const nodemailer = require('nodemailer');

/* GET users listing. */

router.post('/register', function(req, res, next) {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var email = req.body.email;
  var password = req.body.password;
  // var re_password = req.body.re_password;

  // if(password!== re_password){
  // 	return res.status(400).send({
  // 		err:"password did not match"
  // 	});
  // }


  Users.create({
  	first_name: first_name,
  	last_name: last_name,
  	email: email,
  	password: getSaltedPassword(password),
  	created: new Date(),
  	updated: new Date()
  }).then(function(user){
  	// sendRegistrationEmail(email);
  	req.session.user = user
    console.log(user);
  	return res.status(200).send(user);
  }).catch(function(err){
  	console.log(err);
  	return res.status(500).send(err);
  })
});

router.post('/login', function(req,res, next){
	var email= req.body.email;
	var password= req.body.password;
  console.log("user================>", req.body);
	Users.findOne({
		where: {
             email: email,
                        password: getSaltedPassword(password)
                    }
	}).then(function (user) {
		console.log("user================>", user);
		if(!user){
			return res.status(400).send({
				error: "Wrong credentials"
			})
		}
		req.session.user = user;
    console.log("req.session.user-----------------------------------------------", req.session.user)
		return res.status(200).send(user)
	}).catch(function(err){
		return res.status(400).send(err);
	})
})


router.get('/logout', function (req, res, next) {
	req.session.user = false;
	res.status(200).send({
        status: 'logged out'
    });
})


function sendRegistrationEmail(email) {
 	nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'kiran@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'Regesurer user', // Subject line
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
 } 

function getSaltedPassword(password) {
    return crypto.createHmac('sha1', 'simplesalt3112').update(password).digest('hex');
}

module.exports = router;
