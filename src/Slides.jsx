import React, { useState } from 'react';
import style from './Style.module.css';
import './index.css';
import { useAudio } from './Audio';

function Slides() {
  const { playAudio } = useAudio();

  // Array of strings to display
  const textArray = [
    "Click thru slowly 🤠", 
    "Dear Yuna,", 
    "From the very", 
    "very",
    "very.",
    "very..",
    "very...",
    "very, very, very...",
    "bottom of my heart,",
    "sorry! 🙂🙂🙇‍♂️🙇‍♂️",
    "Since you are away,",
    "I’d like to tell you 10 things i love about u.",
    "hmmm",
    "hmmmmmm...",
    "had to think super super hard 😤😤",
    "JK, the list would be 69+ if I wasn't sleep deprived 👽👽",
    "But here I go, ",
    "I love how:",

    "1: You smile 🤓🤓🤓",
    "your smile lights up my day 🤓🤓🤓",
    "when you smile, I smile 👻",
    "2: how u make me feel so strong 💪💪",
    "it's nice being surrounded by twigs fr 🦍🦍🦍",
    "3: how your patient and understanding",
    "thank you for always communicating with me so maturely 💆‍♂️",
    "4: how your eyes sparkle",
    "i can stare into them forever ✨✨",
    "blessed by god fr 🙄🙄",
    "5: How you allow me to be vulnerable",
    "Being a guy and an older brother and all,",
    "It's tuff 😤 cold world cold heart fr 😤😤",
    "but you allow me to open up 🙃",
    "6: how you remember things about me",
    "like when u got me cane's that one time..",
    "or how u got me boba the other..",
    "i remember everytime 🧠🧠🧠",
    "it makes me feel so loved 🫶🫶",
    "7: your assets 😈😈😈",
    "sorry  couldn't resist 🤡",
    "how u care for the relationship",
    "like when u drive to me everytime, 🚅🚅",
    "we wouldn't be able to work without your effort 🫡🫡",
    "8: how u enjoy your passions",
    "I love seeing u appreciate art and design and stuff",
    "like when we went to Huntington Library 🏡🏡",
    "or when we went to the broad 👩‍🎨👩‍🎨",
    "I'm glad I can be a part of that 💂‍♀️💂‍♀️",
    "9: how you make me want to be better",
    "really got me hustling everyday with u in mind 🤖🤖",
    "10: how u make my life better just by being in it",
    "thats it! 😺😺",
    "sorry if that was corny",
    "this the corniest thing i've ever done",
    "don't let the bois see this ✋✋",
    "spare me the embarassment 👌👌👌",
    "btw, this web page is pink! because..",
    "pink is your favorite color! 🫠",
    "just like you are my favorite person 😃😃",
    "(i think it was bright pink? may be wrong mbmb)",
    "ALSO",
    "when you get back…",
    "yogurtland on me 🫡🍨🍦🍪",
    "i owe u one",
    "Thank you for staying in my life - Max",
    "you're still scrolling? 🤨",
    "stop scrolling! 🤨🤨",
    "still scrolling??? 🤨🤨🤨",
    "wowow u scrolled this far huh 🗿🗿",
    "might as well send this guy a selfie, he probably misses your smile 🦍🙈🦍"
];

  // State to track the current index of the text array
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for the Next button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < textArray.length - 1) {
        return prevIndex + 1;
      } else {
        return prevIndex;
      }
    });
  };

  // Handler for the Back button
  const handleBack = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return prevIndex;
      }
    });
  };

  return (
    <div className={style.container}>
      <p className={style.text}>
        {textArray[currentIndex]}
      </p>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={handleBack} disabled={currentIndex === 0}>Back</button>
        <button className={style.button} onClick={handleNext} disabled={currentIndex === textArray.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default Slides;
