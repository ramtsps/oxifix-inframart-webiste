require('dotenv').config();

const config = {
    server: {
        port: process.env.PORT || 3000,
        nodeEnv: process.env.NODE_ENV || 'development'
    },
    security: {
        apiToken: process.env.API_TOKEN
    },
    email: {
        adminEmail: process.env.ADMIN_EMAIL,
        fromEmail: process.env.FROM_EMAIL,
        fromName: process.env.FROM_NAME,
        subjects: {
            contactAdmin: process.env.CONTACT_ADMIN_SUBJECT,
            contactClient: process.env.CONTACT_CLIENT_SUBJECT,
            newsletterAdmin: process.env.NEWSLETTER_ADMIN_SUBJECT,
            newsletterClient: process.env.NEWSLETTER_CLIENT_SUBJECT
        },
        smtp: {
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD
            }
        }
    }
};

// Validate required environment variables
const requiredEnvVars = [
    'API_TOKEN',
    'ADMIN_EMAIL',
    'FROM_EMAIL',
    'SMTP_HOST',
    'SMTP_USERNAME',
    'SMTP_PASSWORD'
];

requiredEnvVars.forEach(envVar => {
    if (!process.env[envVar]) {
        console.error(`Missing required environment variable: ${envVar}`);
        process.exit(1);
    }
});

// Log configuration (without password)
console.log('Server Configuration:', {
    port: config.server.port,
    environment: config.server.nodeEnv
});

console.log('Email Configuration:', {
    adminEmail: config.email.adminEmail,
    fromEmail: config.email.fromEmail,
    fromName: config.email.fromName,
    smtpHost: config.email.smtp.host,
    smtpPort: config.email.smtp.port
});

module.exports = config;