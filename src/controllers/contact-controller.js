const nodemailer = require('nodemailer');

const SMTP_CONFIG = require('../config/smtp');

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth:{
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  }
});

exports.sendEmail = async (req, res) => {
  const mailSent = transporter.sendMail({
    text: `${req.body.message}`,
    subject: 'Contato Vias Crucis',
    from: `${req.body.name} ${req.body.lastName} <${req.body.email}>`,
    to: 'contato@viascrucis.com.br',
    replyTo: req.body.email,
  }, (error) => {
    if(error){
      return res.status(400).send({error: 'Nao foi possivel enviar o email.'});
    }
    return res.status(200).send(req.body);
  }
  
);
  console.log(mailSent);
}
