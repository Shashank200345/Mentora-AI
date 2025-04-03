# Shiksha Saarthi - AI-Powered Learning Platform

A modern, interactive learning platform built with Next.js, TypeScript, and Tailwind CSS. This project features beautiful UI components, smooth animations, and an AI-powered learning experience.

## Features

- 🎨 Modern UI with beautiful animations
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js
- 🎯 Interactive learning components
- 🤖 AI-powered features
- 🎭 Smooth transitions and hover effects

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Tabler Icons
- **State Management:** React Hooks

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm or yarn package manager
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shiksha-saarthi.git
   cd shiksha-saarthi
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── magicui/      # Special UI effects
│   └── ...          # Other components
├── lib/             # Utility functions
├── styles/          # Global styles
└── app/             # Next.js app directory
```

## Dependencies

Here are the main dependencies used in this project:

```json
{
  "dependencies": {
    "@radix-ui/react-icons": "^1.3.0",
    "@tabler/icons-react": "^2.47.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.3",
    "next": "14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^2.2.1",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20.11.16",
    "@types/react": "^18.2.52",
    "@types/react-dom": "^18.2.18",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3"
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Aceternity UI](https://ui.aceternity.com/) for inspiration
- [Framer Motion](https://www.framer.com/motion/) for animations 