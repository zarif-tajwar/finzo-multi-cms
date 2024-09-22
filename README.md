# [Finzo Finance A Landing Page with Multi CMS](https://finzo-multi-cms.vercel.app/)

A dynamic landing page showcasing engaging UI animations and multi-CMS integration using Sanity, Contentful, Strapi and Payload.

frontend/public/videos/showcasing-finzo.mp4

## Table of Contents

- [Built with](#built-with)
- [Installation & running locally](#installation--running-locally)
- [Acknowledgements](#acknowledgements)

## Built with

- **Static Site Generator:** [Next.js](https://nextjs.org)
- **CMS:** [Sanity](https://www.sanity.io/), [Contentful](https://www.contentful.com/), [Strapi](https://strapi.io/), [Payload](https://payloadcms.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## Installation & Running Locally

### Requirements

- Node.js 18.17 or later
- pnpm
- A PostgreSQL Instance (EX: Local server, [Docker Image](https://hub.docker.com/_/postgres), [Neon](https://neon.tech/), etc.)

> All third-party services mentioned above have free tiers.

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/zarif-tajwar/finzo-multi-cms
   ```

2. Install dependencies using pnpm

   ```bash
   pnpm install
   ```

3. Copy [`frontend\.env.example`](./frontend/.env.example) to `frontend\.env`, [`backend\.env.example`](./backend/.env.example) to `backend\.env` and update the variables.

4. Start the development server

   ```bash
   pnpm dev
   ```

## Acknowledgements

- This landing page design was taken from [this figma freebie](https://www.figma.com/community/file/1311612149566576533/finzo-finance-and-bank-website-landing-page-ui-kit). Thanks to its designer [Jayesh Patil](https://www.figma.com/@jayeshpatil) for providing such an awesome design as a freebie.
