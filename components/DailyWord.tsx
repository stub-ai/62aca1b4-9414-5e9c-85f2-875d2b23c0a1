import React, { useState, useEffect } from 'react';

const DailyWord = () => {
  const [word, setWord] = useState('');

  useEffect(() => {
    // Fetch the daily word from an API or database
    // This is a placeholder, replace with your own logic
    setWord('Inspiration');
  }, []);

  return (
    <div className="p-4 rounded shadow bg-white">
      <h2 className="text-2xl font-bold">Daily Word</h2>
      <p className="text-xl">{word}</p>
    </div>
  );
};

export default DailyWord;