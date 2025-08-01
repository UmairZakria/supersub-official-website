# SuperSub Officials - IPTV Service Platform

A comprehensive IPTV (Internet Protocol Television) service platform that provides streaming services with user authentication, subscription plans, and admin management system.

![SuperSub Officials Homepage](/image.png)

## 🚀 Project Overview

SuperSub Officials is a full-stack web application that offers IPTV subscription services. The platform allows users to:
- Browse and select subscription plans based on their country
- Register and login with secure authentication
- Access different streaming packages with multiple device connections
- Contact support through various channels
- Admin panel for service management

## 🏗️ Architecture

The project consists of two main parts:

### Frontend (React + Vite)
- **Technology Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- **Key Features**: 
  - Responsive design with modern UI/UX
  - Smooth scrolling with Lenis
  - Typewriter effects and animations
  - Country-based pricing and currency conversion
  - Protected routes and authentication
  - WhatsApp integration for customer support

### Backend (Node.js + Express)
- **Technology Stack**: Node.js, Express, MongoDB, JWT, bcrypt
- **Key Features**:
  - User authentication and authorization
  - Admin panel management
  - Country-based pricing system
  - Payment processing integration
  - Database management with MongoDB

## 📁 Project Structure

```
super/
├── Frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Images, videos, fonts
│   │   └── App.jsx         # Main application component
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── Backend/                 # Node.js backend server
│   ├── models/             # MongoDB schemas
│   ├── index.js            # Main server file
│   └── package.json        # Backend dependencies
└── README.md               # This file
```

## 🛠️ Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd super
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

#### Environment Configuration
Create a `.env` file in the Backend directory (optional - the project uses hardcoded MongoDB connection):

```env
MONGODB_URI=mongodb+srv://your-connection-string
JWT_SECRET=your-secret-key
PORT=5000
```

#### Start Backend Server

```bash
# Development mode
npm start

# Or with nodemon for auto-restart
npx nodemon index.js
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd Frontend
npm install
```

#### Start Frontend Development Server

```bash
npm run dev
```

The frontend application will run on `http://localhost:5173`

## 🔧 Configuration

### Backend Configuration

The backend uses the following default configurations:
- **Port**: 5000
- **Database**: MongoDB Atlas
- **JWT Secret**: "Umair"
- **CORS**: Enabled for all origins

### Frontend Configuration

The frontend is configured with:
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API calls

## 📱 Features

### User Features
- **Country Selection**: Choose your country for localized pricing
- **Subscription Plans**: Multiple plans with different device connections
- **User Authentication**: Secure login/signup with JWT
- **Dashboard**: User dashboard with subscription details
- **Contact Support**: Multiple contact methods including WhatsApp

### Admin Features
- **Admin Panel**: Complete admin dashboard
- **User Management**: View and manage user accounts
- **Subscription Management**: Handle subscription requests
- **Payment Processing**: Integrated payment system

### Technical Features
- **Responsive Design**: Works on all devices
- **Smooth Animations**: Framer Motion animations
- **SEO Optimized**: Meta tags and structured data
- **Security**: JWT authentication, bcrypt password hashing
- **Real-time Updates**: Live data updates

## 🗄️ Database Schema

The application uses MongoDB with the following main collections:
- **Users**: User accounts and subscription data
- **Admin**: Admin user management
- **Countries**: Country-specific pricing and settings
- **Connections**: Device connection management
- **AdminBank**: Payment processing data

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:
- **User Tokens**: Valid for 5 hours
- **Admin Tokens**: Valid for 15 minutes
- **Secure Routes**: Protected routes for authenticated users

## 🌍 Country Support

The platform supports multiple countries with localized pricing:
- United States (USD)
- United Kingdom (GBP)
- Ireland (EUR)
- Australia (AUD)
- Canada (CAD)
- Germany (EUR)
- UAE (AED)
- Qatar (QAR)
- Malaysia (MYR)
- Pakistan (PKR)

## 📞 Support Integration

- **WhatsApp**: Direct customer support integration
- **Email**: Contact form with EmailJS
- **Live Chat**: Real-time customer support

## 🚀 Deployment

### Frontend Deployment
```bash
cd Frontend
npm run build
```
The built files will be in the `dist` folder, ready for deployment.

### Backend Deployment
The backend is configured for deployment on Vercel with the `vercel.json` configuration file.

## 🔧 Available Scripts

### Frontend Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend Scripts
```bash
npm start            # Start the server
npm test             # Run tests (if configured)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Contact

For support or inquiries:
- **Website**: [SuperSub Officials](https://supersubofficials.com)
- **WhatsApp**: Available through the website
- **Email**: Contact through the website form

## 🛡️ Security

- Passwords are hashed using bcrypt
- JWT tokens for secure authentication
- CORS protection
- Input validation and sanitization
- Secure MongoDB connection

## 🔄 Updates and Maintenance

The project includes:
- Automatic dependency updates
- Security patches
- Performance optimizations
- Feature enhancements

---

**Note**: This is a commercial IPTV service platform. Make sure to comply with all local laws and regulations regarding streaming services in your jurisdiction. 