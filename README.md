# DevTinder Web

DevTinder is a web application designed to connect developers. It provides a platform to find, connect, and chat with other developers based on their profiles and interests.

## Features

- **User Authentication:** Secure login and registration.
- **Developer Feed:** Browse through profiles of other developers.
- **Connections & Requests:** Send, receive, accept, or reject connection requests.
- **Real-time Chat:** Chat with your connections in real-time.
- **Profile Management:** View and edit your developer profile.
- **Premium Features:** Access premium features (if subscribed).

## Tech Stack

This project is built with a modern React stack:

- **Frontend Framework:** [React 19](https://react.dev/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with [DaisyUI](https://daisyui.com/) components
- **Real-time Communication:** [Socket.IO Client](https://socket.io/)
- **Build Tool:** [Vite](https://vitejs.dev/)

## Project Structure

The project follows a feature-based and route-based structure:

- `src/components/`: Reusable UI components (Navbar, Footer, UserCard, etc.)
- `src/routes/`: Route-specific components and logic (Feed, Login, Profile, Chat, etc.)
  - Each route often includes its component (`.jsx`), loader (`Loader.jsx`), and action (`Action.jsx`) leveraging React Router's data APIs.
- `src/utils/`: Utility functions, constants, Redux store setup, and slices.
- `src/assets/`: Static assets like images.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd devtinder-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

### Building for Production

To create a production build:

```bash
npm run build
```

This will generate a `dist` directory with the compiled assets.

### Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
