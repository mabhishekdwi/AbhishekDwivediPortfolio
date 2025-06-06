export default (req, res) => {
  let nodemailer = require("nodemailer");
  require("dotenv").config();

  const PASSWORD = process.env.password;
  const userEmail = process.env.useremail;
  let transporter = nodemailer.createTransport({
    // port: 465,
    // host: "smtp.gmail.com",
    service: "gmail",
    auth: {
      user: userEmail,
      pass: PASSWORD,
    },
    secure: true,
  });

  const { emailInputVal, messageInputVal, nameInputVal, subjectInputVal } =
    req.body;

  if (
    emailInputVal.trim().length === 0 &&
    messageInputVal.trim().length === 0 &&
    nameInputVal.trim().length === 0 &&
    subjectInputVal.trim().length === 0
  ) {
    res.status(500).send({ error: "Input not provided." });
  } else {
    const emailData = {
      from: userEmail,
      to: "mabhishekdwi@gmail.com",
      subject: `Message from ${nameInputVal}`,
      text: `${messageInputVal}`,
      html: `<!doctype html>
      <html ⚡4email>
        <head>
          <title>Abhishek Portfolio</title>
        </head>
        <body>
          <p>This message is from ${nameInputVal}</p>
          <p>Sender Email is ${emailInputVal}</p>
          <p>This is regarding ${subjectInputVal}</p>
          <p>Sender Message : ${messageInputVal}</p>
        </body>
      </html>`,
    };
  
    transporter.sendMail(emailData, async (err, info) => {
      if (err) {
        await res.status(500).send({ error: err.message || "Something Went Wrong"});
      } else {
        await res.status(200).send({ sendStatus: "ok" });
      }
    });
  }
};
