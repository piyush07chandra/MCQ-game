import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Question from './components/Question';
import Score from './components/Score';
import questions from './components/questions';


function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setCurrentQuestionIndex(-1); // Signal to show the score
    }
  };

  return (
    <Router>
   
      <div className="App">
        <Routes>
          <Route
            path="/question/:id"
            element={
              currentQuestionIndex >= 0 ? (
                <Question
                  question={questions[currentQuestionIndex]}
                  onAnswer={handleAnswer}
                />
              ) : (
                <div>
                <Navigate to="/score" />
                
                </div>
              )
            }
          />
         
          <Route path="/score" element={<Score score={score} total={questions.length} />} />
          <Route path="/" element={<Navigate to="/question/0" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
