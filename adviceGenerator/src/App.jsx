import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import Line from '../images/pattern-line.svg';
import btnLogo from '../images/icon-button.svg';

function App() {
  const [data, setData] = useState(null);

  /* Data Fetch */
  async function getUser() {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setData(response.data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  if (data === null) {
    // Veri yükleniyor durumu
    return <div className='flex justify-center items-center loadingDiv'>Loading...</div>;
  }
  /*refresh */
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className='App'>
      <div className=' bgDiv flex flex-col items-center absolute top-24 left-64'>
        <p className='text-xs m-5 textİd'> ADVICE #{data.slip.id} </p>
        <div className='flex flex-col items-center itemsDiv'>
          <h3 className='text-l text-white w-2/4'>"{data.slip.advice}" </h3>
          <img src={Line} alt="" className=' m-5' />
          <div className=''>
          <button onClick={handleClick} className='btnRefresh'><img src={btnLogo} className='logo' /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
