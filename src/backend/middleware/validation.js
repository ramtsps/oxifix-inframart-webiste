const validateContactForm = (req, res, next) => {
    const { firstName, lastName, email, phone, message, isNewsletter } = req.body;

    if (isNewsletter === true) {
        // Newsletter validation
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required for newsletter subscription'
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email address'
            });
        }
    } else {
        // Contact form validation
        const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'message'];
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Missing required fields: ${missingFields.join(', ')}`
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email address'
            });
        }
    }

    // Sanitize inputs
    req.sanitizedData = {
        firstName: firstName ? firstName.trim() : 'Newsletter',
        lastName: lastName ? lastName.trim() : 'Subscriber',
        email: email.trim(),
        phone: phone ? phone.trim() : 'Not provided',
        message: message ? message.trim() : 'Newsletter subscription request',
        isNewsletter: isNewsletter || false
    };

    next();
};

module.exports = { validateContactForm };