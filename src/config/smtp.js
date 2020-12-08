require("dotenv").config();

module.exports = {
    host: "smtp.umbler.com",
    port: 587,
    user: "contato@viascrucis.com.br",
    pass: process.env.SMTP_PASS
};