const nodemailer = require('nodemailer');
const querystring = require('querystring');

function parseBody(event) {
  const contentType = (event.headers && (event.headers['content-type'] || event.headers['Content-Type'])) || '';
  let raw = event.body || '';
  if (event.isBase64Encoded) {
    try {
      raw = Buffer.from(raw, 'base64').toString('utf8');
    } catch (_) {}
  }
  if (contentType.includes('application/json')) {
    try {
      return JSON.parse(raw);
    } catch (_) {
      return {};
    }
  }
  return querystring.parse(raw);
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { firstName, email, message } = parseBody(event);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const toAddress = process.env.EMAIL_TO || process.env.EMAIL_USER;

  const mailOptions = {
    from: email,
    to: toAddress,
    subject: `New feedback from ${firstName || 'Anonymous'}`,
    text: `Name: ${firstName}\nEmail: ${email}\n\nFeedback:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    const referer = (event.headers && (event.headers.referer || event.headers.Referer)) || '';
    if (referer) {
      try {
        const url = new URL(referer);
        url.searchParams.set('feedback', '1');
        return { statusCode: 303, headers: { Location: url.toString() }, body: '' };
      } catch (_) {}
    }

    return { statusCode: 303, headers: { Location: '/posts/?feedback=1' }, body: '' };
  } catch (error) {
    return { statusCode: 500, body: 'Error sending feedback.' };
  }
};


