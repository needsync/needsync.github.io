# 🚀 NeedSync Portfolio Website

> NeedSynq is a modern technology solutions company focused on delivering digital services tailored to client needs. The company specializes in creating efficient, innovative, and user-centered solutions for businesses, organizations, and individuals.

> The name NeedSynq represents the synchronization of client needs with smart technology solutions — ensuring every project is aligned with quality, functionality, and innovation.

---

# 📸 Preview

## Homepage

![Homepage Preview](./assets/hero-page.png)

```txt
Live Demo: https://neoodev.github.io/Needsync
```

---

# 🛠 Tech Stack

## ⚛️ React

React is a JavaScript library for building interactive user interfaces using reusable components.

### Why React?

- Component-based architecture
- Reusable UI logic
- Virtual DOM for fast rendering
- Large ecosystem and community support

Documentation:
https://react.dev/

---

## 🔷 TypeScript

TypeScript is a strongly typed programming language built on top of JavaScript.

### Why TypeScript?

- Static type checking
- Better IDE support
- Improved maintainability
- Safer and scalable codebase

Documentation:
https://www.typescriptlang.org/docs/

---

## 🎨 Tailwind CSS

Tailwind CSS is a utility-first CSS framework for rapidly building modern user interfaces.

### Why Tailwind CSS?

- Utility-first workflow
- Faster styling
- Responsive design utilities
- Easy customization

Documentation:
https://tailwindcss.com/docs

---

## ⚡ Vite

Vite is a modern frontend build tool optimized for speed and developer experience.

### Why Vite?

- Instant development server
- Fast Hot Module Replacement (HMR)
- Optimized builds
- Minimal configuration

Documentation:
https://vitejs.dev/

---

## 🔄 GitHub Actions

GitHub Actions automates workflows directly inside GitHub repositories.

### Used For

- CI/CD pipelines
- Automated deployments
- Build testing
- GitHub Pages deployment

Documentation:
https://docs.github.com/en/actions

---

## 📦 GitHub Workflow

GitHub Workflows define automation pipelines using YAML files.

### Workflow Features

- Auto deploy on push
- Continuous Integration
- Continuous Deployment
- Automated production builds

Documentation:
https://docs.github.com/en/actions/writing-workflows

---

# 🧠 React Architecture

## 🪝 React Hooks

Hooks allow functional components to manage state and lifecycle behavior.

### Common Hooks Used

| Hook          | Purpose                               |
| ------------- | ------------------------------------- |
| `useState`    | Manage component state                |
| `useEffect`   | Handle side effects                   |
| `useRef`      | Access DOM elements or mutable values |
| `useMemo`     | Optimize expensive calculations       |
| `useCallback` | Memoize functions                     |
| `useContext`  | Share global state                    |

Example:

```tsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default Counter;
```

Documentation:
https://react.dev/reference/react

---

## 🧩 Components

Components are reusable building blocks of the application UI.

### Component Structure Example

```bash
src/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── common/
```

### Example Component

```tsx
type ButtonProps = {
  title: string;
};

const Button = ({ title }: ButtonProps) => {
  return (
    <button className="px-4 py-2 rounded bg-black text-white">{title}</button>
  );
};

export default Button;
```

---

## 📌 Constants

Constants store reusable static values like navigation links, configurations, and metadata.

### Example

```ts
export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];
```

### Recommended Folder

```bash
src/constants/
```

---

## 🧾 Types

Types define the shape of data structures and component props.

### Example Type

```ts
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};
```

### Recommended Folder

```bash
src/types/
```

---

# 📂 Project Structure

```bash
portfolio-project/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── pages/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

# 🖥 Local Development Setup

## 1. Fork the Repository

Click the **Fork** button on GitHub to create your own copy of the repository.

---

## 2. Clone the Repository

```bash
git clone https://github.com/Neoodev/Needsync.git
```

---

## 3. Navigate to the Project Folder

```bash
cd your-repository
```

---

## 4. Install Dependencies

```bash
npm install
```

---

## 5. Start Development Server

```bash
npm run dev
```

The project will run locally at:

```txt
http://localhost:5173
```

---

# 🌿 Git Workflow Guide

## Pull Latest Changes

```bash
git pull origin main
```

---

## Create a New Branch

```bash
git checkout -b feature/your-feature-name
```

Example:

```bash
git checkout -b feature/navbar-animation
```

---

## Check Current Branch

```bash
git branch
```

---

## Add Changes

```bash
git add .
```

---

## Commit Changes

```bash
git commit -m "Add responsive navbar animation"
```

---

## Push Branch to GitHub

```bash
git push origin feature/your-feature-name
```

---

## Create Pull Request

1. Go to your GitHub repository
2. Open **Pull Requests**
3. Click **New Pull Request**
4. Compare your branch with `main`
5. Submit the pull request

---

# 📦 Build for Production

```bash
npm run build
```

Production files will be generated inside:

```bash
dist/
```

---

# 🚀 Deployment

This project uses GitHub Actions for automated deployment to GitHub Pages.

## Example Deployment Workflow

```yaml
name: Deploy Portfolio

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install Dependencies
        run: npm install

      - name: Build Project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

# 📜 Available Scripts

## Run Development Server

```bash
npm run dev
```

---

## Build Project

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

# ✨ Features

- Responsive Design
- Modern UI/UX
- TypeScript Support
- Reusable Components
- React Hooks Architecture
- Tailwind Utility Styling
- GitHub Pages Deployment
- CI/CD Automation
- Mobile Responsive Layout
- Fast Performance with Vite

---

# 📄 Environment Requirements

- Node.js >= 18
- npm >= 9

Check versions:

```bash
node -v
npm -v
```

---

# 🤝 Contributing

Contributions are welcome.

## Contribution Steps

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push branch
5. Open a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed by **NeedSync Developers**

GitHub:
https://github.com/Neooodev

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
