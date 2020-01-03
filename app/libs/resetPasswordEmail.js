const nodemailer = require('nodemailer');

let sendEmail = (sendEmailOptions) => {

    let account = {
        user: 'rumpumbc29@gmail.com', //emailid
        pass: 'hukmaram123'  //password
    }

    let transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
            user: account.user, 
            pass: account.pass 
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'rumpumbc29@gmail.com', // sender address
        to: sendEmailOptions.email, // list of receivers
        subject: sendEmailOptions.subject, // Subject line
        text: `Dear ${sendEmailOptions.name},
               Thanks for connecting us.
        `, // plain text body
        html: sendEmailOptions.html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        else{
            console.log('Message successfully sent.', info);
        }
       
    });

}

module.exports = {
    sendEmail: sendEmail
  }