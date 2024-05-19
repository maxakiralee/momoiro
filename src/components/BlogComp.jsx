import React, { useState, useEffect } from "react";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const PostComp = () => {
  const [words, setWords] = useState([]);
  const disappearTime = 5000; // Time in milliseconds after which a word disappears

  useEffect(() => {
    const arr = ["These", "are", "random", "letters"];
    const intervalId = setInterval(() => {
      const newWord = {
        id: Date.now() + Math.random(), // Unique ID using timestamp and random number
        text: arr[Math.floor(Math.random() * arr.length)],
        x: getRandomInt(0, 70),
        y: getRandomInt(0, 40),
        size: getRandomInt(2, 5),
        color: getRandomColor(),
      };

      setWords(prevWords => [...prevWords, newWord]);

      // Set timeout to remove the word after `disappearTime`
      setTimeout(() => {
        setWords(prevWords => prevWords.filter(word => word.id !== newWord.id));
      }, disappearTime);
    }, 1000); // Add a new word every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return words.map((word) => (
    <div
      key={word.id}
      style={{
        position: "absolute",
        top: `${word.y}%`,
        left: `${word.x}%`,
        fontSize: `${word.size}vw`,
        background: word.color,
      }}
    >
      {word.text}
      
    </div>
  ));
};

export default function Posts() {
  return (
      <PostComp />
  );
}
