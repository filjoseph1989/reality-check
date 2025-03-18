# Reality Check - Next.js Project

[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?logo=next.js)](https://nextjs.org)
[![Deployed with Vercel](https://img.shields.io/badge/deployed%20with-vercel-000000.svg?logo=vercel)](https://vercel.com)

A modern web application built with Next.js 14, optimized for performance and developer experience. This project leverages features like the App Router, Server Components, and the Geist font family.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Prerequisites

- Node.js 18.15+ (recommended LTS version)
- npm / Yarn / pnpm / Bun
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/filjoseph1989/reality-check.git
   cd reality-check
   ```

2. Install dependencies:
   ```bash
   npm install  # or yarn | pnpm | bun install
   ```

## Getting Started

Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-reload on changes.

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Create a production build
- `npm run start`: Start the production server (after building)
- `npm run lint`: Run ESLint for code quality checks
- `npm run test`: Run Jest tests (if configured)

## Environment Variables

Create a `.env.local` file to define environment variables:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
# Server-side variables (not exposed to client):
DATABASE_URL=your_db_url
```

**Note:** Prefix client-side variables with `NEXT_PUBLIC_`. See [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables).

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/filjoseph1989/reality-check)

This project is optimized for Vercel. Follow these steps:
1. Push changes to a Git repository
2. Import the repository into Vercel
3. Automatic deployments will trigger on `git push`

### Other Platforms
For alternative hosting (Netlify, AWS, etc.), build the project first:
```bash
npm run build
```
Then deploy the contents of the `.next` folder.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feat/your-feature`)
5. Open a Pull Request

Ensure all code passes linting and tests before submitting.

## License

[MIT License](LICENSE) (Replace with your project's actual license)

## Acknowledgements

- Built with [Next.js](https://nextjs.org)
- Fonts powered by [Geist](https://vercel.com/font)
- Deployment support by [Vercel](https://vercel.com)
