const emailService = require('../services/emailService');
const axios = require('axios');

const handleContact = async (req, res) => {
    try {
        const sanitizedData = req.sanitizedData;
        const { recaptchaToken } = req.body;

        // Verify reCAPTCHA token
        if (!recaptchaToken) {
            return res.status(400).json({
                success: false,
                message: 'reCAPTCHA verification required'
            });
        }

        // Verify reCAPTCHA with Google
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
        const recaptchaVerification = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify`,
            null,
            {
                params: {
                    secret: recaptchaSecret,
                    response: recaptchaToken
                }
            }
        );

        const { success: recaptchaSuccess, score } = recaptchaVerification.data;

        if (!recaptchaSuccess) {
            return res.status(400).json({
                success: false,
                message: 'reCAPTCHA verification failed. Please try again.'
            });
        }

        // Optional: Check score for additional security (for v3)
        // if (score < 0.5) {
        //     return res.status(400).json({
        //         success: false,
        //         message: 'reCAPTCHA verification failed. Please try again.'
        //     });
        // }

        let emailResults;
        let successMessage;

        if (sanitizedData.isNewsletter) {
            emailResults = await emailService.sendNewsletterEmails(sanitizedData.email);
            successMessage = 'Newsletter subscription successful';
        } else {
            emailResults = await emailService.sendContactEmails(sanitizedData);
            successMessage = 'Contact form submitted successfully';
        }

        const adminSuccess = emailResults.admin.success;
        const clientSuccess = emailResults.client.success;

        if (adminSuccess && clientSuccess) {
            return res.json({
                success: true,
                message: successMessage
            });
        } else {
            return res.status(500).json({
                success: false,
                message: 'Failed to send emails',
                admin_error: adminSuccess ? null : emailResults.admin.error,
                client_error: clientSuccess ? null : emailResults.client.error
            });
        }
    } catch (error) {
        console.error('Contact controller error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error: ' + error.message
        });
    }
};

module.exports = { handleContact };