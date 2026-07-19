# AZ-900 Practice Quiz App

A modern, interactive quiz application for Microsoft Azure AZ-900 (Microsoft Azure Fundamentals) exam preparation.

## Overview

This project provides a comprehensive practice quiz with 483 questions covering all AZ-900 exam topics. It features a modern React-based interface with immediate feedback, progress tracking, and detailed explanations for each question.

## Features

- **483 Practice Questions** - Complete coverage of AZ-900 exam topics
- **Sequential Learning** - Study questions in order for systematic preparation
- **Flexible Starting Point** - Resume from where you left off or jump to specific topics
- **Progress Tracking** - Automatic save/load progress using local storage
- **Immediate Feedback** - Check answers instantly with explanations
- **Celebratory Animations** - Emoji blast animations for correct answers 🎉
- **Detailed Explanations** - Learn why answers are correct/incorrect
- **Modern UI** - Clean, responsive design with TailwindCSS
- **Practice Mode** - Radio-button style selection with instant verification

## Project Structure

```
azure/
├── quiz-app/              # React application
│   ├── public/
│   │   └── questions.json # Parsed quiz questions
│   ├── src/
│   │   ├── App.jsx        # Main quiz component
│   │   ├── App.css        # TailwindCSS directives
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # Global styles
│   ├── index.html         # HTML template
│   ├── package.json       # Dependencies
│   ├── tailwind.config.js # TailwindCSS configuration
│   └── vite.config.js     # Vite configuration
├── AZ-900-Questions-Answers-Explained.md  # Source questions with explanations
├── AZ-900-Questions-Answers-README.md     # Original questions file
├── parse_questions.py     # Parser script to convert markdown to JSON
├── questions.json         # Parsed questions (output of parser)
└── README.md             # This file
```

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Python 3 (for parsing questions)
- npm or yarn

### Installation

1. Navigate to the quiz-app directory:
```bash
cd quiz-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5174/` (or similar port).

## Updating Questions

If you want to update or modify the questions:

1. Edit the markdown file `AZ-900-Questions-Answers-Explained.md`
2. Run the parser script:
```bash
python parse_questions.py
```
3. Copy the updated JSON to the quiz app:
```bash
copy questions.json quiz-app\public\questions.json
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

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **PostCSS** - CSS processing
- **JavaScript** - Logic and interactivity
- **Python** - Question parsing script

## Building for Production

Create an optimized production build:
```bash
cd quiz-app
npm run build
```

Preview the production build:
```bash
npm run preview
```

## License

This project is for educational purposes for AZ-900 exam preparation.

## Repository

https://github.com/shubhsJadhav95/Quiz_App
