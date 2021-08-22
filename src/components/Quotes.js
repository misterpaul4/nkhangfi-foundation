import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quoteObj, generateQuote] = useState({
    text: "",
    author: "",
  });

  const random = max => Math.floor(Math.random() * Math.floor(max));

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
      const rand = random(data.length);
      const quote = data[rand];
      generateQuote({
        author: quote.author,
        text: quote.text,
      });
    });
  }, []);

  return (
    <div>
      <q>{quoteObj.text}</q>
      <address className="font-weight-bold">{quoteObj.author}</address>
    </div>
  );
};

export default Quote;