
import { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {
  const [gifts, setGifts] = useState(data);
  const removeGift = (id) => {
    let newGifts =gifts.filter(gift => gift.id !== id);
    console.log(newGifts)
    setGifts(newGifts)
  }
  
  return (
    <div>
      <div className='container'>
        <h1>List of {gifts.length}</h1>
      </div>
      {gifts.map((thing => {
        const {id, gift, image, link} = thing;
        return (
          <div key={id}>
            <div className='container'>
            <h2>{id}. {gift}</h2>
            </div>
            <div className='container'>
            <img src={image} width="450px" alt='gift'/>
            </div>
            <div className='container'>
              <a href={link} target='_blank' rel="noopener noreferrer">Click</a>
            </div>
            <div className='container'>
            <button onClick={() => removeGift(id)}>REMOVE</button>
            </div>
          </div>
        )
      }))}
      <div className='container'>
        <button onClick={() => setGifts([])}>DELETE ALL</button>
      </div>
      
    </div>
  );
}

export default App;
