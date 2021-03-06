const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: `${__dirname}/../.env` });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../client/build')));

const PORT = process.env.PORT || 8000;

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

app.post('/api/send_mail', (req, res) => {
  console.log(req.body);

  const mail = {
    from: req.body.name,
    to: process.env.EMAIL,
    subject: 'Portfolio/Resume Mail',
    text: `${req.body.name} <${req.body.email}> \n${req.body.message}`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        status: 'failure',
      });
    }

    return res.status(200).json({
      status: 'successful',
    });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
