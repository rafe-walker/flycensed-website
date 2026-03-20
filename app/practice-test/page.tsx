'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle,
  XCircle,
  BarChart3,
  Download,
  ChevronRight,
  Play,
  RotateCcw,
  Apple,
  Play as PlayIcon,
} from 'lucide-react'

interface Question {
  id: number
  category: string
  text: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface Answer {
  questionId: number
  selectedAnswer: number | null
}

interface QuestionState {
  questionIndex: number
  answers: Answer[]
  isAnswered: boolean
  showExplanation: boolean
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'REGULATIONS',
    text: 'What is the maximum altitude for Part 107 drone operations?',
    options: ['200 feet AGL', '400 feet AGL', '500 feet AGL'],
    correctAnswer: 1,
    explanation:
      'Part 107.51 limits operations to 400 feet AGL unless flying within 400 feet of a structure. This altitude restriction exists to keep operations clear of manned aircraft corridors.',
  },
  {
    id: 2,
    category: 'REGULATIONS',
    text: 'What is the minimum age to obtain a Remote Pilot Certificate?',
    options: ['14 years', '16 years', '18 years'],
    correctAnswer: 1,
    explanation:
      'Part 107.61 requires pilots to be at least 16 years old to obtain a Remote Pilot Certificate. Applicants must also pass the written exam and meet other requirements.',
  },
  {
    id: 3,
    category: 'AIRSPACE',
    text: 'In which class of airspace can Part 107 operations be conducted without ATC authorization?',
    options: ['Class B', 'Class C', 'Class G'],
    correctAnswer: 2,
    explanation:
      'Class G is uncontrolled airspace. Operations in Class B, C, D, and some E require LAANC (Low Altitude Authorization and Notification Capability) or a waiver from the FAA.',
  },
  {
    id: 4,
    category: 'AIRSPACE',
    text: 'What does a dashed magenta line on a sectional chart indicate?',
    options: [
      'Class D airspace',
      'Class E airspace starting at surface',
      'Prohibited area',
    ],
    correctAnswer: 1,
    explanation:
      'Dashed magenta lines indicate Class E surface area airspace. Solid magenta lines indicate Class E airspace starting at 700 feet AGL. Understanding sectional charts is critical for flight planning.',
  },
  {
    id: 5,
    category: 'WEATHER',
    text: "What does 'SCT025' mean in a METAR report?",
    options: [
      'Scattered clouds at 2,500 feet AGL',
      'Scattered clouds at 25,000 feet MSL',
      'Sky clear at 250 feet',
    ],
    correctAnswer: 0,
    explanation:
      "SCT = scattered (3/8 to 4/8 sky coverage). The three-digit number (025) represents cloud height in hundreds of feet AGL. So SCT025 = scattered clouds at 2,500 feet AGL.",
  },
  {
    id: 6,
    category: 'WEATHER',
    text: 'What weather phenomenon is most dangerous to small UAS?',
    options: ['Fog', 'Thunderstorms', 'High humidity'],
    correctAnswer: 1,
    explanation:
      'Thunderstorms produce severe turbulence, wind shear, microbursts, hail, and lightning — all extremely dangerous to drones. Always avoid flying near thunderstorm activity.',
  },
  {
    id: 7,
    category: 'PERFORMANCE',
    text: 'As density altitude increases, drone performance will:',
    options: [
      'Improve due to thinner air',
      'Remain the same',
      'Decrease due to less air density',
    ],
    correctAnswer: 2,
    explanation:
      'Higher density altitude = thinner air = less lift from propellers = reduced performance, shorter flight times, and slower climb rates. This is critical to understand for safe operations at altitude.',
  },
  {
    id: 8,
    category: 'PERFORMANCE',
    text: 'Which combination of conditions results in the highest density altitude?',
    options: [
      'High temp, high altitude, high humidity',
      'Low temp, low altitude, low humidity',
      'High temp, low altitude, low humidity',
    ],
    correctAnswer: 0,
    explanation:
      'Hot, high, and humid = highest density altitude. All three factors (temperature, altitude, and humidity) reduce air density, which significantly impacts drone performance and flight characteristics.',
  },
  {
    id: 9,
    category: 'OPERATIONS',
    text: "Which hazardous attitude is characterized by 'It won't happen to me'?",
    options: ['Macho', 'Invulnerability', 'Resignation'],
    correctAnswer: 1,
    explanation:
      'The 5 hazardous attitudes are Anti-authority, Impulsivity, Invulnerability, Macho, and Resignation. The antidote to invulnerability is "It could happen to me." Always assume risks are real.',
  },
  {
    id: 10,
    category: 'OPERATIONS',
    text: 'After consuming alcohol, how long must you wait before operating a drone under Part 107?',
    options: ['4 hours', '8 hours', '12 hours'],
    correctAnswer: 1,
    explanation:
      'Part 107.27 requires 8 hours between alcohol consumption and drone operation, with a Blood Alcohol Content (BAC) below 0.04%. This ensures pilot judgment and coordination are not impaired.',
  },
]

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  REGULATIONS: { bg: 'bg-blue-500/20', text: 'text-blue-400' },
  AIRSPACE: { bg: 'bg-purple-500/20', text: 'text-purple-400' },
  WEATHER: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
  PERFORMANCE: { bg: 'bg-green-500/20', text: 'text-green-400' },
  OPERATIONS: { bg: 'bg-red-500/20', text: 'text-red-400' },
}

