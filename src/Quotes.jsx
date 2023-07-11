import './App.css';
import { useState, useEffect } from 'react';

export default function Quotes() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        setQuote(randomQuote);
      })
      .catch((error) => {
        console.error('Error loading quote:', error);
      });
  }, []);

  return (
    <div className='allQuotes'>
      <i className="fa-solid fa-quote-left"></i>
      <p>{quote ? quote.text : 'Loading...'}</p>
      <p className='author'>{quote ? `- ${quote.author || 'Unknown'}` : ''}</p>
      <i className="fa-solid fa-quote-right"></i>
    </div>
  );
}