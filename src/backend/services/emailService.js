const nodemailer = require('nodemailer');
const fs = require('fs').promises;
const path = require('path');
const config = require('../config');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport(config.email.smtp);

        // Verify transporter on startup
        this.verifyTransporter();
    }

    async verifyTransporter() {
        try {
            await this.transporter.verify();
            console.log('SMTP connection verified successfully');
        } catch (error) {
            console.error('SMTP connection failed:', error);
        }
    }

    async loadTemplate(templateName, variables) {
        try {
            const templatePath = path.join(__dirname, '../templates', templateName);
            let template = await fs.readFile(templatePath, 'utf8');

            // Replace variables in template
            Object.keys(variables).forEach(key => {
                const regex = new RegExp(`{{${key}}}`, 'g');
                template = template.replace(regex, variables[key]);
            });

            return template;
        } catch (error) {
            console.error(`Template loading error for ${templateName}:`, error);
            throw new Error(`Failed to load template ${templateName}: ${error.message}`);
        }
    }

    async sendMail(to, subject, html) {
        try {
            const mailOptions = {
                from: {
                    name: config.email.fromName,
                    address: config.email.fromEmail
                },
                to,
                subject,
                html
            };

            console.log(`Attempting to send email to: ${to}`);
            const result = await this.transporter.sendMail(mailOptions);
            console.log(`Email sent successfully to ${to}, Message ID: ${result.messageId}`);
            return { success: true, messageId: result.messageId };
        } catch (error) {
            console.error(`Failed to send email to ${to}:`, error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    async sendContactEmails(data) {
        try {
            const { firstName, lastName, email, phone, message } = data;

            console.log('Sending contact emails for:', { firstName, lastName, email });

            // Get current date and time
            const now = new Date();
            const submissionDate = now.toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            const submissionDateTime = now.toLocaleString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });

            // Admin email
            const adminHtml = await this.loadTemplate('adminContact.html', {
                firstName,
                lastName,
                email,
                phone,
                message,
                submissionDate,
                submissionDateTime
            });

            // Client email
            const clientHtml = await this.loadTemplate('clientContact.html', {
                firstName
            });

            const adminResult = await this.sendMail(
                config.email.adminEmail,
                `${config.email.subjects.contactAdmin} - ${firstName} ${lastName} (${submissionDate})`,
                adminHtml
            );

            const clientResult = await this.sendMail(
                email,
                `${config.email.subjects.contactClient}, ${firstName}!`,
                clientHtml
            );

            return {
                admin: adminResult,
                client: clientResult
            };
        } catch (error) {
            console.error('Error in sendContactEmails:', error);
            throw error;
        }
    }

    async sendNewsletterEmails(email) {
        try {
            const subscriptionDate = new Date().toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            const subscriptionDateTime = new Date().toLocaleString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });

            console.log('Sending newsletter emails for:', email);

            // Admin email
            const adminHtml = await this.loadTemplate('adminNewsletter.html', {
                email,
                subscriptionDate,
                subscriptionDateTime
            });

            // Client email
            const clientHtml = await this.loadTemplate('clientNewsletter.html', {});

            const adminResult = await this.sendMail(
                config.email.adminEmail,
                `${config.email.subjects.newsletterAdmin} (${subscriptionDate})`,
                adminHtml
            );

            const clientResult = await this.sendMail(
                email,
                config.email.subjects.newsletterClient,
                clientHtml
            );

            return {
                admin: adminResult,
                client: clientResult
            };
        } catch (error) {
            console.error('Error in sendNewsletterEmails:', error);
            throw error;
        }
    }
}

module.exports = new EmailService();