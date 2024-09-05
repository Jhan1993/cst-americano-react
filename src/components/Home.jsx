import './Calculator.css';

const Home = () => {
  return (
    <div className="calculator-container">
    <div className="calculator">
      <div className="display">
        1993
      </div>
      <div className='buttons'>
        <div className="buttons-a">
          <button>7</button>
          <button>4</button>
          <button>1</button>
          <button>0</button>
        </div>
        <div className="buttons-b">
          <button>8</button>
          <button>5</button>
          <button>2</button>
          <button>*</button>
        </div>
        <div className="buttons-c">
          <button>9</button>
          <button>6</button>
          <button>3</button>
          <button>-</button>
        </div>
        <div className="buttons-d">
          <button>/</button>
          <button>.</button>
          <button>=</button>
          <button>+</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
