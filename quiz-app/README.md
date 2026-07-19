# AZ-900 Practice Quiz App

A modern, interactive quiz application for Microsoft Azure AZ-900 (Microsoft Azure Fundamentals) exam preparation. Built with React, Vite, and TailwindCSS.

## Features

- **483 Practice Questions** - Comprehensive coverage of AZ-900 exam topics
- **Sequential Learning** - Study questions in order, perfect for systematic preparation
- **Start from Any Question** - Resume from where you left off or jump to specific topics
- **Progress Tracking** - Automatic save/load progress using local storage
- **Immediate Feedback** - Check answers instantly with explanations
- **Celebratory Animations** - Emoji blast animations for correct answers 🎉
- **Detailed Explanations** - Learn why answers are correct/incorrect
- **Modern UI** - Clean, responsive design with TailwindCSS
- **Practice Mode** - Radio-button style selection with instant verification

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Navigate to the quiz-app directory:
```bash
cd quiz-app
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5174/` (or similar port).

## Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How to Use

1. **Select Number of Questions** - Choose from preset options (5, 10, 20, 50, 100, 200, All) or enter a custom number
2. **Set Starting Point** - Enter a question number to start from (useful for resuming study)
3. **Start Quiz** - Click "Start Quiz" to begin
4. **Answer Questions** - Select one answer per question (radio button style)
5. **Check Answer** - Click "Check Answer" to see if you're correct
6. **Review Explanation** - Read the detailed explanation after each answer
7. **Continue** - Click "Next" to move to the next question
8. **View Results** - See your final score and review all answers

## Progress Saving

The app automatically saves your progress as you complete questions. When you return, the "Start from Question" field will show your last position. Use "Reset Progress" to start fresh.

## Question Data

Questions are parsed from `AZ-900-Questions-Answers-Explained.md` and stored in `questions.json`. To update questions:

1. Edit the markdown file
2. Run the parser:
```bash
python ../parse_questions.py
```
3. Copy the updated JSON:
```bash
copy ..\questions.json public\questions.json
```

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **PostCSS** - CSS processing
- **JavaScript** - Logic and interactivity

## Project Structure

```
quiz-app/
├── public/
│   └── questions.json    # Parsed quiz questions
├── src/
│   ├── App.jsx           # Main quiz component
│   ├── App.css           # TailwindCSS directives
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # TailwindCSS configuration
└── vite.config.js        # Vite configuration
```

## License

This project is for educational purposes for AZ-900 exam preparation.
