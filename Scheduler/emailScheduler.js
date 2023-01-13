/**
 * Here we are going to have the logic to schedule the sending the email 
 */
/**
 * cron.schedule("cronexpresion", () =>{
 * })
 */

const cron = require("node-cron");
const Notification = require("../models/notification.model");
const emailTransporter = require("../notifiers/emailService");
cron.schedule("*/10 * * * * *", async() => {
    
    // Write the logic to read from the DB and Send Email

    // Fetch all the notification request which are in UN_SENT status
    
    console.log("Inside the Scheduler");
    const notifications = await Notification.find({status : "UN_SENT"});
    console.log(notifications);
    // Send the email notification correspoding to each of those requests
    if(notifications){
        console.log("Number of UN_SENT reqest are :", notifications.length);

        /**
         * Send the mail for each single notification request
         */
        notifications.forEach( n => {
            const mailObj = {
                to : n.recepientEmails,
                subject : n.subject,
                text : n.content
            }
            console.log("Sending Email For", mailObj);
            emailTransporter.sendMail(mailObj, async (err, info) => {
                if(err){
                    console.log("Error while sending the email ", err.message);
                }else{
                    console.log("Successfully sent the email ", info);
                    /**
                     * I need to go and update the status of the notification
                     */
                    n.status =  "SENT",
                    await n.save(); // here n is transicient element
                    }
                })             
            })
       }
});

