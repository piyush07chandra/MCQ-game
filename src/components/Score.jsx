import PropTypes, { number } from 'prop-types';
import Navbar from '../components/Navbar'


function Score({ score, total }) {
  return (
    <div className='text-center text-5xl '>
      <h2 className='mb-5'>Your Score</h2>
      <p className='text-green-500'>
        You scored {score} out of {total}
      </p>
      <Navbar/>
    </div>
  );
}

Score.propTypes={
    score:PropTypes.number,
    total:number
}

export default Score;
