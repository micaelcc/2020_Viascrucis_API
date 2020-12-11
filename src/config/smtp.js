require("dotenv").config();

module.exports = {
    host: "smtp.gmail.com",
    port: 587,
    user: "contatoviascrucis@gmail.com",
    pass: process.env.SMTP_PASS
};