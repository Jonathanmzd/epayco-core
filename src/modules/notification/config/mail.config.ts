import 'dotenv/config';

export const mailConfig = {
  host: process.env.MAIL_HOST, // e.g. smtp.ethereal.email or smtp.gmail.com
  port: Number(process.env.MAIL_PORT) || 587,
  secure: process.env.MAIL_SECURE === 'true',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};