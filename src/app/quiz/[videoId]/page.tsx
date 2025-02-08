'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Smile } from 'lucide-react';
import { useParams } from 'next/navigation';
import { fetchCaptions } from '@/lib/captions';
import { question_prompt } from '@/prompts/prompts';
import { useEffect, useState } from 'react';
import { generateContent } from '@/lib/gemini';

export default function QuizParticipant() {
  const [captions, setCaptions] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const params = useParams();
  const videoId = params.videoId;

  useEffect(() => {
    fetchCaptions(videoId).then((captions) => {
      setCaptions(captions);
      setLoading(false);
    });
  }, [videoId]);

  useEffect(() => {
    if (captions) {
      const jsonString = JSON.stringify(captions);
      const prompt = `${question_prompt}: ${jsonString}`;

      generateContent(prompt).then((res) => {
        try {
          const generatedQuiz = JSON.parse(res.response.text());
          setQuizData(generatedQuiz);
        } catch (error) {
          console.error('Error parsing generated content:', error);
        }
      });
    }
  }, [captions]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const progressPercentage =
    quizData.length > 0 ? ((currentQuestion + 1) / quizData.length) * 100 : 0;

  return (
    <div className="flex flex-col gap-8 p-6 min-h-screen items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white">
      <h1 className="text-5xl font-extrabold text-white mb-6 tracking-wide shadow-md">
        AI-Powered Quiz
      </h1>
      <Progress
        value={progressPercentage}
        className="w-full max-w-2xl mb-6 h-4 bg-gray-800 rounded-full shadow-inner"
      />
      {!showResult ? (
        quizData.length > 0 ? (
          <Card className="w-full max-w-2xl shadow-2xl border border-gray-700 rounded-3xl bg-gray-950 p-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-200 text-center tracking-tight">
                Question {currentQuestion + 1} of {quizData.length}
              </CardTitle>
            </CardHeader>
            <Separator className="bg-gray-700" />
            <CardContent>
              <p className="text-lg font-semibold mb-6 text-center text-gray-300 leading-relaxed">
                {quizData[currentQuestion].question_text}
              </p>
              <div className="grid gap-4">
                {quizData[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedOption === option ? 'default' : 'outline'}
                    size="lg"
                    className={`w-full text-left p-4 flex justify-between items-center rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl border-2 text-white text-lg font-medium tracking-wide ${
                      selectedOption === option &&
                      option === quizData[currentQuestion].correct_answer
                        ? 'bg-green-700 border-green-500'
                        : selectedOption === option
                          ? 'bg-red-700 border-red-500'
                          : 'hover:bg-gray-800'
                    }`}
                    onClick={() => handleOptionClick(option)}
                    disabled={!!selectedOption}
                  >
                    {option}
                    {selectedOption &&
                      (option === quizData[currentQuestion].correct_answer ? (
                        <CheckCircle className="text-green-400" />
                      ) : selectedOption === option ? (
                        <XCircle className="text-red-400" />
                      ) : null)}
                  </Button>
                ))}
              </div>
              {selectedOption && (
                <div className="mt-4 text-center text-base font-semibold text-gray-400">
                  {selectedOption === quizData[currentQuestion].correct_answer
                    ? '✅ Great choice! You got it right!'
                    : '❌ Oops! Better luck with the next question.'}
                </div>
              )}
              {selectedOption && (
                <Button
                  className="mt-6 w-full bg-blue-600 text-white hover:bg-blue-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-lg font-semibold py-3"
                  onClick={handleNextQuestion}
                >
                  {currentQuestion === quizData.length - 1
                    ? 'View Results'
                    : 'Next Question'}
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <p className="text-xl text-gray-300">Loading quiz...</p>
        )
      ) : (
        <Card className="w-full max-w-2xl shadow-2xl border border-gray-700 rounded-3xl text-center bg-gray-950 p-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-200">
              Quiz Completed 🎉
            </CardTitle>
          </CardHeader>
          <Separator className="bg-gray-700" />
          <CardContent>
            <p className="text-lg font-semibold mb-4 text-gray-300">
              Congratulations! You have completed the quiz.
            </p>
            <Smile className="text-blue-400 mx-auto mb-6" size={48} />
            <Button className="mt-6 w-full bg-blue-600 text-white hover:bg-blue-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-lg font-semibold py-3">
              Retry Quiz
            </Button>
          </CardContent>
        </Card>
      )}
      <footer className="text-sm text-gray-400 mt-8 font-medium">
        🚀 Powered by AI • Making learning fun and interactive
      </footer>
    </div>
  );
}
