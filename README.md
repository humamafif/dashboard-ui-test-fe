# Dashboard UI Implementation (Technical Test)

![Tech Stack](https://img.shields.io/badge/Next.js-15-black)
![Tech Stack](https://img.shields.io/badge/Tailwind_CSS-4.0-blue)
![Tech Stack](https://img.shields.io/badge/TypeScript-5.0-blue)

[Live Demo](https://dashboard-ui-test-fe.vercel.app)

This project is a submission for the Frontend Developer Internship technical test in [Inagata](https://hub.inagata.com). It demonstrates the implementation of a responsive, modern dashboard using **Next.js 15 (App Router)** and **Tailwind CSS**.

## 🚀 Features

- **Responsive Layout**: Fully responsive sidebar and header that adapts to mobile, tablet, and desktop screens.
- **Modern UI**: Clean and professional design following the provided mockups/requirements.
- **Atomic Design**: Components are structured for reusability (atoms, molecules, organisms).
- **Custom 404 Page**: A styled "Page Not Found" experience with custom SVG illustrations and smart routing.
  - _Catch-all Logic_: Any broken link within `/dashboard` automatically renders the custom 404 page inside the dashboard layout.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Icons**: Custom SVG Components

## 📂 Project Structure

```bash
app/
├── components/         # Global shared components (Icons, Input, etc.)
├── constants/          # Static data (Menu items, mock data)
├── dashboard/          # Dashboard Module
│   ├── components/     # Dashboard-specific components (Sidebar, Header)
│   ├── [...not_found]/ # Catch-all route for dashboard 404s
│   ├── layout.tsx      # Persistent Dashboard Layout
│   └── page.tsx        # Main dashboard view
└── globals.css         # Global styles & CSS variables
```

## 🏃‍♂️ Getting Started

1.  **Clone the repository** (if applicable)

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Open the application**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Commit Message Convention

This project follows a [Git Commit Style Guide](https://gist.github.com/rishavpandey43/84665ffe3cea76400d8e5a1ad7133a79) to ensure history readability and standardization..
