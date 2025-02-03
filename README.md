# Barbershop
Barbershop is a modern platform designed to streamline barbershop scheduling and management. With an intuitive interface, it enables customers to efficiently book appointments, manage schedules, and optimize service operations. The platform also supports authentication via Google and provides a seamless user experience across devices.

## 📌 Features

- 📅 **Appointment Scheduling** - Efficiently book, reschedule, and cancel appointments.  
- 💈 **Schedule Management** - Optimize service timings without overlaps.  
- 🔐 **Google Authentication** - Secure login via OAuth.

## 🚀 How to Run

### 1️⃣ Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2️⃣ Installation

To set up the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/cmtavares/barbershop.git
cd barbershop

# Install dependencies
npm install  # or yarn install
```

### 3️⃣ Configuration

Create a `.env` file in the project's root directory and configure the required environment variables. Example:

```ini
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"

# Google OAuth
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# NextAuth
NEXTAUTH_SECRET="your_nextauth_secret"
```

### 4️⃣ Running the Project

To start the project in development mode:

```bash
npm run dev  # or yarn dev
```

The project will be available at: [http://localhost:3000](http://localhost:3000) 🚀

### 5️⃣ Building for Production

To generate an optimized production version:

```bash
npm run build
npm start
```

## 🛠️ Technologies Used

This project was developed using the following technologies:

- **Next.js** - Modern and efficient React framework.
- **TypeScript** - Static typing for better security and productivity.
- **Tailwind CSS** - Responsive and minimalist styling.
- **Prisma** - Powerful ORM for databases.
- **ESLint & Prettier** - Code quality and standardization.
- **NextAuth.js** - Authentication management.
- **Google OAuth** - Secure login with Google.
