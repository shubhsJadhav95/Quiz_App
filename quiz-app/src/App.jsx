import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [loading, setLoading] = useState(true)
  const [score, setScore] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [questionsPerQuiz, setQuestionsPerQuiz] = useState('10')
  const [customQuestions, setCustomQuestions] = useState('')
  const [startFromQuestion, setStartFromQuestion] = useState('1')
  const [originalQuestionStart, setOriginalQuestionStart] = useState(1)
  const [checkedAnswers, setCheckedAnswers] = useState([])
  const [showExplanation, setShowExplanation] = useState(false)

  useEffect(() => {
    // Load saved progress on mount
    const savedProgress = localStorage.getItem('az900_quiz_progress')
    if (savedProgress) {
      const progress = JSON.parse(savedProgress)
      setStartFromQuestion(progress.toString())
    }

    fetch('/questions.json')
      .then(response => response.json())
      .then(data => {
        setQuestions(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading questions:', error)
        setLoading(false)
      })
  }, [])

  const startQuiz = () => {
    let numQuestions
    if (questionsPerQuiz === 'custom') {
      numQuestions = customQuestions ? parseInt(customQuestions) : 10
    } else {
      numQuestions = parseInt(questionsPerQuiz)
    }
    
    const startIndex = parseInt(startFromQuestion) - 1
    const selectedQuestions = questions.slice(
      startIndex, 
      Math.min(startIndex + numQuestions, questions.length)
    )
    setQuestions(selectedQuestions)
    setCurrentQuestion(0)
    setSelectedAnswers(new Array(selectedQuestions.length).fill([]))
    setCheckedAnswers(new Array(selectedQuestions.length).fill(false))
    setShowResults(false)
    setScore(0)
    setShowExplanation(false)
    setOriginalQuestionStart(startIndex + 1)
    setQuizStarted(true)
  }

  const handleAnswerSelect = (optionIndex) => {
    // Single selection mode (radio button style)
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[currentQuestion] = [optionIndex]
    setSelectedAnswers(newSelectedAnswers)
    setShowExplanation(false)
  }

  const handleCheckAnswer = () => {
    const newCheckedAnswers = [...checkedAnswers]
    newCheckedAnswers[currentQuestion] = true
    setCheckedAnswers(newCheckedAnswers)
    setShowExplanation(true)
    
    // Update score immediately
    const userAnswers = selectedAnswers[currentQuestion] || []
    const correctIndices = questions[currentQuestion].correct_answers.map(ans => 
      questions[currentQuestion].options.findIndex(opt => opt === ans)
    ).filter(i => i !== -1)
    
    const isCorrect = userAnswers.length === correctIndices.length &&
                    userAnswers.every(ans => correctIndices.includes(ans))
    
    if (isCorrect) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowExplanation(false)
      // Save progress
      const nextQuestionNumber = originalQuestionStart + currentQuestion + 1
      localStorage.setItem('az900_quiz_progress', nextQuestionNumber.toString())
    } else {
      calculateScore()
      // Clear progress after completing quiz
      localStorage.removeItem('az900_quiz_progress')
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    // Score is already updated during checkAnswer
    setShowResults(true)
  }

  const resetQuiz = () => {
    setQuizStarted(false)
    setShowResults(false)
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setCheckedAnswers([])
    setScore(0)
    setShowExplanation(false)
    setStartFromQuestion('1')
    setOriginalQuestionStart(1)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading questions...</p>
        </div>
      </div>
    )
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">AZ-900 Practice Quiz</h1>
            <p className="text-gray-600">Test your Azure knowledge with {questions.length} practice questions</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Number of Questions:</label>
            <select 
              value={questionsPerQuiz}
              onChange={(e) => {
                setQuestionsPerQuiz(e.target.value)
                setCustomQuestions('')
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="5">5 Questions</option>
              <option value="10">10 Questions</option>
              <option value="20">20 Questions</option>
              <option value="50">50 Questions</option>
              <option value="100">100 Questions</option>
              <option value="200">200 Questions</option>
              <option value="483">All Questions (483)</option>
              <option value="custom">Custom Number</option>
            </select>
            
            {questionsPerQuiz === 'custom' && (
              <input
                type="number"
                min="1"
                max={questions.length}
                value={customQuestions}
                onChange={(e) => setCustomQuestions(e.target.value)}
                placeholder={`Enter number (1-${questions.length})`}
                className="w-full mt-3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Start from Question:</label>
            <input
              type="number"
              min="1"
              max={questions.length}
              value={startFromQuestion}
              onChange={(e) => setStartFromQuestion(e.target.value)}
              placeholder={`Enter starting question (1-${questions.length})`}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-sm text-gray-500 mt-1">Study sequentially from any point (e.g., enter 25 to start from question 25)</p>
          </div>

          <button
            onClick={startQuiz}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl mb-3"
          >
            Start Quiz
          </button>

          <button
            onClick={() => {
              localStorage.removeItem('az900_quiz_progress')
              setStartFromQuestion('1')
            }}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-6 rounded-lg transition duration-200"
          >
            Reset Progress
          </button>
        </div>
      </div>
    )
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100)
    let message = ''
    let bgColor = ''
    
    if (percentage >= 80) {
      message = 'Excellent! You have a strong understanding of Azure!'
      bgColor = 'bg-green-100'
    } else if (percentage >= 60) {
      message = 'Good job! Keep practicing to improve your knowledge.'
      bgColor = 'bg-yellow-100'
    } else {
      message = 'Keep studying! Review the topics and try again.'
      bgColor = 'bg-red-100'
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className={`${bgColor} rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4`}>
              <span className="text-4xl font-bold text-gray-800">{percentage}%</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h1>
            <p className="text-gray-600 text-lg">{message}</p>
            <p className="text-gray-500 mt-2">You scored {score} out of {questions.length} questions</p>
          </div>

          <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
            {questions.map((q, index) => {
              const userAnswers = selectedAnswers[index] || []
              const isCorrect = userAnswers.length > 0 && q.correct_answers.includes(q.options[userAnswers[0]])
              
              return (
                <div key={index} className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <p className="font-medium text-gray-800 mb-2">Question {originalQuestionStart + index}. {q.question}</p>
                  <div className="space-y-1 mb-3">
                    {q.options.map((option, optIndex) => {
                      const isUserSelected = userAnswers.includes(optIndex)
                      const isCorrectAnswer = q.correct_answers.includes(option)
                      
                      let optionClass = 'text-gray-600'
                      if (isUserSelected && isCorrectAnswer) {
                        optionClass = 'text-green-700 font-medium'
                      } else if (isUserSelected && !isCorrectAnswer) {
                        optionClass = 'text-red-700 font-medium'
                      } else if (isCorrectAnswer) {
                        optionClass = 'text-green-600'
                      }
                      
                      return (
                        <p key={optIndex} className={`text-sm ${optionClass}`}>
                          {isUserSelected ? '✓ ' : '  '}{option}
                          {isCorrectAnswer && ' (Correct)'}
                        </p>
                      )
                    })}
                  </div>
                  {q.explanation && (
                    <div className="mt-3 pt-3 border-t border-gray-300">
                      <p className="text-gray-600 text-sm">
                        <strong>Explanation:</strong> {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <button
            onClick={resetQuiz}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const currentSelected = selectedAnswers[currentQuestion] || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-blue-600">
              Question {originalQuestionStart + currentQuestion}/{questions.length + originalQuestionStart - 1}
            </span>
            <span className="text-sm font-bold text-blue-600">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-6">{question.question}</h2>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            const isSelected = currentSelected.includes(index)
            const isCorrect = question.correct_answers.includes(option)
            const isChecked = checkedAnswers[currentQuestion]
            
            let optionClass = 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-700'
            let radioClass = 'border-gray-300'
            
            if (isChecked) {
              if (isSelected && isCorrect) {
                optionClass = 'border-green-500 bg-green-50 text-green-700'
                radioClass = 'border-green-500 bg-green-500'
              } else if (isSelected && !isCorrect) {
                optionClass = 'border-red-500 bg-red-50 text-red-700'
                radioClass = 'border-red-500 bg-red-500'
              } else if (isCorrect) {
                optionClass = 'border-green-300 bg-green-50 text-green-600'
                radioClass = 'border-green-500'
              }
            } else if (isSelected) {
              optionClass = 'border-blue-500 bg-blue-50 text-blue-700'
              radioClass = 'border-blue-500 bg-blue-500'
            }
            
            return (
              <button
                key={index}
                onClick={() => !checkedAnswers[currentQuestion] && handleAnswerSelect(index)}
                disabled={checkedAnswers[currentQuestion]}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${optionClass} ${checkedAnswers[currentQuestion] ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${radioClass}`}>
                    {isSelected && (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className={`mb-6 p-4 rounded-lg ${currentSelected.some(idx => question.correct_answers.includes(question.options[idx])) ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className="font-semibold text-gray-800 mb-2">
              {currentSelected.some(idx => question.correct_answers.includes(question.options[idx])) ? '✓ Correct!' : '✗ Incorrect'}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Correct Answer:</strong> {question.correct_answers.join(', ')}
            </p>
            {question.explanation && (
              <div className="mt-3 pt-3 border-t border-gray-300">
                <p className="text-gray-600 text-sm">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-3 rounded-lg font-medium transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            Previous
          </button>
          
          {!checkedAnswers[currentQuestion] ? (
            <button
              onClick={handleCheckAnswer}
              disabled={currentSelected.length === 0}
              className="px-6 py-3 rounded-lg font-medium transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 text-white"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-lg font-medium transition duration-200 bg-blue-600 hover:bg-blue-700 text-white"
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
