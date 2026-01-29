# 🎵 YouTube Music Regions

A modern React application for comparing the top 10 most popular music videos across different regions worldwide. Built with Vite, TypeScript, and beautiful glassmorphism UI design.

## Features

- **Side-by-Side Comparison**: Compare top music videos from two different regions simultaneously
- **15 Regions**: Support for US, UK, Canada, Australia, Germany, France, Japan, South Korea, Brazil, Mexico, India, Italy, Spain, Netherlands, and Sweden
- **Real-Time Data**: Fetches live data from YouTube API via backend service
- **Modern UI**: Dark mode with glassmorphism effects, rounded cards, and smooth animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **CSS3** - Glassmorphism and animations

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API server running (serving YouTube API data)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy the example environment file and update the API URL if needed:

```bash
cp .env.example .env
```

Edit `.env` to point to your backend API:

```
VITE_API_BASE_URL=http://localhost:3000
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── ComparisonView.tsx
│   ├── RegionSelector.tsx
│   ├── VideoCard.tsx
│   └── *.css
├── services/           # API service layer
│   └── api.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── hooks/              # Custom React hooks (future)
├── utils/              # Utility functions (future)
├── App.tsx             # Main app component
├── App.css
├── index.css           # Global styles
└── main.tsx            # Entry point
```

## Backend API Requirements

The frontend expects a backend API with the following endpoint:

**GET** `/api/videos/top?regionCode={code}`

Response format:
```json
{
  "videos": [
    {
      "id": "video_id",
      "title": "Video Title",
      "channelTitle": "Channel Name",
      "thumbnailUrl": "https://...",
      "viewCount": "1000000",
      "publishedAt": "2024-01-01T00:00:00Z",
      "videoUrl": "https://youtube.com/watch?v=..."
    }
  ],
  "regionCode": "US"
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Styling

The application uses a custom dark theme with:
- **Gradient background**: Deep blue to purple tones
- **Glassmorphism**: Frosted glass effect on cards and UI elements
- **Rounded corners**: 12-16px border radius for modern look
- **Smooth transitions**: 0.3s ease transitions
- **Custom scrollbar**: Styled to match the theme

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
