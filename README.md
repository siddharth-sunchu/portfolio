# React Portfolio Website

## Prerequisites
- Node.js v20.x
- npm/yarn

## Setup
```bash
# Clone repository
git clone https://github.com/siddharth-sunchu/portfolio.git
cd portfolio

# Install Node.js v20 (if using nvm)
nvm install 20
nvm use 20

# Install dependencies
npm install
```

## Development
```bash
# Start development server
npm run start
```
Visit http://localhost:3000

## Making Changes
1. Create a new branch
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes
3. Test locally using `npm run start`

## Deployment
```bash
# Build and deploy to GitHub Pages
npm run deploy
```

## Verification
1. Check GitHub Actions tab for deployment status
2. Wait 2-5 minutes
3. Visit https://shalmalipatil.com to verify changes

## Project Structure
```
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.js
│   └── index.js
└── package.json
```