# Trazler - Hotel Booking Application

Trazler is a full-stack hotel booking application that provides users with a seamless experience to discover, book, and manage hotel reservations. Built with modern web technologies, it offers a responsive design and secure authentication system.

## 📋 Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### User Authentication
- Secure user registration and login with JWT tokens
- Email verification with OTP system
- Password reset functionality
- Session management with HTTP-only cookies

### Hotel Management
- Browse available hotels and rooms
- View exclusive offers and deals
- Responsive hotel cards with ratings and amenities
- Search functionality with destination filtering

### User Experience
- Modern, responsive UI built with Tailwind CSS
- Toast notifications for user feedback
- Loading animations and smooth transitions
- Mobile-first design approach

## 🛠 Technologies Used

### Frontend (Client)
- **React 19** - Modern UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### Backend (Server)
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Nodemailer** - Email sending service
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Trazler/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images, icons, and static files
│   │   ├── components/    # Reusable React components
│   │   │   ├── authPage/  # Authentication components
│   │   │   ├── homePage/  # Home page components
│   │   │   ├── ui/        # UI components
│   │   │   └── userPage/  # User profile components
│   │   ├── context/       # React Context providers
│   │   ├── data/          # Dummy data and constants
│   │   ├── pages/         # Page components
│   │   └── App.jsx        # Main application component
│   ├── package.json
│   └── vite.config.js
├── server/                # Backend Express application
│   ├── config/           # Configuration files
│   ├── controller/       # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── package.json
│   └── index.js          # Server entry point
├── .gitignore
├── LICENSE
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/trazler.git
   cd Trazler
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables**
   
   Create `.env` file in the server directory:
   ```env
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   PORT=5000
   SMTP_USER=your_smtp_username
   SMTP_PASS=your_smtp_password
   SENDER_EMAIL=your_sender_email
   ```
   
   Create `.env` file in the client directory:
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```

5. **Start the development servers**
   
   Terminal 1 (Server):
   ```bash
   cd server
   npm run dev
   ```
   
   Terminal 2 (Client):
   ```bash
   cd client
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `POST /logout` - User logout
- `GET /is-auth` - Check authentication status
- `POST /send-verification-email` - Send verification OTP
- `POST /verify-account` - Verify user account
- `POST /send-reset-otp` - Send password reset OTP
- `POST /reset-password` - Reset user password

### User Routes (`/api/user`)
- `GET /data` - Get user profile data

## 🔧 Environment Variables

### Server Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URL` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `NODE_ENV` | Environment (development/production) | Yes |
| `PORT` | Server port number | No (default: 5000) |
| `SMTP_USER` | SMTP username for email service | Yes |
| `SMTP_PASS` | SMTP password for email service | Yes |
| `SENDER_EMAIL` | Email address for sending emails | Yes |

### Client Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BACKEND_URL` | Backend API base URL | Yes |

## 📜 Scripts

### Client Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server Scripts
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- UI inspiration from modern hotel booking platforms
- Built with love by [Dulal Shikdar](https://github.com/dulalshikdar)

---

**Happy Booking! 🏨✈️**
