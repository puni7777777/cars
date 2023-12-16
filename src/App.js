import logo from './logo.svg';
import './App.css';
import Pics from './components/Pics.js'
import Cor from './components/Cor';

function App() {
  return (
    <>
      <div className=''>
        <div> <Pics /> </div>
        {/* <div className='w-screen bg-black m-auto h-screen'><Cor /></div> */}
      </div>
    </>
  );
}

export default App;