export default function PracticeTestPage() {
  const [testStarted, setTestStarted] = useState(false)
  const [questionState, setQuestionState] = useState<QuestionState>({
    questionIndex: 0,
    answers: QUESTIONS.map((q) => ({ questionId: q.id, selectedAnswer: null })),
    isAnswered: false,
    showExplanation: false,
  })

  const currentQuestion = QUESTIONS[questionState.questionIndex]
  const currentAnswer = questionState.answers.find(
    (a) => a.questionId === currentQuestion.id
  )

  const handleAnswerSelect = (optionIndex: number) => {
    if (questionState.isAnswered) return

    const updatedAnswers = questionState.answers.map((a) =>
      a.questionId === currentQuestion.id
        ? { ...a, selectedAnswer: optionIndex }
        : a
    )

    setQuestionState({
      ...questionState,
      answers: updatedAnswers,
      isAnswered: true,
      showExplanation: true,
    })
  }

  const handleNextQuestion = () => {
    if (questionState.questionIndex < QUESTIONS.length - 1) {
      setQuestionState({
        ...questionState,
        questionIndex: questionState.questionIndex + 1,
        isAnswered: false,
        showExplanation: false,
      })
    }
  }

  const handleRetakeTest = () => {
    setTestStarted(false)
    setQuestionState({
      questionIndex: 0,
      answers: QUESTIONS.map((q) => ({ questionId: q.id, selectedAnswer: null })),
      isAnswered: false,
      showExplanation: false,
    })
  }

  const testComplete = questionState.questionIndex === QUESTIONS.length - 1 && questionState.isAnswered

  // Calculate score
  const score = questionState.answers.filter((answer) => {
    const question = QUESTIONS.find((q) => q.id === answer.questionId)
    return question && answer.selectedAnswer === question.correctAnswer
  }).length

  // Calculate performance by category
  const categoryPerformance = QUESTIONS.reduce(
    (acc, question) => {
      const category = question.category
      const answer = questionState.answers.find(
        (a) => a.questionId === question.id
      )
      const isCorrect =
        answer && answer.selectedAnswer === question.correctAnswer

      if (!acc[category]) {
        acc[category] = { correct: 0, total: 0 }
      }
      acc[category].total += 1
      if (isCorrect) {
        acc[category].correct += 1
      }

      return acc
    },
    {} as Record<string, { correct: number; total: number }>
  )

  const isPassed = score >= 7

  return (
    <main className="min-h-screen bg-brand-dark text-white">
      {/* Navigation Bar */}
      <nav className="border-b border-slate-700/50 bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-brand-teal">
            Flycensed
          </Link>
          {testStarted && (
            <div className="text-sm text-slate-400">
              Question {questionState.questionIndex + 1} of {QUESTIONS.length}
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          {!testStarted ? (
            // WELCOME SCREEN
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  Free Part 107{' '}
                  <span className="text-brand-teal">Practice Test</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8">
                  10 questions covering all 5 exam areas. See how ready you are.
                </p>

                <button
                  onClick={() => setTestStarted(true)}
                  className="inline-flex items-center gap-2 bg-brand-teal hover:bg-cyan-400 text-brand-dark font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 btn-glow"
                >
                  <Play size={20} />
                  Start Test
                </button>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-brand-card/50 border border-slate-700/50 rounded-lg p-6"
                >
                  <div className="text-3xl font-bold text-brand-teal mb-2">
                    10
                  </div>
                  <div className="text-slate-300">Questions</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-brand-card/50 border border-slate-700/50 rounded-lg p-6"
                >
                  <div className="text-3xl font-bold text-brand-teal mb-2">
                    5
                  </div>
                  <div className="text-slate-300">Exam Areas</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-brand-card/50 border border-slate-700/50 rounded-lg p-6"
                >
                  <div className="text-3xl font-bold text-brand-teal mb-2">
                    Free
                  </div>
                  <div className="text-slate-300">Forever</div>
                </motion.div>
              </div>

              {/* Note Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 text-center"
              >
                <p className="text-slate-300">
                  <span className="font-semibold text-amber-400">
                    Did you know?
                  </span>{' '}
                  The real exam has 60 questions. Get the full experience in the
                  Flycensed app.
                </p>
              </motion.div>
            </motion.div>
          ) : testComplete ? (
            // RESULTS SCREEN
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="mb-8"
                >
                  {isPassed ? (
                    <CheckCircle
                      size={80}
                      className="mx-auto text-green-400"
                    />
                  ) : (
                    <XCircle size={80} className="mx-auto text-red-400" />
                  )}
                </motion.div>

                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  {isPassed ? (
                    <span className="text-green-400">You Passed! 🎉</span>
                  ) : (
                    <span className="text-red-400">Keep Studying</span>
                  )}
                </h2>

                <div className="text-6xl font-bold text-brand-teal mb-4">
                  {score} / {QUESTIONS.length}
                </div>

                <div className="text-2xl text-slate-300 mb-8">
                  {Math.round((score / QUESTIONS.length) * 100)}%
                </div>

                {isPassed ? (
                  <p className="text-lg text-slate-300 mb-8">
                    Excellent! You're well-prepared for the real exam. 70% is
                    the passing score on the actual FAA exam.
                  </p>
                ) : (
                  <p className="text-lg text-slate-300 mb-8">
                    You need 70% to pass the real exam. Review the explanations
                    above and try again!
                  </p>
                )}
              </div>

              {/* Performance Breakdown */}
              <div className="bg-brand-card/50 border border-slate-700/50 rounded-lg p-8 mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <BarChart3 size={24} className="text-brand-teal" />
                  <h3 className="text-2xl font-bold">Performance by Area</h3>
                </div>

                <div className="space-y-4">
                  {Object.entries(categoryPerformance).map(
                    ([category, { correct, total }]) => {
                      const percentage = Math.round((correct / total) * 100)
                      const colors = CATEGORY_COLORS[category]

                      return (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-semibold ${colors.bg} ${colors.text}`}
                              >
                                {category}
                              </span>
                              <span className="text-slate-300">
                                {correct}/{total} correct
                              </span>
                            </div>
                            <span className="text-brand-teal font-bold">
                              {percentage}%
                            </span>
                          </div>

                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${percentage}%` }}
                              transition={{
                                duration: 0.8,
                                ease: 'easeOut',
                              }}
                              className="h-full bg-gradient-to-r from-brand-teal to-cyan-400"
                            />
                          </div>
                        </motion.div>
                      )
                    }
                  )}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-brand-teal/10 to-cyan-400/10 border border-brand-teal/30 rounded-lg p-8 mb-12 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready for the real deal?
                </h3>
                <p className="text-slate-300 mb-8">
                  The Flycensed app has 201 questions, interactive METAR tools,
                  flashcards, and scenario-based training.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://apps.apple.com/app/flycensed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-dark font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    <Apple size={20} />
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.flycensed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-dark font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    <PlayIcon size={20} />
                    Google Play
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleRetakeTest}
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-teal hover:bg-cyan-400 text-brand-dark font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  <RotateCcw size={20} />
                  Retake Test
                </button>

                <Link
                  href="/blog"
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-brand-teal text-brand-teal hover:bg-brand-teal/10 font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  More Resources
                  <ChevronRight size={20} />
                </Link>
              </div>
            </motion.div>
          ) : (
            // QUESTION SCREEN
            <motion.div
              key={`question-${currentQuestion.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-400">
                    Question {questionState.questionIndex + 1} of{' '}
                    {QUESTIONS.length}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      CATEGORY_COLORS[currentQuestion.category].bg
                    } ${CATEGORY_COLORS[currentQuestion.category].text}`}
                  >
                    {currentQuestion.category}
                  </span>
                </div>

                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((questionState.questionIndex + 1) / QUESTIONS.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-brand-teal to-cyan-400"
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  {currentQuestion.text}
                </h2>

                {/* Answer Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = currentAnswer?.selectedAnswer === index
                    const isCorrect = index === currentQuestion.correctAnswer
                    const showCorrect =
                      questionState.isAnswered && isCorrect
                    const showWrong =
                      questionState.isAnswered &&
                      isSelected &&
                      !isCorrect

                    return (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={questionState.isAnswered}
                        className={`w-full p-4 rounded-lg text-left font-semibold transition-all duration-300 border-2 ${
                          showCorrect
                            ? 'bg-green-500/20 border-green-500 text-green-400'
                            : showWrong
                              ? 'bg-red-500/20 border-red-500 text-red-400'
                              : isSelected && !questionState.isAnswered
                                ? 'bg-brand-teal/20 border-brand-teal text-brand-teal'
                                : 'bg-brand-card/50 border-slate-700/50 text-slate-300 hover:border-brand-teal/50 hover:bg-brand-card/70 cursor-pointer'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-sm font-bold">
                              {String.fromCharCode(65 + index)}
                            </span>
                          </div>
                          <span>{option}</span>
                          {showCorrect && (
                            <CheckCircle size={20} className="ml-auto flex-shrink-0 mt-0.5" />
                          )}
                          {showWrong && (
                            <XCircle size={20} className="ml-auto flex-shrink-0 mt-0.5" />
                          )}
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {questionState.showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-6 rounded-lg mb-8 ${
                      currentAnswer?.selectedAnswer ===
                      currentQuestion.correctAnswer
                        ? 'bg-green-500/10 border border-green-500/30'
                        : 'bg-amber-500/10 border border-amber-500/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {currentAnswer?.selectedAnswer ===
                        currentQuestion.correctAnswer ? (
                          <CheckCircle
                            size={20}
                            className="text-green-400"
                          />
                        ) : (
                          <XCircle
                            size={20}
                            className="text-amber-400"
                          />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold mb-2">
                          {currentAnswer?.selectedAnswer ===
                          currentQuestion.correctAnswer
                            ? 'Correct!'
                            : `Wrong. The correct answer is ${String.fromCharCode(65 + currentQuestion.correctAnswer)}.`}
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {currentQuestion.explanation}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next Button */}
              {questionState.isAnswered && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleNextQuestion}
                  className="w-full bg-brand-teal hover:bg-cyan-400 text-brand-dark font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 btn-glow"
                >
                  {questionState.questionIndex === QUESTIONS.length - 1
                    ? 'See Results'
                    : 'Next Question'}
                  <ChevronRight size={20} />
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
