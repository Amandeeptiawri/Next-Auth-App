# Next.js Authentication with NextAuth.js & Redux Toolkit

This project provides a **secure authentication system** using **Next.js, NextAuth.js, and Redux Toolkit**. It supports **Google authentication** and **credentials-based login**, with a user-friendly dashboard and session management.

## Features
-  **Authentication with NextAuth.js** (Google & credentials-based login).
-  **Redux Toolkit for global session state management**.
-  **Secure session storage with cookies**.
-  **Dashboard displaying user session details**.
-  **Logout functionality to clear session and redirect to login**.
-  **Modern and responsive UI using TailwindCSS**.
-  **Error handling for authentication failures**.

## Getting Started

### 1️ Clone the Repository
```sh  
git clone https://github.com/Amandeeptiawri/Next-Auth-App.git  
cd next-auth-app 
```

### 2️ Install Dependencies
```sh  
npm install  
```

### 3️ Configure Environment Variables
Create a `.env.local` file in the project root and add:  
```
NEXTAUTH_SECRET=your-secret-key  
GOOGLE_CLIENT_ID=your-google-client-id  
GOOGLE_CLIENT_SECRET=your-google-client-secret  
```
Replace the placeholders with your actual credentials.

### 4️ Run the Development Server
```sh  
npm run dev  
```
Now, open **`http://localhost:3000`** to test the authentication flow.

## Authentication Flow
1. Users can **log in with Google** or **enter credentials** (mock email: `amandeep@test.com`, password: `password`).  
2. Upon successful login, the user is redirected to the **dashboard**, where session details are displayed.  
3. The session is **persisted globally using Redux Toolkit**, ensuring a smooth experience.  
4. Users can **log out**, which clears the session and redirects them back to the login page.  

## Deployment
To deploy this project, ensure your **environment variables** are correctly set up and deploy to **Vercel, Netlify, or any Next.js-compatible hosting service**.
