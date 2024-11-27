
import nodemailer from 'nodemailer';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        try {
            const transporter = nodemailer.createTransport({ 
              host: 'smtppro.zoho.in', 
              port: 465,
              secure: true,
                auth: {
                  user: process.env.EMAIL_USER, 
                  pass: process.env.EMAIL_PASS, 
                },
              });
            const mailOptions = {
                from: process.env.EMAIL_USER, 
                to: process.env.EMAIL_RECIPIENT, 
                subject: 'Contact Form Submission',
                text: message,
                html: `
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong><br>${message}</p>
                `,
            };
            await transporter.sendMail(mailOptions);

            return res.status(200).json({ success: 'Email sent successfully.' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res
                .status(500)
                .json({ error: 'Failed to send email. Please try again later.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
}
