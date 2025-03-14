# Mangia - AI-Powered Cooking & Recipe App

Mangia is a modern cooking and recipe platform that combines AI-powered features with a user-friendly interface to make cooking more enjoyable and accessible.

## Features

- 🍳 Dynamic Recipe Feed
- 📝 Detailed Recipe Pages
- 📅 Meal Planning Tools
- 🛒 Smart Grocery Lists
- 🏆 Achievement System
- 👤 User Profiles
- ⭐ Premium Features

## Tech Stack

- React
- TypeScript
- Firebase (Authentication, Firestore, Storage)
- Chakra UI
- React Router

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mangia.git
   cd mangia
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a Firebase project and get your configuration:
   - Go to the Firebase Console
   - Create a new project
   - Enable Authentication, Firestore, and Storage
   - Get your Firebase configuration object

4. Create a `.env` file in the root directory and add your Firebase configuration:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

5. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── contexts/       # React contexts
  ├── firebase/      # Firebase configuration
  ├── pages/         # Page components
  ├── styles/        # Global styles
  ├── types/         # TypeScript types
  └── utils/         # Utility functions
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
