import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What determines the identity of an element?",
    options: [
      "Number of electrons",
      "Number of protons", 
      "Number of neutrons",
      "Atomic mass"
    ],
    correctAnswer: 1,
    explanation: "The number of protons (atomic number) uniquely identifies each element. All atoms of the same element have the same number of protons."
  },
  {
    id: 2,
    question: "Which atomic model introduced the concept of electron shells?",
    options: [
      "Dalton's model",
      "Thomson's model",
      "Rutherford's model", 
      "Bohr's model"
    ],
    correctAnswer: 3,
    explanation: "Bohr's model (1913) introduced the concept of fixed electron energy levels or shells, explaining why electrons don't spiral into the nucleus."
  },
  {
    id: 3,
    question: "What is the maximum number of electrons that can occupy the L shell?",
    options: [
      "2 electrons",
      "8 electrons",
      "18 electrons",
      "32 electrons"
    ],
    correctAnswer: 1,
    explanation: "The L shell (second shell) can hold a maximum of 8 electrons. The K shell holds 2, L shell holds 8, and M shell holds 18."
  },
  {
    id: 4,
    question: "In Thomson's 'plum pudding' model, electrons were:",
    options: [
      "Orbiting around the nucleus",
      "Embedded in a positive sphere",
      "Located only in the nucleus",
      "Moving in fixed energy levels"
    ],
    correctAnswer: 1,
    explanation: "Thomson's model depicted electrons as negatively charged particles embedded within a uniformly distributed positive charge, like plums in a pudding."
  },
  {
    id: 5,
    question: "An atom with 6 protons, 6 neutrons, and 6 electrons is:",
    options: [
      "Hydrogen",
      "Helium",
      "Carbon",
      "Oxygen"
    ],
    correctAnswer: 2,
    explanation: "An atom with 6 protons is Carbon (atomic number 6). The mass number would be 12 (6 protons + 6 neutrons)."
  }
];

export const KnowledgeCheck: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Please select an answer",
        description: "Choose one of the options before proceeding.",
        variant: "destructive"
      });
      return;
    }

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers(new Array(questions.length).fill(-1));
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getScoreColor = (score: number) => {
    if (score >= 4) return "text-green-400";
    if (score >= 3) return "text-yellow-400";
    return "text-red-400";
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (quizCompleted) {
    const score = calculateScore();
    return (
      <div className="w-full space-y-6">
        <Card className="atom-card bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-center justify-center">
              <Trophy className="w-8 h-8 text-yellow-400" />
              Quiz Complete!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-2">
              <div className={`text-6xl font-bold ${getScoreColor(score)}`}>
                {score}/{questions.length}
              </div>
              <p className="text-xl text-muted-foreground">
                You got {score} out of {questions.length} questions correct!
              </p>
            </div>

            <div className="space-y-2">
              {score === 5 && (
                <Badge className="bg-green-500/20 text-green-400 border-green-400 text-lg px-4 py-2">
                  🎉 Perfect Score! Atomic Structure Master!
                </Badge>
              )}
              {score >= 4 && score < 5 && (
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-400 text-lg px-4 py-2">
                  ⭐ Excellent Understanding!
                </Badge>
              )}
              {score >= 3 && score < 4 && (
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-400 text-lg px-4 py-2">
                  👍 Good Job! Keep Learning!
                </Badge>
              )}
              {score < 3 && (
                <Badge className="bg-red-500/20 text-red-400 border-red-400 text-lg px-4 py-2">
                  📚 Review the Material and Try Again!
                </Badge>
              )}
            </div>

            <Button onClick={resetQuiz} className="particle-button">
              <RotateCcw className="w-4 h-4 mr-2" />
              Take Quiz Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="w-full space-y-6">
      <Card className="atom-card bg-gradient-to-br from-card to-secondary/20 border-primary/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-primary" />
              Knowledge Check
            </CardTitle>
            <Badge variant="outline" className="text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
          </div>
          <Progress value={progress} className="w-full h-2" />
        </CardHeader>
        
        <CardContent className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground leading-relaxed">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              let buttonClass = "w-full text-left justify-start h-auto p-4 particle-button";
              let icon = null;
              
              if (showResult) {
                if (index === question.correctAnswer) {
                  buttonClass += " bg-green-500/20 border-green-400 text-green-400";
                  icon = <CheckCircle className="w-5 h-5 text-green-400" />;
                } else if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) {
                  buttonClass += " bg-red-500/20 border-red-400 text-red-400";
                  icon = <XCircle className="w-5 h-5 text-red-400" />;
                }
              } else if (selectedAnswer === index) {
                buttonClass += " bg-primary/20 border-primary text-primary";
              }

              return (
                <Button
                  key={index}
                  variant="outline"
                  className={buttonClass}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1 text-base">{option}</span>
                    {icon}
                  </div>
                </Button>
              );
            })}
          </div>

          {showResult && (
            <div className="space-y-4 p-4 rounded-lg bg-secondary/30 border border-border">
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <span className={`font-semibold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect ? 'Correct!' : 'Incorrect!'}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {question.explanation}
              </p>
            </div>
          )}

          {!showResult && (
            <Button 
              onClick={handleNextQuestion}
              className="w-full particle-button"
              disabled={selectedAnswer === null}
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};