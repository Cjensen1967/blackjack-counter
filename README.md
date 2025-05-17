
# CountSight Trainer

CountSight Trainer is a web application designed to help users practice and improve their Hi-Lo card counting skills, a common strategy used in blackjack. The app presents a series of card hands, and users must quickly calculate the Hi-Lo count.

## Features

*   **Hi-Lo Card Counting Practice:** Drills users on the Hi-Lo card counting system.
*   **Visual Card Display:** Shows a hand of 12 playing cards per drill.
*   **Custom SVG Card Images:** Utilizes clear, custom SVG images for playing cards, stored in `public/images/cards/`.
*   **Progressive Timed Mode:** Cards initially display for 10 seconds before vanishing, but the time decreases by 200ms after each correct answer, challenging users to improve their speed over time. A reset option allows returning to the initial time limit.
*   **Immediate Feedback:** Users enter their calculated count and receive instant feedback on whether they were correct or incorrect. The correct count is shown if the user is wrong.
*   **Dark Mode Support:** Toggle between light and dark themes with persistent preference storage.
*   **Casino Theme:** Features a visually appealing casino green felt background for the card display area.
*   **Responsive Design:** Adapts to different screen sizes for a good user experience on desktop and mobile devices.
*   **Modern UI:** Built with ShadCN UI components and Tailwind CSS for a clean and modern look.

## Technology Stack

*   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **State Management:** React Hooks (`useState`, `useEffect`, `useCallback`)
*   **Fonts:** Geist Sans

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository (if applicable) or download the project files.**

2.  **Navigate to the project directory:**
    ```bash
    cd path/to/countsight-trainer
    ```

3.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

### Running the Application

1.  **Start the development server:**
    Using npm:
    ```bash
    npm run dev
    ```
    Or using yarn:
    ```bash
    yarn dev
    ```
    The application will be available at `http://localhost:9004` (as per the `dev` script in `package.json`).

2.  Open your browser and navigate to the address provided in your terminal.

## Card Images

The application uses custom SVG images for playing cards.
*   **Location:** `public/images/cards/`
*   **Naming Convention:** `suitname_rankname.svg` (e.g., `hearts_ace.svg`, `clubs_10.svg`, `spades_king.svg`). All names are in lowercase.
    *   Suits: `hearts`, `diamonds`, `clubs`, `spades`
    *   Ranks: `ace`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `jack`, `queen`, `king`

## Project Structure

A brief overview of key directories:
*   `src/app/`: Contains the main Next.js pages and layouts.
*   `src/components/`: Reusable React components.
    *   `src/components/ui/`: ShadCN UI components.
    *   `src/components/CountSightTrainer.tsx`: The core component for the training application.
    *   `src/components/PlayingCard.tsx`: Component responsible for rendering individual cards.
    *   `src/components/ThemeProvider.tsx`: Context provider for theme management.
    *   `src/components/ThemeToggle.tsx`: Button component for switching between light and dark modes.
*   `src/lib/`: Utility functions and libraries.
    *   `src/lib/deck.ts`: Functions related to creating, shuffling, and counting cards.
*   `public/`: Static assets.
    *   `public/images/cards/`: Contains the SVG images for the playing cards.

## Future Enhancements (Potential Ideas)

*   Selectable number of cards per drill.
*   Tracking user progress and statistics.
*   Different counting systems (e.g., KO, Omega II).
*   Multiple decks simulation.
