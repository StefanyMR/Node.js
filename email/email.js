var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'stefanymr208@gmail.com',
    pass: 'hhlkqmqtsapqaald'
  }
});

var mailOptions = {
  from: 'stefanymr208@gmail.com',
  to: 'jpjoao.j14@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'toma!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});