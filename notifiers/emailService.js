/**
 * This file will contain the sample code for sendng the email
 */

 const nodemailer = require('nodemailer');

 module.exports = nodemailer.createTransport({
     port : 465,    // -> True for 465, false for other ports
     host : "smtp.gmail.com",
     // service : "gmail",
     auth : {
         user : 'sp832154@gmail.com',
         pass : 'qxvckcwpijjisufz',
     },
     secure : true,
 });
 
 