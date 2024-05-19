import React, { useState, useEffect } from "react";
import styles from '../styling/BlogComp.module.css'; // Import the CSS module

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
};

export const useFetch = (url) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch((error) => console.error('Error: ', error))
  }, [url])

  return blogs;
}

function PostComp() {
  const blogs = useFetch('http://localhost:5174/api/blog')

  const [words, setWords] = useState([]);
  const disappearTime = 7000; // Time in milliseconds after which a word disappears

  useEffect(() => {
    const checkOverlap = (newWord, existingWords) => {
      for (let word of existingWords) {
        const wordRect = {
          top: word.y,
          bottom: word.y + word.size,
          left: word.x,
          right: word.x + word.size,
        };
        const newWordRect = {
          top: newWord.y,
          bottom: newWord.y + newWord.size,
          left: newWord.x,
          right: newWord.x + newWord.size,
        };

        if (
          newWordRect.left < wordRect.right &&
          newWordRect.right > wordRect.left &&
          newWordRect.top < wordRect.bottom &&
          newWordRect.bottom > wordRect.top
        ) {
          return true;
        }
      }
      return false;
    };

    const intervalId = setInterval(() => {
      if (blogs.length > 0) {
        let newWord;
        do {
          const randomBlog = blogs[Math.floor(Math.random() * blogs.length)];
          newWord = {
            id: Date.now() + Math.random(), // Unique ID using timestamp and random number
            text: randomBlog.title,
            x: getRandomInt(5, 60),
            y: getRandomInt(15, 60),
            size: getRandomInt(2, 5),
          };
        } while (checkOverlap(newWord, words));

        setWords(prevWords => [...prevWords, newWord]);

        // Set timeout to remove the word after `disappearTime`
        setTimeout(() => {
          setWords(prevWords => prevWords.filter(word => word.id !== newWord.id));
        }, disappearTime);
      }
    }, 2500); // Add a new word every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [blogs, words]);

  return (
    <div>
      {words.map((word) => (
        <div
          key={word.id}
          className={styles.word}
          style={{
            top: `${word.y}%`,
            left: `${word.x}%`,
            fontSize: `${word.size}vw`,
          }}
        >
          {word.text}
        </div>
      ))}
    </div>
  );
}

export default PostComp;
