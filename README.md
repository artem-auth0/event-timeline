# News Feed Application

A modern news feed application built with Next.js and shadcn/ui components, featuring real-time news updates, article details, and theme customization.

## Features & Functionality

### Real-time News Feed

- 📰 Live updates of news articles and events
- ♾️ Infinite scrolling for seamless content loading
- 🔄 Automatic refresh of content every 60 seconds
- 📱 Responsive grid layout adapting to all screen sizes

### Article Details

- 📊 Sentiment analysis showing article tone (positive/negative/neutral)
- 📍 Location information for news sources
- 🏢 Company mentions and stock symbols
- 🏷️ Category tags for easy classification
- 📅 Publication date and source information
- 🔗 Direct links to original articles

### User Experience

- 🎨 Light/Dark mode theme support
- 💫 Smooth animations and transitions
- 🔍 Detailed article view in a sliding panel
- 📱 Mobile-first responsive design
- ⚡ Fast loading with optimized images
- ♿ Accessibility features for screen readers

### Technical Features

- 🔄 Real-time data updates
- 🎯 Event-driven architecture
- 📊 Data visualization for sentiment analysis
- 🛡️ Type-safe development with TypeScript
- 🎨 Customizable theming system
- 🧩 Modular component architecture

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/artem-auth0/event-timeline.git
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

```env
PERIGON_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React Framework
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations

## Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linting
yarn lint
```

## Deployment

The easiest way to deploy this application is through [Vercel](https://vercel.com):

1. Push your code to a Git repository
2. Import your repository to Vercel
3. Add your environment variables
4. Deploy!

## Theme Customization

The application uses CSS variables for theming. You can customize the theme by modifying the variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 47.4% 11.2%;
  /* ... other variables */
}

.dark {
  --background: 224 71% 4%;
  --foreground: 213 31% 91%;
  /* ... other variables */
}
```

## License

MIT

## Author

Artem Zozulia
