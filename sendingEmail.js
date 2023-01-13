/**
 * This file will contain the sample code for sendng the email
 */

const nodemailer = require('nodemailer');

const tranporter = nodemailer.createTransport({
    port : 465,    // -> True for 465, false for other ports
    host : "smtp.gmail.com",
    // service : "gmail",
    auth : {
        user : 'sp832154@gmail.com',
        pass : 'qxvckcwpijjisufz',
    },
    secure : true,
});

console.log(typeof tranporter);

/**
 * Sending Email
 */

const mailDatabObj = {
    from : 'crm-no-reply@gmail.com',
    to : 'sp832154@gmail.com',
    subject : "Testing the code to send email",
    text : "Sample text content",
    html : "<b> Hello World ! </b>"
}

tranporter.sendMail(mailDatabObj, (err, data) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("email sent successfully");
    }
})