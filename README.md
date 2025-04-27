# Complete User Authentication System

A robust and secure Node.js authentication system with email verification, password reset, JWT tokens, and cloud-based avatar uploads.

## Features

✅ **User Registration**  
- Name, email, password fields
- Avatar upload to Cloudinary
- Password hashing with bcrypt

✅ **Email Verification**  
- OTP generation and validation
- Professional email templates
- Resend OTP functionality
- Welcome email upon verification

✅ **Secure Authentication**  
- JWT access token (expires in 10 minutes)
- Refresh token system
- Automatic token regeneration
- HTTP-only cookies for secure storage

✅ **Password Management**  
- Forgot password flow
- Secure reset link with token
- Professional reset password email template
- Frontend redirect URL with token params

✅ **Security**  
- Protected routes
- Token rotation
- Cookie-based authentication
- Environment variables for sensitive data

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt for password hashing
- Cloudinary for image storage
- Nodemailer for email services
- Multer for file uploads
- Cookie-parser for secure cookies

## Postman Testing

You can test all endpoints using our Postman collection:
[Postman Collection Link](https://.postman.co/workspace/My-Workspace~6cac3378-2854-4d85-8c18-982982f90e73/collection/34254597-3ee2c705-7794-4f4d-8117-0c9dafd0cade?action=share&creator=34254597)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Naveed-Abbasi786/complete-authentication-template.git

Install dependencies:
npm install bcrypt cloudinary cookie-parser cors dotenv express jsonwebtoken mongoose multer nodemailer nodemon

Start the development server:
npm run dev
