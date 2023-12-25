const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfiguration");

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: '"Georgian Vending Group" <ninasipragvg@outlook.com>',
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;
