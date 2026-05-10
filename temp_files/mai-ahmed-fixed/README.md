# Mai & Ahmed Wedding Invitation

## Project Overview
This repository hosts a beautifully crafted digital wedding invitation for Mai and Ahmed. Designed with a focus on elegance and interactivity, this single-page application guides guests through a delightful experience, from an animated loading screen to an interactive envelope opening, culminating in a detailed invitation page with essential event information and engaging elements.

## Features
- **Interactive User Flow**: A seamless transition from a loading screen to an interactive envelope, and finally to the main invitation.
- **Personalized Invitation**: Displays key wedding details including date, location, and a personalized message.
- **Countdown Timer**: A dynamic countdown to the wedding day, building anticipation.
- **Location Integration**: Easy access to the wedding venue location via Google Maps.
- **Dress Code Information**: Clearly communicates the suggested dress code.
- **Engaging Maze Game**: An optional interactive maze game that reveals hidden content upon completion, adding a unique touch.
- **Music Toggle**: Allows guests to control background music for a customized experience.
- **Responsive Design**: Optimized for various devices, ensuring a consistent and pleasant viewing experience on desktops, tablets, and mobile phones.

## Technologies Used
This project is built using a modern web development stack to ensure a fast, responsive, and maintainable application:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that provides an excellent development experience.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Framer Motion**: A production-ready motion library for React, used for animations and interactive elements.
- **Lucide React**: A collection of beautiful and customizable open-source icons.

## Getting Started
To get a local copy up and running, follow these simple steps.

### Prerequisites
Ensure you have Node.js (version 18 or higher) and pnpm installed on your system.

```bash
npm install -g pnpm
```

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Rawdaa-A/mai-ahmed.git
   cd mai-ahmed
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Project
To run the project in development mode:

```bash
pnpm dev
```

This will start the development server, and you can view the application in your browser, usually at `http://localhost:3000`.

### Building for Production
To build the project for production:

```bash
pnpm build
```

This command will generate optimized static assets in the `dist/public` directory.

## Deployment
This project is configured for deployment on platforms like Netlify or GitHub Pages. The `vite.config.ts` includes a `base: "/Wedding-Invitation/"` setting, which is crucial for correct asset resolution when deployed to a subpath, such as GitHub Pages.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please feel free to open an issue or submit a pull request.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
For any inquiries or feedback, please reach out through GitHub issues.
