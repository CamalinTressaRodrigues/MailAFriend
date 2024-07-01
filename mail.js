// Name: Dan Abshire

const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'dan.abshire@ethereal.email',
    pass: 'frJM1qVwwQHGm679ew',
  },
});

const mailOptions = {
  from: '"Camalin Rodrigo" <dan.abshire@ethereal.email>', 
  to: "crismariashaji@gmail.com", 
  subject: "Birthday Plans",
  text: `Dear Cris, 
  I hope you're as excited as I am for your birthday! Here's the plan for your special day.

  We will start the day with breakfast at your favorite cafe. We'll have pancakes, coffee, and a great time to start the day.

  Then, we'll visit the new art exhibit downtown. I know how much you love contemporary art, so this will be a treat.

  For lunch, we'll go to the Italian restaurant you've been wanting to try. Get ready for some delicious pasta and pizza!.

  In the afternoon, we have a surprise activity planned! Make sure to wear comfortable clothes and bring your adventurous spirit. In the evening, we'll relax a bit and freshen up at home.

  Finally, we'll have a dinner party with close friends and family at our place. There will be plenty of food, drinks, and good vibes. We'll end the night with a special cake cutting and toasts, celebrating with a special cake made just for you.I can't wait to celebrate your birthday with you and make it a day to remember!

  Cheers,
  Camalin`
};

async function main() {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error occurred: ", error.message);
  }
}

main();
