import React from 'react';

const Quote = () => {
  // const [quoteObj, generateQuote] = useState({
  //   text: "",
  //   author: "",
  // });

  // const random = max => Math.floor(Math.random() * Math.floor(max));

  // useEffect(() => {
  //   fetch('https://type.fit/api/quotes')
  //   .then(response => response.json())
  //   .then(data => {
  //     const rand = random(data.length);
  //     const quote = data[rand];
  //     generateQuote({
  //       author: quote.author,
  //       text: quote.text,
  //     });
  //   });
  // }, []);

  const quoteObj = {
    text: "It looks impossible until you take a step. The path might look difficult, but start the journey & you will become all that you ever dreamt of becoming.",
    author: "Neche",
  }

  return (
    <div>
      <q>{quoteObj.text}</q>
      <address className="font-weight-bold">{quoteObj.author}</address>
    </div>
  );
};

export default Quote;