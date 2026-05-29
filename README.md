# Innovation Hacks — AI Autonomous Smart City Hackathon 🏙️🤖

Welcome to the official repository for the **Innovation Hacks: AI Autonomous Smart City Hackathon** platform! This is a modern, high-performance web application built to host, manage, and showcase global hackathons focused on building the future of smart cities using Artificial Intelligence.

## 🚀 Features

- **Dynamic Event Pages:** Beautiful, responsive, and animated event landing pages.
- **Admin Dashboard:** Secure, authenticated admin portal (`/admin/login`) for managing hackathons.
- **Event Management:** Create, edit, and delete events with dynamic status indicators (Upcoming, Active, Completed).
- **Winners Showcase:** Hall of Fame integration to beautifully display Grand Winners and Runner-Ups with dynamic podium rendering.
- **Modern Aesthetics:** Glassmorphism UI, neon gradients, dark mode default, and smooth micro-animations using Framer Motion.
- **SEO Optimized:** Metadata, dynamic routing, and fast initial page loads.

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Database:** [SQLite](https://sqlite.org/index.html) with [Prisma ORM](https://www.prisma.io/)
- **Styling:** Vanilla CSS Modules with custom CSS variables (Design System)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) and npm installed.

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/your-username/smart-city-hackathon.git
cd smart-city-hackathon
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Setup the Database
Initialize the Prisma SQLite database and generate the Prisma client:
\`\`\`bash
npx prisma generate
npx prisma db push
\`\`\`

### 4. Environment Variables
Create a \`.env\` file in the root of the project and add your admin secret:
\`\`\`env
ADMIN_SECRET=innovation-hacks-admin-2026
\`\`\`

### 5. Run the Development Server
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🔐 Admin Access
To manage events and winners, navigate to:
**URL:** `http://localhost:3000/admin/login`  
**Password:** `innovation-hacks-admin-2026` (or whatever you set in your `.env`)

## 📂 Project Structure

\`\`\`text
src/
├── app/                  # Next.js App Router pages and API routes
│   ├── admin/            # Secure admin dashboard routes
│   ├── api/              # Backend API routes (Events, Winners)
│   ├── events/           # Dynamic public event pages
│   └── globals.css       # Global design system & theme tokens
├── components/           # Reusable UI components
│   ├── layout/           # Navbar, Footer, Admin layouts
│   ├── sections/         # Home page sections (Hero, Judges, etc.)
│   └── ui/               # Buttons, Particle backgrounds, etc.
├── lib/                  # Utilities (Prisma client, Auth wrappers)
└── prisma/               # Database schema
\`\`\`

## 🎨 Design System
The UI relies heavily on global CSS variables defined in \`globals.css\`. To change the primary theme colors (e.g., swapping the neon blue/purple for something else), simply update the root variables:
\`\`\`css
:root {
  --primary: #00D4FF;
  --secondary: #8B5CF6;
  --accent: #06FFA5;
}
\`\`\`

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

---
*Built with ❤️ by the Innovation Hacks Team.*
