
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

function Question({ question, onAnswer }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleAnswer = (isCorrect) => {
    onAnswer(isCorrect);
    const nextId = parseInt(id, 10) + 1;
    navigate(`/question/${nextId}`);
  };

  return (
    <div className='text-center text-5xl'>
    <h1 className=' text-green-500'>MCQ</h1>
      <h2 className='text-4xl'>{question.text}</h2>
      {question.options.map((option, index) => (
        <button className='bg-blue-200 hover:bg-blue-500 ml-4 mt-5 text-3xl rounded-md p-1' key={index} onClick={() => handleAnswer(option.isCorrect)}>
          {option.text}
        </button>
      ))}
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        isCorrect: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default Question;
