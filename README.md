# 🐉 Dragon News - Modern News Portal

Dragon News is a high performance, responsive news application built with **Next.js**. It delivers timely updates across various categories, ensuring a seamless and fast reading experience for users. The project leverages **Better Auth** for robust authentication and **MongoDB** for scalable data management.

### 🔗 Live Demo: [Dragon News](https://dragon-news-lilac.vercel.app)

## 🚀 Features

- **Real time News:** Stay updated with the latest headlines and breaking news.
- **Dynamic Categories:** Seamlessly navigate through categories like International, Sports, Entertainment, and more.
- **Secure Authentication:** Integrated **Better Auth** supporting:
  - Google & GitHub Social Login
  - Traditional Email/Password access
- **Responsive UI:** Built with **Tailwind CSS** for a pixel perfect experience on all devices.
- **Modern Tech Stack:** Developed using Next.js (App Router) for optimal performance and SEO.
- **Interactive Toasts:** Clean notifications using `react-hot-toast`.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** [Better Auth](https://www.better-auth.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **State Management & Data Fetching:** React Hooks & Server Components
- **Icons & Animations:** React Icons & CSS Animations

## 📦 Getting Started

### Prerequisites

Make sure you have Node.js and npm/yarn installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   https://github.com/Redwanhossain200/dragon-news-next.git

2. **Change Directory:**

   ```bash
   cd dragon-news-next

3. **Install dependencies:**

   ```bash
   npm install

4. **Set up Environment Variables:**

   ```Code snippet
   MONGODB_URI=your_mongodb_uri
   
   BETTER_AUTH_URL=http://localhost:3000
   BETTER_AUTH_SECRET=your_secret_key
   
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret

5. **Run the development server:**

   ```bash
   npm run dev

## 📁 Project Structure
```Plaintext
├── src
│   ├── app          # Next.js App Router (Pages & APIs)
│   ├── components   # Reusable UI Components
│   ├── lib          # Auth, Database & Helper functions
│   └── assets       # Images and Static files
├── public           # Static assets
├── .env             # Environment variables (private)
└── next.config.mjs  # Next.js configuration

